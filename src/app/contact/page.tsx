import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact LA Tours - Book Your Sri Lanka Tour Today | WhatsApp Available',
  description: 'Get in touch with LA Tours Sri Lanka! 📞 WhatsApp: +94760866309. Quick response guaranteed. Book airport transfers, day tours, custom packages. We speak English, German, French. Available 24/7!',
  keywords: [
    'contact LA Tours',
    'book Sri Lanka tour',
    'Sri Lanka tour booking',
    'LA Tours WhatsApp',
    'LA Tours phone number',
    'Sri Lanka tour inquiry',
    'book Colombo airport transfer',
  ],
  alternates: {
    canonical: 'https://www.latours.com/contact',
  },
  openGraph: {
    title: 'Contact LA Tours - Book Your Sri Lanka Adventure',
    description: 'Ready to explore Sri Lanka? Contact us now! WhatsApp available 24/7.',
    url: 'https://www.latours.com/contact',
    images: ['/assets/contact-hero.png'],
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero 
        title="Contact Us" 
        subtitle="Get in Touch" 
        image="/assets/contact-hero.png"
      />
      <Contact />
    </main>
  );
}
