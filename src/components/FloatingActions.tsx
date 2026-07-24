'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { MessageCircle, Smartphone } from 'lucide-react';

export default function FloatingActions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const qtranRef = useRef<HTMLAnchorElement>(null);
  const waRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Subtle bounce pulse effect with GSAP
    if (qtranRef.current && waRef.current) {
      gsap.to(qtranRef.current, {
        y: -6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      gsap.to(waRef.current, {
        y: -6,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.3,
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 items-end pointer-events-auto"
    >
      {/* Q-Tran App Floating Button */}
      <div className="relative group flex items-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md mr-3 whitespace-nowrap pointer-events-none">
          Get Q-Tran App
        </span>
        <Link
          ref={qtranRef}
          href="/products/q-tran"
          className="w-13 h-13 rounded-full bg-gradient-to-br from-[#F2A93B] to-[#E8752C] text-white flex items-center justify-center shadow-lg shadow-orange-500/30 hover:scale-110 transition-transform duration-200 group relative"
          aria-label="Get Q-Tran App"
        >
          <Smartphone className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-400 border border-white"></span>
          </span>
        </Link>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="relative group flex items-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md mr-3 whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
        <a
          ref={waRef}
          href="https://wa.me/918790008824"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-600/30 hover:scale-110 transition-transform duration-200 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  );
}
