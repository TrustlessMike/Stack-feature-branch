import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useWeb3Auth } from '../context/Web3AuthContext';
import { useRouter } from 'next/navigation';
import { WALLET_ADAPTERS } from '@web3auth/base'; // Updated import path
import { getSolanaWallet } from '@/lib/config/solanaWalletUtils'; // Updated import path


interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { web3auth, isLoading, error } = useWeb3Auth();
  const router = useRouter();

  const handleGetStarted = async () => {
    console.log("Get Started clicked. Web3Auth state:", web3auth);
    if (!web3auth) {
      console.error("Web3Auth not initialized");
      return;
    }

    try {
      console.log("Attempting to connect...");
      await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN);
      const solanaWallet = await getSolanaWallet();
      if (solanaWallet != null) {
        console.log("Successfully connected to Web3Auth and got Solana wallet");
        router.push('/signup/Intro');
      } else {
        console.log("Connection failed: No wallet returned");
      }
    } catch (error) {
      console.error("Error connecting to Web3Auth:", error);
    }
  };

  return (
    <section className="text-center mb-12 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Build Your Wealth,{' '}
        <span className="text-green-600">Stack by Stack</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join thousands of people using Stack to invest smarter, save
        effortlessly, and grow their financial future.
      </p>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <button
        onClick={handleGetStarted}
        className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors"
        disabled={isLoading || !web3auth}
      >
        {isLoading ? 'Loading...' : 'Get Started'} 
        {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
      </button>
    </section>
  );
};

export default Hero;  // Make sure this line is present
