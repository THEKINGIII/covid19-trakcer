import { CasesMap } from './types';

export const casesTypeColors: CasesMap = {
  Confirmed: {
    hex: '#6510cc',
    multiplier: 100,
  },
  Active: {
    hex: '#d7b81d',
    multiplier: 200,
  },
  Recovered: {
    hex: '#7dd71d',
    multiplier: 600,
  },
  Deaths: {
    hex: '#fb4443',
    multiplier: 800,
  },
};
