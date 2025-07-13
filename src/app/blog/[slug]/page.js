// src/app/blog/[slug]/page.js

import { getPostBySlug, generateStaticParams } from '../../../../lib/posts';
import PostContent from '@/components/blog/postContent';
import PostHeader from '@/components/blog/postHeader';

export { generateStaticParams };

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title={post.frontMatter.title}
        date={post.frontMatter.date}
        readTime={post.frontMatter.readTime}
        tags={post.frontMatter.tags}
      />

      <PostContent content={post.content} />
    </div>
  );
}

