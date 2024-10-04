import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="text-xl font-bold text-green-600 flex items-center">
        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-2">
          <span className="font-bold">$</span>
        </div>
        <span>Stack</span>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors">
        Log In
      </button>
    </header>
  );
}
