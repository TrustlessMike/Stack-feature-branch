'use client';

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import TimeRangeSelector from './TimeRangeSelector';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  title: string;
}

const Chart: React.FC<ChartProps> = ({ data, title }) => {
  const [timeRange, setTimeRange] = useState<
    '1H' | '1D' | '1W' | '1M' | '1Y' | 'ALL'
  >('1D');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <TimeRangeSelector 
        timeRange={timeRange} 
        setTimeRange={(range) => setTimeRange(range)} 
      />
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
