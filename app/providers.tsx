'use client';

import { Web3AuthProvider } from '../context/Web3AuthContext';
import { DarkModeProvider } from '../context/DarkModeContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Web3AuthProvider>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </Web3AuthProvider>
  );
}
