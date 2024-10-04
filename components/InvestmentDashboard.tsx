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

const InvestmentDashboard: React.FC = () => {
  return (
    <div className="bg-green-500 min-h-screen p-6 text-white">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <User size={24} />
        <div className="bg-green-600 rounded-full px-3 py-1 flex items-center">
          <Clock size={16} className="mr-1" />
          <span>1</span>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <h1 className="text-3xl font-bold mb-2">
          Combined Investing value is $1,618.71
        </h1>
        <div className="flex items-center mb-4">
          <span className="text-xl mr-2">↑ $336.54 (13.71%)</span>
          <span className="text-sm">All time</span>
        </div>
        <p className="mb-8">Total gain/loss</p>

        {/* Graph Placeholder */}
        <div className="h-40 bg-green-400 rounded-lg mb-8"></div>

        {/* Accounts */}
        <h2 className="text-2xl font-bold mb-4">Your accounts</h2>
        <div className="bg-white rounded-lg p-4 text-gray-800">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <TrendingUp size={24} className="text-white" />
              </div>
              <span className="font-semibold">Invest</span>
            </div>
            <div className="text-right">
              <p className="font-bold">$1,618.72</p>
              <p className="text-green-500">↑ 14.55%</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-yellow-500 rounded-full p-2 mr-3">
                <Clock size={24} className="text-white" />
              </div>
              <span className="font-semibold">Later</span>
            </div>
            <div className="text-right">
              <p className="font-bold">$0.00</p>
              <p className="text-green-500">↑ 3.11%</p>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between">
        <div className="flex flex-col items-center">
          <Home size={24} className="text-green-500" />
          <span className="text-xs text-green-500">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <TrendingUp size={24} className="text-gray-400" />
          <span className="text-xs text-gray-400">Investing</span>
        </div>
        <div className="flex flex-col items-center">
          <Building size={24} className="text-gray-400" />
          <span className="text-xs text-gray-400">Banking</span>
        </div>
        <div className="flex flex-col items-center">
          <BookOpen size={24} className="text-gray-400" />
          <span className="text-xs text-gray-400">Learning</span>
        </div>
        <div className="flex flex-col items-center">
          <Tag size={24} className="text-gray-400" />
          <span className="text-xs text-gray-400">Earning</span>
        </div>
      </nav>
    </div>
  );
};

export default InvestmentDashboard;
