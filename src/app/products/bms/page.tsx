import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  Database,
  Users2,
  LineChart,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "BMS Platform | RK's Brainstorm Business Management System",
  description: "BMS is RK's Brainstorm Business Management System for client account tracking, project staffing workflows, and operations management.",
};

const bmsModules = [
  {
    title: 'Resource & Talent Allocation',
    desc: 'Assign developers, consultants, and IT engineering resources to client projects based on skills, availability, and BU demands.',
    icon: Users2,
  },
  {
    title: 'Executive SLA & KPI Analytics',
    desc: 'Real-time dashboards measuring time-to-hire, software sprint completions, and client satisfaction metrics.',
    icon: LineChart,
  },
  {
    title: 'Contract & Client Portal',
    desc: 'Centralized repository managing software developer assignments, IT outsourcing agreements, and billing milestones.',
    icon: Database,
  },
];

export default function BMSPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Enterprise Business Management</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            BMS — Business Management System
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A powerful, integrated enterprise platform managing workforce deployment, client project tracking, and recruitment process outsourcing operations.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact?demo=bms#form"
              className="bg-[#1B4F8C] hover:bg-[#153f70] bg-gradient-to-r from-[#1B4F8C] to-[#2CA8A4] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
            >
              <span>Request a BMS Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info Card Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center card-fade">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#1B4F8C]/10 px-3 py-1 rounded-full text-xs font-bold text-[#1B4F8C]">
              <span>Enterprise Resource & Project Engine</span>
            </div>
            <h2 className="text-3xl font-black text-[#2D2D2D]">
              Streamlining Tech Projects & Outsourcing Operations
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed">
              BMS (Business Management System) is engineered specifically to support custom software projects, cloud management tasks, developer staffing pools, and IT outsourcing operations.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              By consolidating candidate pipelines, client project deliverables, and consultant assignments into a unified dashboard, BMS ensures zero communication gaps and transparent SLA reporting.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm font-bold text-[#2D2D2D]">
                <CheckCircle2 className="w-5 h-5 text-[#2CA8A4]" />
                <span>Seamless integration with Q-Tran skill testing metrics</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-[#2D2D2D]">
                <CheckCircle2 className="w-5 h-5 text-[#2CA8A4]" />
                <span>Automated developer matching against BU requirements</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-[#2D2D2D]">
                <CheckCircle2 className="w-5 h-5 text-[#2CA8A4]" />
                <span>Role-based access for client HR teams and internal consultants</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D2D2D]">Experience BMS in Action</h3>
                <p className="text-xs text-[#6B7280] mt-1">Schedule a 1-on-1 walkthrough with our tech specialists.</p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?demo=bms#form"
                  className="w-full bg-gradient-to-r from-[#0047AB] to-[#101585] text-white font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Request Live Product Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
            Core Modules
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            What Powers BMS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bmsModules.map((m, idx) => {
            const Icon = m.icon;
            const anim = idx === 0 ? 'card-left' : idx === 1 ? 'card-fade-up' : 'card-right';
            return (
              <div key={m.title} className={`${anim} bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4`}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2D2D2D]">{m.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
