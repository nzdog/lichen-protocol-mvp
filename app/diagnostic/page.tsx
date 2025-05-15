'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRole } from '../../hooks/useRole';
import { DiagnosticForm } from '../../components/DiagnosticForm';
import { Recommendations } from '../../components/Recommendations';
import { DiagnosticResultsSummary } from '../../components/DiagnosticResultsSummary';
import { ROLES } from '../../constants/roles';
import type { Protocol, DiagnosticScores } from '../../types';

export default function DiagnosticPage() {
  const router = useRouter();
  const { role } = useRole();
  const [mounted, setMounted] = useState(false);
  const [diagnosticState, setDiagnosticState] = useState<{
    recommendations: (Protocol & { whyChosen: string })[];
    scores: DiagnosticScores | null;
  }>({
    recommendations: [],
    scores: null
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Wait for component to mount
  if (!mounted) {
    return null;
  }

  // Redirect to home if no role is selected
  if (!role) {
    if (typeof window !== 'undefined') {
      router.replace('/');
    }
    return null;
  }

  const roleData = ROLES.find(r => r.id === role);

  const handleDiagnosticComplete = (
    protocols: (Protocol & { whyChosen: string })[],
    scores: DiagnosticScores
  ) => {
    console.log('Handling diagnostic completion');
    console.log('Protocols:', protocols);
    console.log('Scores:', scores);
    
    setDiagnosticState({
      recommendations: protocols,
      scores: scores
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {diagnosticState.recommendations.length === 0 ? (
          <>
            <div className="mb-12">
              <div className="text-sm font-medium text-gray-500 mb-2">
                {roleData?.title}
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Diagnostic Assessment
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Help us understand your current situation by answering a few questions
                </p>
              </div>
            </div>
            <DiagnosticForm
              role={role}
              onComplete={handleDiagnosticComplete}
            />
          </>
        ) : (
          <div className="space-y-12">
            {diagnosticState.scores && (
              <DiagnosticResultsSummary scores={diagnosticState.scores} />
            )}
            <Recommendations protocols={diagnosticState.recommendations} />
          </div>
        )}
      </div>
    </main>
  );
} 