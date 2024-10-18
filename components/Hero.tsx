import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleGetStarted = async () => {
    if (isLoading) return;

    setIsLoading(true);
    console.log("Get Started clicked");
    try {
      console.log("Calling login function");
      await login();
      console.log("Login function completed");
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
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
