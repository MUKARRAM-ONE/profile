import Link from 'next/link';
import type { Project } from '../data/projects';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectCard({ p }: { p: Project }) {
	return (
		<article className="reveal reveal-up group p-6 rounded-[2rem] flex flex-col h-full transition-all duration-500 card-hover bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl">
			<div className="mb-6 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-video flex items-center justify-center relative">
				{/* Placeholder for project image if added later, otherwise shows a themed background */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-500" />
				<span className="text-4xl font-black text-slate-200 dark:text-slate-700 select-none uppercase tracking-tighter">
					{p.title.split(' ').map(w => w[0]).join('')}
				</span>
			</div>

			<h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{p.title}</h3>
			<p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">{p.short}</p>

			<div className="mt-auto flex gap-2 flex-wrap mb-6">
				{p.tags.map(t => (
					<span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 group-hover:border-blue-500/20 group-hover:text-blue-500 transition-colors">
						{t}
					</span>
				))}
			</div>

			<div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-50 dark:border-slate-800">
				<Link href={`/portfolio/${p.slug}`} className="text-sm font-bold flex items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
					Case Study
					<ArrowRight size={14} />
				</Link>
				{p.link && p.link !== '#' && (
					<a 
						href={p.link} 
						target="_blank" 
						rel="noopener noreferrer" 
						className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
					>
						Live Demo
						<ExternalLink size={14} />
					</a>
				)}
			</div>
		</article>
	);
}