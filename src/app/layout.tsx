import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.latours.com'),
  title: {
    default: 'LA Tours Sri Lanka - #1 Private Tours & Airport Transfers | Book Now',
    template: '%s | LA Tours Sri Lanka - Best Tour Company',
  },
  description: 'Book the best Sri Lanka tours with LA Tours! ⭐ Private airport transfers from Colombo. Day tours to Sigiriya, Kandy, Galle, Yala Safari. Trusted by 1000+ travelers. English-speaking drivers. Best prices guaranteed. Book your dream Sri Lanka holiday today!',
  keywords: [
    // Primary Keywords - High Intent
    'Sri Lanka tours',
    'Sri Lanka holiday packages',
    'Sri Lanka private tours',
    'Sri Lanka tour packages 2025',
    'best Sri Lanka tours',
    
    // Airport Transfer Keywords
    'Colombo airport transfer',
    'Colombo airport taxi',
    'Bandaranaike airport pickup',
    'Sri Lanka airport transfer service',
    
    // Day Tour Keywords
    'Sigiriya day tour from Colombo',
    'Kandy day trip',
    'Galle Fort tour',
    'Yala National Park safari',
    'Ella train journey tour',
    'Nuwara Eliya day tour',
    'Dambulla cave temple tour',
    
    // Long-tail Keywords for Foreigners
    'private driver Sri Lanka',
    'English speaking driver Sri Lanka',
    'Sri Lanka tour guide',
    'Sri Lanka chauffeur service',
    'hire car with driver Sri Lanka',
    
    // Location-based Keywords
    'tours from Colombo',
    'Colombo city tour',
    'South Sri Lanka tour',
    'Cultural triangle tour Sri Lanka',
    'Sri Lanka beach tours',
    
    // Intent Keywords
    'book Sri Lanka tour online',
    'Sri Lanka tour booking',
    'cheap Sri Lanka tours',
    'luxury Sri Lanka tours',
    'honeymoon tours Sri Lanka',
    'family tours Sri Lanka',
    
    // Brand Keywords
    'LA Tours Sri Lanka',
    'LA Tours Colombo',
  ],
  authors: [{ name: 'LA Tours Sri Lanka', url: 'https://www.latours.com' }],
  creator: 'LA Tours Sri Lanka',
  publisher: 'LA Tours Sri Lanka',
  category: 'Travel',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-GB': '/',
      'en-AU': '/',
    },
  },
  openGraph: {
    title: 'LA Tours Sri Lanka - Best Private Tours & Airport Transfers',
    description: 'Discover the beauty of Sri Lanka with our private tours. Sigiriya, Kandy, Galle, Yala Safari & more. Trusted by 1000+ travelers. Book now!',
    url: 'https://www.latours.com',
    siteName: 'LA Tours Sri Lanka',
    images: [
      {
        url: '/assets/destinations-hero.png',
        width: 1200,
        height: 630,
        alt: 'LA Tours Sri Lanka - Explore Paradise',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Sri Lanka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LA Tours Sri Lanka - #1 Private Tour Company',
    description: 'Book private tours, airport transfers & day trips in Sri Lanka. Sigiriya, Kandy, Galle, Yala & more!',
    images: ['/assets/destinations-hero.png'],
    creator: '@latourslk',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pawADgAJNMohsy-PNG6bjhHQAI9KgFLztabvtvIWrwA',
  },
  other: {
    'geo.region': 'LK',
    'geo.placename': 'Colombo, Sri Lanka',
    'geo.position': '6.9271;79.8612',
    'ICBM': '6.9271, 79.8612',
    'rating': 'General',
    'revisit-after': '7 days',
    'author': 'LA Tours Sri Lanka',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Enhanced JSON-LD with more SEO signals
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': 'https://www.latours.com/#organization',
    name: 'LA Tours Sri Lanka',
    alternateName: 'LA Tours',
    image: 'https://www.latours.com/assets/destinations-hero.png',
    logo: 'https://www.latours.com/assets/sri-lanka-icon.png',
    description: 'LA Tours is Sri Lanka\'s premier tour company offering private airport transfers, day tours, and customized travel packages. Trusted by thousands of international travelers.',
    url: 'https://www.latours.com',
    telephone: '+94760866309',
    email: 'latourstaxi@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 123, Galle Road',
      addressLocality: 'Colombo',
      addressRegion: 'Western Province',
      postalCode: '00300',
      addressCountry: 'LK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.9271,
      longitude: 79.8612,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    currenciesAccepted: 'USD, EUR, GBP, LKR',
    paymentAccepted: 'Cash, Credit Card',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/latourslk',
      'https://www.instagram.com/latourslk',
      'https://www.tripadvisor.com/latourslk',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sri Lanka Tour Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TouristTrip',
            name: 'Sigiriya Day Tour',
            description: 'Visit the iconic Lion Rock Fortress',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TouristTrip',
            name: 'Yala Safari Adventure',
            description: 'Spot leopards in Yala National Park',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TouristTrip',
            name: 'Kandy Cultural Tour',
            description: 'Temple of the Tooth and Botanical Gardens',
          },
        },
      ],
    },
  };

  // Website Schema for better search appearance
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.latours.com/#website',
    url: 'https://www.latours.com',
    name: 'LA Tours Sri Lanka',
    description: 'Book private tours and airport transfers in Sri Lanka',
    publisher: {
      '@id': 'https://www.latours.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.latours.com/packages?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // FAQ Schema for common questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I book a tour with LA Tours Sri Lanka?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book a tour by contacting us via WhatsApp at +94760866309, email at latourstaxi@gmail.com, or through our website contact form. We respond within 1 hour!',
        },
      },
      {
        '@type': 'Question',
        name: 'Do your drivers speak English?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All our drivers are fluent in English and many speak other languages too. They also serve as knowledgeable guides for your tours.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best time to visit Sri Lanka?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sri Lanka is a year-round destination! The west and south coasts are best from December to April, while the east coast is ideal from May to September.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer airport pickup services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer 24/7 airport pickup and drop services from Bandaranaike International Airport (CMB) to any destination in Sri Lanka.',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a1628" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
