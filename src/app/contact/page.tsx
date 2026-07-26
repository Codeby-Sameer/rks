import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Smartphone,
  CheckCircle2,
  Sparkles,
  MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us & Get Q-Tran App | RK's Brainstorm",
  description: "Get in touch with RK's Brainstorm for corporate training, executive consulting, RPO outsourcing, or download the Q-Tran App.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#1B4F8C] via-[#163f70] to-[#2CA8A4] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0047AB]">
            <Sparkles className="w-4 h-4" />
            <span>Connect with Our Experts</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">
            Contact Us & App Download
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We are here to help your organization expand its business potential with qualitative training, executive search, and technology solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Section: Form + Contact Details Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details Block */}
          <div className="lg:col-span-5 space-y-8 card-left">
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#101585]">
                Get In Touch Direct
              </span>
              <h2 className="text-3xl font-black text-[#2D2D2D]">
                Reach RK&apos;s Brainstorm
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Have questions about our leadership training modules, executive search consulting, or RPO agreements? Our dedicated consultants are available to assist.
              </p>
            </div>

            {/* Structured Contact Details Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">

              {/* Phone Numbers */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1B4F8C]/10 text-[#1B4F8C] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400">Phone Numbers</h4>
                  <p className="text-base font-extrabold text-[#2D2D2D] mt-0.5">
                    +91-8790008824
                  </p>
                  <p className="text-base font-extrabold text-[#1B4F8C]">
                    +91-8790008825
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#2CA8A4]/10 text-[#2CA8A4] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400">Email Address</h4>
                  <a href="mailto:info@rksbrainstorm.com" className="text-base font-extrabold text-[#2D2D2D] hover:text-[#1B4F8C] transition-colors mt-0.5 block">
                    info@rksbrainstorm.com
                  </a>
                </div>
              </div>

              {/* Office Location & Hours */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#0047AB]/10 text-[#0047AB] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400">Location</h4>
                  <p className="text-sm font-semibold text-[#2D2D2D] mt-0.5">

                    #407, Jain Sadguru Images Capital Park, Capital Pk Rd, VIP Hills, Madhapur, Hyderabad, Telangana 500081, India
                  </p>

                </div>
              </div>

              {/* Quick WhatsApp Action CTA */}
              <div className="pt-4">
                <a
                  href="https://wa.me/918790008824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form Block */}
          <div className="lg:col-span-7 card-right" id="form">
            <ContactForm />
          </div>

        </div>
      </section>

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

      {/* Map / Address Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 card-fade pb-16">
        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266451724517!2d78.38362417362671!3d17.446956483450492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91932c1669d5%3A0x8ac28f5ae7f1adf1!2sRK%E2%80%99S%20BRAINSTORM!5e0!3m2!1sen!2sus!4v1785086628415!5m2!1sen!2sus"
            className="w-full h-[400px] sm:h-[450px] rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

    </div>
  );
}
