import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  GraduationCap,
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

export const metadata: Metadata = {
  title: "Home | RK's Brainstorm - Training • Consulting • Outsourcing",
  description: "RK's Brainstorm delivers qualitative corporate training, executive search consulting, and recruitment process outsourcing across India and global markets.",
};

const highlightCards = [
  {
    title: 'Qualitative Training',
    tagline: 'Leadership & Finishing School',
    desc: 'Impactful training in leadership, communication, and managerial skills for MNCs and C2C, alongside specialized finishing school programs for top educational institutions.',
    href: '/services/training',
    icon: GraduationCap,
    animClass: 'card-left',
    color: 'from-blue-600 to-[#1B4F8C]',
    badgeBg: 'bg-[#1B4F8C]/10 text-[#1B4F8C]',
  },
  {
    title: 'Strategic Consulting',
    tagline: 'Executive Search & Leadership Hiring',
    desc: 'Expanding client business potential through Executive Search & Selection, Middle Management Hiring, and Project Based Hiring powered by 3+ years of domain expertise.',
    href: '/services/consulting',
    icon: Briefcase,
    animClass: 'card-right',
    color: 'from-amber-500 to-[#E8752C]',
    badgeBg: 'bg-[#F2A93B]/15 text-[#E8752C]',
  },
  {
    title: 'Workforce Outsourcing',
    tagline: 'Integrated RPO Solutions',
    desc: 'End-to-end Recruitment Process Outsourcing (RPO) and scalable workforce solutions delivering specialized talent for global and local industry demands.',
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
    color: 'from-orange-500 to-amber-600',
    badgeBg: 'bg-orange-100 text-orange-600',
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
  { value: '50,000+', label: 'Professionals & Students Groomed', icon: GraduationCap },
  { value: '98%', label: 'Placement & Client Retention', icon: TrendingUp },
];

const testimonials = [
  {
    quote: "RK's Brainstorm transformed our middle-management onboarding. Their BU-aligned finishing school approach reduced our time-to-productivity by 40%.",
    author: "Senior HR Director",
    company: "Leading Global Tech MNC",
    rating: 5,
  },
  {
    quote: "The Q-Tran app enabled our distributed workforce to complete leadership and communication modules seamlessly. High quality content and tracking!",
    author: "Head of Talent Development",
    company: "Enterprise Manufacturing Corp",
    rating: 5,
  },
  {
    quote: "Their Executive Search team found key niche leaders for our critical expansion project within record timeframe. A truly strategic partner.",
    author: "Vice President Operations",
    company: "Financial Services Giant",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16 overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-[#F7F8FA] to-blue-50/50 pt-12 pb-24 border-b border-gray-100">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#1B4F8C]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F2A93B]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1B4F8C]/10 to-[#2CA8A4]/10 border border-[#1B4F8C]/20 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-[#E8752C]" />
                <span className="text-xs sm:text-sm font-bold text-[#1B4F8C]">
                  Empowering Talent & Enterprise Growth
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2D2D2D] tracking-tight leading-[1.15]">
                <span className="text-[#1B4F8C]">Training</span> •{' '}
                <span className="text-[#E8752C]">Consulting</span> •{' '}
                <span className="text-[#2CA8A4]">Outsourcing</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-2xl">
                RK&apos;s Brainstorm partners with MNCs, corporate companies, and top educational institutions in India to deliver qualitative training programs, executive search consulting, and integrated workforce outsourcing.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 text-base"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/contact"
                  className="bg-[#1B4F8C] hover:bg-[#153f70] text-white font-bold px-7 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 text-base"
                >
                  <span>Contact Us</span>
                </Link>

                <Link
                  href="/products/q-tran"
                  className="bg-white border border-gray-200 hover:border-[#2CA8A4] text-[#1B4F8C] font-semibold px-6 py-3.5 rounded-full hover:bg-teal-50/50 transition-all duration-200 flex items-center gap-2 text-base"
                >
                  <Smartphone className="w-5 h-5 text-[#2CA8A4]" />
                  <span>Q-Tran App</span>
                </Link>
              </div>

              {/* Quick trust badges */}
              <div className="pt-6 border-t border-gray-200/60 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2CA8A4]" />
                  <span className="text-xs font-semibold text-[#2D2D2D]">Leadership Skills</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2CA8A4]" />
                  <span className="text-xs font-semibold text-[#2D2D2D]">Executive Search</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2CA8A4]" />
                  <span className="text-xs font-semibold text-[#2D2D2D]">End-to-End RPO</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 backdrop-blur-xl">
                {/* Header Logo Card */}
                <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1B4F8C] to-[#2CA8A4] p-1 shadow-md">
                    <Image src="/rkslogo.png" alt="RK's Brainstorm" fill className="object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#1B4F8C]">RK&apos;s Brainstorm</h3>
                    <p className="text-xs text-[#E8752C] font-bold">Qualitative Solutions Partner</p>
                  </div>
                </div>

                {/* Feature highlights badge grid */}
                <div className="py-6 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-gray-100 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B4F8C] text-white flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2D2D2D]">Corporate Training</h4>
                      <p className="text-xs text-[#6B7280]">Leadership, Managerial & Communication</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-gray-100 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F2A93B] text-white flex items-center justify-center font-bold">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2D2D2D]">Talent Consulting</h4>
                      <p className="text-xs text-[#6B7280]">Executive Search & Project Hiring</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-gray-100 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2CA8A4] text-white flex items-center justify-center font-bold">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2D2D2D]">Q-Tran & BMS Platforms</h4>
                      <p className="text-xs text-[#6B7280]">Digital Learning & Operations Systems</p>
                    </div>
                  </div>
                </div>

                {/* Live Stats Floating Tag */}
                <div className="bg-gradient-to-r from-[#1B4F8C] to-[#2CA8A4] text-white p-4 rounded-2xl flex items-center justify-between shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-[#F2A93B] animate-bounce" />
                    <div>
                      <div className="text-xs font-semibold text-blue-100">Client Satisfaction Rate</div>
                      <div className="text-lg font-black">98.5% Proven Track Record</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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

      {/* Highlights Strip / Core Pillars (Alternating card-left / card-right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
            Core Business Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D]">
            Integrated Solutions for Modern Industry Demands
          </h2>
          <p className="text-base text-[#6B7280]">
            From specialized leadership grooming to strategic C-suite executive recruitment and proprietary digital platforms.
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
                    <span className="text-xs font-bold text-[#E8752C]">{card.tagline}</span>
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
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#1B4F8C] hover:text-[#E8752C] transition-colors group/link"
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

      {/* Company Snapshot (Pulling directly from About Us Copy) */}
      <section className="bg-[#F7F8FA] py-20 border-y border-gray-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6 card-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#1B4F8C] bg-[#1B4F8C]/10 px-3 py-1 rounded-full">
                About RK&apos;s Brainstorm
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] leading-tight">
                Impacting qualitative training & executive search across India and global markets
              </h2>
              <p className="text-base text-[#6B7280] leading-relaxed">
                RK&apos;s Brainstorm is a well-known Training – Consulting – Outsourcing organization impacting qualitative training programs like leadership skills, communication skills, and managerial skills to MNCs and C2C, along with finishing school programs for corporate companies and top educational institutions in India.
              </p>
              <p className="text-base text-[#6B7280] leading-relaxed">
                We partner with our clients to expand their business potential by providing solutions in Executive Search & Selection, Middle Management Hiring, Project Based Hiring, and Recruitment Process Outsourcing.
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
                  <Award className="w-6 h-6 text-[#F2A93B]" />
                  <h3 className="text-lg font-bold">Multifaceted Team of Consultants</h3>
                </div>
                <p className="text-sm text-[#6B7280]">
                  Our strength lies in our multifaceted team of professional consultants, highly specialized and experienced in the industries/sectors they serve — associated with top talent capable of harnessing new pools of potential.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-3">
                <div className="flex items-center space-x-3 text-[#1B4F8C]">
                  <ShieldCheck className="w-6 h-6 text-[#2CA8A4]" />
                  <h3 className="text-lg font-bold">Groomed per BU Requirements</h3>
                </div>
                <p className="text-sm text-[#6B7280]">
                  Our experienced training team grooms employees and students as per specific Business Unit (BU) requirements, ensuring rapid onboarding and high performance.
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
            Trusted by Top MNCs & Premier Educational Institutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card-fade-up bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-[#F2A93B]">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 card-zoom">
        <div className="bg-gradient-to-r from-[#F2A93B] via-[#E8752C] to-[#1B4F8C] rounded-3xl p-10 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Ready to Accelerate Your Workforce & Hiring Capabilities?
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Connect with RK&apos;s Brainstorm consultants today to schedule corporate training modules, executive search consulting, or request a demo of the Q-Tran and BMS platforms.
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
  );
}
