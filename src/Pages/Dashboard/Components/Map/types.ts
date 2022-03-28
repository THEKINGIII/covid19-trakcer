export type CaseType = 'Confirmed' | 'Active' | 'Recovered' | 'Deaths';
export type CaseTypeLoweredCase = Lowercase<CaseType>;
export type CasesMap = Record<CaseType, { hex: string; multiplier: number }>;
