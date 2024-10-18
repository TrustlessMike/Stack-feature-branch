'use client';  // Add this line at the top of the file

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES } from '@web3auth/base';

interface Web3AuthContextType {
  web3auth: Web3Auth | null;
  isLoading: boolean;
  error: string | null;
}

const Web3AuthContext = createContext<Web3AuthContextType | undefined>(undefined);

export const Web3AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!,
          web3AuthNetwork: "testnet", // Make sure this is set to "testnet"
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.SOLANA,
            chainId: "0x3", // This is correct for Solana devnet
            rpcTarget: "https://api.devnet.solana.com",
          },
        });

        await web3auth.initModal();
        console.log("Web3Auth initialized successfully");
        setWeb3auth(web3auth);
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
        setError("Failed to initialize Web3Auth");
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  return (
    <Web3AuthContext.Provider value={{ web3auth, isLoading, error }}>
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
