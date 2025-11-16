import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';


export default function Portfolio() {
return (
<section className="py-12">
<div className="container">
<h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{projects.map(p => <ProjectCard key={p.slug} p={p} />)}
</div>
</div>
</section>
);
}