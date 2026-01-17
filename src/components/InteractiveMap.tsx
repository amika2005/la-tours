'use client';

import styles from './InteractiveMap.module.css';
import { motion } from 'framer-motion';

export default function InteractiveMap() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.titleWrapper}>
          <span className={styles.tagline}>
            <img src="/assets/sri-lanka-icon.png" alt="" className={styles.taglineIcon} />
            Discover Paradise
          </span>
          <h2 className={styles.sectionTitle}>Pearl of the Indian Ocean</h2>
          <p className={styles.sectionSubtitle}>
            Experience the magic of Sri Lanka — where ancient history meets tropical beauty
          </p>
        </div>

        {/* Map Showcase */}
        <div className={styles.mapShowcase}>
          {/* Decorative Background Circles */}
          <div className={styles.bgCircle1}></div>
          <div className={styles.bgCircle2}></div>

          {/* Main Map Image - Scales up */}
          <motion.img 
            src="/assets/Sri Lanka.png" 
            alt="Sri Lanka - Pearl of the Indian Ocean" 
            className={styles.mapImage}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

        </div>
      </div>
    </section>
  );
}
