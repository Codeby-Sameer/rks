import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Smartphone,
  CheckCircle2,
  Download,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Q-Tran EdTech & Testing Platform | RK's Brainstorm",
  description: "Q-Tran is RK's Brainstorm proprietary EdTech and skill testing platform and mobile app for corporate employees and students.",
};

export default function QTranPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Digital EdTech Transformation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Q-Tran EdTech & Testing Platform
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering enterprises with interactive testing, technical upskilling, and custom learning path evaluation modules.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact#qtran-app"
              className="bg-gradient-to-r from-[#0047AB] to-[#101585] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-[#0047AB]/30 transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Q-Tran App</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Card / Brief Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6 card-left">
            <div className="inline-flex items-center space-x-2 bg-[#0047AB]/10 px-3 py-1 rounded-full text-xs font-bold text-[#0047AB]">
              <span>Proprietary Learning Management</span>
            </div>
            <h2 className="text-3xl font-black text-[#2D2D2D]">
              Interactive Skill Testing & Assessment
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Q-Tran is a modern EdTech and skill testing ecosystem. Developed by RK&apos;s Brainstorm, Q-Tran provides interactive custom courses, automated assessments, and technical skill matrices across development languages, system architecture, and leadership tracks.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Whether you are an enterprise managing workforce upskilling or an institution conducting finishing school programs, Q-Tran gives HR directors and team leads real-time visibility into skill progression.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <BarChart3 className="w-6 h-6 text-[#1B4F8C] mb-2" />
                <h4 className="text-sm font-bold text-[#2D2D2D]">Real-Time Analytics</h4>
                <p className="text-xs text-[#6B7280]">Track module completions and score benchmarks.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <BookOpen className="w-6 h-6 text-[#2CA8A4] mb-2" />
                <h4 className="text-sm font-bold text-[#2D2D2D]">Interactive Modules</h4>
                <p className="text-xs text-[#6B7280]">Quizzes, testing modules, and video bite-sized lessons.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 card-right">
            <div className="bg-gradient-to-br from-[#1B4F8C] to-[#163f70] text-white p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center space-x-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md bg-white border border-white/20">
                  <Image src="/q-tranlogo.jpg" alt="Q-Tran Logo" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">Q-Tran Mobile</h3>
                  <p className="text-xs text-[#0047AB] font-semibold">Available on iOS & Android</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>BU-specific customized content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Certificate generation on course completion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Offline module support for remote teams</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact#qtran-app"
                  className="w-full bg-[#0047AB] hover:bg-[#101585] text-white font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <span>Go to Download Center</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* App Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 card-fade">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Key Features of the Q-Tran Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-left bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0047AB]/10 text-[#0047AB] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D2D2D]">Technical & Leadership Pathways</h3>
            <p className="text-sm text-[#6B7280]">
              Customized learning paths covering programming, system design, and technology team management.
            </p>
          </div>

          <div className="card-fade-up bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D2D2D]">Enterprise Analytics Dashboard</h3>
            <p className="text-sm text-[#6B7280]">
              Managers and HR leads can review batch test scores, module completion metrics, and coding readiness.
            </p>
          </div>

          <div className="card-right bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D2D2D]">EdTech & Onboarding Pathways</h3>
            <p className="text-sm text-[#6B7280]">
              Assess and onboarding new engineering recruits or college graduates with custom pre-placement evaluations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA to Download Ad on Contact Page */}
      {/* Q-Tran App Download Ad Section (Section 8 Spec) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="qtran-app">
        <div className="card-fade-up bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Promo Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0047AB] text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                <span>Featured App Promo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Get the Q-Tran App
              </h2>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                Accelerate your qualitative training and skill transformation on the go. Access leadership courses, complete interactive BU modules, and track performance metrics anytime, anywhere.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-3 text-sm font-semibold text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#0047AB]" />
                  <span>Complete Leadership & Finishing School Modules</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#0047AB]" />
                  <span>Interactive Quizzes & Certificate Verification</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#0047AB]" />
                  <span>Real-Time Performance Dashboard for HR & Management</span>
                </div>
              </div>

              {/* App Store & Google Play Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#qtran-app"
                  className="bg-black hover:bg-neutral-900 border border-neutral-800 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center space-x-3 transition-all hover:scale-105 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6 text-white shrink-0">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.9-84.5-22.2-46.9 .7-90.2 27.3-114.3 69-49 84.8-12.5 210.9 34.8 279.1 23.2 33.3 50.1 70.3 86.1 69 34.9-1.4 48.2-22.7 90.4-22.7 42.3 0 54.3 22.7 90.4 22.1 36.6-.6 60.5-33.2 83.5-66.9 26.5-38.7 37.5-76.2 38-78.2-.8-.4-72.9-28-73.6-110.8zM290.4 96.1c16-19.4 26.7-46.4 23.8-73.4-23.2 1-51.5 15.5-68.2 34.9-14.5 16.8-27.2 44.1-23.8 70.7 25.8 2 52.3-12.8 68.2-32.2z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-gray-300">Download on the</div>
                    <div className="text-sm font-extrabold leading-tight">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.qtran.learning&hl=en_IN"
                  target='_blank'
                  className="bg-black hover:bg-neutral-900 border border-neutral-800 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center space-x-3 transition-all hover:scale-105 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 shrink-0">
                    <path fill="#FFC107" d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96z" />
                    <path fill="#4CAF50" d="M10.627 11.49 7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055z" />
                    <path fill="#03A9F4" d="M1 13.396V2.603L6.846 8z" />
                    <path fill="#F44336" d="M1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-gray-300">GET IT ON</div>
                    <div className="text-sm font-extrabold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Phone Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-[400px] sm:w-72 sm:h-[430px] hover:scale-105 transition-transform duration-300">
                <Image
                  src="/q-tranmobile.png"
                  alt="Q-Tran Mobile App"
                  fill
                  className="object-contain rounded-3xl"
                  priority
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
