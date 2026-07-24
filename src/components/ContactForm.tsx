'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Training',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl space-y-6 relative overflow-hidden">
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 bg-[#1B4F8C]/10 px-3 py-1 rounded-full text-xs font-bold text-[#1B4F8C]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick Inquiry Form</span>
        </div>
        <h3 className="text-2xl font-extrabold text-[#2D2D2D]">
          Send Us a Message
        </h3>
        <p className="text-xs text-[#6B7280]">
          Fill out the form below and our consulting team will respond within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
          <div className="w-14 h-14 bg-[#2CA8A4] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-[#1B4F8C]">Thank You, {formData.name}!</h4>
          <p className="text-sm text-[#6B7280] max-w-sm mx-auto">
            Your message regarding <span className="font-semibold text-[#101585]">{formData.service}</span> has been received. Our team will call or email you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', service: 'Training', message: '' });
            }}
            className="text-xs font-bold text-[#1B4F8C] underline hover:text-[#2CA8A4]"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91-9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-1">
                Service Interest
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] focus:border-transparent transition-all bg-white"
              >
                <option value="Training">Qualitative Corporate Training</option>
                <option value="Finishing School">Finishing School Program</option>
                <option value="Executive Consulting">Executive Search & Consulting</option>
                <option value="Outsourcing / RPO">Recruitment Process Outsourcing (RPO)</option>
                <option value="Q-Tran App">Q-Tran Mobile Platform</option>
                <option value="BMS Demo">BMS Business Management System</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-1">
              Your Message / Requirements
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your team training, leadership hiring, or app requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] focus:border-transparent transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0047AB] to-[#101585] text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-[#0047AB]/30 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 text-base"
          >
            <span>Submit Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
