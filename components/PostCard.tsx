import Link from 'next/link';
import type { Post } from '../data/posts';
import { Calendar, ArrowRight } from 'lucide-react';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="reveal reveal-up group p-6 rounded-[2rem] transition-all duration-500 card-hover bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl flex flex-col h-full">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
        <Calendar size={14} />
        {post.date}
      </div>
      
      <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
      
      {post.tags && post.tags.length > 0 && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-500 border border-slate-100 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
          Read Full Article
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}