'use client';

import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  PlusCircle,
  DollarSign,
  Repeat,
  Circle,
  ChevronDown,
} from 'lucide-react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import { PerformanceChart } from '@/components/PerformanceChart';
import TopBar from '@/components/Topbar';

const COLORS = ['#FF4136', '#FF851B', '#2ECC40'];

export default function InvestmentPortfolio() {
  const router = useRouter();
  const [portfolioValue, setPortfolioValue] = useState(10000);
  const [ytdReturn, setYtdReturn] = useState(15);
  const [investments, setInvestments] = useState([
    { 
      name: 'Aggressive', 
      risk: 'High Risk', 
      value: 5000, 
      color: '#FF4136',
      expanded: false,
      subInvestments: [
        { name: 'Solana', value: 5000, color: '#00FFA3' }
      ]
    },
    { 
      name: 'Moderate', 
      risk: 'Balanced Risk', 
      value: 3000, 
      color: '#FF851B',
      expanded: false,
      subInvestments: [
        { name: 'Ethereum', value: 1500, color: '#627EEA' },
        { name: 'Bitcoin', value: 1500, color: '#F7931A' }
      ]
    },
    { 
      name: 'Conservative', 
      risk: 'Low Risk', 
      value: 2000, 
      color: '#2ECC40',
      expanded: false,
      subInvestments: [
        { name: 'USDC', value: 2000, color: '#2775CA' }
      ]
    },
  ]);
  const [timePeriod, setTimePeriod] = useState<
    '1H' | '1D' | '1W' | '1M' | '1Y' | 'ALL'
  >('1M');

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setPortfolioValue((prev) => prev + (Math.random() - 0.5) * 100);
      setYtdReturn((prev) => prev + (Math.random() - 0.5) * 0.5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (action: string) => {
    console.log(`${action} button clicked`);
    // Add your logic here
  };

  const toggleExpand = (index: number) => {
    setInvestments(prev => 
      prev.map((inv, i) => 
        i === index ? { ...inv, expanded: !inv.expanded } : inv
      )
    );
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen pb-20">
      <TopBar />
      <div className="p-4">
        {/* Portfolio Section */}
        <Card className="mb-6 bg-white shadow-lg rounded-3xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span className="text-emerald-800">Your Portfolio</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleButtonClick('External Link')}
                aria-label="External link"
                className="rounded-full hover:bg-emerald-200 transition-colors"
              >
                <ExternalLink className="w-6 h-6 text-emerald-600" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart timePeriod={timePeriod} />
            <div className="flex justify-between mt-4">
              {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((period) => (
                <Button
                  key={period}
                  variant={timePeriod === period ? 'default' : 'outline'}
                  onClick={() => setTimePeriod(period as typeof timePeriod)}
                  className="text-xs rounded-full"
                >
                  {period}
                </Button>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-emerald-500">
                ↑ {ytdReturn.toFixed(2)}%
              </span>
              <span className="text-emerald-600 block">YTD Return</span>
            </div>
          </CardContent>
        </Card>

        {/* Investment Actions */}
        <div className="flex justify-between mb-6">
          <Button
            variant="outline"
            className="flex-1 mr-2 rounded-full hover:bg-emerald-200 transition-colors border-emerald-300 text-emerald-700"
            onClick={() => handleButtonClick('Deposit')}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Deposit
          </Button>
          <Button
            variant="outline"
            className="flex-1 mx-2 rounded-full hover:bg-emerald-200 transition-colors border-emerald-300 text-emerald-700"
            onClick={() => handleButtonClick('Recurring')}
          >
            <Repeat className="w-4 h-4 mr-2" />
            Recurring
          </Button>
          <Button
            variant="outline"
            className="flex-1 ml-2 rounded-full hover:bg-emerald-200 transition-colors border-emerald-300 text-emerald-700"
            onClick={() => handleButtonClick('Round Ups')}
          >
            <Circle className="w-4 h-4 mr-2" />
            Round Ups
          </Button>
        </div>

        {/* Investment List */}
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-emerald-100 rounded-full">
            <TabsTrigger
              value="list"
              className="rounded-full hover:bg-emerald-200 transition-colors data-[state=active]:bg-emerald-300 data-[state=active]:text-emerald-800"
            >
              List View
            </TabsTrigger>
            <TabsTrigger
              value="chart"
              className="rounded-full hover:bg-emerald-200 transition-colors data-[state=active]:bg-emerald-300 data-[state=active]:text-emerald-800"
            >
              Chart View
            </TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <Card className="bg-white shadow-lg rounded-3xl">
              <CardContent className="space-y-4 pt-4">
                {investments.map((investment, index) => (
                  <div key={index}>
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <div className="flex items-center">
                        <div
                          className="w-1 h-6 mr-2 rounded-full"
                          style={{ backgroundColor: investment.color }}
                        ></div>
                        <div>
                          <p className="font-bold" style={{ color: investment.color }}>
                            {investment.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {investment.risk}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="font-bold mr-2" style={{ color: investment.color }}>
                          ${investment.value.toFixed(2)}
                        </p>
                        <ChevronDown className={`w-4 h-4 transition-transform ${investment.expanded ? 'transform rotate-180' : ''}`} />
                      </div>
                    </div>
                    {investment.expanded && (
                      <div className="mt-2 ml-6">
                        {investment.subInvestments.map((subInv, subIndex) => (
                          <div key={subIndex} className="flex justify-between items-center mt-2">
                            <div className="flex items-center">
                              <div
                                className="w-1 h-4 mr-2 rounded-full"
                                style={{ backgroundColor: subInv.color }}
                              ></div>
                              <p className="text-sm text-gray-700">{subInv.name}</p>
                            </div>
                            <p className="text-sm font-bold text-gray-600">
                              ${subInv.value.toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="chart">
            <Card className="bg-white shadow-lg rounded-3xl">
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={investments}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {investments.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                        />
                      ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Change Portfolio Button */}
        <div className="mt-6 text-center">
          <Button
            onClick={() => handleButtonClick('Change Portfolio')}
            className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Change Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
