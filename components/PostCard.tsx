import Link from 'next/link';
import type { Post } from '../data/posts';


export default function PostCard({ post }: { post: Post }) {
return (
<article className="p-4 border rounded dark:border-gray-700">
<h3 className="font-semibold text-lg mb-2">{post.title}</h3>
<p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{post.excerpt}</p>
{post.tags && post.tags.length > 0 && (
<div className="flex gap-2 mb-3 flex-wrap">
{post.tags.map(tag => (
<span key={tag} className="text-xs border px-2 py-1 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
{tag}
</span>
))}
</div>
)}
<div className="flex items-center justify-between">
<span className="text-xs text-gray-600 dark:text-gray-400">{post.date}</span>
<Link href={`/blog/${post.slug}`} className="inline-block text-sm underline">Read</Link>
</div>
</article>
);
}