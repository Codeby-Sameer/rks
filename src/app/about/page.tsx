import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Building2,
  Users,
  Target,
  Compass,
  ShieldCheck,
  Award,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | RK's Brainstorm - Company Overview",
  description: "Learn about RK's Brainstorm - a premier Training, Consulting & Outsourcing organization with 3+ years domain expertise serving MNCs, corporate companies, and educational institutions in India.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">

      {/* About Banner / Header */}
      <section className="relative bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F2A93B]">
            <Sparkles className="w-4 h-4" />
            <span>Company Overview</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About RK&apos;s Brainstorm
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering organizations with qualitative training, executive search consulting, and integrated workforce outsourcing across global and local industry sectors.
          </p>
        </div>
      </section>

      {/* Main Content Sections using exact copy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section 1: Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 card-left">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
              01. Foundation & Vision
            </span>
            <h2 className="text-3xl font-black text-[#2D2D2D]">Who We Are</h2>
            <p className="text-base text-[#6B7280] leading-relaxed text-justify">
              RK&apos;s Brainstorm is a well-known Training – Consulting – Outsourcing organization impacting qualitative training programs like leadership skills, communication skills, and managerial skills to MNCs and C2C, along with finishing school programs for corporate companies and top educational institutions in India. Our experienced training team grooms employees and students as per BU requirements.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <GraduationCap className="w-6 h-6 text-[#1B4F8C] mb-2" />
                <h4 className="text-sm font-bold text-[#2D2D2D]">Finishing Schools</h4>
                <p className="text-xs text-[#6B7280] mt-1">Bridging campus to corporate readiness.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <Users className="w-6 h-6 text-[#E8752C] mb-2" />
                <h4 className="text-sm font-bold text-[#2D2D2D]">BU-Aligned Grooming</h4>
                <p className="text-xs text-[#6B7280] mt-1">Tailored specifically to client unit needs.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 card-right">
            <div className="bg-gradient-to-br from-white to-[#F7F8FA] p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xl space-y-6 relative overflow-hidden">
              <div className="w-16 h-16 relative rounded-2xl overflow-hidden shadow-md">
                <Image src="/rkslogo.png" alt="RK's Brainstorm Logo" fill className="object-contain p-1" />
              </div>
              <blockquote className="text-lg font-bold text-[#1B4F8C] italic leading-snug">
                &ldquo;Our mission is to groom professionals as per specific BU requirements, creating qualitative impact for enterprise clients.&rdquo;
              </blockquote>
              <div className="space-y-3 pt-2 text-sm text-[#6B7280]">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#2CA8A4]" />
                  <span>3+ Years Domain Expertise in Indian & Global Markets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#2CA8A4]" />
                  <span>Comprehensive Leadership & Managerial Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#2CA8A4]" />
                  <span>End-to-End Recruitment Process Outsourcing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 card-fade">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Briefcase className="w-8 h-8 text-[#F2A93B]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">Executive Search</h4>
                <p className="text-xs text-[#6B7280]">C-Suite & Board level leadership selection.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Target className="w-8 h-8 text-[#E8752C]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">Middle Management</h4>
                <p className="text-xs text-[#6B7280]">Targeted hiring for operational managers.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Compass className="w-8 h-8 text-[#2CA8A4]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">Project Hiring</h4>
                <p className="text-xs text-[#6B7280]">Scalable teams for immediate deployment.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100 space-y-2">
                <Users className="w-8 h-8 text-[#1B4F8C]" />
                <h4 className="text-base font-bold text-[#2D2D2D]">RPO Solutions</h4>
                <p className="text-xs text-[#6B7280]">Complete recruitment process outsourcing.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 card-fade-up">
            <div className="w-12 h-12 rounded-2xl bg-[#E8752C]/10 text-[#E8752C] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#1B4F8C]">
              02. Core Offerings & Solutions
            </span>
            <h2 className="text-3xl font-black text-[#2D2D2D]">What We Do</h2>
            <p className="text-base text-[#6B7280] leading-relaxed text-justify">
              We partner with our clients to expand their business potential by providing solutions in Executive Search & Selection, Middle Management Hiring, Project Based Hiring, and Recruitment Process Outsourcing through an integrated suite of leadership services. With three years of deep domain expertise, we have successfully delivered solutions across global and local, industry-specific demands.
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                className="bg-[#E8752C] hover:bg-[#d16118] text-white font-bold px-6 py-3 rounded-full shadow-md inline-flex items-center gap-2"
              >
                <span>Explore Full Service Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Our Strength */}
        <div className="bg-[#F7F8FA] rounded-3xl p-8 sm:p-12 border border-gray-200/80 card-zoom space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2CA8A4]/10 text-[#2CA8A4] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
              03. Specialized Expertise
            </span>
            <h2 className="text-3xl font-black text-[#2D2D2D]">Our Strength</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed text-justify">
              Our strength lies in our multifaceted team of professional consultants, highly specialized and experienced in the industries/sectors they serve — associated with top talent capable of harnessing new pools of potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <h4 className="text-base font-bold text-[#1B4F8C]">Multifaceted Consultants</h4>
              <p className="text-xs text-[#6B7280]">Deep domain experts with industry-specific insight.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <h4 className="text-base font-bold text-[#E8752C]">Top Talent Network</h4>
              <p className="text-xs text-[#6B7280]">Access to executive leadership and technical pools.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <h4 className="text-base font-bold text-[#2CA8A4]">Harnessing Potential</h4>
              <p className="text-xs text-[#6B7280]">Customized frameworks aligning candidate skills to client growth.</p>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B4F8C] rounded-3xl p-10 text-white text-center space-y-6">
          <h2 className="text-3xl font-black">Partner with RK&apos;s Brainstorm</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Discover how our qualitative training programs and executive hiring solutions can transform your organization.
          </p>
          <div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#F2A93B] to-[#E8752C] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg inline-flex items-center gap-2"
            >
              <span>Get in Touch with Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
