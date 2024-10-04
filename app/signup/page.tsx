'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SignUpPage() {
  const router = useRouter();

  useEffect(() => {
    // Assuming the user is already logged in, redirect to questionnaire
    router.push('/signup/questionnaire');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <h1 className="text-2xl font-bold">Let&apos;s get started</h1>
          <CardDescription>
            Redirecting you to the questionnaire...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            If you're not redirected automatically, please click{' '}
            <a
              href="/signup/questionnaire"
              className="text-emerald-600 hover:underline"
            >
              here
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
