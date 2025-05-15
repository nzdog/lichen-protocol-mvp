import type { DiagnosticScores, Protocol } from '../types';
import { PROTOCOLS } from '../constants/protocols';

// Threshold for considering a dimension as needing improvement
const IMPROVEMENT_THRESHOLD = 3;

export function recommendProtocols(scores: DiagnosticScores): Protocol[] {
  const weakDimensions = Object.entries(scores)
    .filter(([key, score]) => 
      ['clarity', 'alignment', 'rhythm', 'leadership'].includes(key) && 
      score < IMPROVEMENT_THRESHOLD
    )
    .map(([dimension]) => dimension);

  // Find protocols that address the weak dimensions
  const recommendedProtocols = PROTOCOLS.filter(protocol => {
    const protocolTags = protocol.tags.map(tag => tag.toLowerCase());
    return weakDimensions.some(dimension => 
      protocolTags.includes(dimension.toLowerCase())
    );
  });

  // Sort protocols by relevance (number of matching dimensions)
  return recommendedProtocols.sort((a, b) => {
    const aMatches = countMatchingDimensions(a, weakDimensions);
    const bMatches = countMatchingDimensions(b, weakDimensions);
    return bMatches - aMatches;
  });
}

function countMatchingDimensions(protocol: Protocol, dimensions: string[]): number {
  const protocolTags = protocol.tags.map(tag => tag.toLowerCase());
  return dimensions.filter(dimension => 
    protocolTags.includes(dimension.toLowerCase())
  ).length;
}

export function generateWhyChosen(protocol: Protocol, scores: DiagnosticScores): string {
  const relevantDimensions = Object.entries(scores)
    .filter(([key, score]) => 
      ['clarity', 'alignment', 'rhythm', 'leadership'].includes(key) && 
      score < IMPROVEMENT_THRESHOLD &&
      protocol.tags.map(t => t.toLowerCase()).includes(key.toLowerCase())
    )
    .map(([dimension, score]) => ({
      dimension,
      score: Math.round(score * 10) / 10
    }));

  if (relevantDimensions.length === 0) {
    return `This protocol aligns with your overall development needs.`;
  }

  const dimensionsList = relevantDimensions
    .map(d => `${d.dimension} (score: ${d.score})`)
    .join(', ');

  return `This protocol was chosen to address your scores in: ${dimensionsList}.`;
} 