'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ScrollRevealInit() {
  const pathname = usePathname();
  useScrollReveal();

  useEffect(() => {
    // Re-trigger scroll reveal on route changes
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('scroll'));
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
