import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SignUpModal from './SignUpModal';

interface HeroProps {
  onNavigate?: (path: string) => void;
}

export default function Hero({
  onNavigate = (path: string) => console.log(`Navigate to: ${path}`),
}: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUp = (email: string) => {
    console.log('Signing up with email:', email);
    // Implement sign up logic here
    onNavigate('/signup');
  };

  const handleSocialSignIn = (provider: string) => {
    console.log('Signing in with provider:', provider);
    // Implement social sign in logic here
    onNavigate('/signup');
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
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors"
      >
        Get Started <ArrowRight className="ml-2 w-5 h-5" />
      </button>
      <SignUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSignUp={handleSignUp}
        onSocialSignIn={handleSocialSignIn}
      />
    </section>
  );
}
