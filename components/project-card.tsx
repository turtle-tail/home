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
      className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors">
          <span className="text-2xl">{project.icon}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 py-0.5 text-xs font-medium text-amber-700 bg-amber-100 rounded-full">
                Featured
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs text-gray-500 bg-gray-50 rounded-md border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
