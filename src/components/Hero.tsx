'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

interface Slide {
  id: number;
  location: string;
  description: string;
  image: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const slides: Slide[] = [
    {
      id: 1,
      location: 'Sigiriya, Sri Lanka',
      description: 'A mystical ancient rock fortress adorned with mesmerizing frescoes, lush gardens, and unparalleled panoramic vistas.',
      image: '/assets/destinations-hero.png'
    },
    {
      id: 2,
      location: 'Kandy, Sri Lanka',
      description: 'The cultural heart of Sri Lanka, home to the Temple of the Sacred Tooth and beautiful botanical gardens.',
      image: '/assets/kandy-home.jpg'
    },
    {
      id: 3,
      location: 'Galle, Sri Lanka',
      description: 'A UNESCO World Heritage Site featuring Dutch colonial architecture and stunning coastal views.',
      image: '/assets/galle.jpeg'
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Background Image */}
      <div className={styles.background}>
        <div className={styles.imageOverlay}></div>
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].location}
          className={styles.heroImage}
          key={currentSlide} // Key change ensures animation triggers if needed, though simple src swap with transition works better if crossfading is handled by CSS specific logic. Here standard src swap.
        />
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span className={styles.headlineMain}>Where Dreams Take Flight</span>
        </h1>
        <p className={styles.subheadline}>
          Your Home, Your Journey, Your Hospitality Haven
        </p>
      </div>

      {/* Slide Navigation Arrows - Right Side */}
      <div className={styles.slideNav}>
        <button 
          className={styles.navBtn} 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className={styles.navBtn} 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Location Info - Bottom Left */}
      <div className={styles.locationInfo}>
        <div className={styles.locationDot}></div>
        <div className={styles.locationContent}>
          <h3 className={styles.locationName}>{slides[currentSlide].location}</h3>
          <p className={styles.locationDesc}>{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* CTA - Bottom Right */}
      <div className={styles.ctaArea}>
        <a href="/destinations" className={styles.ctaLink}>
          <span>See more destinations</span>
          <span className={styles.ctaIcon}>
            <ArrowRight size={16} />
          </span>
        </a>
      </div>

      {/* Slide Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Text - Right Edge */}
      <div className={styles.scrollText}>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
