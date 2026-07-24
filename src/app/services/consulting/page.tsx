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
  ShieldCheck, 
  Award,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Consulting Services | RK's Brainstorm",
  description: "Strategic Executive Search & Selection, Middle Management Hiring, and Project Based Hiring solutions backed by 3+ years of domain expertise.",
};

const consultingPillars = [
  {
    title: 'Executive Search & Selection',
    desc: 'Targeted C-suite, Board level, and Senior Director recruitment across technology, manufacturing, healthcare, and financial services.',
    icon: Search,
    items: ['Confidential Leadership Sourcing', 'C-Suite & VP Placement', 'Board-Level Talent Assessment', 'Global & Regional Search'],
  },
  {
    title: 'Middle Management Hiring',
    desc: 'Connecting clients with experienced operational leaders, department heads, and managers who drive daily Business Unit performance.',
    icon: Target,
    items: ['Functional Head Recruitment', 'Domain-Specific Managerial Search', 'Scalable Middle Management Pools', 'Competency Mapping'],
  },
  {
    title: 'Project Based Hiring',
    desc: 'Rapid deployment of specialized project teams, technical consultants, and ramp-up hiring for strategic client initiatives.',
    icon: Briefcase,
    items: ['Turnkey Project Staffing', 'Rapid Capacity Ramp-Up', 'Specialized Skill Clusters', 'Short & Long-Term Engagements'],
  },
  {
    title: 'Integrated Leadership Suite',
    desc: 'Comprehensive talent consulting aligning organizational strategy, leadership succession, and specialized industry recruitment.',
    icon: Users,
    items: ['Leadership Pipeline Planning', 'Sector-Specific Advisory', 'Market Intelligence & Mapping', 'Retained & Contingent Models'],
  },
];

export default function ConsultingPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#F2A93B]">
            <Sparkles className="w-4 h-4" />
            <span>Strategic Leadership & Talent Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Executive Search & Consulting
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We partner with our clients to expand their business potential by providing solutions in Executive Search & Selection, Middle Management Hiring, Project Based Hiring, and Recruitment Process Outsourcing.
          </p>
        </div>
      </section>

      {/* Main Copy Focus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-fade space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
            Domain Expertise & Sector Reach
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            3+ Years of Deep Domain Expertise
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed text-justify">
            With three years of deep domain expertise, we have successfully delivered solutions across global and local, industry-specific demands. Our strength lies in our multifaceted team of professional consultants, highly specialized and experienced in the industries/sectors they serve — associated with top talent capable of harnessing new pools of potential.
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
            Consulting & Executive Search Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const anim = idx % 2 === 0 ? 'card-left' : 'card-right';
            return (
              <div key={pillar.title} className={`${anim} bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all space-y-6`}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F2A93B]/15 text-[#E8752C] flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">{pillar.title}</h3>
                    <p className="text-xs text-[#1B4F8C] font-semibold">Leadership Practice</p>
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
        <h2 className="text-3xl font-black text-[#2D2D2D]">Discuss Your Leadership Hiring Needs</h2>
        <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
          Connect with our professional search consultants to expand your executive and middle-management talent pool.
        </p>
        <Link
          href="/contact"
          className="bg-[#1B4F8C] hover:bg-[#153f70] text-white font-bold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
        >
          <span>Connect with Executive Consultants</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
