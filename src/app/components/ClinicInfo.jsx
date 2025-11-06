"use client";
import Image from "next/image";
import Link from 'next/link';
import { MapPin, Phone, Clock, Calendar } from "lucide-react";

export default function ClinicInfo() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-sky-50 to-green-50 py-20 px-6 md:px-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
            Visit Our Clinic
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-sky-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Professional healthcare in a modern facility
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Image Section */}
          <div className="flex-1 w-full flex items-stretch">
            <div className="relative overflow-hidden rounded-5xl  bg-transparent p-2 transform transition-all duration-500  hover:-translate-y-2 w-full h-full">
              <div className="overflow-hidden rounded-2xl h-full flex items-center">
                <Image
                  src="https://res.cloudinary.com/dhwxbtiwt/image/upload/v1762364429/b109f572-f09d-471f-ae3c-47da576b3067.png" // Local file or Cloudinary link for the PNG with transparent background
                  alt="Clinic"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 w-full space-y-8 flex flex-col">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="bg-green-100 p-4 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    Clinic Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Khushalpur Shahpur Road, Near GK Public School,
                    Moradabad-244001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-5">
                <div className="bg-sky-100 p-4 rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-2 font-medium">
                    Contact Number
                  </p>
                  <a
                    href="tel:6397852842"
                    className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300"
                  >
                    6397852842
                  </a>
                </div>
              </div>
            </div>

            {/* Timing Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="bg-green-100 p-4 rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Clinic Hours
                  </h3>

                  {/* Working Days */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="font-semibold text-gray-700">
                        Monday - Saturday
                      </span>
                    </div>
                    <div className="pl-8 space-y-2">
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Morning: 10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Evening: 6:00 PM - 8:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Sunday Closed */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="font-semibold text-gray-700">
                        Sunday
                      </span>
                      <span className="ml-auto bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link href="/appointments">
  <button className="w-full bg-gradient-to-r cursor-pointer from-green-500 to-sky-500 hover:from-green-600 hover:to-sky-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
    Schedule an Appointment
  </button>
</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
