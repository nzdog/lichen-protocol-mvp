'use client';

import React, { useState } from 'react';
import type { Question, Role, DiagnosticScores } from '../types';
import questionsByRole from '../app/data/staticQuestionsByRole';
import { calculateScores, storeDiagnosticScores } from '../utils/scoringLogic';
import { recommendProtocols, generateWhyChosen } from '../utils/recommendProtocols';

interface DiagnosticFormProps {
  role: Role;
  onComplete: (recommendations: any) => void;
}

interface Response {
  questionId: string;
  score: number;
}

export function DiagnosticForm({ role, onComplete }: DiagnosticFormProps) {
  const questions = questionsByRole[role] || [];
  const [responses, setResponses] = useState<Response[]>([]);

  // Early return if no questions are found for the role
  if (!questions.length) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-600">No questions available for this role.</p>
      </div>
    );
  }

  const handleScoreChange = (questionId: string, score: number) => {
    setResponses((prev) => {
      const existing = prev.find((r) => r.questionId === questionId);
      if (existing) {
        return prev.map((r) => (r.questionId === questionId ? { ...r, score } : r));
      }
      return [...prev, { questionId, score }];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const scores = calculateScores(responses, questions, role);
    storeDiagnosticScores(scores);
    const recommendations = recommendProtocols(scores).map((protocol) => ({
      ...protocol,
      whyChosen: generateWhyChosen(protocol, scores),
    }));
    onComplete(recommendations);
  };

  const getDimensionLabel = (dimension: string) => {
    return dimension.charAt(0).toUpperCase() + dimension.slice(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Group questions by dimension */}
      {['clarity', 'alignment', 'rhythm', 'leadership'].map((dimension) => {
        const dimensionQuestions = questions.filter((q) => q.dimension === dimension);
        
        if (dimensionQuestions.length === 0) return null;

        return (
          <div key={dimension} className="bg-white rounded-xl ring-1 ring-gray-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {getDimensionLabel(dimension)}
            </h3>
            <div className="space-y-6">
              {dimensionQuestions.map((question) => {
                const response = responses.find((r) => r.questionId === question.id);
                return (
                  <div key={question.id} className="space-y-2">
                    <label
                      htmlFor={question.id}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {question.text}
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        id={question.id}
                        min="1"
                        max="5"
                        step="1"
                        value={response?.score || 3}
                        onChange={(e) =>
                          handleScoreChange(question.id, parseInt(e.target.value, 10))
                        }
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm text-gray-500 w-8 text-center">
                        {response?.score || 3}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          disabled={responses.length < questions.length}
        >
          Complete Diagnostic
        </button>
      </div>
    </form>
  );
} 