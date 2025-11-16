import { posts } from '../../data/posts';
import PostCard from '../../components/PostCard';


export default function Blog() {
return (
<section className="py-12">
<div className="container">
<h2 className="text-2xl font-semibold mb-6">Blog</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{posts.map(p => <PostCard key={p.slug} post={p} />)}
</div>
</div>
</section>
);
}