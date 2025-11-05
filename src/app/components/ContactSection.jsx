"use client";
import { Mail, Phone, Send, MapPin } from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-sky-50 via-green-50 to-sky-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
            Get in Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-green-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Reach out to us anytime.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {/* Contact Info Card */}
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-sky-100 p-3 rounded-xl flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-200">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Phone Number</h4>
                    <a 
                      href="tel:6397852842" 
                      className="text-lg font-semibold text-gray-800 hover:text-sky-600 transition-colors duration-300"
                    >
                      6397852842
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Email Address</h4>
                    <a 
                      href="mailto:info@drdaisyhealingtouch.com" 
                      className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300 break-all"
                    >
                      info@drdaisyhealingtouch.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-sky-100 p-3 rounded-xl flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-200">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Location</h4>
                    <p className="text-lg font-semibold text-gray-800">
                      Moradabad, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center italic">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h3>
              
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us how we can help you..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}