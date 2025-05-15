import type { Protocol } from '../types';

export const PROTOCOLS: Protocol[] = [
  {
    id: 'vision-alignment',
    title: 'Vision Alignment Protocol',
    description: 'Align your team around a clear and compelling vision',
    recommendedFor: {
      roles: ['CEO', 'Co-Founder'],
      minScores: {
        clarity: 2,
        alignment: 3,
      },
    },
  },
  {
    id: 'tech-roadmap',
    title: 'Technical Roadmap Protocol',
    description: 'Create a clear technical strategy and execution plan',
    recommendedFor: {
      roles: ['CTO', 'Team Member'],
      minScores: {
        clarity: 3,
        rhythm: 2,
      },
    },
  },
  {
    id: 'team-rhythm',
    title: 'Team Rhythm Protocol',
    description: 'Establish effective team workflows and communication patterns',
    recommendedFor: {
      roles: ['CEO', 'CTO', 'Co-Founder', 'Team Member'],
      minScores: {
        rhythm: 2,
        leadership: 3,
      },
    },
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development Protocol',
    description: 'Develop key leadership skills and capabilities',
    recommendedFor: {
      roles: ['CEO', 'CTO', 'Co-Founder'],
      minScores: {
        leadership: 2,
        clarity: 3,
      },
    },
  },
]; 