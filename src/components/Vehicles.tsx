'use client';

import { User, Briefcase, CheckCircle } from 'lucide-react';
import styles from './Vehicles.module.css';

interface Vehicle {
  id: number;
  name: string;
  capacity: string;
  luggage: string;
  image: string;
  features: string[];
  bestFor: string;
}

export default function Vehicles() {
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Mini Car',
      capacity: '1-3 Passengers',
      luggage: '2 Bags',
      image: '/assets/wagonR.png',
      features: ['Air Conditioned', 'Fuel Efficient', 'City Travel'],
      bestFor: 'Budget travelers, solo trips',
    },
    {
      id: 2,
      name: 'Sedan',
      capacity: '1-3 Passengers',
      luggage: '3 Bags',
      image: '/assets/prius.png',
      features: ['Air Conditioned', 'Hybrid', 'Comfortable'],
      bestFor: 'Couples, comfort travel',
    },
    {
      id: 3,
      name: 'SUV',
      capacity: '1-5 Passengers',
      luggage: '4-5 Bags',
      image: '/assets/kia.png',
      features: ['Air Conditioned', 'Spacious', 'Premium'],
      bestFor: 'Families, adventure trips',
    },
    {
      id: 4,
      name: 'Van',
      capacity: '1-10 Passengers',
      luggage: '8+ Bags',
      image: '/assets/hiace.png',
      features: ['Air Conditioned', 'Group Seating', 'Ample Space'],
      bestFor: 'Large groups, tours',
    },
  ];

  return (
    <section id="services" className={styles.vehicles}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.subtitle}>
            <span className={styles.icon}>
              <CheckCircle size={14} color="#4a90d9" />
            </span>
            <span className={styles.subtitleText}>Premium fleet for every journey</span>
          </div>
          <h2 className={styles.title}>Our Vehicle Fleet</h2>
          <p className={styles.titleSub}>Choose your perfect ride</p>
        </div>

        {/* Vehicles Grid */}
        <div className={styles.vehiclesGrid}>
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className={styles.vehicleCard}>
              <div className={styles.cardImage}>
                <img src={vehicle.image} alt={vehicle.name} />
              </div>
              <h3 className={styles.cardTitle}>{vehicle.name}</h3>
              <div className={styles.cardInfo}>
                <div className={styles.infoItem}>
                  <User size={16} />
                  <span>{vehicle.capacity}</span>
                </div>
                <div className={styles.infoItem}>
                  <Briefcase size={16} />
                  <span>{vehicle.luggage}</span>
                </div>
              </div>
              <ul className={styles.features}>
                {vehicle.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.featureDot}></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.bestFor}>
                <strong>Best for:</strong> {vehicle.bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
