'use client';

import React from 'react';
import { ROLES } from '../constants/roles';
import { useRole } from '../hooks/useRole';
import type { Role } from '../types';

export function RoleSelection() {
  const { role, updateRole } = useRole();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Select Your Role
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ROLES.map((roleData) => (
          <button
            key={roleData.id}
            onClick={() => updateRole(roleData.id)}
            className={`p-6 rounded-lg border-2 text-left transition-all ${
              role === roleData.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {roleData.title}
            </h3>
            <p className="text-gray-600">{roleData.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
} 