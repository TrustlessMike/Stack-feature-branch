'use client';  // Add this line at the top of the file

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES } from '@web3auth/base';

interface Web3AuthContextType {
  web3auth: Web3Auth | null;
  isLoading: boolean;
  error: string | null;
  initializeWeb3Auth: () => Promise<void>;
}

const Web3AuthContext = createContext<Web3AuthContextType | undefined>(undefined);

export const Web3AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializeWeb3Auth = useCallback(async () => {
    try {
      setIsLoading(true);
      const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;
      console.log("Web3Auth Client ID:", clientId); // Log the client ID

      if (!clientId) {
        throw new Error("Web3Auth Client ID is not set in environment variables");
      }

      const web3authInstance = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId: '0x1', // Make sure this is correct for Solana
          rpcTarget: 'https://rpc.ankr.com/solana',
        },
        uiConfig: {
          theme: 'dark',
          loginMethodsOrder: ['google', 'facebook']
        }
      });

      console.log("Web3Auth instance created, initializing modal...");
      await web3authInstance.initModal();
      console.log("Web3Auth modal initialized successfully");

      setWeb3auth(web3authInstance);
    } catch (error) {
      console.error("Error initializing Web3Auth:", error);
      setError('Failed to initialize Web3Auth: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Web3AuthContext.Provider value={{ web3auth, isLoading, error, initializeWeb3Auth }}>
      {children}
    </Web3AuthContext.Provider>
  );
};

export const useWeb3Auth = () => {
  const context = useContext(Web3AuthContext);
  if (context === undefined) {
    throw new Error('useWeb3Auth must be used within a Web3AuthProvider');
  }
  return context;
};
