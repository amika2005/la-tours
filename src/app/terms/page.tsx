import PageHero from '@/components/PageHero';
import styles from '@/components/Legal.module.css';

export default function TermsPage() {
  return (
    <main>
      <PageHero 
        title="Terms & Conditions" 
        subtitle="Operational Guidelines" 
        image="/assets/info-hero.png"
      />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.heading}>1. Booking & Reservations</h2>
            <p className={styles.text}>
              All bookings are subject to availability and confirmation. A deposit may be required to secure your reservation. 
              Final payment is due prior to the commencement of the tour as per the specific package terms.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>2. Cancellation Policy</h2>
            <p className={styles.text}>
              Cancellations must be made in writing. Refunds will be processed according to the following schedule:
            </p>
            <ul className={styles.list}>
              <li>30 days or more before arrival: Full refund (less admin fee).</li>
              <li>14-29 days before arrival: 50% refund.</li>
              <li>Less than 14 days before arrival: No refund.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>3. Responsibilities</h2>
            <p className={styles.text}>
              LA Tours acts as an agent for transport, accommodation, and other service providers. We are not liable for 
              any injury, damage, loss, accident, delay, or irregularity which may be occasioned by reason of any defect 
              in any vehicle or through the acts or defaults of any company or person engaged in conveying the passenger.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>4. Travel Insurance</h2>
            <p className={styles.text}>
              We strongly recommend that all travelers obtain comprehensive travel insurance to cover potential cancellation fees, 
              medical expenses, and loss of personal property.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
