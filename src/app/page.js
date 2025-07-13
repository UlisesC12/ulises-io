// src/app/page.js
import Hero from '@/components/common/hero';
import About from '@/components/common/about';
import Interests from '@/components/common/interests';
import LatestPosts from '@/components/common/latestPosts';
import Header from '@/components/layout/header';

export default function HomePage() {


  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-18">
        <Hero />
        <About />
        <Interests />
        <LatestPosts />
      </main>
    </>
  );
}
