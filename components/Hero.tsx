import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useWeb3Auth } from '../context/Web3AuthContext';
import { useRouter } from 'next/navigation';
import { WALLET_ADAPTERS } from '@web3auth/base';
import { getSolanaWallet } from '@/lib/config/solanaWalletUtils';

interface HeroProps {
  onGetStarted: () => void;
  showWeb3Auth: boolean;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, showWeb3Auth }) => {
  const { web3auth, isLoading, error, initializeWeb3Auth } = useWeb3Auth();
  const router = useRouter();

  const handleGetStarted = async () => {
    console.log("Get Started clicked, showWeb3Auth:", showWeb3Auth);
    onGetStarted(); // This will set showWeb3Auth to true in the parent component

    if (showWeb3Auth) {
      console.log("Attempting to initialize Web3Auth...");
      if (!web3auth) {
        try {
          await initializeWeb3Auth();
          console.log("Web3Auth initialized successfully");
        } catch (error) {
          console.error("Error initializing Web3Auth:", error);
          return;
        }
      }
      
      try {
        console.log("Attempting to connect to Web3Auth...");
        await web3auth?.connectTo(WALLET_ADAPTERS.OPENLOGIN);
        console.log("Connected to Web3Auth successfully");
        const solanaWallet = await getSolanaWallet();
        if (solanaWallet !== null) {
          console.log("Solana wallet obtained, navigating to Intro...");
          router.push('/signup/Intro');
        } else {
          console.log("Connection failed: No wallet returned");
        }
      } catch (error) {
        console.error("Error connecting to Web3Auth:", error);
      }
    }
  };

  return (
    <section className="text-center mb-12 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Build Your Wealth, <span className="text-green-600">Stack by Stack</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join thousands of people using Stack to invest smarter, save effortlessly, and grow their financial future.
      </p>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <button
        onClick={handleGetStarted}
        className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get Started'} 
        {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
      </button>
    </section>
  );
};

export default Hero;
