import { posts } from '../../data/posts';
import PostCard from '../../components/PostCard';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog | Mukarram Razzaq',
  description: 'Exploring the intersection of AI, cloud architecture, and modern software engineering.',
};

export default function Blog() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 reveal reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen size={14} />
            <span>My Thoughts</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Latest <span className="text-blue-600">Articles</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Exploring the intersection of AI, cloud architecture, and modern software engineering. Sharing insights and tutorials on the tools I use daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}