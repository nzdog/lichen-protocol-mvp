import type { DiagnosticScores, Protocol } from '../types';
import { PROTOCOLS } from '../constants/protocols';

// Threshold for considering a dimension as needing improvement
const IMPROVEMENT_THRESHOLD = 3.5;
const STRENGTH_THRESHOLD = 4;

export function recommendProtocols(scores: DiagnosticScores): Protocol[] {
  // Get all dimensions with their scores
  const dimensionScores = Object.entries(scores)
    .filter(([key]) => ['clarity', 'alignment', 'rhythm', 'leadership'].includes(key))
    .map(([dimension, score]) => ({
      dimension,
      score: score as number,
      needsImprovement: (score as number) <= IMPROVEMENT_THRESHOLD
    }));

  // Sort dimensions by score (ascending) to prioritize lower scores
  dimensionScores.sort((a, b) => a.score - b.score);

  // Find protocols that address any of our dimensions, prioritizing those that need improvement
  const recommendedProtocols = PROTOCOLS.filter(protocol => {
    const protocolTags = protocol.tags.map(tag => tag.toLowerCase());
    return dimensionScores.some(({ dimension }) => 
      protocolTags.includes(dimension.toLowerCase())
    );
  });

  // Sort protocols by relevance
  return recommendedProtocols.sort((a, b) => {
    const aScore = calculateProtocolRelevance(a, dimensionScores);
    const bScore = calculateProtocolRelevance(b, dimensionScores);
    return bScore - aScore;
  });
}

function calculateProtocolRelevance(protocol: Protocol, dimensionScores: Array<{dimension: string; score: number; needsImprovement: boolean}>): number {
  const protocolTags = protocol.tags.map(tag => tag.toLowerCase());
  
  return dimensionScores.reduce((score, { dimension, needsImprovement }) => {
    if (protocolTags.includes(dimension.toLowerCase())) {
      // Give higher weight to dimensions that need improvement
      return score + (needsImprovement ? 2 : 1);
    }
    return score;
  }, 0);
}

export function generateWhyChosen(protocol: Protocol, scores: DiagnosticScores): string {
  const relevantDimensions = Object.entries(scores)
    .filter(([key, score]) => 
      ['clarity', 'alignment', 'rhythm', 'leadership'].includes(key) && 
      protocol.tags.map(t => t.toLowerCase()).includes(key.toLowerCase())
    )
    .map(([dimension, score]) => ({
      dimension,
      score: Math.round(score * 10) / 10,
      needsImprovement: (score as number) <= IMPROVEMENT_THRESHOLD
    }))
    .sort((a, b) => a.score - b.score);

  if (relevantDimensions.length === 0) {
    return `This protocol aligns with your overall development needs.`;
  }

  const dimensionsList = relevantDimensions
    .map(d => `${d.dimension} (${d.needsImprovement ? 'needs improvement' : 'maintaining'}, score: ${d.score})`)
    .join(', ');

  return `This protocol was chosen to address: ${dimensionsList}.`;
} 