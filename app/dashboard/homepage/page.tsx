'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Repeat, Circle, Plus } from 'lucide-react';
import { useDarkMode } from '@/context/DarkModeContext';

const HomePage = () => {
  const { isDarkMode } = useDarkMode();

  const handleButtonClick = (action: string) => {
    console.log(`${action} button clicked`);
    // Implement the action logic here
  };

  const accountBalance = 5000; // Example balance
  const recentTransactions = [
    { id: 1, description: 'Deposit', amount: 1000, date: '2023-04-15' },
    { id: 2, description: 'Withdrawal', amount: -500, date: '2023-04-14' },
    { id: 3, description: 'Investment', amount: -1500, date: '2023-04-13' },
  ];

  return (
    <div className={`container mx-auto p-4 space-y-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>Welcome Back!</h1>

      <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-emerald-100'} shadow-lg rounded-3xl`}>
        <CardContent className="p-6">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'} mb-2`}>Account Balance</h2>
          <p className={`text-4xl font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>${accountBalance.toFixed(2)}</p>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          className={`flex-1 mr-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-emerald-700 border-emerald-600 text-emerald-400' : 'hover:bg-emerald-200 border-emerald-300 text-emerald-700'}`}
          onClick={() => handleButtonClick('Deposit')}
        >
          <DollarSign className="w-4 h-4 mr-2" />
          Deposit
        </Button>
        <Button
          variant="outline"
          className={`flex-1 mx-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-emerald-700 border-emerald-600 text-emerald-400' : 'hover:bg-emerald-200 border-emerald-300 text-emerald-700'}`}
          onClick={() => handleButtonClick('Recurring')}
        >
          <Repeat className="w-4 h-4 mr-2" />
          Recurring
        </Button>
        <Button
          variant="outline"
          className={`flex-1 ml-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-emerald-700 border-emerald-600 text-emerald-400' : 'hover:bg-emerald-200 border-emerald-300 text-emerald-700'}`}
          onClick={() => handleButtonClick('Invest')}
        >
          <Circle className="w-4 h-4 mr-2" />
          Invest
        </Button>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className={`grid w-full grid-cols-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-emerald-100'}`}>
          <TabsTrigger
            value="transactions"
            className={`rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-700 data-[state=active]:bg-emerald-800 data-[state=active]:text-emerald-200' : 'hover:bg-emerald-200 data-[state=active]:bg-emerald-300 data-[state=active]:text-emerald-800'}`}
          >
            Recent Transactions
          </TabsTrigger>
          <TabsTrigger
            value="insights"
            className={`rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-700 data-[state=active]:bg-emerald-800 data-[state=active]:text-emerald-200' : 'hover:bg-emerald-200 data-[state=active]:bg-emerald-300 data-[state=active]:text-emerald-800'}`}
          >
            Insights
          </TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-3xl`}>
            <CardContent className="space-y-4 pt-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center">
                  <div>
                    <p className={`font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>{transaction.description}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>{transaction.date}</p>
                  </div>
                  <p className={`font-bold ${transaction.amount >= 0 ? (isDarkMode ? 'text-emerald-300' : 'text-emerald-600') : (isDarkMode ? 'text-red-400' : 'text-red-600')}`}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="insights">
          <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-3xl`}>
            <CardContent className="p-4">
              <p className={isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}>Insights and analytics will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 text-center">
        <Button
          onClick={() => handleButtonClick('View All')}
          className={`rounded-full transition-colors ${isDarkMode ? 'bg-emerald-700 hover:bg-emerald-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
        >
          <Plus className="w-4 h-4 mr-2" />
          View All Transactions
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
