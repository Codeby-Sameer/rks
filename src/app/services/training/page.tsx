import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Users, 
  MessageSquare, 
  Briefcase, 
  BookOpen,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Training Services | RK's Brainstorm",
  description: "Qualitative corporate training in leadership, communication, and managerial skills for MNCs & C2C, plus finishing school programs for educational institutions.",
};

const trainingModules = [
  {
    title: 'Leadership Skills Training',
    desc: 'Empowering senior and emerging leaders with decision-making, strategic thinking, emotional intelligence, and change management competencies.',
    icon: Award,
    items: ['Strategic Visioning', 'Decision Making Under Pressure', 'Emotional Intelligence & Conflict Resolution', 'Team Motivation & Mentorship'],
  },
  {
    title: 'Communication Skills Excellence',
    desc: 'Polishing corporate verbal, non-verbal, presentation, and written communication for seamless cross-functional collaboration.',
    icon: MessageSquare,
    items: ['Executive Presentation Skills', 'Cross-Cultural Business Etiquette', 'Assertive & Persuasive Communication', 'Client Escalation Management'],
  },
  {
    title: 'Managerial & Supervisor Skills',
    desc: 'Building robust middle-management capabilities to optimize Business Unit performance, project delivery, and team accountability.',
    icon: Briefcase,
    items: ['Performance Management & KPIs', 'Project Delegation & Time Mastery', 'Agile Operations & Resource Alignment', 'Team Problem Solving'],
  },
  {
    title: 'Finishing School Programs',
    desc: 'Customized campus-to-corporate transitional programs for top educational institutions and corporate new-hire cohorts.',
    icon: GraduationCap,
    items: ['Corporate Readiness & Professionalism', 'Technical & Domain BU Alignment', 'Interview & Case Study Grooming', 'Workplace Ethics & Etiquette'],
  },
];

export default function TrainingPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#F2A93B]">
            <Sparkles className="w-4 h-4" />
            <span>Corporate & Finishing School Programs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Qualitative Training Services
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Impacting qualitative training programs like leadership skills, communication skills, and managerial skills to MNCs and C2C, along with finishing school programs for corporate companies and top educational institutions in India.
          </p>
        </div>
      </section>

      {/* Main Copy Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-fade space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1B4F8C]">
            BU-Aligned Grooming Framework
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Grooming Talent as per Business Unit Requirements
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Our experienced training team grooms employees and students as per BU requirements. Whether you need corporate upskilling for existing teams or finishing school programs for upcoming graduate batches, our methodology guarantees immediate productivity and qualitative improvement.
          </p>
        </div>
      </section>

      {/* Training Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
            Program Curriculum
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Our Key Training Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingModules.map((mod, idx) => {
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
                    <p className="text-xs text-[#E8752C] font-semibold">Qualitative Program</p>
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
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#F2A93B]">Digital Learning Companion</span>
            <h3 className="text-2xl font-black">Accelerate Training with the Q-Tran App</h3>
            <p className="text-sm text-blue-100">
              Combine classroom sessions with our mobile Q-Tran training platform for seamless skill tracking, quizzes, and continuous employee development.
            </p>
          </div>
          <Link
            href="/products/q-tran"
            className="bg-[#F2A93B] hover:bg-[#E8752C] text-[#2D2D2D] hover:text-white font-extrabold px-7 py-3.5 rounded-full transition-all shrink-0 flex items-center gap-2"
          >
            <span>Explore Q-Tran App</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-black text-[#2D2D2D]">Schedule a Training Program</h2>
        <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
          Contact RK&apos;s Brainstorm to customize corporate training or finishing school modules tailored to your organization.
        </p>
        <Link
          href="/contact"
          className="bg-[#E8752C] hover:bg-[#d16118] text-white font-bold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
        >
          <span>Contact Training Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
