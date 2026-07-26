import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Briefcase,
  Target,
  Users,
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "IT Consulting & Tech Staffing | RK's Brainstorm",
  description: "Enterprise IT strategy consulting, tech leadership search, dedicated developer staffing, and product architecture consulting.",
};

const consultingPillars = [
  {
    title: 'Tech Leadership & CTO Search',
    desc: 'Targeted C-suite, CTO, VP of Engineering, and Tech Director recruitment for digital-first enterprises and high-growth software teams.',
    icon: Search,
    items: ['Confidential Executive Sourcing', 'CTO & Engineering Leadership Placement', 'Technical Competency Evaluation', 'Global & Local Tech Search'],
  },
  {
    title: 'IT Strategy & Product Consulting',
    desc: 'Strategic technology advisory defining product roadmaps, cloud infrastructure transitions, data systems architecture, and scalability plans.',
    icon: Target,
    items: ['Digital Transformation Roadmaps', 'Cloud Architecture Strategy', 'Software Stack Evaluations', 'Agile Product Lifecycle Advice'],
  },
  {
    title: 'Dedicated Developer Staffing',
    desc: 'Rapid placement of expert React, Next.js, Node.js developers, mobile engineers, full-stack architects, and UI/UX designers.',
    icon: Briefcase,
    items: ['Contract-to-Hire Staffing', 'Specialized Tech Dev Clusters', 'Remote & On-Site Engineering Pools', 'Flexible Project Teams'],
  },
  {
    title: 'Enterprise Tech Consulting',
    desc: 'Aligning business workflows, CRM/ERP solutions, custom software selection, and legacy modernization consulting.',
    icon: Users,
    items: ['Legacy Application Modernization', 'ERP & Custom software advice', 'Scalability Audits & Solutions', 'Workflow Automation Audits'],
  },
];

export default function ConsultingPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Enterprise IT Strategy & Talent</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            IT Consulting & Tech Staffing
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Partnering with companies to accelerate technical engineering capacity, scale tech stacks, and source elite software leadership globally.
          </p>
        </div>
      </section>

      {/* Main Copy Focus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-fade space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
            Enterprise Solutions Delivery
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            3+ Years of Technical Consulting Expertise
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed text-justify">
            RK&apos;s Brainstorm delivers targeted technology consulting and software talent solutions. Our team of senior tech consultants and specialized developers helps brands build their technology foundation, modernize infrastructure, and scale engineering outputs to unlock new potential.
          </p>
        </div>
      </section>

      {/* Consulting Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1B4F8C]">
            Services Portfolio
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            IT Consulting & Leadership Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const anim = idx % 2 === 0 ? 'card-left' : 'card-right';
            return (
              <div key={pillar.title} className={`${anim} bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6`}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0047AB]/10 text-[#0047AB] flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">{pillar.title}</h3>
                    <p className="text-xs text-[#1B4F8C] font-semibold">Tech Consulting</p>
                  </div>
                </div>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {pillar.items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                      <CheckCircle2 className="w-4 h-4 text-[#2CA8A4] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-black text-[#2D2D2D]">Connect with a Technology Advisor</h2>
        <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
          Contact our consulting experts to discuss system architecture, technology frameworks, or high-caliber developer staffing options.
        </p>
        <Link
          href="/contact"
          className="bg-[#1B4F8C] hover:bg-[#153f70] text-white font-bold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
        >
          <span>Connect with Tech Consultants</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
