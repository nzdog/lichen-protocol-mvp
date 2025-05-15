'use client';

import { useState, useEffect } from 'react';
import type { Role } from '../types';

const ROLE_STORAGE_KEY = 'lichen-user-role';

export function useRole() {
  const [role, setRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load role from localStorage on mount
    const savedRole = localStorage.getItem(ROLE_STORAGE_KEY);
    if (savedRole) {
      setRole(savedRole as Role);
    }
    setIsLoading(false);
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
    isLoading,
    updateRole,
    clearRole,
  };
} 