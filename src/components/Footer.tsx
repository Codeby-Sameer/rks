import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B4F8C] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2CA8A4]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F2A93B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-md">
                <Image 
                  src="/logo.png" 
                  alt="RK's Brainstorm Logo" 
                  fill 
                  className="object-contain p-1" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">RK&apos;s Brainstorm</h3>
                <p className="text-xs text-[#F2A93B] font-semibold tracking-wider uppercase">Training • Consulting • Outsourcing</p>
              </div>
            </Link>
            <p className="text-sm text-blue-100/80 leading-relaxed max-w-md">
              A premier qualitative training, consulting, and workforce outsourcing organization. Partnering with MNCs, corporate enterprises, and premier educational institutions in India to groom high-caliber professionals and deliver end-to-end recruitment solutions.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 text-xs bg-white/10 px-3 py-1.5 rounded-full text-blue-100">
                <ShieldCheck className="w-4 h-4 text-[#F2A93B]" />
                <span>3+ Years Domain Expertise</span>
              </div>
              <div className="flex items-center space-x-2 text-xs bg-white/10 px-3 py-1.5 rounded-full text-blue-100">
                <HeartHandshake className="w-4 h-4 text-[#2CA8A4]" />
                <span>Global & Local Delivery</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span>Quick Links</span>
              <span className="w-6 h-0.5 bg-[#F2A93B]"></span>
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link href="/" className="hover:text-[#F2A93B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2CA8A4]" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F2A93B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2CA8A4]" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F2A93B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2CA8A4]" /> Core Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F2A93B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2CA8A4]" /> Products (Q-Tran & BMS)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F2A93B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2CA8A4]" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Products */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span>Offerings</span>
              <span className="w-6 h-0.5 bg-[#E8752C]"></span>
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link href="/services/training" className="hover:text-[#F2A93B] transition-colors">
                  Corporate & Finishing School Training
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-[#F2A93B] transition-colors">
                  Executive Search & Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/outsourcing" className="hover:text-[#F2A93B] transition-colors">
                  Recruitment Process Outsourcing (RPO)
                </Link>
              </li>
              <li>
                <Link href="/products/q-tran" className="hover:text-[#F2A93B] transition-colors text-[#F2A93B] font-medium">
                  Q-Tran Training Platform App
                </Link>
              </li>
              <li>
                <Link href="/products/bms" className="hover:text-[#F2A93B] transition-colors">
                  BMS Business Management System
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span>Get In Touch</span>
              <span className="w-6 h-0.5 bg-[#2CA8A4]"></span>
            </h4>
            <div className="space-y-3 text-sm text-blue-100/80">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#F2A93B] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">+91-8790008824</p>
                  <p className="text-xs text-blue-200">+91-8790008825</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#2CA8A4] shrink-0" />
                <a href="mailto:info@rksbrainstorm.com" className="hover:text-[#F2A93B] transition-colors">
                  info@rksbrainstorm.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#E8752C] shrink-0 mt-1" />
                <p className="text-xs leading-relaxed text-blue-200">
                  Headquarters & Regional Corporate Hubs across India.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-blue-200/60 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} RK&apos;s Brainstorm. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
