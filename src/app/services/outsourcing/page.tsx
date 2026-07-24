import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Workflow, 
  Layers, 
  Globe2, 
  Building,
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "IT Outsourcing & Tech RPO | RK's Brainstorm",
  description: "Enterprise IT outsourcing, dedicated offshore development squads, technology RPO, and managed engineering teams.",
};

const outsourcingBenefits = [
  {
    title: 'Full-Lifecycle Tech RPO',
    desc: 'Complete ownership of tech recruitment — from candidate sourcing, coding assessments, and technical screening to onboarding and BU compliance.',
    icon: Workflow,
  },
  {
    title: 'Dedicated Offshore Squads',
    desc: 'Assembling and managing high-performing software development and testing teams under a single SLA-driven delivery framework.',
    icon: Layers,
  },
  {
    title: 'Global Tech Delivery',
    desc: 'Scalable software outsourcing and support structures catering to global MNC offshore units as well as domestic Indian enterprises.',
    icon: Globe2,
  },
  {
    title: 'Domain-Specialized Talent Pools',
    desc: 'Access to immediate, pre-screened developers, engineers, and tech managers across frontend, backend, cloud, and QA domains.',
    icon: Building,
  },
];

export default function OutsourcingPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Managed Tech Teams & RPO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            IT Outsourcing & Tech RPO
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Accelerate your engineering capacity with managed outsourcing, offshore software developer hubs, and high-impact tech recruitment process outsourcing.
          </p>
        </div>
      </section>

      {/* Main Copy Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-fade space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2CA8A4]">
            Managed Offshore & RPO Operations
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Global & Domestic Software Sourcing Delivery
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed text-justify">
            With three years of deep domain expertise in recruitment and software ecosystems, RK&apos;s Brainstorm manages end-to-end tech outsourcing. Our team takes care of hiring pipelines, rigorous tech screening, and resource management so your internal engineering leadership can focus on core product delivery.
          </p>
        </div>
      </section>

      {/* RPO Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
            Why Partner with RK&apos;s Brainstorm Outsourcing
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            SLA-Driven Technical Sourcing Advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outsourcingBenefits.map((item, idx) => {
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
        <h2 className="text-3xl font-black text-[#2D2D2D]">Scale Your Technology Capacity</h2>
        <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
          Partner with our IT outsourcing consultants to set up a dedicated offshore development center or customize a tech RPO pipeline.
        </p>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#0047AB] to-[#101585] text-white font-bold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
        >
          <span>Request IT Outsourcing Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
