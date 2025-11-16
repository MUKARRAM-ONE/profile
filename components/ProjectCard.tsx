import Link from 'next/link';
import type { Project } from '../data/projects';


export default function ProjectCard({ p }: { p: Project }) {
	return (
		<article className="p-4 border rounded flex flex-col h-full dark:border-gray-700">
			<h3 className="font-semibold mb-2 break-words">{p.title}</h3>
			<p className="text-sm text-gray-700 dark:text-gray-300 break-words">{p.short}</p>

			<div className="mt-3 flex gap-2 flex-wrap">
				{p.tags.map(t => (
					<span key={t} className="text-xs border px-2 py-1 rounded break-words dark:border-gray-600 dark:text-gray-300">{t}</span>
				))}
			</div>

			<div className="mt-auto pt-4">
				<Link href={`/portfolio/${p.slug}`} className="inline-block text-sm underline">View</Link>
			</div>
		</article>
	);
}