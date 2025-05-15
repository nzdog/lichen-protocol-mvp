'use client';

import React from 'react';
import type { Protocol } from '../types';
import Link from 'next/link';

interface RecommendationsProps {
  protocols: (Protocol & { whyChosen: string })[];
}

export function Recommendations({ protocols }: RecommendationsProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">
        Recommended Protocols
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {protocols.map((protocol) => (
          <div
            key={protocol.id}
            className="bg-white rounded-xl ring-1 ring-gray-200 shadow-sm p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {protocol.title}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">
              {protocol.purpose}
            </p>
            {protocol.whyChosen && (
              <p className="text-sm text-gray-500 mb-4 italic">
                {protocol.whyChosen}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {protocol.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/protocols/${protocol.id}`}
              className="block w-full px-4 py-2 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors"
            >
              Begin Protocol
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 