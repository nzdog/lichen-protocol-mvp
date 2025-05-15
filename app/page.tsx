'use client';

import React from 'react';
import { RoleSelection } from '../components/RoleSelection';
import { useRole } from '../hooks/useRole';
import { ProtocolView } from '../components/ProtocolView';
import { holdingLongArcProtocol } from '../data/protocols/holding-long-arc';

export default function Home() {
  const { role } = useRole();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {!role ? (
          <>
            <div className="text-center py-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to Lichen Protocol
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Let's start by understanding your role in the organization
              </p>
            </div>
            <RoleSelection />
          </>
        ) : (
          <ProtocolView protocol={holdingLongArcProtocol} />
        )}
      </div>
    </main>
  );
} 