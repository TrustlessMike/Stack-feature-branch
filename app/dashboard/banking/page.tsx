'use client';

import React from 'react';
import { Wallet, ArrowUpRight, PieChart } from 'lucide-react';

interface QuickActionProps {
  icon: React.ElementType;
  label: string;
}

interface CryptoIconProps {
  className?: string;
}

interface CryptoBuyItemProps {
  name: string;
  amount: string;
  value: string;
  change: string;
}

const CryptoBankingPage: React.FC = () => {
  return (
    <div className="bg-emerald-50 min-h-screen pb-20">
      {/* Account Balance Card */}
      <div className="bg-emerald-500 text-white p-6 rounded-b-3xl shadow-md">
        <h1 className="text-2xl font-bold mb-2">Portfolio Value</h1>
        <p className="text-4xl font-bold">$12,345.67</p>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-around bg-white py-4 shadow-md">
        <QuickAction icon={Wallet} label="Buy" />
        <QuickAction icon={ArrowUpRight} label="Sell" />
        <QuickAction icon={CryptoIcon} label="Swap" />
        <QuickAction icon={PieChart} label="Analytics" />
      </div>

      {/* Recent Crypto Buys */}
      <div className="mt-6 px-4">
        <h2 className="text-lg font-semibold mb-4">Recent Crypto Buys</h2>
        <CryptoBuyItem 
          name="Bitcoin"
          amount="0.0025 BTC"
          value="$250.00"
          change="+1.2%"
        />
        <CryptoBuyItem 
          name="Ethereum"
          amount="0.15 ETH"
          value="$300.00"
          change="-0.5%"
        />
        <CryptoBuyItem 
          name="Dogecoin"
          amount="500 DOGE"
          value="$45.00"
          change="+5.7%"
        />
        <button className="w-full text-emerald-600 font-semibold py-2 mt-4">
          View All Purchases
        </button>
      </div>
    </div>
  );
};

const QuickAction: React.FC<QuickActionProps> = ({ icon: Icon, label }) => (
  <button className="flex flex-col items-center">
    <div className="bg-emerald-100 p-3 rounded-full mb-1">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <span className="text-xs text-gray-600">{label}</span>
  </button>
);

const CryptoIcon: React.FC<CryptoIconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CryptoBuyItem: React.FC<CryptoBuyItemProps> = ({ name, amount, value, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-3">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-100 mr-3">
          <CryptoIcon className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{amount}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">{value}</p>
        <p className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </p>
      </div>
    </div>
  );
};

export default CryptoBankingPage;