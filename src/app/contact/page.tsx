import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Smartphone, 
  Download, 
  CheckCircle2, 
  Sparkles,
  MessageCircle,
  Clock,
  Building2
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
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F2A93B]">
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
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8752C]">
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
                <div className="w-12 h-12 rounded-2xl bg-[#F2A93B]/15 text-[#E8752C] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400">Corporate Location</h4>
                  <p className="text-sm font-semibold text-[#2D2D2D] mt-0.5">
                    Corporate Office Hub, India
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Monday – Saturday: 9:00 AM – 6:30 PM IST
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
              <div className="inline-flex items-center space-x-2 bg-[#F2A93B] text-[#2D2D2D] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
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
                  <CheckCircle2 className="w-5 h-5 text-[#F2A93B]" />
                  <span>Complete Leadership & Finishing School Modules</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#F2A93B]" />
                  <span>Interactive Quizzes & Certificate Verification</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#F2A93B]" />
                  <span>Real-Time Performance Dashboard for HR & Management</span>
                </div>
              </div>

              {/* App Store & Google Play Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#qtran-app"
                  className="bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center space-x-3 transition-all hover:scale-105 shadow-md"
                >
                  <div className="w-7 h-7 flex items-center justify-center font-bold text-xl"></div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-gray-300">Download on the</div>
                    <div className="text-sm font-extrabold leading-tight">App Store</div>
                  </div>
                </a>

                <a
                  href="#qtran-app"
                  className="bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center space-x-3 transition-all hover:scale-105 shadow-md"
                >
                  <div className="w-6 h-6 flex items-center justify-center text-emerald-400 font-bold text-lg">▶</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-gray-300">GET IT ON</div>
                    <div className="text-sm font-extrabold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Phone Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-[440px] bg-gray-900 rounded-[40px] border-4 border-gray-700 shadow-2xl p-4 flex flex-col justify-between overflow-hidden group">
                <div className="w-32 h-4 bg-gray-700 mx-auto rounded-full mb-2"></div>
                
                {/* Simulated Screen */}
                <div className="bg-gradient-to-b from-[#1B4F8C] to-[#163f70] rounded-[28px] p-5 flex-1 text-white flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/20">
                        <Image src="/q-tranlogo.jpg" alt="Q-Tran Logo" fill className="object-cover" />
                      </div>
                      <span className="font-extrabold text-sm">Q-Tran</span>
                    </div>
                    <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full font-bold">Active</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/10 p-3 rounded-xl space-y-1">
                      <div className="text-[10px] text-blue-200">Current Module</div>
                      <div className="text-xs font-bold text-white">Leadership & Management</div>
                      <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-[#F2A93B] h-full w-[78%]"></div>
                      </div>
                    </div>

                    <div className="bg-white/10 p-3 rounded-xl space-y-1">
                      <div className="text-[10px] text-blue-200">Finishing School Batch</div>
                      <div className="text-xs font-bold text-white">Corporate Readiness Quiz</div>
                      <div className="text-[10px] text-teal-300 font-semibold">Passed • 95% Score</div>
                    </div>
                  </div>

                  <div className="bg-[#F2A93B] text-[#2D2D2D] font-extrabold text-xs py-2 rounded-xl text-center shadow-md">
                    Enroll in New Course →
                  </div>
                </div>

                <div className="w-10 h-1 bg-gray-600 mx-auto rounded-full mt-2"></div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Map / Address Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 card-fade">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
          <div className="flex items-center space-x-3 text-[#1B4F8C]">
            <Building2 className="w-6 h-6 text-[#2CA8A4]" />
            <h3 className="text-xl font-bold text-[#2D2D2D]">Our Presence Across India</h3>
          </div>

          <div className="h-64 rounded-2xl bg-gradient-to-r from-slate-100 to-blue-50 border border-gray-200 flex flex-col items-center justify-center text-center p-6 space-y-3 relative overflow-hidden">
            <MapPin className="w-10 h-10 text-[#E8752C] animate-bounce" />
            <div>
              <h4 className="text-base font-extrabold text-[#1B4F8C]">RK&apos;s Brainstorm Headquarters</h4>
              <p className="text-xs text-[#6B7280] max-w-md mt-1">
                Serving MNCs, corporate clients, and top educational institutions throughout major metropolitan hubs in India.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2CA8A4]">
              <span>Phone: +91-8790008824</span> • <span>Email: info@rksbrainstorm.com</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
