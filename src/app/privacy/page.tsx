import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Shield, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy | RK's Brainstorm",
  description: "Learn about how RK's Brainstorm collects, uses, and protects your personal and business data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-16 pb-20 overflow-hidden bg-slate-50">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#2CA8A4]">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white">Data Protection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Privacy Policy</h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Effective Date: July 26, 2026. Your privacy and trust are paramount to us.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl space-y-10 text-slate-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <Eye className="w-6 h-6 text-[#1B4F8C]" />
              <span>1. Information We Collect</span>
            </h2>
            <p className="leading-relaxed">
              We collect information that you voluntarily provide to us when you fill out contact forms, apply for open positions, subscribe to our newsletter, or use our mobile applications (like Q-Tran). This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Details:</strong> Your name, email address, phone number, and mailing address.</li>
              <li><strong>Business Information:</strong> Company name, department, role, and details regarding your software/IT requirements.</li>
              <li><strong>Device & Application Data:</strong> IP addresses, browser types, operating systems, and usage statistics gathered automatically when navigating our web properties.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <Lock className="w-6 h-6 text-[#101585]" />
              <span>2. How We Use Your Information</span>
            </h2>
            <p className="leading-relaxed">
              RK&apos;s Brainstorm uses the collected data for various professional and operational purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our services and products (e.g., custom development, Q-Tran, BMS).</li>
              <li>To contact you and respond to your inquiries, service requests, or application files.</li>
              <li>To send you administrative updates, product announcements, or promotional content (you can opt out at any time).</li>
              <li>To monitor usage statistics to optimize user experience and platform responsiveness.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#2CA8A4]" />
              <span>3. Data Protection and Security</span>
            </h2>
            <p className="leading-relaxed">
              We implement industry-standard administrative, physical, and technical safeguards to secure your personal data against unauthorized access, alterations, disclosure, or destruction. We utilize encrypted data transfers, firewalls, and strict access controls on all internal servers storing client or candidate details.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#1B4F8C]" />
              <span>4. Sharing and Disclosure</span>
            </h2>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties. We may share data only under the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers who assist us in operating our business and hosting our applications (subject to strict confidentiality agreements).</li>
              <li>To comply with regulatory demands, law enforcement actions, or legal mandates.</li>
              <li>In connection with any corporate restructuring, merger, or acquisition.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#2D2D2D] flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#101585]" />
              <span>5. Cookies Policy</span>
            </h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking tools to analyze web traffic, remember user preferences, and personalize your experience. You can manage cookies by adjusting your browser settings; however, disabling certain cookies might restrict navigation or function on some sections of our website.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-[#2D2D2D]">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions regarding this Privacy Policy or our data management protocols, please reach out to us at:
            </p>
            <div className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-sm space-y-2">
              <p><strong>Email:</strong> info@rksbrainstorm.com</p>
              <p><strong>Phone:</strong> +91-8790008824 / +91-8790008825</p>
              <p><strong>Office:</strong> RK&apos;s Brainstorm Headquarters, Hyderabad, India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B4F8C] rounded-3xl p-8 text-white text-center space-y-4">
          <h2 className="text-2xl font-black">Need More Details?</h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            If you need detailed compliance worksheets or have customized privacy requirements for enterprise software, let us know.
          </p>
          <div>
            <Link
              href="/contact"
              className="bg-white text-[#1B4F8C] hover:bg-slate-50 font-bold px-6 py-2.5 rounded-full shadow-md inline-flex items-center gap-2 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#1B4F8C]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
