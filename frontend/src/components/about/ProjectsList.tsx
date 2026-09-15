import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types';
import { Card } from '../ui/Card';

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card key={project.title} className="h-full flex flex-col">
          <h3 className="text-lg font-semibold text-text">{project.title}</h3>
          <p className="mt-2 text-sm text-muted flex-1">
            {project.description}
          </p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              Перейти
              <ExternalLink size={14} />
            </a>
          )}
        </Card>
      ))}
    </div>
  );
}