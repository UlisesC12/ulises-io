// src/app/page.js
import Hero from '@/components/common/hero';
import About from '@/components/common/about';
import Interests from '@/components/common/interests';
import LatestPosts from '@/components/common/latestPosts';

export default function HomePage() {


  return (
    <main className="max-w-4xl mx-auto px-6 py-12">

      <Hero />
      <About />
      <Interests />
      <LatestPosts />
    </main>
  );
}
