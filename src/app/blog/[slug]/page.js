import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Genera las rutas de los posts
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir);
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

// Página de un post
export default async function BlogPost({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <MDXRemote source={content} />
    </div>
  );
}
