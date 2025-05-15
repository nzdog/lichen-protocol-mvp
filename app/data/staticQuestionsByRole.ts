import type { Question, Role } from '../../types';

type QuestionsByRole = {
  [key in Role]: Question[];
};

const questionsByRole: QuestionsByRole = {
  CEO: [
    {
      id: 'ceo-clarity-1',
      text: 'How clear is your company\'s vision to all stakeholders?',
      dimension: 'clarity'
    },
    {
      id: 'ceo-clarity-2',
      text: 'How well defined are your company\'s strategic objectives?',
      dimension: 'clarity'
    },
    {
      id: 'ceo-alignment-1',
      text: 'How aligned are your teams with the company\'s goals?',
      dimension: 'alignment'
    },
    {
      id: 'ceo-alignment-2',
      text: 'How effectively do different departments collaborate?',
      dimension: 'alignment'
    },
    {
      id: 'ceo-rhythm-1',
      text: 'How consistent is your company\'s execution rhythm?',
      dimension: 'rhythm'
    },
    {
      id: 'ceo-rhythm-2',
      text: 'How well do you maintain momentum in key initiatives?',
      dimension: 'rhythm'
    },
    {
      id: 'ceo-leadership-1',
      text: 'How effective is your leadership team?',
      dimension: 'leadership'
    },
    {
      id: 'ceo-leadership-2',
      text: 'How well do you develop future leaders in your organization?',
      dimension: 'leadership'
    }
  ],
  CTO: [
    {
      id: 'cto-clarity-1',
      text: 'How clear is your technical vision and architecture?',
      dimension: 'clarity'
    },
    {
      id: 'cto-clarity-2',
      text: 'How well defined are your technical standards and practices?',
      dimension: 'clarity'
    },
    {
      id: 'cto-alignment-1',
      text: 'How aligned is your technical strategy with business goals?',
      dimension: 'alignment'
    },
    {
      id: 'cto-alignment-2',
      text: 'How well do engineering teams collaborate with other departments?',
      dimension: 'alignment'
    },
    {
      id: 'cto-rhythm-1',
      text: 'How consistent is your development and release cycle?',
      dimension: 'rhythm'
    },
    {
      id: 'cto-rhythm-2',
      text: 'How effectively do you manage technical debt?',
      dimension: 'rhythm'
    },
    {
      id: 'cto-leadership-1',
      text: 'How strong is technical leadership across teams?',
      dimension: 'leadership'
    },
    {
      id: 'cto-leadership-2',
      text: 'How well do you develop technical talent?',
      dimension: 'leadership'
    }
  ],
  CO_FOUNDER: [
    {
      id: 'cofounder-clarity-1',
      text: 'How clear is the division of responsibilities among founders?',
      dimension: 'clarity'
    },
    {
      id: 'cofounder-clarity-2',
      text: 'How well defined is your role in the company\'s future?',
      dimension: 'clarity'
    },
    {
      id: 'cofounder-alignment-1',
      text: 'How aligned are the founders on company direction?',
      dimension: 'alignment'
    },
    {
      id: 'cofounder-alignment-2',
      text: 'How well do you maintain founder relationships?',
      dimension: 'alignment'
    },
    {
      id: 'cofounder-rhythm-1',
      text: 'How consistent is communication among founders?',
      dimension: 'rhythm'
    },
    {
      id: 'cofounder-rhythm-2',
      text: 'How well do you balance operational and strategic work?',
      dimension: 'rhythm'
    },
    {
      id: 'cofounder-leadership-1',
      text: 'How effective is your leadership style?',
      dimension: 'leadership'
    },
    {
      id: 'cofounder-leadership-2',
      text: 'How well do you complement other founders\' strengths?',
      dimension: 'leadership'
    }
  ],
  TEAM_MEMBER: [
    {
      id: 'team-clarity-1',
      text: 'How clear are your role and responsibilities?',
      dimension: 'clarity'
    },
    {
      id: 'team-clarity-2',
      text: 'How well do you understand team objectives?',
      dimension: 'clarity'
    },
    {
      id: 'team-alignment-1',
      text: 'How aligned is your work with team goals?',
      dimension: 'alignment'
    },
    {
      id: 'team-alignment-2',
      text: 'How well do you collaborate with team members?',
      dimension: 'alignment'
    },
    {
      id: 'team-rhythm-1',
      text: 'How consistent is your work output?',
      dimension: 'rhythm'
    },
    {
      id: 'team-rhythm-2',
      text: 'How well do you manage your time and priorities?',
      dimension: 'rhythm'
    },
    {
      id: 'team-leadership-1',
      text: 'How comfortable are you taking initiative?',
      dimension: 'leadership'
    },
    {
      id: 'team-leadership-2',
      text: 'How well do you support team success?',
      dimension: 'leadership'
    }
  ]
};

export default questionsByRole; 