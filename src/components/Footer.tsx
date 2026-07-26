import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-16 pb-12 border-t border-black/10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="px-4 py-2 inline-block group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-20 w-64">
                  <Image
                    src="/rkslogo.png"
                    alt="RK's Brainstorm Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </Link>
            <p className="text-sm text-slate-700 leading-relaxed max-w-md">
              A premier software solutions, IT consulting, and managed outsourcing company. Empowering enterprises with custom technology, proprietary EdTech platforms, and high-caliber tech talent across India and global markets.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 text-xs bg-gradient-to-r from-[#0047AB] to-[#101585] px-3 py-1.5 rounded-full text-white">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className='text-white'>3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-xs bg-gradient-to-r from-[#0047AB] to-[#101585] px-3 py-1.5 rounded-full text-white">
                <HeartHandshake className="w-4 h-4 text-white" />
                <span className='text-white'>Global & Local Delivery</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
              <span>Quick Links</span>
              <span className="w-6 h-0.5 bg-[#0047AB]"></span>
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link href="/" className="hover:text-[#0047AB] text-slate-700 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0047AB] text-slate-700 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0047AB] text-slate-700 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700" /> Core Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#0047AB] text-slate-700 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700" /> Products (Q-Tran & BMS)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0047AB] text-slate-700 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Products */}
          <div>
            <h4 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
              <span>Offerings</span>
              <span className="w-6 h-0.5 bg-[#101585]"></span>
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link href="/services/training" className="hover:text-[#0047AB] text-slate-700 transition-colors">
                  Software Solutions & Custom Dev
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-[#0047AB] text-slate-700 transition-colors">
                  IT Consulting & Tech Staffing
                </Link>
              </li>
              <li>
                <Link href="/services/outsourcing" className="hover:text-[#0047AB] text-slate-700 transition-colors">
                  IT Outsourcing & Managed Services
                </Link>
              </li>
              <li>
                <Link href="/products/q-tran" className="hover:text-[#0047AB] text-slate-700 transition-colors text-[#0047AB] text-slate-700 font-medium">
                  Q-Tran Training & QA Platform
                </Link>
              </li>
              <li>
                <Link href="/products/bms" className="hover:text-[#0047AB] text-slate-700 transition-colors">
                  BMS Business Management System
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
              <span>Get In Touch</span>
              <span className="w-6 h-0.5 bg-[#2CA8A4]"></span>
            </h4>
            <div className="space-y-3 text-sm text-blue-100/80">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#0047AB] text-slate-700 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-700">+91-8790008824</p>
                  <p className="font-semibold text-slate-700">+91-8790008825</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                <a href="mailto:info@rksbrainstorm.com" className="hover:text-[#0047AB] font-semibold text-slate-700 transition-colors">
                  info@rksbrainstorm.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#101585] shrink-0 mt-1" />
                <p className="font-semibold leading-relaxed text-slate-700">
                  Headquarters & Regional Corporate Hubs across India.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-700/60 space-y-4 md:space-y-0">
          <p className='text-slate-700'>© {new Date().getFullYear()} RK&apos;s Brainstorm. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/sitemap.xml" className="hover:text-slate-700 transition-colors">
              Sitemap
            </Link>
            <Link href="/privacy" className="hover:text-slate-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
