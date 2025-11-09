"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';

const services = [
    "Renal Disease", "Skin and Hair Disease", "Child Disorders", "Female Disorders", "Mental Health", "Life Style Orders",
//   "Kidney Diseases Treatment", "Skin and Hair Diseases Treatment", "Arthritis Pain Management", "Women Health Treatment", 
//   "Mental Health Treatment", "Respiratory Diseases Treatment", "Gastric Problems Treatment", "Child Health Problem Treatment",
//   "Homeopathy Doctor in Moradabad", "Autism in Child", "Speech Problems in Children Treatment", "Growth Problems in Childrens Treatment",
//   "Pigmentation solutions", "Skin tightening", "Psoriasis Treatment(Specialist)", "Eczema Treatment", "Vitiligo(White Spot) Treatment",
//   "Acne,Pimple Treatment", "Ringworm,Scabies Treatment", "Diabetes Treatment", "Thyroid(Graves Diseases) Treatment", "Kidney Stones Treatment",
//   "Kidney Failure Treatment", "Urinary Tract Infections", "Cystitis Treatment", "Bronchitis Treatment", "Asthma Treatment", 
//   "Sinusitis Treatment", "Tuberculosis(TB) Treatment", "Nasal Polyps Treatment", "Fissure,Fistula Treatment", "Hemorrhoids Treatment",
//   "Female infertility treatment", "Male infertility treatment", "Sexual Disorders Treatment(Male & Female)", "Medicines for Skin and Hair Diseases,kidney Disease,piles,fistula,haemmoroids",
//   "Prostate Cancer Treatment", "Anxiety,Tension,Depression Treatment (Non-Habit Forming)", "OCD Treatment", "Phobia Treatment",
//   "Epilepsy Treatment in Moradabad", "Insomnia Treatment", "Migraine Treatment", "PCOD Treatment", "Uterus Fibroids", "Ovarian Cyst",
//   "Menstrual Irregularity Treatment", "Leukorrhea Treatment"
// ];
];

const gradientClasses = [
  'from-sky-100 to-blue-50',
  'from-green-50 to-emerald-50',
  'from-blue-50 to-sky-100',
  'from-teal-50 to-cyan-50',
  'from-emerald-50 to-green-100',
  'from-cyan-50 to-blue-50'
];

export default function ServiceSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [mounted, setMounted] = useState(false);
  const observerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [mounted]);

  const getGradient = (index) => {
    return gradientClasses[index % gradientClasses.length];
  };

  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative background elements */}
      {mounted && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-float-delayed-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-200/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 via-green-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-gradient-text">
            Services Offered
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive homeopathic solutions for your health and wellness
          </p>
        </div>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const gradientClass = getGradient(idx);
            const isVisible = visibleCards.includes(idx);
            const baseClasses = `group relative bg-gradient-to-br ${gradientClass} rounded-2xl shadow-md hover:shadow-2xl p-6 text-gray-800 font-medium transition-all duration-700 hover:scale-105 border border-sky-100/50 backdrop-blur-sm overflow-hidden`;
            const visibilityClasses = mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
            
            return (
              <li
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
                className={`${baseClasses} ${visibilityClasses}`}
                style={{
                  transitionDelay: mounted ? `${(idx % 9) * 0.05}s` : '0s'
                }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-300/20 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                {/* Icon circle */}
                <div className="relative flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  {/* Service text */}
                  <span className="relative text-base md:text-lg leading-relaxed pt-1 group-hover:text-green-800 transition-colors duration-300">
                    {service}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
              </li>
            );
          })}
        </ul>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-gray-600 mb-6 text-lg">Can&apos;t find what you&apos;re looking for?</p>
        <Link href="/services" passHref>
  <button className="group relative cursor-pointer px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
    <span className="relative z-10">Contact Us for More Services</span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </button>
</Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.1);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes gradientText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }

        .animate-float-delayed-slow {
          animation: floatSlow 15s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }

        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientText 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}