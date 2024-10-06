'use client';  // Add this line at the top of the file

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { initWeb3Auth, getSolanaWallet } from '../lib/config/web3auth';
import { SolanaWallet } from "@web3auth/solana-provider";

interface Web3AuthContextType {
  web3auth: Web3AuthNoModal | null;
  solanaWallet: SolanaWallet | null;
  isLoading: boolean;
  error: string | null;
}

const defaultContextValue: Web3AuthContextType = {
  web3auth: null,
  solanaWallet: null,
  isLoading: true,
  error: null
};

const Web3AuthContext = createContext<Web3AuthContextType>(defaultContextValue);

export const useWeb3Auth = () => {
  const context = useContext(Web3AuthContext);
  if (context === undefined) {
    throw new Error('useWeb3Auth must be used within a Web3AuthProvider');
  }
  return context;
};

export const Web3AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contextValue, setContextValue] = useState<Web3AuthContextType>(defaultContextValue);

  useEffect(() => {
    const init = async () => {
      try {
        console.log("Starting Web3Auth initialization...");
        const web3authInstance = await initWeb3Auth();
        console.log("Web3Auth initialized successfully:", web3authInstance);
        
        console.log("About to get Solana wallet...");
        const wallet = await getSolanaWallet();
        console.log("Solana wallet retrieved:", wallet);
        
        setContextValue({
          web3auth: web3authInstance as unknown as Web3AuthNoModal,
          solanaWallet: wallet,
          isLoading: false,
          error: null
        });
      } catch (err) {
        console.error("Failed to initialize Web3Auth:", err);
        setContextValue(prev => ({
          ...prev,
          isLoading: false,
          error: `Failed to initialize Web3Auth: ${err instanceof Error ? err.message : String(err)}`
        }));
      }
    };

    init();
  }, []);

  return (
    <Web3AuthContext.Provider value={contextValue}>
      {children}
    </Web3AuthContext.Provider>
  );
};
