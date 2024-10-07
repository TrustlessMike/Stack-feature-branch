import React, { useState } from 'react';
import { initWeb3Auth, getSolanaWallet } from '../lib/config/web3auth'; // Updated import path

const LoginButton = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleLogin = async () => {
    await initWeb3Auth();
    const solanaWallet = await getSolanaWallet();
    if (solanaWallet) {
      const address = await solanaWallet.requestAccounts(); // Example method to get address
      setWalletAddress(address[0]);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Web3Auth</button>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
    </div>
  );
};

export default LoginButton;
