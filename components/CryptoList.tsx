'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
}

export const CryptoList: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  const displayedCryptos = showAll ? cryptos : cryptos.slice(0, 3);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {displayedCryptos.map((crypto) => (
        <div
          key={crypto.id}
          className="flex justify-between items-center py-3 border-b text-black"
        >
          <div className="flex items-center">
            <Image
              src={crypto.image}
              alt={crypto.name}
              width={32}
              height={32}
              className="mr-3"
            />
            <div>
              <h3 className="font-semibold">{crypto.name}</h3>
              <p className="text-sm text-gray-500">
                {crypto.symbol.toUpperCase()}{' '}
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUp className="inline text-green-500" size={12} />
                ) : (
                  <ArrowDown className="inline text-red-500" size={12} />
                )}{' '}
                <span
                  className={
                    crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }
                >
                  {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                </span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">${crypto.current_price.toFixed(2)}</p>
            <p className="text-xs text-gray-500">
              MCap: ${formatNumber(crypto.market_cap)}
            </p>
            <p className="text-xs text-gray-500">
              Vol: ${formatNumber(crypto.total_volume)}
            </p>
          </div>
        </div>
      ))}
      {cryptos.length > 5 && (
        <button
          className="mt-4 w-full py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <>
              <span className="mr-2">See Less</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span className="mr-2">See More</span>
              <ChevronDown size={20} />
            </>
          )}
        </button>
      )}
    </div>
  );
};

const formatNumber = (num: number) => {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return num.toFixed(2);
};
