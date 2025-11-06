import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-green-400 to-sky-400 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <h3 className="text-xl font-bold text-white">Dr. Daisy's Healing Touch</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Comprehensive homeopathic solutions for your health and wellness. Where care blossoms naturally.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="bg-gray-700 hover:bg-green-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-sky-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300"></span>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-gray-700 p-2 rounded-lg group-hover:bg-green-500 transition-colors duration-300 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 leading-relaxed">
                    Khushalpur Shahpur Road, Near GK Public School, Moradabad-244001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-gray-700 p-2 rounded-lg group-hover:bg-sky-500 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:6397852842" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                  6397852842
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-gray-700 p-2 rounded-lg group-hover:bg-green-500 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:daisychaudhary07@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300 break-all">
                  daisychaudhary07@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-gray-700 p-2 rounded-lg group-hover:bg-sky-500 transition-colors duration-300 flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-gray-400">
                  <p className="font-semibold text-white mb-1">Mon - Sat</p>
                  <p className="text-sm">10:00 AM - 2:00 PM</p>
                  <p className="text-sm">6:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Daisy's Healing Touch. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#disclaimer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
