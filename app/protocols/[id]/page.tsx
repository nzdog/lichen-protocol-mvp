'use client';

import React from 'react';
import { ProtocolView } from '../../../components/ProtocolView';
import { holdingLongArcProtocol } from '../../../data/protocols/holding-long-arc';
import { useRole } from '../../../hooks/useRole';

export default function ProtocolPage({ params }: { params: { id: string } }) {
  const { role } = useRole();

  if (!role) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-medium text-gray-900 mb-4">Please select your role first</h1>
        <p className="text-gray-600">You need to select your role before viewing protocols.</p>
      </div>
    );
  }

  return <ProtocolView protocol={holdingLongArcProtocol} />;
} 