import React from 'react';

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex justify-between mt-6">
      <button className="bg-green-600 text-white px-6 py-2 rounded-full flex-1 mr-2">
        Buy
      </button>
      <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full flex-1 ml-2">
        Sell
      </button>
    </div>
  );
};
