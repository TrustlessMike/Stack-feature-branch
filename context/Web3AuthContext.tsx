'use client';  // Add this line at the top of the file

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';

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
      console.log("Initializing Web3Auth for Solana on Sapphire Devnet...");
      console.log("NEXT_PUBLIC_WEB3AUTH_CLIENT_ID:", process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID);
      console.log("Current URL:", window.location.href);
      try {
        const web3auth = new Web3Auth({
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!,
          web3AuthNetwork: "sapphire_devnet",
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.SOLANA,
            chainId: "0x3", // Solana devnet
            rpcTarget: "https://api.devnet.solana.com",
            displayName: "Solana Devnet",
            blockExplorer: "https://explorer.solana.com/?cluster=devnet",
            ticker: "SOL",
            tickerName: "Solana",
          },
        });
        console.log("Web3Auth instance created");

        await web3auth.initModal({
          modalConfig: {
            [WALLET_ADAPTERS.TORUS_EVM]: {
              label: "torus",
              showOnModal: false,
            },
          },
        });
        console.log("Web3Auth modal initialized");

        setWeb3auth(web3auth);
        console.log("Web3Auth set in state");
      } catch (error) {
        console.error("Error in Web3Auth initialization:", error);
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
