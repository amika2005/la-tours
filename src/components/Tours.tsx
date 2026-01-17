'use client';

import { Plane, Building, Map, Landmark, Mountain, Sun, Calendar, Clock, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import styles from './Tours.module.css';

interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  distance: string;
  price: string;
  description: string;
  image: string;
  imagePosition?: string;
}

import { tours } from '@/data/tours';

export default function Tours() {
  // Data is now imported from @/data/tours

  return (
    <section id="tours" className={styles.tours}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.subtitle}>
            <span className={styles.icon}>
              <CheckCircle size={14} color="#4a90d9" />
            </span>
            <span className={styles.subtitleText}>Your voyage of discovery begins here. Say yes.</span>
          </div>
          <h2 className={styles.title}>Discover Paradise, the LA Tours Way</h2>
          <p className={styles.titleSub}>Your journey: your plan.</p>
        </div>

        {/* Tours Grid */}
        <div className={styles.toursGrid}>
          {tours.map((tour) => (
            <div key={tour.id} className={styles.tourCard}>
              <div className={styles.cardImage}>
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className={styles.tourImage} 
                  style={{ objectPosition: tour.imagePosition || 'center' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{tour.title}</h3>
                <div className={styles.cardLocation}>
                  <span className={styles.locationIcon}>
                    <MapPin size={12} color="#4a90d9" />
                  </span>
                  <span>{tour.location}</span>
                </div>
                <p className={styles.cardDesc}>{tour.description}</p>
                {/* Distance and Price removed as per user request */}
                <a href={`/packages/${tour.id}`} className={styles.cardLink}>
                  <span>Book Now</span>
                  <span className={styles.linkIcon}>
                    <ArrowRight size={12} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
