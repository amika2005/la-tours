'use client';

import { Info, CheckCircle, ArrowRight, Banknote } from 'lucide-react';
import styles from './Pricing.module.css';

interface DayTour {
  tour: string;
  distance: string;
  price: string;
}

interface RoundTour {
  duration: string;
  distance: string;
  price: string;
}

export default function Pricing() {
  const dayTours: DayTour[] = [
    { tour: 'Airport Pickup/Drop (BIA – Colombo)', distance: '~35 km', price: '4,200' },
    { tour: 'Colombo City Tour', distance: '~50 km', price: '6,000' },
    { tour: 'Kandy Day Tour', distance: '~230 km', price: '27,600' },
    { tour: 'Galle Day Tour', distance: '~260 km', price: '31,200' },
    { tour: 'Sigiriya & Dambulla Day Tour', distance: '~350 km', price: '42,000' },
    { tour: 'Ella Day Tour', distance: '~400 km', price: '48,000' },
    { tour: 'Nuwara Eliya Day Tour', distance: '~360 km', price: '43,200' },
  ];

  const roundTours: RoundTour[] = [
    { duration: '2 Days', distance: '~600 km', price: '72,000' },
    { duration: '5 Days', distance: '~1,000 km', price: '120,000' },
    { duration: '7 Days', distance: '~1,400 km', price: '168,000' },
    { duration: '10 Days', distance: '~2,000 km', price: '240,000' },
  ];

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.subtitle}>
            <span className={styles.icon}>
              <CheckCircle size={14} color="#4a90d9" />
            </span>
            <span className={styles.subtitleText}>Transparent pricing with no hidden costs</span>
          </div>
          <h2 className={styles.title}>Tour Packages & Pricing</h2>
          <p className={styles.titleSub}>Plan your perfect journey</p>
        </div>

        {/* Rate Information */}
        <div className={styles.rateBox}>
          <div className={styles.rateIcon}>
            <Banknote size={36} color="#ffffff" />
          </div>
          <div className={styles.rateContent}>
            <h3 className={styles.rateTitle}>Base Rate</h3>
            <p className={styles.rateValue}>
              <span className={styles.currency}>LKR</span>
              <span className={styles.amount}>120</span>
              <span className={styles.unit}>per kilometer</span>
            </p>
          </div>
        </div>

        {/* Day Tours Table */}
        <div className={styles.tableSection}>
          <h3 className={styles.tableTitle}>
            <span className={styles.goldDot}></span>
            Day Tours (From Colombo)
          </h3>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tour Package</th>
                  <th>Distance</th>
                  <th>Price (LKR)</th>
                </tr>
              </thead>
              <tbody>
                {dayTours.map((tour, index) => (
                  <tr key={index}>
                    <td>{tour.tour}</td>
                    <td>{tour.distance}</td>
                    <td className={styles.priceCell}>{tour.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Round Tours Table */}
        <div className={styles.tableSection}>
          <h3 className={styles.tableTitle}>
            <span className={styles.goldDot}></span>
            Round Tours (Multi-Day)
          </h3>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Approx. Distance</th>
                  <th>Price (LKR)</th>
                </tr>
              </thead>
              <tbody>
                {roundTours.map((tour, index) => (
                  <tr key={index}>
                    <td>{tour.duration}</td>
                    <td>{tour.distance}</td>
                    <td className={styles.priceCell}>{tour.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className={styles.notes}>
          <h4 className={styles.notesTitle}>Important Notes</h4>
          <ul className={styles.notesList}>
            <li>
              <span className={styles.noteDot}></span>
              <span>Prices are calculated at 120 LKR per kilometer</span>
            </li>
            <li>
              <span className={styles.noteDot}></span>
              <span>Fuel and driver charges are included in the price</span>
            </li>
            <li>
              <span className={styles.noteDot}></span>
              <span>Entrance fees, accommodation, meals, and parking fees are NOT included</span>
            </li>
            <li>
              <span className={styles.noteDot}></span>
              <span>Final price may vary depending on pickup location and tour customization</span>
            </li>
            <li>
              <span className={styles.noteDot}></span>
              <span>Custom tour packages available upon request</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="/contact" className={styles.ctaButton}>
            <span>Get a Custom Quote</span>
            <span className={styles.btnIcon}>
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
