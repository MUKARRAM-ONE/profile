import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Portfolio | Mukarram Razzaq',
  description: 'Selected works spanning cloud architecture, AI integration, and full-stack development.',
};

export default function Portfolio() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 reveal reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Briefcase size={14} />
            <span>My Projects</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Selected <span className="text-blue-600">Works</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A collection of projects spanning cloud architecture, AI integration, and full-stack development. Each represents a unique challenge and a solution built with modern best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}