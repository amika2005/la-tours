'use client';

import { useState, useEffect } from 'react';
import styles from './Destinations.module.css';
import { MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  tag: string;
  image: string;
  className?: string; // For grid spans
}

export default function Destinations() {
  const [currentSet, setCurrentSet] = useState(0);

  // Configuration for the grid slots to maintain layout stability
  const gridSlots = [
    { index: 0, className: '' },
    { index: 1, className: '' },
    { index: 2, className: styles.tall }, // Slot 2 is always Tall
    { index: 3, className: styles.wide }, // Slot 3 is always Wide
    { index: 4, className: styles.wide }, // Slot 4 is always Wide
    { index: 5, className: '' }
  ];

  const set1: Destination[] = [
    { id: 1, name: 'Anuradhapura', tag: 'Heritage', image: '/assets/Anuradhapura.jpg', className: '' },
    { id: 2, name: 'Arugam Bay', tag: 'Surfing', image: '/assets/Arugam-bay.jpg', className: '' },
    { id: 3, name: 'Colombo', tag: 'Capital City', image: '/assets/lotus-tower.jpg', className: styles.tall },
    { id: 4, name: 'Bentota', tag: 'Beaches', image: '/assets/bentota.jpeg', className: styles.wide },
    { id: 5, name: 'Ella', tag: 'Mountains', image: '/assets/ella.jpg', className: styles.wide },
    { id: 6, name: 'Galle', tag: 'Colonial', image: '/assets/galle.jpeg', className: '' }
  ];

  const set2: Destination[] = [
    { id: 7, name: 'Sigiriya', tag: 'Ancient Rock', image: '/assets/sigiriya-2.jpg', className: '' },
    { id: 8, name: 'Trincomalee', tag: 'Beaches', image: '/assets/hikkaduwa.jpeg', className: '' },
    { id: 9, name: 'Kandy', tag: 'Culture', image: '/assets/kandy-home.jpg', className: styles.tall },
    { id: 10, name: 'Yala Park', tag: 'Wildlife', image: '/assets/Yala.jpg', className: styles.wide },
    { id: 11, name: 'Mirissa', tag: 'Whales', image: '/assets/Mirissa.jpg', className: styles.wide },
    { id: 12, name: 'Polonnaruwa', tag: 'History', image: '/assets/dambulla.jpg', className: '' }
  ];

  const getCurrentDestination = (index: number) => {
    return currentSet === 0 ? set1[index] : set2[index];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Faster cycle: 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.titleContainer}>
        <div className={styles.subLabel}>
          <MapPin size={16} color="#4a90d9" />
          <span className={styles.subLabelText}>ISLAND PARADISE</span>
        </div>
        <h2 className={styles.mainTitle}>Popular Destinations</h2>
        <p className={styles.description}>Explore the wonders of Sri Lanka</p>
      </div>

      <div className={styles.gridContainer}>
        {gridSlots.map((slot) => {
          const dest = getCurrentDestination(slot.index);
          return (
            <div key={slot.index} className={`${styles.gridItem} ${slot.className || ''}`}>
              <AnimatePresence mode='popLayout'>
                <motion.div
                  key={dest.id}
                  className={styles.gridContentWrapper}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut"
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute', // Ensures overlap
                    top: 0,
                    left: 0,
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <img src={dest.image} alt={dest.name} className={styles.image} />
                  <div className={styles.overlay}></div>
                  <div className={styles.content}>
                    <h3 className={styles.itemName}>{dest.name}</h3>
                    <div className={styles.itemTag}>
                      <span className={styles.dot}></span>
                      <span>{dest.tag}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
