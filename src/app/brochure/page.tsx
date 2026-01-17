'use client';

import PageHero from '@/components/PageHero';
import { Download, FileText } from 'lucide-react';
import styles from '@/components/Legal.module.css';

export default function BrochurePage() {
  return (
    <main>
      <PageHero 
        title="Our E-Brochure" 
        subtitle="Inspiration for your Journey" 
        image="/assets/info-hero.png" 
      />
      
      <div className={styles.container}>
        <div className={styles.content} style={{ textAlign: 'center', padding: '60px 20px' }}>
          
          <div style={{ marginBottom: '40px' }}>
            <FileText size={80} color="#adab3f" strokeWidth={1} />
          </div>

          <h2 className={styles.heading} style={{ borderBottom: 'none', fontSize: '36px', marginBottom: '20px' }}>
            Download the 2026 Collection
          </h2>
          
          <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            Explore our comprehensive guide to Sri Lankan adventures. Detailed itineraries, 
            exclusive hotel partnerships, and fleet information all in one place. 
            Start planning your dream vacation today.
          </p>

          <a 
            href="#" // Placeholder link
            onClick={(e) => { e.preventDefault(); alert("Brochure download coming soon!"); }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#0a1628', 
              color: 'white', 
              padding: '15px 40px', 
              borderRadius: '50px', 
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(10, 22, 40, 0.2)'
            }}
          >
            <Download size={20} />
            <span>Download PDF (15 MB)</span>
          </a>

          <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
            *Requires Adobe Reader or compatible PDF viewer.
          </p>

        </div>
      </div>
    </main>
  );
}
