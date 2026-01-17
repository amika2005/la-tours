'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle, Car, Coffee, Camera, Shield, Play, Share2, Info } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import { tours } from '@/data/tours';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PackageDetail({ params }: PageProps) {
  const [tour, setTour] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    params.then((resolvedParams) => {
      const id = parseInt(resolvedParams.id);
      const foundTour = tours.find((t) => t.id === id);
      if (foundTour) {
        setTour(foundTour);
      }
      setLoading(false);
    });
  }, [params]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (!tour) return notFound();

  // JSON-LD Structured Data for TouristTrip
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.longDescription || tour.description,
    image: `https://www.latours.com${tour.image}`,
    touristType: 'Leisure',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: tour.highlights?.map((item: string, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    offers: {
      '@type': 'Offer',
      price: tour.price.replace(',', ''),
      priceCurrency: 'LKR',
      availability: 'https://schema.org/InStock',
      url: `https://www.latours.com/packages/${tour.id}`,
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'LA Tours Sri Lanka',
      url: 'https://www.latours.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className={styles.pageContainer}>
        {/* Parallax Hero Section */}
        <div className={styles.heroWrapper}>
          <motion.div style={{ y, opacity }} className={styles.heroImageContainer}>
            <img 
              src={tour.image} 
              alt={tour.title} 
              className={styles.heroImage}
              style={{ objectPosition: tour.imagePosition || 'center' }}
            />
            <div className={styles.heroOverlay}></div>
          </motion.div>
          
          <div className={styles.heroContentWrapper}>
            <div className={styles.container}>
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={styles.heroContent}
              >
                <div className={styles.badgeWrapper}>
                  <span className={styles.locationBadge}>
                    <MapPin size={14} /> {tour.location}
                  </span>
                </div>
                <h1 className={styles.title}>{tour.title}</h1>
                <p className={styles.heroDescription}>{tour.description}</p>
                
                {/* Duration and Distance removed as per user request */}
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles.mainContentArea}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              
              {/* Left Column: Details */}
              <div className={styles.leftColumn}>
                <Link href="/packages" className={styles.backLink}>
                  <div className={styles.backIconBox}>
                    <ArrowLeft size={16} />
                  </div>
                  Back to Packages
                </Link>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={styles.descriptionSection}
                >
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Tour Overview</h2>
                    <div className={styles.titleLine}></div>
                  </div>
                  <p className={styles.paragraph}>{tour.longDescription || tour.description}</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={styles.highlightsSection}
                >
                  <h3 className={styles.subTitle}>Experience Highlights</h3>
                  <div className={styles.highlightsGrid}>
                    {tour.highlights?.map((highlight: string, index: number) => (
                      <div key={index} className={styles.highlightItem}>
                        <div className={styles.checkIcon}>
                          <CheckCircle size={16} color="#ffffff" />
                        </div>
                        <span className={styles.highlightText}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={styles.includesSection}
                >
                  <h3 className={styles.subTitle}>What's Included</h3>
                  <ul className={styles.includesList}>
                    {tour.includes?.map((item: string, index: number) => (
                      <li key={index} className={styles.includeItem}>
                        <Shield size={18} className={styles.includeIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className={styles.includeItem}>
                      <Coffee size={18} className={styles.includeIcon} />
                      <span>Refreshments</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Right Column: Floating Booking Card */}
              <div className={styles.rightColumn}>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className={styles.bookingCard}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.priceLabel}>Starting From</span>
                    {/* Price hidden but structure kept for layout balance */}
                    <div className={styles.priceTag}>Contact Us</div>
                  </div>
                  
                  <div className={styles.cardBody}>
                    <p className={styles.cardText}>Best price guaranteed. Customize this tour as per your requirement.</p>
                    
                    <a 
                      href={`https://wa.me/94760866309?text=${encodeURIComponent(`Hi, I'm interested in the ${tour.title}. Can you provide more details?`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.whatsappBtn}
                    >
                      <Camera size={20} />
                      WhatsApp Inquiry
                    </a>

                    <a 
                      href={`https://wa.me/94760866309?text=${encodeURIComponent(`Hi, I'd like to request a quote for the ${tour.title} package.`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.bookBtn}
                    >
                      Request a Quote
                    </a>
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.agentInfo}>
                      <div className={styles.agentAvatar}>LA</div>
                      <div className={styles.agentText}>
                        <span className={styles.agentName}>Instant Support</span>
                        <span className={styles.agentStatus}>Online Now</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {tour.gallery && (
          <section className={styles.gallerySection}>
            <div className={styles.container}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.galleryHeader}
              >
                <h2 className={styles.sectionTitle}>Captured Moments</h2>
                <p className={styles.sectionSubtitle}>See what awaits you on this journey</p>
              </motion.div>
              
              <div className={styles.galleryGrid}>
                {tour.gallery.map((img: string, index: number) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${styles.galleryItem} ${index === 0 ? styles.galleryItemLarge : ''}`}
                  >
                    <img src={img} alt={`${tour.title} gallery ${index + 1}`} className={styles.galleryImage} />
                    <div className={styles.galleryOverlay}>
                      <Share2 size={24} color="#fff" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Nearby Places Section */}
        {tour.nearby && (
          <section className={styles.nearbySection}>
            <div className={styles.container}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.nearbyHeader}
              >
                <h2 className={styles.sectionTitle}>Explore Nearby</h2>
                <p className={styles.sectionSubtitle}>Enhance your trip with these destinations</p>
              </motion.div>
              
              <div className={styles.nearbyGrid}>
                {tour.nearby.map((place: any, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={styles.nearbyCard}
                  >
                    <div className={styles.nearbyImageWrapper}>
                      <img src={place.image} alt={place.title} className={styles.nearbyImage} />
                    </div>
                    <div className={styles.nearbyContent}>
                      <h4 className={styles.nearbyTitle}>{place.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  );
}
