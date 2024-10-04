import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        What Our <span className="text-green-600">Stackers</span> Say
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
            />
          ))}
        </div>
        <blockquote className="text-xl font-medium text-gray-900 md:text-2xl md:leading-8 lg:text-3xl">
          &ldquo;Stack has revolutionized my approach to cryptocurrency investing. 
          Their intuitive platform and clear explanations have made crypto simple and easy to understand. 
          I finally feel confident navigating the world of digital assets.&rdquo;
        </blockquote>
        <p className="mt-4 text-right text-gray-600">- Anonymous User</p>
      </div>
    </section>
  );
}
