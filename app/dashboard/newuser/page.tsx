'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PieChart } from 'react-minimal-pie-chart';

const NewUserPage: React.FC = () => {
  const [isInvested, setIsInvested] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      setIsInvested(true);
    }
    fetchUserData();
  }, []);

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  const portfolioData = [
    { title: 'Bitcoin', value: 40, color: '#F7931A' },
    { title: 'Ethereum', value: 30, color: '#627EEA' },
    { title: 'Solana', value: 20, color: '#00FFA3' },
    { title: 'USDC', value: 10, color: '#2775CA' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-emerald-600">
            Congratulations!
          </CardTitle>
          <CardDescription>
            You've successfully invested in your recommended portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-48 h-48 mx-auto mb-4">
            <PieChart
              data={portfolioData}
              label={({ dataEntry }) =>
                dataEntry.percentage > 5
                  ? `${Math.round(dataEntry.percentage)}%`
                  : ''
              }
              labelStyle={{
                fontSize: '6px',
                fontFamily: 'sans-serif',
                fill: '#fff',
              }}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {portfolioData.map((entry, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                <span 
                  className="w-3 h-3 rounded-full mr-1" 
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span className="text-xs font-medium">{entry.title}</span>
              </div>
            ))}
          </div>
          <p className="text-sm mb-2 text-center">
            Your investment is now working for you. Your portfolio includes
            Bitcoin, Ethereum, Solana, and USDC.
          </p>
          <p className="text-sm text-center">We're excited to have you join us!</p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGoToDashboard} className="w-full bg-emerald-500 hover:bg-emerald-600">
            Go to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewUserPage;
