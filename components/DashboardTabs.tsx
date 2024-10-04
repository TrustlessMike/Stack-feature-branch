'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, TrendingUp, BookOpen, Settings } from 'lucide-react';

const tabs = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Invest', href: '/dashboard/invest', icon: TrendingUp },
  { name: 'Learn', href: '#', icon: BookOpen }, // Add actual link when available
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function DashboardTabs() {
  const pathname = usePathname();

  if (!pathname.startsWith('/dashboard')) {
    return null;
  }

  // Only render the tabs if we're in the /dashboard route
  if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    return (
      <div className="flex justify-around items-center p-4 border-t rounded-t-lg shadow-sm bg-white">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href ||
            (tab.href !== '/dashboard' && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex flex-col items-center ${
                isActive ? 'text-primary' : 'text-gray-400'
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    );
  }

  return null;
}
