import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
    >
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="text-xs font-medium text-blue-600">
            ⭐ Featured
          </div>
        )}
      </div>
    </a>
  );
}
