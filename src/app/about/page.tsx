import type { Metadata } from 'next';
import About from '@/components/About';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About LA Tours - Trusted Sri Lanka Tour Company Since 2015',
  description: 'Learn about LA Tours Sri Lanka - your trusted travel partner! 🚗 Professional English-speaking drivers, modern vehicles, best prices. Serving tourists from UK, USA, Europe & Australia. 1000+ happy travelers. Book with confidence!',
  keywords: [
    'about LA Tours',
    'Sri Lanka tour company',
    'trusted Sri Lanka tours',
    'Sri Lanka travel agency',
    'private driver Sri Lanka',
    'English speaking driver Sri Lanka',
    'LA Tours reviews',
  ],
  alternates: {
    canonical: 'https://www.latours.com/about',
  },
  openGraph: {
    title: 'About LA Tours Sri Lanka - Your Trusted Travel Partner',
    description: 'Meet the team behind LA Tours. Professional drivers, modern vehicles, best service!',
    url: 'https://www.latours.com/about',
    images: ['/assets/about-hero.jpeg'],
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Us" subtitle="Experience Sri Lanka" image="/assets/about-hero.jpeg" />
      <About />
    </main>
  );
}
