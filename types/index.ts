export type Role = 'CEO' | 'CTO' | 'CO_FOUNDER' | 'TEAM_MEMBER';

export interface Question {
  id: string;
  text: string;
  dimension: 'clarity' | 'alignment' | 'rhythm' | 'leadership';
}

export interface DiagnosticScores {
  clarity: number;
  alignment: number;
  rhythm: number;
  leadership: number;
  role: Role;
  timestamp: string;
}

export interface Outcomes {
  poor: string;
  expected: string;
  excellent: string;
}

export interface ProtocolThread {
  title: string;
  purpose: string;
  outcomes: Outcomes;
}

export interface Protocol {
  id: string;
  title: string;
  purpose: string;
  tags: string[];
  whyChosen?: string;
  outcomes: Outcomes;
  threads: ProtocolThread[];
}

export interface RoleData {
  id: Role;
  title: string;
  description: string;
} 