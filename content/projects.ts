import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'labs',
    title: 'Labs',
    description: '재미있는 심리테스트를 풀고 친구들과 공유해보세요',
    url: 'https://labs.turtle-tail.com',
    icon: '🧪',
    tags: ['심리테스트', 'Web'],
    order: 1,
    featured: true,
    status: 'active',
  },
  {
    id: 'pixel-diff',
    title: 'PixelDiff',
    description: '두 이미지의 차이점을 찾아주는 이미지 비교 도구',
    url: 'https://pixeldiff.turtle-tail.com',
    icon: '🔍',
    tags: ['이미지', '도구', 'Web'],
    order: 2,
    featured: true,
    status: 'active',
  },
];
