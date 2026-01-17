'use client';

import { ReactNode } from 'react';
import { Clock, Car, UserCheck, Smile, Trophy, Globe, CheckCircle } from 'lucide-react';
import styles from './About.module.css';

interface Stat {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function About() {
  const stats: Stat[] = [
    { icon: <Clock size={32} color="#0a1628" />, label: 'Years of Experience', value: '10+' },
    { icon: <Car size={32} color="#0a1628" />, label: 'Premium Vehicles', value: '50+' },
    { icon: <UserCheck size={32} color="#0a1628" />, label: 'Expert Drivers', value: '30+' },
    { icon: <Smile size={32} color="#0a1628" />, label: 'Happy Customers', value: '5000+' },
    { icon: <Trophy size={32} color="#0a1628" />, label: 'Tours Completed', value: '2500+' },
    { icon: <Globe size={32} color="#0a1628" />, label: 'Destinations', value: '50+' },
  ];

  const features: string[] = [
    'Comfortable and well-maintained vehicles for every journey',
    'Professional, English-speaking drivers with local expertise',
    'Flexible tour packages tailored to your preferences',
    'Competitive pricing with transparent rates - 120 LKR per km',
    '24/7 customer support throughout your travel experience',
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img 
                src="/assets/ayubowan.png" 
                alt="Sri Lankan Hospitality - Ayubowan Greeting" 
                className={styles.aboutImage}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={styles.contentColumn}>
            {/* Section Header */}
            <div className={styles.header}>
              <div className={styles.subtitle}>
                <span className={styles.icon}>
                  <CheckCircle size={14} color="#4a90d9" />
                </span>
                <span className={styles.subtitleText}>Your trusted travel partner</span>
              </div>
              <h2 className={styles.title}>Welcome to LA Tours</h2>
              <p className={styles.titleSub}>Come, let&apos;s explore Sri Lanka.</p>
            </div>

            {/* Description */}
            <p className={styles.description}>
              With over a decade of experience in tourism transport services, LA Tours is your premier choice for exploring the beautiful island of Sri Lanka. We pride ourselves on delivering exceptional service, comfortable travel experiences, and unforgettable memories.
            </p>

            {/* Features List */}
            <ul className={styles.features}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.featureDot}></span>
                  <span className={styles.featureText}>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statContent}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>
                      <CheckCircle size={10} color="#4a90d9" style={{ marginRight: '5px' }} />
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
