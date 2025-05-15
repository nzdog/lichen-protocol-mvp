import type { Question, Role, DiagnosticScores } from '../types';

export function calculateScores(
  responses: { questionId: string; score: number }[],
  questions: Question[],
  role: Role
): DiagnosticScores {
  const dimensions = ['clarity', 'alignment', 'rhythm', 'leadership'] as const;
  
  // Initialize scores for each dimension
  const dimensionScores = dimensions.reduce((acc, dimension) => {
    const dimensionQuestions = questions.filter(q => q.dimension === dimension);
    const dimensionResponses = responses.filter(r => 
      dimensionQuestions.some(q => q.id === r.questionId)
    );
    
    // Calculate average score for the dimension
    const score = dimensionResponses.length > 0
      ? dimensionResponses.reduce((sum, r) => sum + r.score, 0) / dimensionResponses.length
      : 0;
    
    return { ...acc, [dimension]: score };
  }, {} as Record<typeof dimensions[number], number>);

  const scores: DiagnosticScores = {
    ...dimensionScores,
    role,
    timestamp: new Date().toISOString()
  };

  return scores;
}

export function storeDiagnosticScores(scores: DiagnosticScores): void {
  const key = `diagnostic-scores-${scores.role}`;
  const existingScoresStr = localStorage.getItem(key);
  const existingScores = existingScoresStr ? JSON.parse(existingScoresStr) : [];
  
  // Add new scores to history
  const updatedScores = [...existingScores, scores];
  
  // Store in localStorage
  localStorage.setItem(key, JSON.stringify(updatedScores));
}

export function getLastDiagnosticScores(): DiagnosticScores | null {
  const stored = localStorage.getItem('lastDiagnostic');
  return stored ? JSON.parse(stored) : null;
} 