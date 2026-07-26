import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, CheckCircle2, UserCheck, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms & Conditions | RK's Brainstorm",
  description: "Read the Terms & Conditions governing the use of RK's Brainstorm's web platforms, software solutions, and services.",
};

export default function TermsConditionsPage() {
  return (
    <div className="space-y-16 pb-20 overflow-hidden bg-slate-50">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#2CA8A4]">
            <FileText className="w-4 h-4 text-white" />
            <span className="text-white">Legal Agreements</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Terms & Conditions</h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Effective Date: July 26, 2026. Please read these terms carefully before utilizing our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl space-y-10 text-slate-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-[#1B4F8C]" />
              <span>1. Acceptance of Terms</span>
            </h2>
            <p className="leading-relaxed">
              By accessing and using the websites, tools, applications (including Q-Tran and BMS), and IT services provided by RK&apos;s Brainstorm (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#101585]" />
              <span>2. Services and Subscriptions</span>
            </h2>
            <p className="leading-relaxed">
              We provide custom software engineering, business management systems, and consulting services. Certain enterprise platforms require active subscription agreements or service-level agreements (SLAs). You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, complete, and current information when registering or requesting services.</li>
              <li>Keep all login credentials (passwords, access keys) confidential and secure.</li>
              <li>Notify us immediately of any unauthorized breach of security or usage of your account.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#2CA8A4]" />
              <span>3. Intellectual Property</span>
            </h2>
            <p className="leading-relaxed">
              All proprietary systems, including but not limited to the codebase, graphic designs, algorithms, workflows, logos, and materials related to Q-Tran and BMS, are the sole intellectual property of RK&apos;s Brainstorm. You are granted a limited, non-exclusive, non-transferable license to access our systems for personal or agreed corporate use, but you may not reverse-engineer, copy, redistribute, or reuse our source code without explicit written consent.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-[#1B4F8C]" />
              <span>4. Limitation of Liability</span>
            </h2>
            <p className="leading-relaxed">
              Under no circumstances shall RK&apos;s Brainstorm be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use our applications, site, or custom systems. Services are provided &quot;as is&quot; without warranties of any kind, either expressed or implied.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-[#2D2D2D]">5. Governing Law</h2>
            <p className="leading-relaxed">
              These terms are governed by and construed in accordance with the laws of India. Any legal actions or disputes arising from these Terms & Conditions shall be settled in competent courts located in Hyderabad, Telangana, India.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-[#2D2D2D]">6. Contact Information</h2>
            <p className="leading-relaxed">
              For any legal inquiries, compliance audits, or terms clarification, please contact our administrative team at:
            </p>
            <div className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-sm space-y-2">
              <p><strong>Email:</strong> info@rksbrainstorm.com</p>
              <p><strong>Phone:</strong> +91-8790008824 / +91-8790008825</p>
              <p><strong>Address:</strong> Hyderabad, Telangana, India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B4F8C] rounded-3xl p-8 text-white text-center space-y-4">
          <h2 className="text-2xl font-black">Partner with Us</h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            Read more about our standard Software-as-a-Service SLAs or enterprise agreements by connecting with our compliance officer.
          </p>
          <div>
            <Link
              href="/contact"
              className="bg-white text-[#1B4F8C] hover:bg-slate-50 font-bold px-6 py-2.5 rounded-full shadow-md inline-flex items-center gap-2 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#1B4F8C]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
