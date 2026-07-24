import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Smartphone, 
  BookOpen, 
  LayoutDashboard,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Software Solutions & Custom Dev | RK's Brainstorm",
  description: "Enterprise custom software development, mobile app engineering, EdTech platforms, and CRM integration solutions by RK's Brainstorm.",
};

const softwareModules = [
  {
    title: 'Enterprise Software & Web Dev',
    desc: 'Engineering robust, scalable cloud applications, custom SaaS platforms, and enterprise web solutions using modern React/Next.js/Node.js tech stacks.',
    icon: Cpu,
    items: ['Custom SaaS & Web Applications', 'Cloud Architecture & APIs', 'Relational & NoSQL Databases', 'UI/UX Interactive Dashboards'],
  },
  {
    title: 'Mobile App Engineering',
    desc: 'Developing high-performance native and cross-platform mobile applications for iOS and Android, focusing on intuitive user experience and secure offline synchronization.',
    icon: Smartphone,
    items: ['Native & Hybrid App Development', 'Secure Offline Storage & Sync', 'Push Notifications & Micro-interactions', 'App Store & Play Store Deployment'],
  },
  {
    title: 'EdTech & Digital Learning Systems',
    desc: 'Creating proprietary and custom educational technology platforms that empower continuous corporate upskilling, testing modules, and interactive training.',
    icon: BookOpen,
    items: ['Custom Learning Management Systems', 'Gamified Testing & Progress Tracking', 'Interactive Case Studies & Quizzes', 'Multimedia Streaming Integration'],
  },
  {
    title: 'IT Systems & CRM Integration',
    desc: 'Connecting and automating corporate workflows, business management databases, resource allocation modules, and customized CRM integrations.',
    icon: LayoutDashboard,
    items: ['CRM/ERP Custom Implementation', 'BMS Core Integration', 'Automated Resource Workflows', 'SLA Analytics & Performance Reporting'],
  },
];

export default function TrainingPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Custom Engineering & Digital Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Software & Tech Solutions
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge custom software development, mobile application engineering, EdTech systems, and enterprise business management integrations aligned with global standards.
          </p>
        </div>
      </section>

      {/* Main Copy Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-fade space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1B4F8C]">
            Agile Engineering Framework
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Building Digital Products for Modern Enterprises
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Our experienced software engineering team designs, builds, and deploys scalable technology systems tailored to your Business Unit requirements. From prototyping to production maintenance, we combine robust backends with state-of-the-art frontend UI/UX to ensure performance and client satisfaction.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
            Capabilities Portfolio
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Our Software Engineering Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareModules.map((mod, idx) => {
            const Icon = mod.icon;
            const anim = idx % 2 === 0 ? 'card-left' : 'card-right';
            return (
              <div key={mod.title} className={`${anim} bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all space-y-6`}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">{mod.title}</h3>
                    <p className="text-xs text-[#101585] font-semibold">Tech Solution</p>
                  </div>
                </div>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {mod.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {mod.items.map((item, i) => (
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

      {/* Q-Tran Integration Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 card-zoom">
        <div className="bg-gradient-to-r from-[#1B4F8C] to-[#2CA8A4] rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#0047AB]">Proprietary Mobile App</span>
            <h3 className="text-2xl font-black">Accelerate Upskilling with Q-Tran App</h3>
            <p className="text-sm text-blue-100">
              Integrate your training ecosystem with our proprietary Q-Tran mobile platform for seamless corporate skill tracking, real-time testing, and continuous learning.
            </p>
          </div>
          <Link
            href="/products/q-tran"
            className="bg-[#0047AB] hover:bg-[#101585] text-white font-extrabold px-7 py-3.5 rounded-full transition-all shrink-0 flex items-center gap-2"
          >
            <span>Explore Q-Tran App</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-black text-[#2D2D2D]">Ready to Build Your Custom Software?</h2>
        <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
          Partner with RK&apos;s Brainstorm tech specialists to design, engineer, and deploy your next digital product or enterprise system.
        </p>
        <Link
          href="/contact"
          className="bg-[#101585] hover:bg-[#0047AB] text-white font-bold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
        >
          <span>Contact Tech Solutions Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
