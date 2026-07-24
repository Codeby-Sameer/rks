import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Users, 
  Layers, 
  Workflow, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Outsourcing Services | RK's Brainstorm - RPO Solutions",
  description: "End-to-end Recruitment Process Outsourcing (RPO) and integrated workforce management delivering global and local industry solutions.",
};

const rpoBenefits = [
  {
    title: 'End-to-End RPO Delivery',
    desc: 'Complete ownership of your recruitment lifecycle — from candidate sourcing and screening to onboarding and BU compliance.',
    icon: Workflow,
  },
  {
    title: 'Integrated Leadership Suite',
    desc: 'Harmonizing executive hiring, volume staffing, and qualitative training under a single SLA-driven framework.',
    icon: Layers,
  },
  {
    title: 'Global & Local Flexibility',
    desc: 'Scalable deployment models catering to MNC global offshore hubs as well as local Indian enterprise demands.',
    icon: Globe2,
  },
  {
    title: 'Domain-Specialized Staffing',
    desc: 'Pre-screened talent pools prepared for immediate onboarding across IT, engineering, operations, and management roles.',
    icon: Building,
  },
];

export default function OutsourcingPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#F2A93B]">
            <Sparkles className="w-4 h-4" />
            <span>Integrated RPO & Workforce Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Recruitment Process Outsourcing
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Delivering Recruitment Process Outsourcing (RPO) through an integrated suite of leadership services tailored for global and local industry-specific demands.
          </p>
        </div>
      </section>

      {/* Main Copy Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-fade space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2CA8A4]">
            Integrated Leadership & Staffing Suite
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Global & Local Industry-Specific Delivery
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed text-justify">
            With three years of deep domain expertise, RK&apos;s Brainstorm provides end-to-end RPO solutions that eliminate recruitment bottlenecks. Our multifaceted team of consultants manages candidate pipelines, qualitative screening, and BU alignment so you can focus on core business strategy.
          </p>
        </div>
      </section>

      {/* RPO Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
            Why Partner with RK&apos;s Brainstorm RPO
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Comprehensive Outsourcing Advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rpoBenefits.map((item, idx) => {
            const Icon = item.icon;
            const anim = idx % 2 === 0 ? 'card-left' : 'card-right';
            return (
              <div key={item.title} className={`${anim} bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all space-y-4`}>
                <div className="w-14 h-14 rounded-2xl bg-[#2CA8A4]/10 text-[#2CA8A4] flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D]">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-black text-[#2D2D2D]">Transform Your Talent Acquisition</h2>
        <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
          Contact our outsourcing specialists to design a customized RPO model for your organization.
        </p>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white font-bold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
        >
          <span>Request RPO Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
