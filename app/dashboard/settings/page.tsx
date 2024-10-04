'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Moon, Sun, Bell, Shield, Sliders, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const settingsOptions = [
  {
    title: 'Dark Mode',
    icon: Moon,
    type: 'Toggle',
    description: 'Switch between light and dark themes',
  },
  {
    title: 'Notifications',
    icon: Bell,
    type: 'Toggle',
    description: 'Manage your notification preferences',
  },
  {
    title: 'Two-Factor Authentication',
    icon: Shield,
    type: 'Toggle',
    description: 'Enable extra security for your account',
  },
  {
    title: 'Change Investment Strategy',
    icon: Sliders,
    type: 'Link',
    description: 'Adjust your investment preferences',
  },
  {
    title: 'Send Feedback',
    icon: MessageSquare,
    type: 'Button',
    description: 'Help us improve our service',
  },
];

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if we're in a /dashboard route
    const isDashboardRoute = window.location.pathname.startsWith('/dashboard');
    
    if (darkMode && isDashboardRoute) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggle = (setting: string) => {
    switch (setting) {
      case 'Dark Mode':
        setDarkMode(!darkMode);
        break;
      case 'Notifications':
        setNotifications(!notifications);
        break;
      case 'Two-Factor Authentication':
        setTwoFA(!twoFA);
        break;
    }
  };

  const handleAction = (setting: string) => {
    switch (setting) {
      case 'Change Investment Strategy':
        router.push('/dashboard/invest');
        break;
      case 'Send Feedback':
        // Implement feedback functionality
        console.log('Send Feedback clicked');
        break;
    }
  };

  return (
    <div className={`bg-gradient-to-br ${darkMode ? 'from-gray-800 to-gray-900' : 'from-emerald-50 to-teal-100'} min-h-screen p-4`}>
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-emerald-200' : 'text-emerald-800'}`}>Settings</h1>
        </div>
      </header>
      
      <main className="mb-20">
        <div className="space-y-4 mb-6">
          {settingsOptions.map((option, index) => (
            <Card key={index} className={`hover:shadow-md transition-shadow rounded-xl overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className={`${darkMode ? 'bg-emerald-700' : 'bg-emerald-200'} w-10 h-10 flex items-center justify-center`}>
                    <option.icon className={`${darkMode ? 'text-emerald-200' : 'text-emerald-700'} w-5 h-5`} />
                  </Avatar>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? 'text-emerald-200' : 'text-emerald-800'}`}>
                      {option.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>
                      {option.description}
                    </p>
                  </div>
                </div>
                {option.type === 'Toggle' && (
                  <button
                    onClick={() => handleToggle(option.title)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      (option.title === 'Dark Mode' && darkMode) ||
                      (option.title === 'Notifications' && notifications) ||
                      (option.title === 'Two-Factor Authentication' && twoFA)
                        ? 'bg-emerald-600'
                        : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        (option.title === 'Dark Mode' && darkMode) ||
                        (option.title === 'Notifications' && notifications) ||
                        (option.title === 'Two-Factor Authentication' && twoFA)
                          ? 'translate-x-6'
                          : 'translate-x-1'
                      }`}
                    />
                  </button>
                )}
                {(option.type === 'Link' || option.type === 'Button') && (
                  <ChevronRight
                    className={`${darkMode ? 'text-emerald-300' : 'text-emerald-600'} w-5 h-5 cursor-pointer`}
                    onClick={() => handleAction(option.title)}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-2">
          <Button
            variant="outline"
            className={`w-full ${darkMode ? 'text-emerald-300 border-emerald-300 hover:bg-emerald-900' : 'text-emerald-600 border-emerald-600 hover:bg-emerald-50'} rounded-full`}
          >
            Terms of Service
          </Button>
          <Button
            variant="outline"
            className={`w-full ${darkMode ? 'text-emerald-300 border-emerald-300 hover:bg-emerald-900' : 'text-emerald-600 border-emerald-600 hover:bg-emerald-50'} rounded-full`}
          >
            Privacy Policy
          </Button>
        </div>
      </main>
    </div>
  );
}
