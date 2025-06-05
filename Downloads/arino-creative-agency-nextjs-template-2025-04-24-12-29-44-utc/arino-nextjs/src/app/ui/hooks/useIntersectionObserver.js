'use client';
import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setHasBeenVisible(true); // Track if it has ever been visible
          // Optional: Unobserve after first intersection if animation should only play once
          // observer.unobserve(entry.target); 
        } else {
          setIsIntersecting(false);
        }
      },
      {
        threshold: 0.1, // Default threshold - 10% of item is visible
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && observer) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  // Return both isIntersecting (for continuous tracking) and hasBeenVisible (for one-time animations)
  return [ref, isIntersecting, hasBeenVisible];
} 