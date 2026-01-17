import { MetadataRoute } from 'next';
import { tours } from '@/data/tours';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.latours.com';

  // Static Pages
  const staticPages = [
    '',
    '/about',
    '/destinations',
    '/packages',
    '/contact',
    '/privacy',
    '/terms',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Tour Package Pages
  const tourPages = tours.map((tour) => ({
    url: `${baseUrl}/packages/${tour.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...tourPages];
}
