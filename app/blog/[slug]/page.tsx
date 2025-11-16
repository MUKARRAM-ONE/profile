import { posts } from '../../../data/posts';


export default function PostPage({ params }: { params: { slug: string } }) {
const post = posts.find(p => p.slug === params.slug);
if (!post) return <div className="container py-12">Post not found</div>;
return (
<article className="container py-12">
<h1 className="text-3xl font-bold">{post.title}</h1>
<div className="text-sm text-gray-600 dark:text-gray-400">{post.date}</div>
<div className="mt-6 prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
</article>
);
}