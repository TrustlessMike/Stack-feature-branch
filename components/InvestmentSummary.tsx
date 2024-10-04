'use client';

import React from 'react';
import {
  User,
  Clock,
  Home,
  TrendingUp,
  Building,
  BookOpen,
  Tag,
} from 'lucide-react';
import Link from 'next/link';

const InvestmentSummary: React.FC = () => {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <User size={24} />
        <div className="bg-green-600 rounded-full px-3 py-1 flex items-center">
          <Clock size={16} className="mr-1" />
          <span>1</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-2">
          Combined Investing value is $1,618.71
        </h1>
        <div className="flex items-center mb-2">
          <span className="text-lg mr-2">↑ $336.54 (13.71%)</span>
          <span className="text-sm">All time</span>
        </div>
        <p className="mb-4 text-sm">Total gain/loss</p>

        {/* Graph Placeholder */}
        <div className="h-40 bg-green-400 rounded-lg mb-6"></div>

        {/* Accounts */}
        <h2 className="text-xl font-bold mb-3">Your accounts</h2>
        <Link
          href="/dashboard"
          className="block bg-white rounded-lg p-4 text-gray-800 mb-4"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <TrendingUp size={20} className="text-white" />
              </div>
              <span className="font-semibold">Invest</span>
            </div>
            <div className="text-right">
              <p className="font-bold">$1,618.72</p>
              <p className="text-green-500 text-sm">↑ 14.55%</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-yellow-500 rounded-full p-2 mr-3">
                <Clock size={20} className="text-white" />
              </div>
              <span className="font-semibold">Later</span>
            </div>
            <div className="text-right">
              <p className="font-bold">$0.00</p>
              <p className="text-green-500 text-sm">↑ 3.11%</p>
            </div>
          </div>
        </Link>
      </main>

      {/* Navigation */}
      <nav className="bg-white p-2 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Home size={20} className="text-green-500" />
          <span className="text-xs text-green-500">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <TrendingUp size={20} className="text-gray-400" />
          <span className="text-xs text-gray-400">Investing</span>
        </div>
        <div className="flex flex-col items-center">
          <Building size={20} className="text-gray-400" />
          <span className="text-xs text-gray-400">Banking</span>
        </div>
        <div className="flex flex-col items-center">
          <BookOpen size={20} className="text-gray-400" />
          <span className="text-xs text-gray-400">Learning</span>
        </div>
        <div className="flex flex-col items-center">
          <Tag size={20} className="text-gray-400" />
          <span className="text-xs text-gray-400">Earning</span>
        </div>
      </nav>
    </div>
  );
};

export default function InvestmentSummaryPage() {
  return <InvestmentSummary />;
}
