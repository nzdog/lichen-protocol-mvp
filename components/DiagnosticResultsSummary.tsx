'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ROLES } from '../constants/roles';
import type { DiagnosticScores } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 5,
      ticks: {
        stepSize: 1,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

interface DiagnosticResultsSummaryProps {
  scores: DiagnosticScores;
}

export function DiagnosticResultsSummary({ scores }: DiagnosticResultsSummaryProps) {
  const dimensions = ['clarity', 'alignment', 'rhythm', 'leadership'];
  const dimensionScores = dimensions.map(dim => scores[dim as keyof DiagnosticScores] as number);
  
  const chartData = {
    labels: dimensions.map(d => d.charAt(0).toUpperCase() + d.slice(1)),
    datasets: [
      {
        data: dimensionScores,
        backgroundColor: 'rgb(17, 24, 39)',
        borderRadius: 4,
      },
    ],
  };

  const strengths = dimensions.filter(
    dim => (scores[dim as keyof DiagnosticScores] as number) > 4
  );

  const improvements = dimensions.filter(
    dim => (scores[dim as keyof DiagnosticScores] as number) < 3.5
  );

  const roleData = ROLES.find(r => r.id === scores.role);
  const formattedDate = new Date(scores.timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-white rounded-xl ring-1 ring-gray-200 shadow-sm p-6">
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-500 mb-1">
          {roleData?.title}
        </div>
        <div className="text-xs text-gray-400">
          {formattedDate}
        </div>
      </div>
      
      <div className="h-64 mb-8">
        <Bar options={chartOptions} data={chartData} />
      </div>

      <div className="space-y-6">
        {strengths.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Areas of Strength</h3>
            <div className="flex flex-wrap gap-2">
              {strengths.map(dimension => (
                <span
                  key={dimension}
                  className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                >
                  {dimension.charAt(0).toUpperCase() + dimension.slice(1)}
                </span>
              ))}
            </div>
          </div>
        )}

        {improvements.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Areas for Improvement</h3>
            <div className="flex flex-wrap gap-2">
              {improvements.map(dimension => (
                <span
                  key={dimension}
                  className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-sm"
                >
                  {dimension.charAt(0).toUpperCase() + dimension.slice(1)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 