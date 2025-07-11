// src/app/blog/[slug]/page.js

import { getPostBySlug, generateStaticParams } from '../../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export { generateStaticParams };

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return (
    <div>
      <h1>{post.frontMatter.title}</h1>
      <p>{post.frontMatter.date}</p>
      <MDXRemote source={post.content} />
    </div>
  );
}
