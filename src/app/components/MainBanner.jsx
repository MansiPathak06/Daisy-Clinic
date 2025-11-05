"use client";
import React, { useState, useEffect } from "react";

export default function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your Cloudinary video URLs here
  const backgroundVideos = [
    "https://res.cloudinary.com/dhwxbtiwt/video/upload/v1762364015/downloaded-file_3_u3vdzf.mp4",
    "https://res.cloudinary.com/dhwxbtiwt/video/upload/v1762364090/downloaded-file_4_uaii3y.mp4",
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundVideos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundVideos.length]);

  return (
    <section className="relative overflow-hidden flex items-center justify-center h-[360px] md:h-[500px] lg:h-[600px]">
      {/* Background Video Slider */}
      <div className="absolute inset-0">
        {backgroundVideos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-transparent to-blue-400/20 animate-gradient"></div>
      {/* Floating decoration elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-sky-300/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    
        
        {/* Main heading with multiple effects */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl text-white animate-fade-in-up animation-delay-200">
          <span className="inline-block hover:scale-110 transition-transform duration-300">Dr. Daisy's</span>{" "}
          <span className="inline-block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">Healing Touch</span>
        </h1>
        
        {/* Subtitle with elegant styling */}
        <p className="text-xl md:text-3xl font-semibold text-sky-100 mb-8 animate-fade-in-up animation-delay-400 drop-shadow-lg">
          Where Care Blossoms
        </p>
        
        {/* CTA Button with premium feel */}
        <button className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg overflow-hidden shadow-2xl animate-fade-in-up animation-delay-600 transform hover:scale-110 transition-all duration-500">
          <span className="relative z-10">Book Appointment</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="absolute inset-0 flex items-center justify-center text-green-700 font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            Book Appointment
          </span>
        </button>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? "bg-white w-8 shadow-lg" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, -20px) scale(1.1);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes gradient {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-slide-down {
          animation: slideDown 1.2s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 8s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.7s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
