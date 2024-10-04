'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function IntroPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleContinue = () => {
    localStorage.setItem('userName', name);
    router.push('/signup/questionnaire');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dollarSign = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 30,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
    };

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${dollarSign.size}px Arial`;
      ctx.fillStyle = 'rgba(0, 128, 0, 0.5)';
      ctx.fillText('$', dollarSign.x, dollarSign.y);

      dollarSign.x += dollarSign.dx;
      dollarSign.y += dollarSign.dy;

      if (dollarSign.x + dollarSign.size > canvas.width || dollarSign.x < 0)
        dollarSign.dx *= -1;
      if (dollarSign.y + dollarSign.size > canvas.height || dollarSign.y < 0)
        dollarSign.dy *= -1;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-emerald-600">
            Welcome to Stack
          </CardTitle>
          <CardDescription>
            Your journey to smart crypto investing starts here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-4">
            Stack is designed to help you build a personalized cryptocurrency
            portfolio tailored to your investment goals and risk tolerance.
          </p>
          <p className="text-center text-gray-600 mb-4">
            We'll ask you a few questions to understand your preferences and
            create a custom investment strategy just for you.
          </p>
          <p className="text-center text-gray-600 mb-4">
            To make your experience more personal, we'd love to know what name
            you'd like us to use. Don't worry, you can use any name you're
            comfortable with - it's just to make our interaction more friendly!
          </p>
          <Input
            type="text"
            placeholder="Enter your preferred name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={handleContinue}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          >
            Let's Stack!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
