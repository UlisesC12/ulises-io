import { getAllPostsData } from "../../../lib/posts";
import Link from 'next/link';
import { FcNext } from "react-icons/fc";

export default function LatestPosts() {
  const posts = getAllPostsData();

  return (
    <section className="mb-16">
      {/* Latest Posts Section */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <FcNext />
        Últimos posts
      </h2>
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(post => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gray-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.frontMatter.title}
                  </h3>
                  {post.frontMatter.date && (
                    <time className="text-sm text-gray-500 font-medium">
                      {new Date(post.frontMatter.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  )}
                  {post.frontMatter.excerpt && (
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {post.frontMatter.excerpt}
                    </p>
                  )}
                  <div className="mt-4 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                    Leer más →
                  </div>
                </div>
              </Link>
            </article>
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