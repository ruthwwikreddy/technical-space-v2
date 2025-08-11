export const caseStudies: Array<{
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: 'Ongoing' | 'Handovered';
  overview: string;
  challenge: string[];
  solution: string[];
  results: string[];
  impact: string;
  links: Record<string, string | undefined>;
}> = [];
