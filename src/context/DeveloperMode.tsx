import React, { createContext, useContext, ReactNode } from 'react';

interface DeveloperModeContextType {
  isDeveloperMode: boolean;
}

const DeveloperModeContext = createContext<DeveloperModeContextType>({ isDeveloperMode: false });

interface DeveloperModeProviderProps {
  children: ReactNode;
  isDeveloperMode?: boolean;
}

export function DeveloperModeProvider({ children, isDeveloperMode = false }: DeveloperModeProviderProps) {
  return (
    <DeveloperModeContext.Provider value={{ isDeveloperMode }}>
      {children}
    </DeveloperModeContext.Provider>
  );
}

export function useDeveloperMode() {
  return useContext(DeveloperModeContext);
}

// Utility HOC to add developer mode outline to components
export function withDevMode<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  return function WithDevModeComponent(props: P) {
    const { isDeveloperMode } = useDeveloperMode();
    
    return (
      <div className={`${isDeveloperMode ? 'border-2 border-red-500 relative' : ''}`}>
        {isDeveloperMode && (
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-1 rounded-br">
            {componentName}
          </div>
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
} 