'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Timeout to ensure DOM is ready and hydrated on initial mount or page transition
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(
        '.card-left, .card-right, .card-fade, .card-fade-up, .card-zoom'
      );

      // 1. Immediate viewport check for elements already visible
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is in viewport or already scrolled past, make it visible immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });

      // 2. Setup IntersectionObserver for items below the fold
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -10% 0px', // Trigger when 10% from bottom of viewport
          threshold: 0.05,
        }
      );

      targets.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);
}
