'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RoleSelection } from '../components/RoleSelection';
import { useRole } from '../hooks/useRole';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const { role } = useRole();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything until we're on the client
  if (!isClient) {
    return null;
  }

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
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome Back
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to continue your journey?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/diagnostic"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Start Diagnostic
              </Link>
              <Link
                href="/protocols"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                View All Protocols <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 