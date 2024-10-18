'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
    console.log("Login function called");
    if (web3auth) {
      console.log("Web3Auth instance exists");
      try {
        console.log("Attempting to connect...");
        await web3auth.connect();
        console.log("Connected successfully");
        setIsAuthenticated(true);
        router.push('/dashboard');
      } catch (error) {
        console.error("Login error:", error);
        if (error instanceof Error) {
          console.error("Error message:", error.message);
          console.error("Error stack:", error.stack);
        }
        setIsAuthenticated(false);
      }
    } else {
      console.error("Web3Auth not initialized");
    }
  };

  const logout = async () => {
    if (web3auth) {
      try {
        await web3auth.logout();
        setIsAuthenticated(false);
        router.push('/');
      } catch (error) {
        console.error("Logout error:", error);
      }
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

