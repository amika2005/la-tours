'use client';

import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Column 1: Navigation */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Links (Moved here) */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/brochure">E - Brochure</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Tour Types */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Tour</h4>
            <ul className={styles.linkList}>
              <li><a href="/packages">Authentic Ceylon</a></li>
              <li><a href="/packages">Plan Your Trip</a></li>
              <li><a href="/packages">Adventurous Spirit</a></li>
              <li><a href="/packages">Barefoot Luxury</a></li>
              <li><a href="/packages">Following the Wild</a></li>
              <li><a href="/packages">Romantic Serendipity</a></li>
              <li><a href="/packages">Island of Wellness</a></li>
            </ul>
          </div>

          {/* Column 4: Hotline & Contact */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Hotline</h4>
            <div className={styles.hotlineBox}>
              <div className={styles.hotlineIcon}>
                <Phone size={24} color="#FFCC00" />
              </div>
              <div className={styles.hotlineNum}>+94 76 086 6309</div>
            </div>
            <p className={styles.hotlineNote}>(24/7) Only for international inquiries</p>

            <div className={styles.addressBox}>
              <p className={styles.companyName}>LA Tours (Private) Ltd</p>
              <p>Ahangama, Galle,</p>
              <p>SRI LANKA.</p>
            </div>

            <div className={styles.generalInfo}>
              <p className={styles.infoLabel}>General:</p>
              <div className={styles.emailBox}>
                <span className={styles.infoLabel}>E-mail:</span>
                <a href="mailto:latourstaxi@gmail.com" className={styles.emailLink}>latourstaxi@gmail.com</a>
              </div>
            </div>

            <div className={styles.openingHours}>
              <p className={styles.infoLabel}>Opening Hours</p>
              <p>Open 24 Hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Social & Apps */}
        <div className={styles.bottomSection}>
          <div className={styles.socialArea}>
            <span className={styles.socialLabel}>Stay Connected:</span>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/share/1FPLSJy6t9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.facebook}`} aria-label="Facebook"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/latourstaxi?igsh=ZG1qbjVjYm8wMHgz&utm_source=qr" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagram}`} aria-label="Instagram"><Instagram size={16} /></a>
              <a href="https://wa.me/94760866309" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.whatsapp}`} aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.appArea}>
             {/* App buttons removed as requested */}
          </div>

           <div className={styles.brandArea}>
              <img src="/assets/logo.png" alt="LA Tours Sri Lanka" style={{ height: '90px', width: 'auto', marginBottom: '10px' }} />
          </div>
        </div>
      </div>
       {/* Copyright */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <div className={styles.copyrightContent}>
            <p>&copy; {new Date().getFullYear()} LA Tours Sri Lanka. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
