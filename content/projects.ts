import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'example-project',
    title: '예시 프로젝트',
    description: 'Next.js 기반 웹 애플리케이션',
    url: 'https://example.turtle-tail.com',
    icon: '/icons/example.svg',
    tags: ['Web', 'TypeScript'],
    order: 1,
    featured: true,
    status: 'active',
  },
];
