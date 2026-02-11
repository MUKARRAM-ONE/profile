import { posts } from '../../../data/posts';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = posts.find(p => p.slug === slug);
	
	if (!post) return (
		<div className="container py-32 text-center">
			<h1 className="text-2xl font-bold mb-4">Post not found</h1>
			<Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
		</div>
	);

	return (
		<article className="py-20 md:py-32">
			<div className="container max-w-3xl reveal reveal-up">
				<Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-12 transition-colors group">
					<ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
					Back to Blog
				</Link>
				
				<header className="mb-12">
					<h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">{post.title}</h1>
					<div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
						<div className="flex items-center gap-2">
							<Calendar size={16} />
							{post.date}
						</div>
						{post.tags && post.tags.length > 0 && (
							<div className="flex gap-2">
								{post.tags.map(tag => (
									<span key={tag} className="text-blue-600 dark:text-blue-400">#{tag}</span>
								))}
							</div>
						)}
					</div>
				</header>
				
				<div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-blue-600 font-medium" 
					dangerouslySetInnerHTML={{ __html: post.content }} 
				/>
			</div>
		</article>
	);
}