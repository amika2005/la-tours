import PageHero from '@/components/PageHero';
import styles from '@/components/Legal.module.css';

export default function PrivacyPage() {
  return (
    <main>
      <PageHero 
        title="Privacy Policy" 
        subtitle="Your Data Security" 
        image="/assets/info-hero.png"
      />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.heading}>1. Information Collection</h2>
            <p className={styles.text}>
              At LA Tours, we collect information you provide directly to us, such as when you make a reservation, 
              request a quote, or contact us for support. This may include your name, email address, phone number, 
              and travel preferences.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>2. How We Use Your Information</h2>
            <p className={styles.text}>
              We use the information we collect to:
            </p>
            <ul className={styles.list}>
              <li>Process your bookings and payments.</li>
              <li>Communicate with you regarding your trip details.</li>
              <li>Send you newsletters and promotional offers (if subscribed).</li>
              <li>Improve our services and website experience.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>3. Data Protection</h2>
            <p className={styles.text}>
              We implement appropriate technical and organizational measures to ensure a level of security appropriate 
              to the risk, protecting your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>4. Third-Party Services</h2>
            <p className={styles.text}>
              We may share your information with trusted third-party service providers (such as hotels and transport operators) 
              strictly for the purpose of fulfilling your travel arrangements. We do not sell your data to advertisers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
