import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Code2, 
  Briefcase, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "IT Services & Tech Solutions | RK's Brainstorm",
  description: "Enterprise software solutions, IT consulting, developer staffing, and technical recruitment process outsourcing (RPO) solutions.",
};

const serviceCards = [
  {
    title: 'Software Solutions',
    subtitle: 'SaaS, Mobile & EdTech Platforms',
    desc: 'Modern custom software engineering, scalable cloud applications, native mobile apps, and proprietary EdTech testing platforms built to your precise Business Unit requirements.',
    href: '/services/training',
    icon: Code2,
    features: [
      'Custom SaaS & Web Development',
      'iOS & Android App Engineering',
      'Proprietary EdTech & Learning Platforms',
      'Cloud Architecture & Core APIs',
    ],
    color: 'from-blue-600 to-[#1B4F8C]',
    badgeBg: 'bg-[#1B4F8C]/10 text-[#1B4F8C]',
    subtitleColor: 'text-[#1B4F8C]',
    anim: 'card-left',
  },
  {
    title: 'IT Consulting',
    subtitle: 'Strategy, Staffing & Technology Roadmaps',
    desc: 'Strategic technology advisory, infrastructure architecture, cloud migration strategy, and technical team recruitment to scale your engineering pipelines.',
    href: '/services/consulting',
    icon: Briefcase,
    features: [
      'CTO & Technical Leadership Search',
      'Dedicated Developer Staffing Pools',
      'Cloud & System Scaling Strategy',
      'Agile Product Lifecycle Audits',
    ],
    color: 'from-indigo-600 to-[#101585]',
    badgeBg: 'bg-[#0047AB]/10 text-[#0047AB]',
    subtitleColor: 'text-[#101585]',
    anim: 'card-fade-up',
  },
  {
    title: 'IT Outsourcing',
    subtitle: 'Offshore Developer Hubs & Tech RPO',
    desc: 'End-to-end technical recruitment process outsourcing (RPO) and managed offshore development centers delivering global SLA-driven software engineering capacity.',
    href: '/services/outsourcing',
    icon: Users,
    features: [
      'Dedicated Offshore Developer Squads',
      'Full-Lifecycle Technical RPO',
      'Managed Software SLA Delivery',
      'Global Technical Support Teams',
    ],
    color: 'from-teal-500 to-[#2CA8A4]',
    badgeBg: 'bg-[#2CA8A4]/10 text-[#2CA8A4]',
    subtitleColor: 'text-[#2CA8A4]',
    anim: 'card-right',
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Our Core Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Software • Consulting • Outsourcing
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Custom software engineering, IT consulting strategy, and managed tech outsourcing solutions designed to scale your technical capability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`${service.anim} bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${service.badgeBg} flex items-center justify-center`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <div>
                    <span className={`text-xs font-bold ${service.subtitleColor}`}>{service.subtitle}</span>
                    <h2 className="text-2xl font-black text-[#2D2D2D] mt-1 group-hover:text-[#1B4F8C] transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Highlights:</div>
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                        <CheckCircle2 className="w-4 h-4 text-[#2CA8A4] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-100">
                  <Link
                    href={service.href}
                    className="w-full bg-[#1B4F8C] hover:bg-[#153f70] text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-between transition-colors shadow-md"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Domain Expertise Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center card-zoom">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-black text-[#2D2D2D]">
              Delivering Custom Technical Services Globally
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              With 3+ years of technical domain expertise and a multifaceted team of software engineers, consultants, and offshore coordinators, RK&apos;s Brainstorm aligns with your Business Unit requirements to scale digital delivery.
            </p>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0047AB] to-[#101585] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Request Service Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
