export type Role = 'CEO' | 'CTO' | 'Co-Founder' | 'Team Member';

export interface RoleData {
  id: Role;
  title: string;
  description: string;
}

export interface DiagnosticScore {
  clarity: number;
  alignment: number;
  rhythm: number;
  leadership: number;
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
  outcomes: Outcomes;
  threads: ProtocolThread[];
  tags: string[];
} 