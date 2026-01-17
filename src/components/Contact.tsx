'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react';
import styles from './Contact.module.css';
import { countries } from '../data/countries';

interface FormData {
  name: string;
  email: string;
  country: string;
  phone: string;
  adults: string;
  kids: string;
  infants: string;
  arrivalDate: string;
  departureDate: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    phone: '',
    adults: '',
    kids: '',
    infants: '',
    arrivalDate: '',
    departureDate: '',
    message: ''
  });

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          country: '',
          phone: '',
          adults: '',
          kids: '',
          infants: '',
          arrivalDate: '',
          departureDate: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.subtitle}>
            <span className={styles.icon}>
              <CheckCircle size={14} color="#4a90d9" />
            </span>
            <span className={styles.subtitleText}>Get in touch with us</span>
          </div>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.titleSub}>We&apos;re here to help you</p>
        </div>

        <div className={styles.row}>
          {/* Info Column */}
          <div className={styles.infoColumn}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={24} color="#0a1628" /></div>
                <div className={styles.infoContent}>
                  <h4>Call Us</h4>
                  <p>+94 77 123 4567</p>
                  <p>+94 11 234 5678</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={24} color="#0a1628" /></div>
                <div className={styles.infoContent}>
                  <h4>Email Us</h4>
                  <p>latourstaxi@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={24} color="#0a1628" /></div>
                <div className={styles.infoContent}>
                  <h4>Visit Us</h4>
                  <p>No 143 Kurunduwatta,</p>
                  <p>Ahangama, Galle, Sri Lanka</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Clock size={24} color="#0a1628" /></div>
                <div className={styles.infoContent}>
                  <h4>Opening Hours</h4>
                  <p>Mon - Sun: 8:00 AM - 8:00 PM</p>
                  <p>24/7 Airport Transfers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className={styles.formColumn}>
            <div className={styles.formWrapper}>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Your Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                {/* Country & Phone */}
                <div className={styles.formRow2}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Country*</label>
                    <div className={styles.countrySelectWrapper}>
                      <button 
                        type="button" 
                        className={styles.countrySelectBtn}
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                      >
                        {formData.country ? (
                          <span className={styles.selectedCountry}>
                            <img 
                              src={`https://flagcdn.com/w40/${countries.find(c => c.name === formData.country)?.code.toLowerCase()}.png`}
                              alt=""
                              className={styles.countryFlag}
                            />
                            {formData.country}
                          </span>
                        ) : (
                          <span className={styles.placeholder}>Select Country</span>
                        )}
                        <ChevronDown size={14} color="#3A3A3C" />
                      </button>
                      
                      {isCountryOpen && (
                        <div className={styles.countryDropdown}>
                          <div className={styles.countrySearch}>
                            <input 
                              type="text" 
                              placeholder="Search country..." 
                              className={styles.searchInput}
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                          {filteredCountries.map((country) => (
                            <div 
                              key={country.code} 
                              className={styles.countryOption}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, country: country.name }));
                                setIsCountryOpen(false);
                                setSearchQuery('');
                              }}
                            >
                              <img 
                                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                alt={country.name} 
                                className={styles.countryFlag}
                              />
                              <span className={styles.countryName}>{country.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                {/* Adults, Kids, Infants */}
                <div className={styles.formRow3}>
                  <div className={styles.formGroup}>
                    <label htmlFor="adults" className={styles.label}>No Of Adults</label>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      min="1"
                      value={formData.adults}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="kids" className={styles.label}>No Of Kids (0 - 11 Years)</label>
                    <input
                      type="number"
                      id="kids"
                      name="kids"
                      min="0"
                      value={formData.kids}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="infants" className={styles.label}>No Of Infants*</label>
                    <input
                      type="number"
                      id="infants"
                      name="infants"
                      min="0"
                      value={formData.infants}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Arrival & Departure Date */}
                <div className={styles.formRow2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="arrivalDate" className={styles.label}>Arrival Date</label>
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="departureDate" className={styles.label}>Departure Date</label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && (
                    <span className={styles.btnIcon}>
                      <Send size={16} />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
