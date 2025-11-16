import { projects } from '../../../data/projects';


export default function ProjectPage({ params }: { params: { slug: string } }) {
const p = projects.find(x => x.slug === params.slug);
if (!p) return <div className="container py-12">Project not found</div>;
return (
<section className="py-12 container">
<h1 className="text-3xl font-bold">{p.title}</h1>
<div className="text-sm text-gray-600 dark:text-gray-400">{p.date}</div>
<p className="mt-4 text-gray-700 dark:text-gray-300">{p.long}</p>
{p.link && <a href={p.link} className="mt-4 inline-block text-blue-600 dark:text-blue-400 underline">Live link</a>}
</section>
);
}