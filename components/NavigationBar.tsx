'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, TrendingUp, BookOpen, Settings } from 'lucide-react';
import Link from 'next/link';

const NavigationBar = () => {
  const pathname = usePathname();

  if (!pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/dashboard"
          className={`flex flex-col items-center ${pathname === '/dashboard' ? 'text-emerald-600' : 'text-gray-600'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/dashboard/invest"
          className={`flex flex-col items-center ${pathname === '/dashboard/invest' ? 'text-emerald-600' : 'text-gray-600'}`}
        >
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs mt-1">Invest</span>
        </Link>
        <Link
          href="/dashboard/learn"
          className={`flex flex-col items-center ${pathname === '/dashboard/learn' ? 'text-emerald-600' : 'text-gray-600'}`}
        >
          <BookOpen className="w-6 h-6" />
          <span className="text-xs mt-1">Learn</span>
        </Link>
        <Link
          href="/dashboard/settings"
          className={`flex flex-col items-center ${pathname === '/dashboard/settings' ? 'text-emerald-600' : 'text-gray-600'}`}
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
