'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Smartphone, Mail, Phone, Video } from 'lucide-react';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  label: string;
}

import SearchOverlay from './SearchOverlay';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/destinations', label: 'DESTINATIONS' },
    { href: '/packages', label: 'PACKAGES' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Top Bar - Hidden on mobile, matches Jetwing style */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            <a href="mailto:latourstaxi@gmail.com" className={styles.topBarLink}>
              <Mail size={12} className={styles.topBarIcon} />
              <span className={styles.topBarLabel}>Email:</span>
              <span className={styles.topBarValue}>latourstaxi@gmail.com</span>
            </a>
            <span className={styles.topBarDivider}>|</span>
            <a href="tel:+94760866309" className={styles.topBarLink}>
              <Phone size={12} className={styles.topBarIcon} />
              <span className={styles.topBarValue}>+94 76 086 6309</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>LA <span className={styles.logoHighlight}>TOURS</span></span>
            <span className={styles.logoTagline}>SRI LANKA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            {/* Search Button */}
            <button 
              className={styles.iconBtn} 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={18} />
            </button>

            {/* Menu Toggle */}
            <button 
              className={`${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} color="#FFCC00" /> : <Menu size={24} color="#FFFFFF" />}
              <span className={styles.menuText}>MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileContact}>
          <p>Call Us: <strong>+94 76 086 6309</strong></p>
          <p>Email: <strong>latourstaxi@gmail.com</strong></p>
        </div>
      </div>
    </>
  );
}
