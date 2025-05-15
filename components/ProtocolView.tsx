'use client';

import React from 'react';
import type { Protocol } from '../types';

interface OutcomeDisplayProps {
  title: string;
  content: string;
  type: 'poor' | 'expected' | 'excellent';
}

function OutcomeDisplay({ title, content }: OutcomeDisplayProps) {
  return (
    <div className="bg-white rounded-lg p-4 ring-1 ring-gray-200">
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

function ThreadContainer({ thread }: { thread: Protocol['threads'][0] }) {
  return (
    <div className="bg-white rounded-xl ring-1 ring-gray-200 shadow-sm p-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {thread.title}
      </h3>
      <p className="text-gray-600 mb-8">
        {thread.purpose}
      </p>
      
      <div className="space-y-4">
        <OutcomeDisplay type="poor" title="Poor outcome" content={thread.outcomes.poor} />
        <OutcomeDisplay type="expected" title="Expected outcome" content={thread.outcomes.expected} />
        <OutcomeDisplay type="excellent" title="Excellent outcome" content={thread.outcomes.excellent} />
      </div>
    </div>
  );
}

export function ProtocolView({ protocol }: { protocol: Protocol }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="bg-white rounded-xl ring-1 ring-gray-200 shadow-sm p-8 mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            {protocol.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {protocol.purpose}
          </p>
        </div>

        {/* Overall Outcomes */}
        <div className="bg-white rounded-xl ring-1 ring-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Overall Outcomes</h2>
          <div className="space-y-4">
            <OutcomeDisplay type="poor" title="Poor outcome" content={protocol.outcomes.poor} />
            <OutcomeDisplay type="expected" title="Expected outcome" content={protocol.outcomes.expected} />
            <OutcomeDisplay type="excellent" title="Excellent outcome" content={protocol.outcomes.excellent} />
          </div>
        </div>

        {/* Threads Section Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6 px-2">Threads</h2>

        {/* Individual Thread Containers */}
        <div className="grid gap-8">
          {protocol.threads.map((thread, index) => (
            <ThreadContainer key={index} thread={thread} />
          ))}
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {protocol.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-white ring-1 ring-gray-200 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
} 