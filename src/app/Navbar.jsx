"use client";
import { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-200 text-emerald-800 font-semibold shadow-xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img 
                src="https://res.cloudinary.com/dhwxbtiwt/image/upload/v1762363810/daisy-removebg-preview_w6hfkh.png"
                alt="Clinic Logo"
                className="h-12 w-auto transition-all duration-500 hover:scale-110"
              />
            </Link>
            <span className="hidden sm:block font-bold text-base lg:text-xl text-emerald-800 bg-clip-text animate-fade-in-up">
              Dr. Daisy Choudhary
            </span>
          </div>
          {/* Hamburger for mobile */}
          <div className="flex lg:hidden">
            <button
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {/* Hamburger icon */}
              <span className="block w-7 h-1 bg-white mb-1 rounded transition-all duration-300"></span>
              <span className="block w-7 h-1 bg-white mb-1 rounded transition-all duration-300"></span>
              <span className="block w-7 h-1 bg-white rounded transition-all duration-300"></span>
            </button>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden lg:flex space-x-6 text-lg">
            {["Home", "About Us", "Services", "Contact", "Appointments"].map((page) => (
              <Link
                href={page === "Home" ? "/" : `/${page.toLowerCase().replace(/ /g, "")}`}
                key={page}
                className="relative group transition-colors duration-300"
              >
                <span className="group-hover:text-emerald-700 group-hover:underline transition">{page}</span>
                <span className="block h-0.5 bg-emerald-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile menu, slide from left */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-64 h-full z-50 bg-emerald-400 shadow-md transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <img 
                  src="https://res.cloudinary.com/dhwxbtiwt/image/upload/v1762363810/daisy-removebg-preview_w6hfkh.png"
                  alt="Clinic Logo"
                  className="h-11 w-auto"
                />
              </Link>
              <span className="font-semibold text-white text-lg">
                Dr. Daisy Choudhary
              </span>
            </div>
            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => setMobileOpen(false)}
            >
              {/* X (close) icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-6 space-y-4 text-lg">
            {["Home", "About Us", "Services", "Contact", "Appointments"].map((page) => (
              <Link
                href={page === "Home" ? "/" : `/${page.toLowerCase().replace(/ /g, "")}`}
                key={page}
                className="transition-colors duration-300 hover:text-rose-100"
                onClick={() => setMobileOpen(false)}
              >
                {page}
              </Link>
            ))}
          </nav>
        </div>
        {/* Modal backdrop */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};


export default Navbar;
