"use client";
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/daisychaudhary07@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: '📬 New Contact Form Message - Dr. Daisy\'s Clinic',
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

        {/* Success Message */}
        {showSuccess && (
          <div className="max-w-2xl mx-auto mb-8 bg-green-50 border-2 border-green-400 rounded-2xl p-6 shadow-lg transform transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-green-800 text-lg">Message Sent Successfully! 🎉</h3>
                <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

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
                      href="mailto:daisychaudhary07@gmail.com" 
                      className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300 break-all"
                    >
                      daisychaudhary07@gmail.com
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
                      Khushalpur Shahpur Road, Near GK Public School, Moradabad-244001
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
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center cursor-pointer gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
