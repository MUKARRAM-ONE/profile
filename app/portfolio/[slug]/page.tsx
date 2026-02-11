import { projects } from '../../../data/projects';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const p = projects.find(x => x.slug === slug);
	
	if (!p) return (
		<div className="container py-32 text-center">
			<h1 className="text-2xl font-bold mb-4">Project not found</h1>
			<Link href="/portfolio" className="text-blue-500 hover:underline">Return to Portfolio</Link>
		</div>
	);

	return (
		<section className="py-20 md:py-32">
			<div className="container max-w-4xl">
				<Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-12 transition-colors group">
					<ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
					Back to Portfolio
				</Link>
				
				<div className="reveal reveal-up">
					<div className="flex flex-wrap gap-2 mb-8">
						{p.tags.map(t => (
							<span key={t} className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
								{t}
							</span>
						))}
					</div>

					<h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{p.title}</h1>
					<div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">
						<Calendar size={16} />
						{p.date}
					</div>
					
					<div className="p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-colors">
						<p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-wrap font-medium">{p.long}</p>
						
						{p.link && p.link !== '#' && (
							<div className="mt-12 pt-12 border-t border-slate-50 dark:border-slate-800">
								<a 
									href={p.link} 
									target="_blank" 
									rel="noopener noreferrer" 
									className="btn-primary inline-flex items-center gap-3"
								>
									Visit Live Project
									<ExternalLink size={20} />
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}