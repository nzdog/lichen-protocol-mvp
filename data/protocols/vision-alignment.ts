import { Protocol } from '../../types';

export const visionAlignmentProtocol: Protocol = {
  id: 'vision-alignment',
  title: 'Vision Alignment Protocol',
  purpose: 'To align your team around a clear and compelling vision that guides both strategic decisions and daily actions.',
  outcomes: {
    poor: 'Team members have different interpretations of the vision, leading to misaligned efforts and scattered focus.',
    expected: 'The vision is clearly understood and consistently referenced in decision-making across the team.',
    excellent: 'The vision becomes a living force that naturally guides behavior and creates strong alignment in all activities.',
  },
  threads: [
    {
      title: 'Vision Clarity',
      purpose: 'To articulate the vision in clear, compelling, and actionable terms.',
      outcomes: {
        poor: 'Vision statement is vague, complex, or disconnected from daily work.',
        expected: 'Vision is clear, memorable, and provides practical guidance.',
        excellent: 'Vision resonates deeply and naturally influences decisions at all levels.',
      },
    },
    {
      title: 'Team Alignment',
      purpose: 'To ensure all team members understand and connect with the vision.',
      outcomes: {
        poor: 'Team members work from different understandings of the vision.',
        expected: 'Regular vision discussions keep everyone aligned and engaged.',
        excellent: 'Team naturally references and reinforces the vision in their work.',
      },
    },
    {
      title: 'Vision Integration',
      purpose: 'To embed the vision into daily operations and decision-making.',
      outcomes: {
        poor: 'Vision remains abstract and separate from daily work.',
        expected: 'Vision actively guides key decisions and priorities.',
        excellent: 'Vision seamlessly integrates into all aspects of operations.',
      },
    },
  ],
  tags: ['vision', 'alignment', 'leadership', 'strategy', 'team'],
}; 