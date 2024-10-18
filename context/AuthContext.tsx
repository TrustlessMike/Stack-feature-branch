import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWeb3Auth } from './Web3AuthContext';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { web3auth } = useWeb3Auth();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (web3auth && web3auth.connected) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [web3auth]);

  const login = async () => {
    if (web3auth) {
      await web3auth.connect();
      setIsAuthenticated(true);
      router.push('/dashboard'); // Redirect to dashboard after login
    }
  };

  const logout = async () => {
    if (web3auth) {
      await web3auth.logout();
      setIsAuthenticated(false);
      router.push('/'); // Redirect to home page after logout
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
