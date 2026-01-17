import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Vehicles from '@/components/Vehicles';
import InteractiveMap from '@/components/InteractiveMap';
import Destinations from '@/components/Destinations';

export const metadata: Metadata = {
  title: 'LA Tours Sri Lanka - #1 Private Tours, Airport Transfers & Day Trips',
  description: 'Experience the best of Sri Lanka with LA Tours! ⭐ Book private airport transfers, Sigiriya tours, Yala safaris, Kandy day trips & more. English-speaking drivers. Best prices. Trusted by 1000+ travelers. Book your Sri Lanka adventure today!',
  keywords: [
    'Sri Lanka tours',
    'Sri Lanka private tours',
    'Colombo airport transfer',
    'Sigiriya tour',
    'Yala safari',
    'Kandy day tour',
    'Sri Lanka travel',
    'book Sri Lanka tour',
  ],
  alternates: {
    canonical: 'https://www.latours.com',
  },
  openGraph: {
    title: 'LA Tours Sri Lanka - Private Tours & Airport Transfers',
    description: 'Book the best private tours in Sri Lanka. Sigiriya, Kandy, Galle, Yala & more!',
    url: 'https://www.latours.com',
    images: ['/assets/destinations-hero.png'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <InteractiveMap />
      <Destinations />
      <Vehicles />
    </main>
  );
}
