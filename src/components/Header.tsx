'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { 
  ChevronDown, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Smartphone, 
  LayoutDashboard, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface DropdownItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
}

const servicesItems: DropdownItem[] = [
  {
    title: 'Training',
    desc: 'Leadership, communication & managerial skills training for MNCs and finishing school programs.',
    href: '/services/training',
    icon: GraduationCap,
  },
  {
    title: 'Consulting',
    desc: 'Executive Search & Selection, Middle Management Hiring & Project Based Hiring solutions.',
    href: '/services/consulting',
    icon: Briefcase,
  },
  {
    title: 'Outsourcing',
    desc: 'End-to-end RPO & integrated leadership services tailored to global & local demands.',
    href: '/services/outsourcing',
    icon: Users,
  },
];

const productItems: DropdownItem[] = [
  {
    title: 'Q-Tran',
    desc: 'Comprehensive training & quality transformation platform with dedicated mobile app.',
    href: '/products/q-tran',
    icon: Smartphone,
  },
  {
    title: 'BMS',
    desc: 'Business Management System empowering stream-lined resource and operations tracking.',
    href: '/products/bms',
    icon: LayoutDashboard,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'products' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  // GSAP animation for dropdown expansion
  useEffect(() => {
    const activeRef = activeDropdown === 'services' ? servicesMenuRef.current : activeDropdown === 'products' ? productsMenuRef.current : null;
    
    if (activeRef) {
      gsap.fromTo(
        activeRef,
        { opacity: 0, y: 12, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
      );
    }
  }, [activeDropdown]);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.png" 
                alt="RK's Brainstorm Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#1B4F8C] group-hover:text-[#2CA8A4] transition-colors leading-tight">
                RK&apos;s Brainstorm
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8752C]">
                Training • Consulting • Outsourcing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-semibold transition-colors py-2 ${
                pathname === '/' ? 'text-[#1B4F8C] font-bold border-b-2 border-[#1B4F8C]' : 'text-gray-700 hover:text-[#1B4F8C]'
              }`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-semibold transition-colors py-2 ${
                pathname === '/about' ? 'text-[#1B4F8C] font-bold border-b-2 border-[#1B4F8C]' : 'text-gray-700 hover:text-[#1B4F8C]'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`flex items-center space-x-1 text-sm font-semibold py-2 transition-colors ${
                  pathname.startsWith('/services') ? 'text-[#1B4F8C] font-bold' : 'text-gray-700 hover:text-[#1B4F8C]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#1B4F8C]' : ''}`} />
              </button>

              {/* Services Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div 
                  ref={servicesMenuRef}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 mt-1 z-50 overflow-hidden"
                >
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Our Core Offerings
                  </div>
                  <div className="space-y-1">
                    {servicesItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#1B4F8C] group-hover/item:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-bold text-[#2D2D2D] group-hover/item:text-[#1B4F8C] flex items-center gap-1">
                              {item.title}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-[#E8752C]" />
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-100 px-3 pb-1">
                    <Link href="/services" className="text-xs font-semibold text-[#2CA8A4] hover:text-[#1B4F8C] flex items-center justify-between">
                      <span>View All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Product Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className={`flex items-center space-x-1 text-sm font-semibold py-2 transition-colors ${
                  pathname.startsWith('/products') ? 'text-[#1B4F8C] font-bold' : 'text-gray-700 hover:text-[#1B4F8C]'
                }`}
              >
                <span>Our Product</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-[#1B4F8C]' : ''}`} />
              </button>

              {/* Products Dropdown Menu */}
              {activeDropdown === 'products' && (
                <div 
                  ref={productsMenuRef}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 mt-1 z-50 overflow-hidden"
                >
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Proprietary Tech Solutions
                  </div>
                  <div className="space-y-1">
                    {productItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#F2A93B]/15 text-[#E8752C] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#E8752C] group-hover/item:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-bold text-[#2D2D2D] group-hover/item:text-[#E8752C] flex items-center gap-1">
                              {item.title}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-[#1B4F8C]" />
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/contact" 
              className={`text-sm font-semibold transition-colors py-2 ${
                pathname === '/contact' ? 'text-[#1B4F8C] font-bold border-b-2 border-[#1B4F8C]' : 'text-gray-700 hover:text-[#1B4F8C]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#1B4F8C] hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link 
            href="/" 
            className="block py-2 text-base font-semibold text-gray-800 hover:text-[#1B4F8C]"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block py-2 text-base font-semibold text-gray-800 hover:text-[#1B4F8C]"
          >
            About Us
          </Link>
          
          <div className="space-y-1 pl-2 border-l-2 border-[#1B4F8C]/20 my-2">
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider py-1">Services</span>
            {servicesItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block py-1.5 text-sm font-medium text-gray-700 hover:text-[#1B4F8C]"
              >
                • {item.title}
              </Link>
            ))}
          </div>

          <div className="space-y-1 pl-2 border-l-2 border-[#E8752C]/20 my-2">
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider py-1">Our Product</span>
            {productItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block py-1.5 text-sm font-medium text-gray-700 hover:text-[#E8752C]"
              >
                • {item.title}
              </Link>
            ))}
          </div>

          <Link 
            href="/contact" 
            className="block py-2 text-base font-semibold text-gray-800 hover:text-[#1B4F8C]"
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <Link 
              href="/contact" 
              className="w-full bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white text-center font-bold px-4 py-3 rounded-xl block shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
