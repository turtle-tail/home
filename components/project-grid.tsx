import { Project } from '@/lib/types';
import { ProjectCard } from './project-card';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  // Sort by order
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  // Filter active projects only
  const activeProjects = sortedProjects.filter(
    (p) => !p.status || p.status === 'active'
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {activeProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
