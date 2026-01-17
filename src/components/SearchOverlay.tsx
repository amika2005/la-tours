'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import { tours } from '@/data/tours';
import styles from './SearchOverlay.module.css';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(tours);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const filtered = tours.filter(tour => 
        tour.title.toLowerCase().includes(query.toLowerCase()) ||
        tour.location.toLowerCase().includes(query.toLowerCase()) ||
        tour.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Removed early return to allow AnimatePresence to handle exit animations
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay} 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className={styles.searchBarWrapper} 
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.searchContainer}>
              <div className={styles.inputWrapper}>
                <input
                  ref={inputRef}
                  type="text"
                  className={styles.searchInput}
                  placeholder="Where would you like to go?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <SearchIcon className={styles.searchIcon} size={20} />
              </div>
              
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close search">
                <X size={24} />
              </button>

              {query.trim() !== '' && (
                <div className={styles.results}>
                  {results.length > 0 ? (
                    results.map((tour) => (
                      <Link 
                        key={tour.id} 
                        href={`/packages/${tour.id}`} 
                        className={styles.resultItem}
                        onClick={onClose}
                      >
                        <img src={tour.image} alt={tour.title} className={styles.resultImage} />
                        <div className={styles.resultInfo}>
                          <span className={styles.resultTitle}>{tour.title}</span>
                          <span className={styles.resultLocation}>{tour.location}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className={styles.noResults}>No matches found</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
