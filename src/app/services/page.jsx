// app/services/page.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

const services = [
  // Skin & Dermatology
  { title: 'Skin Diseases Treatment', category: 'Skin & Dermatology', description: 'Comprehensive treatment for various skin conditions using homeopathic remedies', icon: '🩺' },
  { title: 'Psoriasis Treatment (Specialist)', category: 'Skin & Dermatology', description: 'Specialized care for chronic psoriasis with natural healing approach', icon: '💉' },
  { title: 'Eczema Treatment', category: 'Skin & Dermatology', description: 'Effective homeopathic solutions for eczema and skin inflammation', icon: '🧴' },
  { title: 'Vitiligo (White Spot) Treatment', category: 'Skin & Dermatology', description: 'Natural treatment for vitiligo and pigmentation disorders', icon: '🎨' },
  { title: 'Acne, Pimple Treatment', category: 'Skin & Dermatology', description: 'Clear skin treatment for acne, pimples, and blemishes', icon: '✨' },
  { title: 'Pigmentation Solutions', category: 'Skin & Dermatology', description: 'Treatment for dark spots, melasma, and uneven skin tone', icon: '🌟' },
  { title: 'Skin Tightening', category: 'Skin & Dermatology', description: 'Natural therapies for skin firmness and elasticity', icon: '💆' },
  { title: 'Ringworm, Scabies Treatment', category: 'Skin & Dermatology', description: 'Effective treatment for fungal and parasitic skin infections', icon: '🦠' },

  // Children's Health
  { title: 'Child Health Problem Treatment', category: "Children's Health", description: 'Gentle homeopathic care for common childhood ailments', icon: '👶' },
  { title: 'Autism in Child', category: "Children's Health", description: 'Holistic support for children with autism spectrum disorders', icon: '🧩' },
  { title: 'Speech Problems in Children Treatment', category: "Children's Health", description: 'Comprehensive care for speech delays and disorders', icon: '💬' },
  { title: 'Growth Problems in Childrens Treatment', category: "Children's Health", description: 'Natural remedies to support healthy growth and development', icon: '📏' },

  // Women's Health
  { title: 'Women Health Treatment', category: "Women's Health", description: 'Specialized homeopathic care for women at all life stages', icon: '👩' },
  { title: 'Female Infertility Treatment', category: "Women's Health", description: 'Natural approach to enhance fertility and reproductive health', icon: '🌸' },
  { title: 'PCOD Treatment', category: "Women's Health", description: 'Holistic management of polycystic ovarian disorder', icon: '🩺' },
  { title: 'Uterus Fibroids', category: "Women's Health", description: 'Non-invasive treatment for uterine fibroids', icon: '💊' },
  { title: 'Ovarian Cyst', category: "Women's Health", description: 'Natural remedies for ovarian cysts and related symptoms', icon: '🔬' },
  { title: 'Menstrual Irregularity Treatment', category: "Women's Health", description: 'Balance hormones and regulate menstrual cycles naturally', icon: '📅' },

  // Men's Health
  { title: 'Male Infertility Treatment', category: "Men's Health", description: 'Comprehensive treatment to improve male fertility', icon: '👨' },
  { title: 'Sexual Disorders Treatment (Male & Female)', category: "Men's Health", description: 'Confidential treatment for sexual health concerns', icon: '💑' },
  { title: 'Prostate Cancer Treatment', category: "Men's Health", description: 'Supportive homeopathic care for prostate health', icon: '🎗️' },

  // Kidney & Urinary
  { title: 'Kidney Diseases Treatment', category: 'Kidney & Urinary', description: 'Natural treatment for various kidney disorders', icon: '🫘' },
  { title: 'Kidney Stones Treatment', category: 'Kidney & Urinary', description: 'Dissolve and prevent kidney stones naturally', icon: '💎' },
  { title: 'Kidney Failure Treatment', category: 'Kidney & Urinary', description: 'Supportive care to improve kidney function', icon: '🩺' },
  { title: 'Urinary Tract Infections', category: 'Kidney & Urinary', description: 'Effective treatment for recurrent UTIs', icon: '🚿' },
  { title: 'Cystitis Treatment', category: 'Kidney & Urinary', description: 'Relief from bladder inflammation and discomfort', icon: '💧' },

  // Mental Health
  { title: 'Mental Health Treatment', category: 'Mental Health', description: 'Holistic approach to mental wellness and emotional balance', icon: '🧠' },
  { title: 'Anxiety, Tension, Depression Treatment (Non-Habit Forming)', category: 'Mental Health', description: 'Safe, natural treatment without dependency risks', icon: '🕊️' },
  { title: 'OCD Treatment', category: 'Mental Health', description: 'Gentle care for obsessive-compulsive disorder', icon: '🔄' },
  { title: 'Phobia Treatment', category: 'Mental Health', description: 'Overcome fears and phobias naturally', icon: '🎭' },
  { title: 'Epilepsy Treatment in Moradabad', category: 'Mental Health', description: 'Supportive treatment for epilepsy management', icon: '⚡' },
  { title: 'Insomnia Treatment', category: 'Mental Health', description: 'Natural sleep solutions without habit-forming medications', icon: '😴' },
  { title: 'Migraine Treatment', category: 'Mental Health', description: 'Reduce frequency and intensity of migraine headaches', icon: '🤕' },

  // Respiratory
  { title: 'Respiratory Diseases Treatment', category: 'Respiratory', description: 'Comprehensive care for breathing and lung conditions', icon: '🫁' },
  { title: 'Bronchitis Treatment', category: 'Respiratory', description: 'Natural relief from acute and chronic bronchitis', icon: '🌬️' },
  { title: 'Asthma Treatment', category: 'Respiratory', description: 'Reduce frequency and severity of asthma attacks', icon: '💨' },
  { title: 'Sinusitis Treatment', category: 'Respiratory', description: 'Long-term relief from chronic sinus inflammation', icon: '👃' },
  { title: 'Tuberculosis (TB) Treatment', category: 'Respiratory', description: 'Supportive homeopathic care for TB patients', icon: '🦠' },
  { title: 'Nasal Polyps Treatment', category: 'Respiratory', description: 'Non-surgical approach to nasal polyps', icon: '🌀' },

  // Digestive
  { title: 'IBS Treatment', category: 'Digestive', description: 'Manage irritable bowel syndrome symptoms naturally', icon: '🫄' },
  { title: 'Gastric Problems Treatment', category: 'Digestive', description: 'Relief from acidity, gas, and indigestion', icon: '🥤' },
  { title: 'Fissure, Fistula Treatment', category: 'Digestive', description: 'Heal anal fissures and fistulas without surgery', icon: '💊' },
  { title: 'Hemorrhoids Treatment', category: 'Digestive', description: 'Natural treatment for piles and hemorrhoids', icon: '🩹' },

  // Chronic Conditions
  { title: 'Arthritis Pain Management', category: 'Chronic Conditions', description: 'Reduce joint pain and inflammation naturally', icon: '🦴' },
  { title: 'Arthritis Pain Treatment', category: 'Chronic Conditions', description: 'Long-term management of arthritis symptoms', icon: '🦵' },
  { title: 'Diabetes Treatment', category: 'Chronic Conditions', description: 'Natural support for blood sugar management', icon: '💉' },
  { title: 'Thyroid (Graves Diseases) Treatment', category: 'Chronic Conditions', description: 'Balance thyroid function naturally', icon: '🦋' },

  // Other Specialized Treatments
  { title: 'Homeopathy Doctor in Moradabad', category: 'General', description: 'Experienced homeopathic consultation and treatment', icon: '⚕️' },
  { title: 'Medicines for Skin Diseases, Kidney Disease, Piles, Fistula, Haemorroids', category: 'General', description: 'Specialized homeopathic medicines for various conditions', icon: '💊' },
];

const categories = [
  'All Services',
  'Skin & Dermatology',
  "Children's Health",
  "Women's Health",
  "Men's Health",
  'Kidney & Urinary',
  'Mental Health',
  'Respiratory',
  'Digestive',
  'Chronic Conditions',
  'General'
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'All Services' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen mt-18 bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-cyan-100">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50">
              Comprehensive Homeopathic Solutions for Your Health & Wellness
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="#services" 
                className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
              </a>
              <a 
                href="/appointments" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border-2 border-cyan-200 rounded-full focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <svg 
                  className="w-5 h-5 text-cyan-500 absolute left-4 top-1/2 transform -translate-y-1/2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                      : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Count */}
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Showing <span className="font-bold text-cyan-600">{filteredServices.length}</span> service{filteredServices.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-cyan-100 hover:border-cyan-300 group"
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{service.icon}</span>
                    </div>

                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-semibold rounded-full mb-3">
                      {service.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-teal-600 transition-all transform group-hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Services Found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
            <p className="text-xl mb-8 text-cyan-50">
              Book an appointment with Dr. Daisy and experience the power of homeopathic healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/appointments" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule an Appointment
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Hours</h3>
              <p className="text-gray-600">Monday - Saturday: 9AM - 7PM<br/>Sunday: Closed</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Care</h3>
              <p className="text-gray-600">Experienced homeopathic physician with proven results</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Patient-Centered</h3>
              <p className="text-gray-600">Personalized treatment plans for every individual</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
