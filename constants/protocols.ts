import type { Protocol } from '../types';

export const PROTOCOLS: Protocol[] = [
  {
    id: 'vision-alignment',
    title: 'Vision Alignment Protocol',
    purpose: 'Align your team around a clear and compelling vision',
    tags: ['Vision', 'Leadership', 'Alignment'],
    outcomes: {
      poor: 'Team members have different interpretations of the vision and work towards conflicting goals',
      expected: 'Team members understand and can articulate the vision consistently',
      excellent: 'Team members are actively championing the vision and using it to drive decisions'
    },
    threads: [
      {
        title: 'Vision Definition',
        purpose: 'Create a clear and compelling vision statement',
        outcomes: {
          poor: 'Vision statement is vague or uninspiring',
          expected: 'Vision statement is clear and actionable',
          excellent: 'Vision statement is inspiring and memorable'
        }
      },
      {
        title: 'Vision Communication',
        purpose: 'Effectively communicate the vision across the organization',
        outcomes: {
          poor: 'Vision is rarely discussed or referenced',
          expected: 'Vision is regularly communicated and understood',
          excellent: 'Vision is embedded in daily conversations and decision-making'
        }
      }
    ]
  },
  {
    id: 'tech-roadmap',
    title: 'Technical Roadmap Protocol',
    purpose: 'Create a clear technical strategy and execution plan',
    tags: ['Technical', 'Strategy', 'Planning'],
    outcomes: {
      poor: 'Technical decisions are made ad-hoc without clear direction',
      expected: 'Technical roadmap guides major technical decisions',
      excellent: 'Technical roadmap drives innovation and competitive advantage'
    },
    threads: [
      {
        title: 'Technical Vision',
        purpose: 'Define the technical vision and architecture principles',
        outcomes: {
          poor: 'Technical vision is unclear or missing',
          expected: 'Technical vision is documented and understood',
          excellent: 'Technical vision inspires and guides all technical decisions'
        }
      },
      {
        title: 'Implementation Planning',
        purpose: 'Create detailed implementation plans and milestones',
        outcomes: {
          poor: 'Implementation plans are vague or unrealistic',
          expected: 'Implementation plans are clear and achievable',
          excellent: 'Implementation plans are optimized and well-coordinated'
        }
      }
    ]
  },
  {
    id: 'team-rhythm',
    title: 'Team Rhythm Protocol',
    purpose: 'Establish effective team workflows and communication patterns',
    tags: ['Workflow', 'Communication', 'Productivity'],
    outcomes: {
      poor: 'Team workflows are chaotic and inefficient',
      expected: 'Team workflows are consistent and productive',
      excellent: 'Team workflows enable high performance and innovation'
    },
    threads: [
      {
        title: 'Meeting Cadence',
        purpose: 'Establish effective meeting rhythms and formats',
        outcomes: {
          poor: 'Meetings are unproductive and poorly organized',
          expected: 'Meetings are well-structured and purposeful',
          excellent: 'Meetings drive alignment and accelerate progress'
        }
      },
      {
        title: 'Communication Channels',
        purpose: 'Define clear communication channels and norms',
        outcomes: {
          poor: 'Communication is scattered and inconsistent',
          expected: 'Communication channels are clear and respected',
          excellent: 'Communication enables rapid learning and adaptation'
        }
      }
    ]
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development Protocol',
    purpose: 'Develop key leadership skills and capabilities',
    tags: ['Leadership', 'Development', 'Skills'],
    outcomes: {
      poor: 'Leadership capabilities are underdeveloped',
      expected: 'Leadership capabilities meet team needs',
      excellent: 'Leadership capabilities drive organizational success'
    },
    threads: [
      {
        title: 'Skill Assessment',
        purpose: 'Assess current leadership skills and gaps',
        outcomes: {
          poor: 'Leadership skills are not well understood',
          expected: 'Leadership skills are clearly mapped',
          excellent: 'Leadership skills are continuously evaluated and improved'
        }
      },
      {
        title: 'Development Planning',
        purpose: 'Create targeted leadership development plans',
        outcomes: {
          poor: 'Development plans are generic or missing',
          expected: 'Development plans are personalized and actionable',
          excellent: 'Development plans accelerate leadership growth'
        }
      }
    ]
  }
]; 