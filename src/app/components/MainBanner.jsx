"use client";
import React, { useState, useEffect } from "react";

export default function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Video URLs
  const backgroundVideos = [
    "https://res.cloudinary.com/dhwxbtiwt/video/upload/v1762364015/downloaded-file_3_u3vdzf.mp4",
    "https://res.cloudinary.com/dhwxbtiwt/video/upload/v1762364090/downloaded-file_4_uaii3y.mp4",
  ];

  useEffect(() => {
    setMounted(true); // avoid mismatched initial opacity
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundVideos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundVideos.length]);

  return (
    <>
      <section className="relative overflow-hidden flex items-center justify-center mt-20 h-[360px] md:h-[500px] lg:h-[600px]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-transparent to-blue-400/20 animate-gradient"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-sky-300/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Content */}
        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl text-white animate-fade-in-up">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Dr. Daisy's</span>{" "}
            <span className="inline-block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">Healing Touch</span>
          </h1>
          <p className="text-xl md:text-3xl font-semibold text-sky-100 mb-8 animate-fade-in-up drop-shadow-lg">
            Where Care Blossoms
          </p>
          <button className="group cursor-pointer relative px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500">
            {/* Main Text */}
            <span className="relative z-10  transition-colors duration-500 group-hover:text-white">
              Book Appointment
            </span>
            {/* Overlay that fades in on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-green-850 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Secondary Text (visible only on hover) */}
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(10px, -20px) scale(1.1); }
          }
          @keyframes gradient {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.3; }
          }
          .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delayed { animation: float 10s ease-in-out infinite; animation-delay: 1.5s; }
          .animate-gradient { animation: gradient 8s ease-in-out infinite; }
        `}</style>
      </section>

      {/* Stats Bar just below MainBanner */}
      <div className="w-full bg-white/90 py-6 flex flex-wrap justify-around items-center shadow-lg mt-0">
        <div className="text-center px-6">
          <div className="text-3xl font-bold text-sky-700">3K+</div>
          <div className="text-lg text-gray-600 mt-1">Happy patients</div>
        </div>
        <div className="text-center px-6">
          <div className="text-3xl font-bold text-sky-700">10+</div>
          <div className="text-lg text-gray-600 mt-1">Awards</div>
        </div>
        <div className="text-center px-6">
          <div className="text-3xl font-bold text-sky-700">100%</div>
          <div className="text-lg text-gray-600 mt-1">Success Rate</div>
        </div>
        <div className="text-center px-6">
          <div className="text-3xl font-bold text-sky-700">8+</div>
          <div className="text-lg text-gray-600 mt-1">Experience</div>
        </div>
      </div>
    </>
  );
}
