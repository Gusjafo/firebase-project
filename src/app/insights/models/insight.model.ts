export interface Insight {
    id: string;
    category: 'ancestry' | 'health' | 'traits' | 'nutrition';
    title: string;
    description: string;
    value: string | number;
    type: 'text' | 'chart' | 'stat';
  }
  