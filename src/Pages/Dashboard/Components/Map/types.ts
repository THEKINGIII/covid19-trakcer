export type CaseType = 'Confirmed' | 'Active' | 'Recovered' | 'Deaths';
export type CasesMap = Record<CaseType, { hex: string; multiplier: number }>;
