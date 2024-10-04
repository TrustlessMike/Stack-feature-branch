import React from 'react';
import { Shield, MousePointer, DollarSign, Coins } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-green-600 mr-3" />,
    text: 'Bank-grade encryption and security to keep your assets safe',
  },
  {
    icon: <MousePointer className="w-6 h-6 text-green-600 mr-3" />,
    text: 'User-friendly interface for effortless investing',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600 mr-3" />,
    text: 'Incredibly low fees to maximize your returns',
  },
  {
    icon: <Coins className="w-6 h-6 text-green-600 mr-3" />,
    text: 'Automatic round-ups to supercharge your savings',
  },
];

export default function Features() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Why Choose <span className="text-green-600">Stack</span>?
      </h2>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            {feature.icon}
            <span className="text-gray-700">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
