'use client';

import React, { useState, useEffect } from 'react';
import { Home, TrendingUp, BookOpen, Wallet } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface NavItemProps {
  id: string;
  icon: React.ElementType;
  label: string;
  path: string;
}

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const router = useRouter();
  const pathname = usePathname();

  const NavItem: React.FC<NavItemProps> = ({ id, icon: Icon, label, path }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        router.push(path);
      }}
      className={`flex flex-col items-center justify-center w-1/4 py-2 ${
        activeTab === id ? 'text-emerald-600' : 'text-gray-600'
      }`}
    >
      <Icon className="w-6 h-6" strokeWidth={activeTab === id ? 2.5 : 2} />
      <span className="text-xs mt-1 font-medium">{label}</span>
    </button>
  );

  useEffect(() => {
    // Check if the current path is within the dashboard
    const isDashboard = pathname?.startsWith('/dashboard') ?? false;
    if (!isDashboard) {
      // Handle non-dashboard case if needed
    }
  }, [pathname]);

  // Add this null check before using pathname
  if (!pathname?.startsWith('/dashboard')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        <NavItem id="home" icon={Home} label="Home" path="/dashboard" />
        <NavItem id="invest" icon={TrendingUp} label="Invest" path="/dashboard/invest" />
        <NavItem id="learn" icon={BookOpen} label="Learn" path="/dashboard/learn" />
        <NavItem id="banking" icon={Wallet} label="Banking" path="/dashboard/banking" />
      </div>
    </nav>
  );
};

export default NavigationBar;
