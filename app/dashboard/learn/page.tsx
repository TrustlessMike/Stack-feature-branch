'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Play, FileText } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import Link from 'next/link';
import TopBar from '@/components/Topbar';

const learningModules = [
  {
    title: 'Introduction to Investing',
    icon: BookOpen,
    type: 'Article',
    duration: '5 min read',
  },
  {
    title: 'Understanding Stock Markets',
    icon: Play,
    type: 'Video',
    duration: '10 min watch',
  },
  {
    title: 'Crypto 101',
    icon: FileText,
    type: 'Guide',
    duration: '15 min read',
  },
  {
    title: 'Risk Management Strategies',
    icon: Play,
    type: 'Video',
    duration: '8 min watch',
  },
];

export default function LearnPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen">
      <TopBar />
      
      <main className="p-4">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">
          Continue Learning
        </h2>
        <div className="space-y-4 mb-6">
          {learningModules.map((module, index) => (
            <Link href="#" key={index}>
              <Card className="hover:shadow-md transition-shadow rounded-xl overflow-hidden">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="bg-emerald-200 w-10 h-10 flex items-center justify-center">
                      <module.icon className="text-emerald-700 w-5 h-5" />
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-emerald-800">
                        {module.title}
                      </h3>
                      <p className="text-sm text-emerald-600">
                        {module.type} • {module.duration}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-emerald-600 w-5 h-5" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
          Explore More Courses
        </Button>
      </main>
    </div>
  );
}
