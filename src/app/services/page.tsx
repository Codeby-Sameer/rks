import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Services | RK's Brainstorm - Training, Consulting & Outsourcing",
  description: "Comprehensive corporate training, executive search consulting, and recruitment process outsourcing (RPO) solutions for MNCs and educational institutions.",
};

const serviceCards = [
  {
    title: 'Training & Development',
    subtitle: 'Leadership, Managerial & Finishing Schools',
    desc: 'Impactful training programs delivering qualitative improvements in leadership, communication, and managerial capabilities for MNCs and C2C. Plus, customized finishing school programs for educational institutions to groom students to exact BU requirements.',
    href: '/services/training',
    icon: GraduationCap,
    features: [
      'Leadership & Managerial Skills Training',
      'Corporate Finishing School Programs',
      'BU-Aligned Employee Grooming',
      'Communication & Professional Soft Skills',
    ],
    color: 'from-blue-600 to-[#1B4F8C]',
    badgeBg: 'bg-[#1B4F8C]/10 text-[#1B4F8C]',
    anim: 'card-left',
  },
  {
    title: 'Strategic Consulting',
    subtitle: 'Executive Search & Leadership Hiring',
    desc: 'Partnering with organizations to expand business potential through Executive Search & Selection, Middle Management Hiring, and Project Based Hiring. Powered by 3+ years of domain expertise across global and local industry demands.',
    href: '/services/consulting',
    icon: Briefcase,
    features: [
      'Executive Search & C-Suite Selection',
      'Middle Management Leadership Hiring',
      'Project Based Scalable Hiring',
      'Sector-Specific Domain Consultation',
    ],
    color: 'from-amber-500 to-[#E8752C]',
    badgeBg: 'bg-[#F2A93B]/15 text-[#E8752C]',
    anim: 'card-fade-up',
  },
  {
    title: 'Workforce Outsourcing',
    tagline: 'End-to-End RPO Solutions',
    subtitle: 'Recruitment Process Outsourcing',
    desc: 'Integrated suite of leadership and recruitment outsourcing services. We take complete ownership of talent acquisition, candidate screening, and operational deployment for industry-specific requirements.',
    href: '/services/outsourcing',
    icon: Users,
    features: [
      'End-to-End RPO (Recruitment Process Outsourcing)',
      'Integrated Leadership Services Suite',
      'Global & Local Industry Demand Delivery',
      'SLA-Backed Scalable Talent Pipelines',
    ],
    color: 'from-teal-500 to-[#2CA8A4]',
    badgeBg: 'bg-[#2CA8A4]/10 text-[#2CA8A4]',
    anim: 'card-right',
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F2A93B]">
            <Sparkles className="w-4 h-4" />
            <span>Our Core Service Offerings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Training • Consulting • Outsourcing
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Customized talent development, executive search, and recruitment process outsourcing designed to harness new pools of corporate potential.
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
                    <span className="text-xs font-bold text-[#E8752C]">{service.subtitle}</span>
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
                    <span>View Detailed Page</span>
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
              Tailored to Global & Local Industry-Specific Demands
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              With 3+ years of deep domain expertise and a multifaceted team of professional consultants, RK&apos;s Brainstorm seamlessly aligns with your Business Unit requirements to deliver immediate impact.
            </p>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
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
