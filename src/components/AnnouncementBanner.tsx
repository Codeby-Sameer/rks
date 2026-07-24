'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { GraduationCap, Phone, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

const bannerItems = [
  {
    icon: Sparkles,
    text: "🎓 Enroll in our Q-Tran Training Course",
    linkText: "Learn More →",
    href: "/products/q-tran",
  },
  {
    icon: Smartphone,
    text: "📱 Download the Q-Tran App Now",
    linkText: "Get App →",
    href: "/contact#qtran-app",
  },
  {
    icon: Phone,
    text: "📞 Call us: +91-8790008824",
    linkText: "Call Now →",
    href: "tel:+918790008824",
  },
];

export default function AnnouncementBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!tickerRef.current) return;

    const content = tickerRef.current;
    const width = content.scrollWidth / 2; // Divided by 2 because items are duplicated

    tweenRef.current = gsap.to(content, {
      x: `-=${width}px`,
      ease: 'none',
      duration: 25,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % width),
      },
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  return (
    <div className="bg-[#1B4F8C] text-white text-xs sm:text-sm border-b border-white/10 overflow-hidden relative py-2 select-none z-50">
      <div 
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={tickerRef} className="inline-flex space-x-12 items-center">
          {/* Double items array for seamless looping */}
          {[...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center space-x-3 text-white/90 hover:text-white transition-colors">
              <span className="font-medium flex items-center gap-1.5">
                {item.text}
              </span>
              <Link 
                href={item.href}
                className="bg-[#F2A93B] hover:bg-[#E8752C] text-[#2D2D2D] font-semibold text-xs px-2.5 py-0.5 rounded-full transition-all duration-200 inline-flex items-center gap-1 shadow-sm hover:text-white"
              >
                <span>{item.linkText}</span>
              </Link>
              <span className="text-white/30 px-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
