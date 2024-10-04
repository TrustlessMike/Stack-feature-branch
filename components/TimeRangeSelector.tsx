'use client';

import React from 'react';

export type TimeRange = '1H' | '1D' | '1W' | '1M' | '1Y' | 'ALL';

interface TimeRangeSelectorProps {
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ timeRange, setTimeRange }) => {
  const ranges: TimeRange[] = ['1H', '1D', '1W', '1M', '1Y', 'ALL'];

  return (
    <div className="flex justify-center space-x-2 mb-4">
      {ranges.map((range) => (
        <button
          key={range}
          className={`px-3 py-1 rounded ${
            timeRange === range ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setTimeRange(range)}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;
