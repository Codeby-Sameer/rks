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
  title: "Q-Tran Platform & Mobile App | RK's Brainstorm",
  description: "Q-Tran is RK's Brainstorm proprietary training & quality transformation platform and mobile app for corporate employees and students.",
};

export default function QTranPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F2A93B]">
            <Sparkles className="w-4 h-4" />
            <span>Digital Workforce Transformation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Q-Tran Training & Quality Platform
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering employees and students with on-the-go corporate training, leadership skill tracking, and BU-aligned evaluation modules.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact#qtran-app"
              className="bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2"
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
            <div className="inline-flex items-center space-x-2 bg-[#F2A93B]/10 px-3 py-1 rounded-full text-xs font-bold text-[#E8752C]">
              <span>Proprietary Learning Management</span>
            </div>
            <h2 className="text-3xl font-black text-[#2D2D2D]">
              Qualitative Skill Growth at Your Fingertips
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Q-Tran seamlessly bridges the gap between classroom corporate training and daily workplace execution. Developed by RK&apos;s Brainstorm, Q-Tran provides structured learning pathways in leadership, managerial skills, communication, and technical BU domain subjects.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Whether you are an enterprise managing workforce upskilling or an institution conducting finishing school programs, Q-Tran gives HR directors and department managers real-time visibility into skill progression.
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
                <p className="text-xs text-[#6B7280]">Quizzes, case studies, and video bite-sized lessons.</p>
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
                  <p className="text-xs text-[#F2A93B] font-semibold">Available on iOS & Android</p>
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
                  className="w-full bg-[#F2A93B] hover:bg-[#E8752C] text-[#2D2D2D] hover:text-white font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-md"
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
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-black text-[#2D2D2D]">
            Key Features of the Q-Tran Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-left bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D2D2D]">Soft Skills & Leadership</h3>
            <p className="text-sm text-[#6B7280]">
              Customized learning paths covering communication, managerial tactics, and corporate etiquette.
            </p>
          </div>

          <div className="card-fade-up bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D2D2D]">Corporate HR Portal</h3>
            <p className="text-sm text-[#6B7280]">
              Managers can review batch participation, assessment scores, and qualitative progress reports.
            </p>
          </div>

          <div className="card-right bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D2D2D]">Finishing School Integration</h3>
            <p className="text-sm text-[#6B7280]">
              College students get industry ready with pre-placement grooming modules directly in the app.
            </p>
          </div>
        </div>
      </section>

      {/* CTA to Download Ad on Contact Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 card-zoom">
        <div className="bg-[#1B4F8C] rounded-3xl p-10 sm:p-14 text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Get the Q-Tran App Now</h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto">
            Ready to experience next-generation training? Visit our Contact page to access direct app links and request enterprise access keys.
          </p>
          <div>
            <Link
              href="/contact#qtran-app"
              className="bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white font-extrabold px-9 py-4 rounded-full shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2 text-base"
            >
              <span>Go to App Promo & Download Section</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
