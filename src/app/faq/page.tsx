import PageHero from '@/components/PageHero';
import { Plus, Minus } from 'lucide-react';
import styles from '@/components/Legal.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const faqs: FAQItem[] = [
    {
      question: "Do you provide airport transfers?",
      answer: "Yes, we provide 24/7 airport transfer services from Bandaranaike International Airport (CMB) to any destination in Sri Lanka. You can book a transfer separately or as part of a tour package."
    },
    {
      question: "Can I customize my tour itinerary?",
      answer: "Absolutely! We specialize in tailor-made holidays. Connect with our dedicated tour consultants who will help you design a trip that matches your interests, budget, and time constraints."
    },
    {
      question: "What vehicles do you offer?",
      answer: "Our extensive fleet includes Mini Cars for budget solo travelers, Sedans for comfort, SUVs for adventure and families, and Vans for larger groups. All vehicles are modern, air-conditioned, and maintained to the highest standards."
    },
    {
      question: "Is the driver's cost included?",
      answer: "Yes, our posted rates typically include the vehicle, fuel, and the driver's daily allowance. However, driver accommodation and meals may be extra if not specified in your package. Please check specific package inclusions."
    },
    {
      question: "How do I make a booking?",
      answer: "You can make a booking directly through our website's 'Contact Us' form, by emailing latourstaxi@gmail.com, or by calling our hotline. We require a deposit to confirm your reservation."
    }
  ];

  return (
    <main>
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Help & Support" 
        image="/assets/info-hero.png" 
      />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h3 className={styles.heading} style={{ fontSize: '20px', borderBottom: 'none', marginBottom: '10px' }}>
                  {faq.question}
                </h3>
                <p className={styles.text}>{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#0a1628', marginBottom: '15px' }}>
              Still have questions?
            </h3>
            <p className={styles.text} style={{ marginBottom: '20px' }}>
              Our team is ready to assist you with any inquiries.
            </p>
            <a 
              href="/contact" 
              style={{ 
                display: 'inline-block', 
                backgroundColor: '#adab3f', 
                color: 'white', 
                padding: '12px 30px', 
                borderRadius: '4px', 
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
