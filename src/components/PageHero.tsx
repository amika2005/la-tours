'use client';

import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({ title, subtitle = 'Sri Lanka', image }: PageHeroProps) {
  return (
    <section 
      className={styles.pageHero}
      style={image ? { backgroundImage: `url('${image}')` } : undefined}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
