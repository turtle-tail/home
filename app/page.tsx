import { Header } from '@/components/header';
import { ProjectGrid } from '@/components/project-grid';
import { projects } from '@/content/projects';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
