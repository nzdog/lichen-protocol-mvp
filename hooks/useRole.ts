'use client';

import { useState, useEffect } from 'react';
import type { Role } from '../types';

const ROLE_STORAGE_KEY = 'lichen-user-role';

export function useRole() {
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    // Initialize role from localStorage if it exists
    const savedRole = localStorage.getItem(ROLE_STORAGE_KEY) as Role | null;
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const updateRole = (newRole: Role) => {
    setRole(newRole);
    localStorage.setItem(ROLE_STORAGE_KEY, newRole);
  };

  const clearRole = () => {
    setRole(null);
    localStorage.removeItem(ROLE_STORAGE_KEY);
  };

  return {
    role,
    updateRole,
    clearRole,
  };
} 