'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

type TimePeriod = '1H' | '1D' | '1W' | '1M' | '1Y' | 'ALL';

interface PerformanceChartProps {
  timePeriod: TimePeriod;
}

const chartData: Record<TimePeriod, { time: string; value: number }[]> = {
  '1H': [
    { time: '0:00', value: 5000 },
    { time: '0:15', value: 5050 },
    { time: '0:30', value: 5025 },
    { time: '0:45', value: 5075 },
    { time: '1:00', value: 5100 },
  ],
  '1D': [
    { time: '9AM', value: 5000 },
    { time: '12PM', value: 5200 },
    { time: '3PM', value: 5100 },
    { time: '6PM', value: 5300 },
    { time: '9PM', value: 5250 },
  ],
  '1W': [
    { time: 'Mon', value: 5000 },
    { time: 'Wed', value: 5200 },
    { time: 'Fri', value: 5400 },
    { time: 'Sun', value: 5300 },
  ],
  '1M': [
    { time: 'Week 1', value: 5000 },
    { time: 'Week 2', value: 5200 },
    { time: 'Week 3', value: 5100 },
    { time: 'Week 4', value: 5500 },
  ],
  '1Y': [
    { time: 'Jan', value: 5000 },
    { time: 'Apr', value: 5300 },
    { time: 'Jul', value: 5600 },
    { time: 'Oct', value: 5900 },
  ],
  'ALL': [
    { time: '2020', value: 4000 },
    { time: '2021', value: 4800 },
    { time: '2022', value: 5200 },
    { time: '2023', value: 5900 },
  ],
};

export const PerformanceChart: React.FC<PerformanceChartProps> = ({
  timePeriod,
}) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart' as const,
    },
  };

  const data = {
    labels: chartData[timePeriod].map((item) => item.time),
    datasets: [
      {
        data: chartData[timePeriod].map((item) => item.value),
        fill: true,
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        borderColor: 'rgb(16, 185, 129)',
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(16, 185, 129)',
      },
    ],
  };

  return (
    <div className="h-64 mb-4">
      <Line data={data} options={chartOptions} />
    </div>
  );
};
