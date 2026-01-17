import type { Metadata } from 'next';
import Destinations from '@/components/Destinations';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Sri Lanka Destinations - Best Places to Visit in 2025',
  description: 'Discover the best destinations in Sri Lanka! 🌴 Sigiriya Lion Rock, Kandy, Galle Fort, Yala National Park, Ella, Nuwara Eliya, Mirissa & more. Plan your perfect Sri Lanka itinerary with LA Tours.',
  keywords: [
    'Sri Lanka destinations',
    'places to visit Sri Lanka',
    'best places Sri Lanka',
    'Sigiriya',
    'Kandy',
    'Galle Fort',
    'Yala National Park',
    'Ella Sri Lanka',
    'Nuwara Eliya',
    'Mirissa beach',
    'Sri Lanka travel guide',
    'Sri Lanka itinerary',
  ],
  alternates: {
    canonical: 'https://www.latours.com/destinations',
  },
  openGraph: {
    title: 'Sri Lanka Destinations - Best Places to Visit',
    description: 'Explore the most beautiful destinations in Sri Lanka. Sigiriya, Kandy, Galle & more!',
    url: 'https://www.latours.com/destinations',
    images: ['/assets/destinations-hero.png'],
  },
};

export default function DestinationsPage() {
  return (
    <main>
      <PageHero 
        title="Destinations" 
        subtitle="Explore Paradise" 
        image="/assets/destinations-hero.png"
      />
      <Destinations />
    </main>
  );
}
