'use client';

import { useState, useEffect } from 'react';
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

export default function WelcomePage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    const fetchedName = localStorage.getItem('userName') || 'there';
    setUserName(fetchedName);
    // Check if the user is new (you might want to use a more robust method in a real app)
    const userStatus = localStorage.getItem('userStatus');
    setIsNewUser(userStatus !== 'existing');
  }, []);

  const handleContinue = () => {
    if (isNewUser) {
      router.push('/dashboard/newuser');
    } else {
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    router.push('/signup/questionnaire');
  };

  const portfolioData = [
    { title: 'Bitcoin', value: 45, color: '#F7931A' },
    { title: 'Ethereum', value: 30, color: '#627EEA' },
    { title: 'USDC', value: 15, color: '#2775CA' },
    { title: 'Solana', value: 10, color: '#00FFA3' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-emerald-600">
            Welcome, {userName}!
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Your personalized crypto portfolio is ready
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-64 h-64 mx-auto mb-4">
            <PieChart
              data={portfolioData}
              label={({ dataEntry }) =>
                dataEntry.percentage > 5
                  ? `${Math.round(dataEntry.percentage)}%`
                  : ''
              }
              labelStyle={{
                fontSize: '8px',
                fontFamily: 'sans-serif',
                fill: '#fff',
              }}
              labelPosition={70}
              lineWidth={60}
              animate
              animationDuration={500}
              animationEasing="ease-out"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {portfolioData.map((entry, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                <span 
                  className="w-4 h-4 rounded-full mr-2" 
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span className="text-sm font-medium">{entry.title}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">We're excited to have you join us!</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleBack}
            variant="outline"
            className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300"
          >
            Retake Questionnaire
          </Button>
          <Button
            onClick={handleContinue}
            className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-300"
          >
            Stack!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
