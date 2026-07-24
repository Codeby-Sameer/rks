'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import {
  ChevronDown,
  Code2,
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
  href: string;
  icon: React.ElementType;
}

const servicesItems: DropdownItem[] = [
  {
    title: 'Software Solutions',
    href: '/services/training',
    icon: Code2,
  },
  {
    title: 'IT Consulting',
    href: '/services/consulting',
    icon: Briefcase,
  },
  {
    title: 'IT Outsourcing',
    href: '/services/outsourcing',
    icon: Users,
  },
];

const productItems: DropdownItem[] = [
  {
    title: 'Q-Tran',
    href: '/products/q-tran',
    icon: Smartphone,
  },
  {
    title: 'BMS',
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
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const productsTriggerRef = useRef<HTMLButtonElement>(null);

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

  // Click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // Check if click was outside the menus and triggers
      const clickedOutsideServices =
        !servicesMenuRef.current?.contains(target) &&
        !servicesTriggerRef.current?.contains(target);

      const clickedOutsideProducts =
        !productsMenuRef.current?.contains(target) &&
        !productsTriggerRef.current?.contains(target);

      if (clickedOutsideServices && clickedOutsideProducts) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <Link href="/" className="flex items-center group py-1">
            <div className="relative h-14 w-44 sm:w-52 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/rkslogo.png"
                alt="RK's Brainstorm - Quality | Transformation"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors py-2 ${pathname === '/' ? 'text-[#1B4F8C] font-bold border-b-2 border-[#1B4F8C]' : 'text-gray-700 hover:text-[#1B4F8C]'
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors py-2 ${pathname === '/about' ? 'text-[#1B4F8C] font-bold border-b-2 border-[#1B4F8C]' : 'text-gray-700 hover:text-[#1B4F8C]'
                }`}
            >
              About Us
            </Link>

            {/* Services Dropdown Trigger */}
            <div className="relative">
              <button
                ref={servicesTriggerRef}
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`flex items-center space-x-1 text-sm font-semibold py-2 transition-colors ${pathname.startsWith('/services') ? 'text-[#1B4F8C] font-bold' : 'text-gray-700 hover:text-[#1B4F8C]'
                  }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#1B4F8C]' : ''}`} />
              </button>

              {/* Services Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div
                  ref={servicesMenuRef}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 mt-2 z-50 overflow-hidden"
                >
                  <div className="space-y-1">
                    {servicesItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#1B4F8C] group-hover/item:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-bold text-[#2D2D2D] group-hover/item:text-[#1B4F8C] flex items-center gap-1">
                              {item.title}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-[#0047AB]" />
                            </div>

                          </div>
                        </Link>
                      );
                    })}
                  </div>

                </div>
              )}
            </div>

            {/* Our Product Dropdown Trigger */}
            <div className="relative">
              <button
                ref={productsTriggerRef}
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className={`flex items-center space-x-1 text-sm font-semibold py-2 transition-colors ${pathname.startsWith('/products') ? 'text-[#1B4F8C] font-bold' : 'text-gray-700 hover:text-[#1B4F8C]'
                  }`}
              >
                <span>Our Product</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-[#1B4F8C]' : ''}`} />
              </button>

              {/* Products Dropdown Menu */}
              {activeDropdown === 'products' && (
                <div
                  ref={productsMenuRef}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 mt-2 z-50 overflow-hidden"
                >

                  <div className="space-y-1">
                    {productItems.map((item) => {
                      const Icon = item.icon;
                      const isQTran = item.title === 'Q-Tran';
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 shadow-xs flex items-center justify-center shrink-0 mt-0.5 relative overflow-hidden">
                            {isQTran ? (
                              <Image src="/q-tranlogo.jpg" alt="Q-Tran Logo" fill className="object-cover" />
                            ) : (
                              <Icon className="w-5 h-5 text-[#1B4F8C]" />
                            )}
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-bold text-[#2D2D2D] group-hover/item:text-[#101585] flex items-center gap-1">
                              {item.title}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-[#1B4F8C]" />
                            </div>

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
              className={`text-sm font-semibold transition-colors py-2 ${pathname === '/contact' ? 'text-[#1B4F8C] font-bold border-b-2 border-[#1B4F8C]' : 'text-gray-700 hover:text-[#1B4F8C]'
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0047AB] to-[#101585] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-cobalt-500/25 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
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

          <div className="space-y-1 pl-2 border-l-2 border-[#101585]/20 my-2">
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider py-1">Our Product</span>
            {productItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block py-1.5 text-sm font-medium text-gray-700 hover:text-[#101585]"
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
              className="w-full bg-gradient-to-r from-[#0047AB] to-[#101585] text-white text-center font-bold px-4 py-3 rounded-xl block shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
