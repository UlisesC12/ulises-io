// src/app/blog/page.js
import { getAllPostsData } from '../../../lib/posts';
import PostCard from '@/components/blog/postCard';

export default function BlogPage() {
  const posts = getAllPostsData();

  return (
    <div className="max-w-4xl mx-auto px-4 pb-8">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Blog</h1>

      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay posts publicados aún.</p>
        </div>
      )}
    </div>
  );
}
