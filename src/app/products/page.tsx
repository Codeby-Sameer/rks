import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Products | Q-Tran & BMS - RK's Brainstorm",
  description: "Explore proprietary technology platforms by RK's Brainstorm: Q-Tran EdTech mobile platform & BMS Business Management System.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">

      {/* Header */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
          <Sparkles className="w-4 h-4" />
          <span>Proprietary Tech Innovations</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black">Our Product Portfolio</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Empowering EdTech, workforce quality transformation, and operational management through cutting-edge digital platforms.
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Q-Tran Card */}
          <div className="card-left bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl space-y-6 flex flex-col justify-between hover:shadow-2xl transition-all">
            <div className="space-y-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image src="/q-tranlogo.jpg" alt="Q-Tran Logo" fill className="object-cover" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#101585]">EdTech & Quality Transformation App</span>
              <h2 className="text-3xl font-black text-[#2D2D2D]">Q-Tran</h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Q-Tran is RK&apos;s Brainstorm flagship mobile & web EdTech platform designed for continuous employee skill development, interactive testing, progress tracking, and BU-aligned workforce certification.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Interactive Testing & Skill Modules</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Real-Time Progress & Analytics Dashboard</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Mobile App Accessibility for On-The-Go Learning</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/products/q-tran"
                className="bg-gradient-to-r from-[#0047AB] to-[#101585] text-white font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Learn More About Q-Tran</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* BMS Card */}
          <div className="card-right bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl space-y-6 flex flex-col justify-between hover:shadow-2xl transition-all">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B4F8C] to-[#2CA8A4] text-white flex items-center justify-center shadow-lg">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B4F8C]">Business Management System</span>
              <h2 className="text-3xl font-black text-[#2D2D2D]">BMS</h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                BMS is an enterprise business management system that streamlines client accounts, middle management workflows, project hiring allocations, and operational reporting in real-time.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Centralized Project & Resource Allocation</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Client & Vendor Workflow Automation</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D2D2D]">
                  <CheckCircle2 className="w-4 h-4 text-[#2CA8A4]" />
                  <span>Executive Reporting & SLA Tracking</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/products/bms"
                className="bg-[#1B4F8C] hover:bg-[#153f70] text-white font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Request BMS Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
