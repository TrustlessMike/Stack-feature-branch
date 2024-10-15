'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import TopBar from '@/components/Topbar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const chartData = {
  '1H': [
    { time: '0:00', value: 9800 },
    { time: '0:15', value: 9850 },
    { time: '0:30', value: 9825 },
    { time: '0:45', value: 9875 },
    { time: '1:00', value: 9900 },
  ],
  '1D': [
    { time: '9AM', value: 9800 },
    { time: '12PM', value: 10000 },
    { time: '3PM', value: 9900 },
    { time: '6PM', value: 10100 },
    { time: '9PM', value: 10050 },
  ],
  '1W': [
    { time: 'Mon', value: 9800 },
    { time: 'Wed', value: 10000 },
    { time: 'Fri', value: 10200 },
    { time: 'Sun', value: 10100 },
  ],
  '1M': [
    { time: 'Week 1', value: 9800 },
    { time: 'Week 2', value: 10000 },
    { time: 'Week 3', value: 9900 },
    { time: 'Week 4', value: 10300 },
  ],
  '1Y': [
    { time: 'Jan', value: 9800 },
    { time: 'Apr', value: 10100 },
    { time: 'Jul', value: 10400 },
    { time: 'Oct', value: 10700 },
  ],
  ALL: [
    { time: '2020', value: 8800 },
    { time: '2021', value: 9600 },
    { time: '2022', value: 10000 },
    { time: '2023', value: 10700 },
  ],
};

interface CryptoPrice {
  name: string;
  symbol: string;
  price: number;
  change: number;
  icon: string;
}

export default function RobustInvestmentDashboard() {
  const [timePeriod, setTimePeriod] = useState<keyof typeof chartData>('1M');
  const router = useRouter();
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        
        const formattedPrices: CryptoPrice[] = [
          {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: data.bitcoin.usd,
            change: data.bitcoin.usd_24h_change,
            icon: '/images/crypto-icons/btc.svg',
          },
          {
            name: 'Ethereum',
            symbol: 'ETH',
            price: data.ethereum.usd,
            change: data.ethereum.usd_24h_change,
            icon: '/images/crypto-icons/eth.svg',
          },
          {
            name: 'Solana',
            symbol: 'SOL',
            price: data.solana.usd,
            change: data.solana.usd_24h_change,
            icon: '/images/crypto-icons/sol.svg',
          },
        ];

        setCryptoPrices(formattedPrices);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchCryptoPrices();
  }, []);

  const handleInvestClick = () => {
    router.push('/dashboard/invest');
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart' as const,
    },
  };

  const data = {
    labels: chartData[timePeriod].map((item) => item.time),
    datasets: [
      {
        data: chartData[timePeriod].map((item) => item.value),
        fill: true,
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        borderColor: 'rgb(16, 185, 129)',
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(16, 185, 129)',
      },
    ],
  };

  return (
    <div className="bg-emerald-50 min-h-screen">
      <div className="w-full fixed top-0 left-0 z-50">
        <TopBar />
      </div>

      <main className="container mx-auto px-4 py-8 pt-20">
        <Card className="mb-6 rounded-3xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold text-emerald-700 mb-2">
              $10,000.00
            </h2>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-emerald-600 font-semibold">
                ↑ $700.00 (7.00%)
              </span>
              <span className="text-gray-500">All time</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 rounded-3xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-emerald-800">
              Portfolio Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-4">
              <Line data={data} options={chartOptions} />
            </div>
            <div className="flex justify-between">
              {Object.keys(chartData).map((period) => (
                <Button
                  key={period}
                  variant={timePeriod === period ? 'default' : 'outline'}
                  size="sm"
                  onClick={() =>
                    setTimePeriod(period as keyof typeof chartData)
                  }
                  className="text-xs rounded-full"
                >
                  {period}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 rounded-3xl shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between py-2">
            <CardTitle className="text-lg font-semibold text-emerald-800">
              Your accounts
            </CardTitle>
            <ChevronRight className="w-4 h-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div
              className="flex justify-between items-center bg-emerald-100 p-4 rounded-2xl cursor-pointer hover:bg-emerald-200 transition-colors duration-200"
              onClick={handleInvestClick}
            >
              <span className="text-emerald-700">Invest</span>
              <div className="text-right">
                <p className="font-semibold text-emerald-800">$10,000.00</p>
                <p className="text-sm text-emerald-600">↑ 7.00%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-lg mb-20">
          <CardHeader className="flex flex-row items-center justify-between py-2">
            <CardTitle className="text-lg font-semibold text-emerald-800">
              Crypto Prices
            </CardTitle>
            <ChevronRight className="w-4 h-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cryptoPrices.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="flex justify-between items-center bg-emerald-100 p-4 rounded-2xl"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={crypto.icon} alt={crypto.name} />
                      <AvatarFallback>{crypto.symbol}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-emerald-800">
                        {crypto.name}
                      </p>
                      <p className="text-sm text-emerald-600">
                        {crypto.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-800">
                      ${crypto.price.toLocaleString()}
                    </p>
                    <p
                      className={`text-sm ${crypto.change >= 0 ? 'text-emerald-600' : 'text-red-600'}`}
                    >
                      {crypto.change >= 0 ? '↑' : '↓'} {Math.abs(crypto.change).toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
