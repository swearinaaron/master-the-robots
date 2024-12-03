import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Loader2, User, LogOut } from 'lucide-react';

export function LoginButton() {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth();
  const [error, setError] = React.useState<string | null>(null);

  const handleLogin = async () => {
    try {
      console.log('Starting login process...');
      await loginWithRedirect();
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'Failed to login');
    }
  };

  if (error) {
    return (
      <button 
        className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 text-white"
        onClick={() => setError(null)}
      >
        Error: {error}
      </button>
    );
  }

  if (isLoading) {
    return (
      <button className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-800 text-white opacity-75 cursor-not-allowed">
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        Loading...
      </button>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="relative group">
        <button className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors">
          <img
            src={user.picture}
            alt={user.name}
            className="w-6 h-6 rounded-full mr-2"
          />
          {user.name}
        </button>
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
          <a
            href="#profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </a>
          <button
            onClick={() => logout()}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
    >
      Sign In
    </button>
  );
} 