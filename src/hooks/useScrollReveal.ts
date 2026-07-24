'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal() {
  useEffect(() => {
    // Timeout to ensure DOM is ready on initial mount or page transition
    const timer = setTimeout(() => {
      const targets = gsap.utils.toArray<HTMLElement>(
        '.card-left, .card-right, .card-fade, .card-fade-up, .card-zoom'
      );
      targets.forEach((el) => {
        // If element is already in viewport or scroll position is top, trigger
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => el.classList.add('is-visible'),
          once: true,
        });

        // Fallback for elements already above viewport on mount
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-visible');
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
