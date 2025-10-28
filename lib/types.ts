export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  tags: string[];
  order: number;
  featured?: boolean;
  status?: 'active' | 'archived';
}
