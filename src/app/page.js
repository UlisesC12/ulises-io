// src/app/page.js
import Link from 'next/link';
import { getAllPostsData } from '../../lib/posts';

export default function BlogList() {
  const posts = getAllPostsData();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.frontMatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
