import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Code2,
  Briefcase,
  Users,
  Smartphone,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  Award,
  TrendingUp,
  Sparkles,
  Building2,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';
import { Component as HorizonHero } from '@/components/ui/horizon-hero-section';

export const metadata: Metadata = {
  title: "Home | RK's Brainstorm - Software • Consulting • Outsourcing",
  description: "RK's Brainstorm delivers custom software development, mobile app engineering, IT consulting, and managed technology outsourcing across global markets.",
};

const highlightCards = [
  {
    title: 'Software Solutions',
    tagline: 'SaaS, Mobile & EdTech Platforms',
    desc: 'Modern custom software engineering, scalable cloud architectures, native mobile apps, and proprietary EdTech learning management systems built to your Business Unit requirements.',
    href: '/services/training',
    icon: Code2,
    animClass: 'card-left',
    color: 'from-blue-600 to-[#1B4F8C]',
    badgeBg: 'bg-[#1B4F8C]/10 text-[#1B4F8C]',
  },
  {
    title: 'IT Consulting',
    tagline: 'Strategy, Staffing & Tech Roadmaps',
    desc: 'Strategic technology advisory, system infrastructure design, cloud transitions, and dedicated developer staffing pools mapped to your business needs.',
    href: '/services/consulting',
    icon: Briefcase,
    animClass: 'card-right',
    color: 'from-blue-600 to-[#101585]',
    badgeBg: 'bg-[#0047AB]/10 text-[#0047AB]',
  },
  {
    title: 'IT Outsourcing',
    tagline: 'Offshore Developer Hubs & Tech RPO',
    desc: 'Scalable managed IT outsourcing and technical recruitment process outsourcing (RPO) managing candidate screening and operational SLA delivery.',
    href: '/services/outsourcing',
    icon: Users,
    animClass: 'card-left',
    color: 'from-teal-500 to-[#2CA8A4]',
    badgeBg: 'bg-[#2CA8A4]/10 text-[#2CA8A4]',
  },
  {
    title: 'Q-Tran Platform',
    tagline: 'Training & Quality Transformation App',
    desc: 'Proprietary learning & transformation digital app tracking employee skill development, interactive modules, and BU-aligned workforce progress.',
    href: '/products/q-tran',
    icon: Smartphone,
    animClass: 'card-right',
    color: 'from-[#0047AB] to-[#101585]',
    badgeBg: 'bg-[#101585]/10 text-[#101585]',
  },
  {
    title: 'BMS System',
    tagline: 'Business Management & Operations',
    desc: 'Enterprise business management system streamline resource allocation, client management, project workflows, and real-time operations analytics.',
    href: '/products/bms',
    icon: LayoutDashboard,
    animClass: 'card-fade-up',
    color: 'from-indigo-600 to-blue-800',
    badgeBg: 'bg-indigo-100 text-indigo-700',
  },
];

const impactStats = [
  { value: '3+', label: 'Years Domain Expertise', icon: Award },
  { value: '100+', label: 'Enterprise Clients & MNCs', icon: Building2 },
  { value: '250+', label: 'Tech Projects Shipped', icon: Code2 },
  { value: '98%', label: 'Placement & Client Retention', icon: TrendingUp },
];

const testimonials = [
  {
    quote: "RK's Brainstorm delivered our custom enterprise dashboard ahead of schedule. Their agile dev team and clear communication reduced our time-to-market by 40%.",
    author: "VP of Engineering",
    company: "Leading Global Tech MNC",
    rating: 5,
  },
  {
    quote: "Integrating their proprietary BMS platform allowed our remote tech teams to manage resource allocation and client pipelines seamlessly.",
    author: "Head of Operations",
    company: "Enterprise Software Group",
    rating: 5,
  },
  {
    quote: "Their IT staffing team found elite React and Node.js engineers for our critical project expansion in record time. A strategic tech partner.",
    author: "Vice President Technology",
    company: "Financial Services Giant",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-0 overflow-hidden">

      {/* 3D Horizon Hero Section */}
      <HorizonHero />

      {/* Rest of the Homepage Content */}
      <div className="relative z-20 bg-white pt-20 space-y-20">

        {/* Stats Counter Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center space-y-2 card-zoom">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#1B4F8C]">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#6B7280]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Highlights Strip / Core Pillars */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 card-fade">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
              Core Business Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D]">
              Integrated Solutions for Modern Industry Demands
            </h2>
            <p className="text-base text-[#6B7280]">
              From specialized engineering squads and IT strategy to custom enterprise platforms and IT staffing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`${card.animClass} bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl opacity-10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300"></div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${card.badgeBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-[#6B7280]">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-[#101585]">{card.tagline}</span>
                      <h3 className="text-xl font-black text-[#2D2D2D] mt-1 group-hover:text-[#1B4F8C] transition-colors">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <Link
                      href={card.href}
                      className="inline-flex items-center space-x-2 text-sm font-bold text-[#1B4F8C] hover:text-[#101585] transition-colors group/link"
                    >
                      <span>Discover More</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Company Snapshot */}
        <section className="bg-[#F7F8FA] py-20 border-y border-gray-200/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              <div className="lg:col-span-6 space-y-6 card-left">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#1B4F8C] bg-[#1B4F8C]/10 px-3 py-1 rounded-full">
                  About RK&apos;s Brainstorm
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] leading-tight">
                  Delivering custom software and IT consulting solutions across India and global markets
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  RK&apos;s Brainstorm is a premier software solutions, IT consulting, and managed outsourcing company. We build custom SaaS platforms, native mobile systems, and integrate proprietary business intelligence products (such as Q-Tran and BMS) for MNCs and corporate enterprises.
                </p>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  We partner with our clients to expand their business potential by providing solutions in Custom Software Development, IT Strategy Consulting, Dedicated Developer Staffing, and managed IT outsourcing.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="bg-[#1B4F8C] hover:bg-[#153f70] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span>Read Full Company Overview</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 card-right">
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-3">
                  <div className="flex items-center space-x-3 text-[#1B4F8C]">
                    <Award className="w-6 h-6 text-[#0047AB]" />
                    <h3 className="text-lg font-bold">Multifaceted Tech Consultants</h3>
                  </div>
                  <p className="text-sm text-[#6B7280]">
                    Our strength lies in our multifaceted team of professional software engineers, cloud architects, and tech consultants specializing in modern stack delivery capabilities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-3">
                  <div className="flex items-center space-x-3 text-[#1B4F8C]">
                    <ShieldCheck className="w-6 h-6 text-[#2CA8A4]" />
                    <h3 className="text-lg font-bold">Groomed per BU Requirements</h3>
                  </div>
                  <p className="text-sm text-[#6B7280]">
                    Our agile engineering process aligns codebases, security standards, and workflow automation with your specific Business Unit (BU) requirements, ensuring rapid onboarding and execution.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Client & Sector Impact / Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#2CA8A4]">
              Client Testimonials & Sector Reach
            </span>
            <h2 className="text-3xl font-black text-[#2D2D2D]">
              Trusted by Top MNCs & Enterprise Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="card-fade-up bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-[#0047AB]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#6B7280] italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <div className="text-sm font-bold text-[#2D2D2D]">{t.author}</div>
                  <div className="text-xs font-semibold text-[#1B4F8C]">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* High Impact CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 card-zoom pb-10">
          <div className="bg-gradient-to-r from-[#0047AB] via-[#101585] to-[#1B4F8C] rounded-3xl p-10 sm:p-14 text-white shadow-2xl relative overflow-hidden">

            <div className="max-w-3xl space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Ready to Build Your Custom Software or Scale Your Tech Team?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Connect with RK&apos;s Brainstorm technology advisors today to schedule a project discovery session, request developer staffing, or see a demo of our Q-Tran and BMS platforms.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-white text-[#1B4F8C] hover:bg-gray-100 font-extrabold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Schedule Consultation →
                </Link>
                <a
                  href="tel:+918790008824"
                  className="bg-black/20 hover:bg-black/30 text-white font-bold px-7 py-4 rounded-full border border-white/20 transition-all duration-200"
                >
                  Call: +91-8790008824
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
