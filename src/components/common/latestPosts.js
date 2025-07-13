import { getAllPostsData } from "../../../lib/posts";
import PostCard from "../blog/postCard";
import { FcNext } from "react-icons/fc";

export default function LatestPosts() {
  const posts = getAllPostsData();

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <FcNext />
        Últimos posts
      </h2>
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay posts publicados aún.</p>
        </div>
      )}
    </section>
  );
}