import React, { createContext, useContext, ReactNode } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: {
    email?: string;
    name?: string;
    picture?: string;
  };
  loginWithRedirect: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface ImportMetaEnv {
  VITE_AUTH0_DOMAIN: string;
  VITE_AUTH0_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [error, setError] = React.useState<string | null>(null);
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  React.useEffect(() => {
    console.log('Auth0 Configuration:', {
      domain,
      clientId,
      origin: window.location.origin,
      env: import.meta.env
    });
  }, [domain, clientId]);

  if (!domain || !clientId) {
    console.error('Auth0 configuration missing:', {
      domain: domain || 'missing',
      clientId: clientId || 'missing',
      env: import.meta.env
    });
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-center">
          <h1 className="text-xl font-bold mb-4">Authentication Error</h1>
          <p>Auth0 configuration is missing. Please check your environment variables.</p>
        </div>
      </div>
    );
  }

  const onRedirectCallback = (appState: any) => {
    console.log('Auth0 redirect callback:', appState);
  };

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
    >
      <AuthProviderContent>{children}</AuthProviderContent>
    </Auth0Provider>
  );
}

function AuthProviderContent({ children }: { children: ReactNode }) {
  const {
    isAuthenticated,
    isLoading,
    user,
    loginWithRedirect,
    logout,
    error
  } = useAuth0();

  React.useEffect(() => {
    if (error) {
      console.error('Auth0 error:', error);
    }
  }, [error]);

  React.useEffect(() => {
    console.log('Auth state:', {
      isAuthenticated,
      isLoading,
      user
    });
  }, [isAuthenticated, isLoading, user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        loginWithRedirect,
        logout: () => logout({ logoutParams: { returnTo: window.location.origin } })
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 