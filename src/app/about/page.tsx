import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Building2,
  Users,
  Target,
  Compass,
  ShieldCheck,
  Award,
  Code,
  Briefcase,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | RK's Brainstorm - Company Overview",
  description: "Learn about RK's Brainstorm - a premier software solutions, IT consulting, and managed outsourcing company with 3+ years domain expertise.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">

      {/* About Banner / Header */}
      <section className="relative bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Company Overview</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About RK&apos;s Brainstorm
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering enterprises with custom software engineering, IT consulting, and managed technology outsourcing across global and local industry sectors.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section 1: Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 card-left">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
              01. Foundation & Vision
            </span>
            <h2 className="text-3xl font-black text-[#2D2D2D]">Who We Are</h2>
            <p className="text-base text-[#6B7280] leading-relaxed text-justify">
              RK&apos;s Brainstorm is a premier software solutions, IT consulting, and managed outsourcing company. We engineer custom SaaS architectures, high-performance mobile apps, and integrate proprietary systems like Q-Tran and BMS. Along with digital products, we deliver high-caliber tech talent staffing and training platforms to bridge resource gaps and align teams with specific Business Unit requirements.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <Code className="w-6 h-6 text-[#1B4F8C] mb-2" />
                <h4 className="text-sm font-bold text-[#2D2D2D]">Custom Software</h4>
                <p className="text-xs text-[#6B7280] mt-1">Tailored SaaS and mobile platforms.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <Users className="w-6 h-6 text-[#101585] mb-2" />
                <h4 className="text-sm font-bold text-[#2D2D2D]">IT Staffing</h4>
                <p className="text-xs text-[#6B7280] mt-1">Specialized engineering teams.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 card-right">
            <div className="bg-gradient-to-br from-white to-[#F7F8FA] p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xl space-y-6 relative overflow-hidden">
              <div className="w-16 h-16 relative rounded-2xl overflow-hidden shadow-md">
                <Image src="/rkslogo.png" alt="RK's Brainstorm Logo" fill className="object-contain p-1" />
              </div>
              <blockquote className="text-lg font-bold text-[#1B4F8C] italic leading-snug">
                &ldquo;Our mission is to build scalable technology solutions and support client Business Units with dedicated tech talent and systems.&rdquo;
              </blockquote>
              <div className="space-y-3 pt-2 text-sm text-[#6B7280]">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#2CA8A4]" />
                  <span>3+ Years Tech Domain Expertise in Indian & Global Markets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#2CA8A4]" />
                  <span>Custom App Development & System Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#2CA8A4]" />
                  <span>Managed IT Outsourcing & Technical RPO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 card-fade">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Briefcase className="w-8 h-8 text-[#0047AB]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">IT Consulting</h4>
                <p className="text-xs text-[#6B7280]">Tech roadmap, stack choice, & cloud advisory.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Target className="w-8 h-8 text-[#101585]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">Software Dev</h4>
                <p className="text-xs text-[#6B7280]">Scalable web and mobile engineering.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Compass className="w-8 h-8 text-[#2CA8A4]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">Digital Products</h4>
                <p className="text-xs text-[#6B7280]">Proprietary systems like Q-Tran and BMS.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Users className="w-8 h-8 text-[#1B4F8C]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">IT Outsourcing</h4>
                <p className="text-xs text-[#6B7280]">Offshore development & Tech RPO.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 card-fade-up">
            <div className="w-12 h-12 rounded-2xl bg-[#101585]/10 text-[#101585] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#1B4F8C]">
              02. Core Offerings & Solutions
            </span>
            <h2 className="text-3xl font-black text-[#2D2D2D]">What We Do</h2>
            <p className="text-base text-[#6B7280] leading-relaxed text-justify">
              We partner with our clients to expand their business potential by providing solutions in Custom Software Development, IT Strategy Consulting, Dedicated Developer Staffing, and managed IT outsourcing. With three years of deep domain expertise, we have successfully delivered digital solutions across global and local industry-specific demands.
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                className="bg-[#101585] hover:bg-[#0a0d5c] text-white font-bold px-6 py-3 rounded-full shadow-md inline-flex items-center gap-2"
              >
                <span>Explore Full Service Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Our Strength */}
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-zoom space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2CA8A4]/10 text-[#2CA8A4] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
              03. Specialized Expertise
            </span>
            <h2 className="text-3xl font-black text-[#2D2D2D]">Our Strength</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed text-justify">
              Our strength lies in our multifaceted team of software engineers, cloud architects, and tech recruitment specialists who understand the complexities of modern architectures, system scaling, and technical talent acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <h4 className="text-base font-bold text-[#1B4F8C]">Engineering Excellence</h4>
              <p className="text-xs text-[#6B7280]">Deep domain developers building robust and clean web/mobile platforms.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <h4 className="text-base font-bold text-[#101585]">Elite Tech Network</h4>
              <p className="text-xs text-[#6B7280]">Direct access to senior developers, project leads, and CTOs.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <h4 className="text-base font-bold text-[#2CA8A4]">Agile Delivery</h4>
              <p className="text-xs text-[#6B7280]">Continuous integration pipelines and modern project management standards.</p>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B4F8C] rounded-3xl p-10 text-white text-center space-y-6">
          <h2 className="text-3xl font-black">Partner with RK&apos;s Brainstorm</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Discover how our custom software solutions, IT strategy consulting, and managed developer squads can scale your business.
          </p>
          <div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0047AB] to-[#101585] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
            >
              <span>Get in Touch with Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
