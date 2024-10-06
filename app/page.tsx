'use client';

import React, { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import { useRouter } from 'next/navigation';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AddToHomeScreen from '@/components/AddToHomescreen';

const Page = () => {
  const router = useRouter();
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleNavigation = (path: string) => {
    console.log(`Navigating to: ${path}`);
    router.push(path);
  };

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsAppInstalled(true);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const coins: {
      x: number;
      y: number;
      rotation: number;
      speed: number;
      icon: HTMLImageElement;
    }[] = [];
    const coinCount = 50;
    const coinSize = 40; // Optimal size for better quality

    // Load crypto icons
    const iconSources = [
      '/images/crypto-icons/btc.svg',
      '/images/crypto-icons/eth.svg',
      '/images/crypto-icons/sol.svg',
      '/images/crypto-icons/usdc.svg',
    ];
    const icons: HTMLImageElement[] = [];

    const loadIcons = async () => {
      for (const src of iconSources) {
        const img = new Image();
        img.src = src;
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        icons.push(img);
      }

      for (let i = 0; i < coinCount; i++) {
        coins.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          rotation: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.5 + 0.1,
          icon: icons[Math.floor(Math.random() * icons.length)],
        });
      }

      animate();
    };

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      coins.forEach((coin) => {
        ctx.save();
        ctx.translate(coin.x, coin.y);
        ctx.rotate(coin.rotation);

        // Create a circular clipping path
        ctx.beginPath();
        ctx.arc(0, 0, coinSize / 2, 0, Math.PI * 2);
        ctx.clip();

        ctx.drawImage(
          coin.icon,
          -coinSize / 2,
          -coinSize / 2,
          coinSize,
          coinSize
        );
        ctx.restore();

        coin.y += coin.speed;
        coin.rotation += 0.01;

        if (coin.y > canvas.height + coinSize) {
          coin.y = -coinSize;
          coin.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    loadIcons();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAppInstalled = () => {
    setIsAppInstalled(true);
  };

  return (
    <div className="min-h-screen relative">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      {!isAppInstalled ? (
        <AddToHomeScreen onClose={handleAppInstalled} />
      ) : (
        <main className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          <Hero onNavigate={handleNavigation} />
          <Features />
          <Testimonials />
          <CTA />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Page;
