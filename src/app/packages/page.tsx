import type { Metadata } from 'next';
import Tours from '@/components/Tours';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Sri Lanka Tour Packages 2025 - Day Tours, Safaris & Round Trips',
  description: 'Browse our curated Sri Lanka tour packages! 🌴 Sigiriya day tours, Yala leopard safaris, Kandy Temple of Tooth, Galle Fort tours, Ella train journey & more. Best prices guaranteed. Book online now!',
  keywords: [
    'Sri Lanka tour packages',
    'Sri Lanka day tours',
    'Sigiriya day tour',
    'Yala safari package',
    'Kandy tour package',
    'Galle tour from Colombo',
    'Ella tour Sri Lanka',
    'Sri Lanka holiday packages',
    'cheap Sri Lanka tours',
    'best Sri Lanka tours 2025',
  ],
  alternates: {
    canonical: 'https://www.latours.com/packages',
  },
  openGraph: {
    title: 'Sri Lanka Tour Packages - Book Day Tours & Safaris',
    description: 'Explore our amazing tour packages. Sigiriya, Kandy, Yala Safari, Galle & more!',
    url: 'https://www.latours.com/packages',
    images: ['/assets/packages-hero.png'],
  },
};

export default function PackagesPage() {
  return (
    <main>
      <PageHero 
        title="Our Packages" 
        subtitle="Curated Experiences" 
        image="/assets/packages-hero.png"
      />
      <Tours />
    </main>
  );
}
