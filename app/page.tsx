import { projects } from '@/content/projects';
import { ProjectGrid } from '@/components/project-grid';
import { Header } from '@/components/header';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Header />
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
