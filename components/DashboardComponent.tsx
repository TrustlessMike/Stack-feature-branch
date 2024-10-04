import React, { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface DashboardComponentProps {
  userName?: string;
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  userName = 'User',
}) => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        router.push('/');
      }
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [router]);

  const handleLogout = useCallback(async () => {
    try {
      setIsLoggingOut(true);
      localStorage.removeItem('isLoggedIn');
      // Simulating an API call for logout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally, show an error message to the user
    } finally {
      setIsLoggingOut(false);
    }
  }, [router]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to Your Dashboard, {userName}
      </h1>
      <p className="mb-4">
        This is your main application dashboard. Here you can view and manage
        your crypto assets.
      </p>
      <Button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white"
        disabled={isLoggingOut}
      >
        {isLoggingOut ? 'Logging out...' : 'Logout'}
      </Button>
    </div>
  );
};

export default DashboardComponent;
