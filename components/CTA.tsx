import React from 'react';

export default function CTA() {
  return (
    <section className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Your Opinion <span className="text-green-600">Shapes Our App</span>
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Help us improve Stack by sharing your thoughts and ideas.
      </p>
      <button className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-colors">
        Share Your Ideas
      </button>
    </section>
  );
}
