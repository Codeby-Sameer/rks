import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  UserPlus,
  Compass,
  ShieldAlert,
  Wrench,
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Corporate Training & Upskilling | RK's Brainstorm",
  description: "Accelerate organizational capability with RK's Brainstorm Corporate Training programs: Train & Hire, Onboarding, Compliance, Hard/Soft skills, and Product Knowledge.",
};

const trainingModules = [
  {
    id: 'train-and-hire',
    title: 'Train and Hire',
    icon: UserPlus,
    badge: 'Recruitment & Development',
    summary: 'Designed exclusively for corporates to recruit freshers. We select final year or recently graduated engineering students aligned with your job description.',
    details: [
      'Custom Student Selection: Focused sourcing based on exact candidate profiles and project requirements.',
      'Tailored Curriculum: Includes Technical courses, Communication training, Aptitude, and Logical reasoning.',
      'Rigorous Assessments: Continuous evaluation through mock interviews, assignments, and test modules.',
      'Saves Cost & Time: Get project-ready, pre-trained professionals with zero initial hiring cost.'
    ],
    note: 'We are also willing to help your L&D Department; we can provide different custom trainings as per your requirements.'
  },
  {
    id: 'onboarding-orientation',
    title: 'Onboarding and Orientation',
    icon: Compass,
    badge: 'New Hire Adaptation',
    summary: 'Streamline the transition process right after newly hired employees join the workplace, ensuring they become productive and comfortable faster.',
    details: [
      'Company Culture Orientation: Core vision, mission, organizational values, history, and regulations.',
      'Role-Specific Training: Developing fundamental knowledge and specialized skills required for specific project assignments.',
      'Flexible Formats: Tailored duration, milestones, and feedback loops matching company structures.'
    ],
    note: 'Ensures higher candidate retention and accelerates self-sufficiency on production teams.'
  },
  {
    id: 'compliance-training',
    icon: ShieldAlert,
    title: 'Compliance Training',
    badge: 'Risk Mitigation & Ethics',
    summary: 'A mandatory formal program focused on policies and regulations to prevent workplace incidents and ensure legal compliance.',
    details: [
      'Job & Location Specifics: Customized procedures based on regional employment law and operational requirements.',
      'Key Compliance Domains: Anti-harassment, diversity training, corporate ethics, workplace safety, and data protection/privacy.',
      'Interactive Case Studies: Realistic scenario testing to reinforce ethical decision making.'
    ],
    note: 'Essential for onboarding verification and keeping the company aligned with legal and safety frameworks.'
  },
  {
    id: 'hard-skill',
    title: 'Hard Skill Training',
    icon: Wrench,
    badge: 'Technical Mastery',
    summary: 'Continuous professional development helping employees enhance their core technical skills and adapt to the latest technology frameworks.',
    details: [
      'Advanced Tool Training: Upskilling specialists (e.g., designers mastering Figma/Photoshop, developers learning Python/Next.js).',
      'Emerging Technologies: Deep-dives into cloud hosting, database administration, and security practices.',
      'Regular Knowledge Refreshers: Staying up-to-date with current language updates, libraries, and design practices.'
    ],
    note: 'Provides the engineering backbone for delivery of high-quality software projects.'
  },
  {
    id: 'soft-skill',
    title: 'Soft Skill Training',
    icon: Users,
    badge: 'Collaboration & Interpersonal',
    summary: 'Develop interpersonal competencies that optimize communication, enhance teamwork, and maximize Return on Investment (ROI).',
    details: [
      'Customer-Centric Focus: Communication strategies for client success, active listening, and relationship management.',
      'Conflict Resolution & Logic: Critical thinking, harmonious collaboration, and creative problem solving.',
      'Leadership Readiness: Mentorship frameworks, proactive decision-making, and organizational clarity.'
    ],
    note: 'Fosters team synergy, improves client retention, and unlocks creative collaborative potential.'
  },
  {
    id: 'product-knowledge',
    title: 'Product Knowledge Training',
    icon: Award,
    badge: 'Offerings & Features',
    summary: 'Empower your customer-facing and product development teams to confidently articulate benefits, use-cases, and pricing of what you offer.',
    details: [
      'Feature deep-dives: Comprehensive understanding of release notes, core value propositions, and configurations.',
      'Sales Alignment: Equipping business developers to address questions and handle customer objections.',
      'Continuous Sync: Refreshers when launching new releases or updates to align technical and marketing divisions.'
    ],
    note: 'A direct path to boost customer satisfaction rates and improve overall sales conversions.'
  }
];

export default function CorporateTrainingPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden bg-slate-50">

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#2CA8A4]">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white">Enterprise Upskilling</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Corporate Training Services
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empower your team and recruit freshers with our comprehensive, curriculum-aligned corporate training models. Designed to accelerate adaptation, technical mastery, and operational efficiency.
          </p>
        </div>
      </section>

      {/* Categories Fast Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#101585] mb-4 text-center">
            Explore Training Programs
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {trainingModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <a
                  key={mod.id}
                  href={`#${mod.id}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-50 hover:bg-[#1B4F8C]/10 text-slate-700 hover:text-[#1B4F8C] font-semibold text-xs rounded-full border border-slate-200/80 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                  <span>{mod.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Training Programs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {trainingModules.map((mod, idx) => {
          const Icon = mod.icon;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={mod.id}
              id={mod.id}
              className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white border border-gray-100/80 shadow-xl rounded-[32px] p-6 sm:p-10 transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Visual Icon Card Panel */}
              <div className={`lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-[#F7F8FA] border border-slate-100 relative overflow-hidden ${isEven ? 'lg:order-1 card-left' : 'lg:order-2 card-right'
                }`}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#101585]/10 text-[#101585] px-2.5 py-1 rounded-full">
                    {mod.badge}
                  </span>
                  <h3 className="text-2xl font-black text-[#2D2D2D] leading-tight">
                    {mod.title}
                  </h3>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <p className="text-xs text-slate-400 font-semibold mb-2">Ready to coordinate?</p>
                  <Link
                    href="/contact"
                    className="w-full bg-[#1B4F8C] hover:bg-[#101585] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-colors shadow-sm text-sm"
                  >
                    <span>Contact Us for Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Training Content Details Panel */}
              <div className={`lg:col-span-8 flex flex-col justify-between space-y-6 p-2 ${isEven ? 'lg:order-2 card-right' : 'lg:order-1 card-left'
                }`}>
                <div className="space-y-4">
                  <p className="text-base text-[#6B7280] leading-relaxed font-medium">
                    {mod.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                      Key Highlights & Framework:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mod.details.map((detail, i) => (
                        <div key={i} className="flex items-start space-x-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-[#2CA8A4] shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 font-medium leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {mod.note && (
                  <div className="bg-[#1B4F8C]/5 rounded-2xl p-4 border border-[#1B4F8C]/10 text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold text-[#1B4F8C]">Note:</span> {mod.note}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Centralized CTA section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] rounded-3xl p-10 sm:p-12 text-white text-center space-y-6 shadow-xl">
          <BookOpen className="w-12 h-12 text-[#2CA8A4] mx-auto animate-pulse" />
          <h2 className="text-3xl font-black">Support Your L&D Initiatives</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our teams partner with your Learning & Development divisions to build customized training timelines, onboarding curriculums, compliance checklists, or hard skill training frameworks tailored to your industry requirements.
          </p>
          <div>
            <Link
              href="/contact"
              className="bg-white text-[#1B4F8C] hover:bg-slate-50 font-extrabold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Get in Touch with Our L&D Experts</span>
              <ArrowRight className="w-5 h-5 text-[#1B4F8C]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
