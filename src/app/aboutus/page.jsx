import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-sky-50 min-h-screen pt-24 text-gray-800">
      {/* Banner - Lighter & More Spacious */}
      <section className="bg-gradient-to-br from-sky-100 via-emerald-50 to-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fade-in">
          <div className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dhwxbtiwt/image/upload/v1762446062/card_rjvq37.jpg"
              width={400}
              height={600}
              alt="Dr Daisy Brand Card"
              className="rounded-3xl shadow-2xl border-4 border-emerald-200 transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About <span className="text-emerald-600">Dr. Daisy's Healing Touch</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-sky-600 font-semibold tracking-wide">
              Where Care Blossoms – Homeopathic Excellence in Moradabad
            </p>
            <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
              At Dr. Daisy's Healing Touch, holistic healing and gentle science combine to nurture every patient with compassion, skill, and personal attention. Our philosophy centers on treating root causes and guiding you towards lasting wellness with natural, proven homeopathic remedies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Doctor Profile - Lighter Background */}
      <section className="bg-white py-20 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/WhatsApp-Image-2025-11-05-at-19.08.54_46f6cbd4.jpg"
              width={300}
              height={400}
              alt="Dr Daisy Profile"
              className="rounded-2xl shadow-2xl border-4 border-sky-200 animate-slide-in-right"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">Dr. Daisy Chaudhary</h2>
            <div className="bg-gradient-to-r from-emerald-50 to-sky-50 p-6 rounded-xl shadow-md mb-6">
              <ul className="space-y-2 text-gray-800 font-medium text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> Homeopathic Physician, BHMS (Jaipur)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> CCH (Pune)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span> Registration No: H039934
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-600">●</span> Contact: 6397852842
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-3">
                {['Renal Disease', 'Skin Disease', 'Child Disorders', 'Female Disorders', 'Mental Health', 'Lifestyle Disorders'].map((specialty) => (
                  <span key={specialty} className="bg-gradient-to-r from-emerald-100 to-sky-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md transition-shadow">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              With years of experience and a passion for holistic patient care, Dr. Daisy is dedicated to helping every age group achieve optimal health through gentle medicine, empathetic listening, and scientific guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Story & Philosophy - Lighter Palette */}
      <section className="bg-gradient-to-br from-sky-50 via-emerald-50 to-white py-20 px-6 md:px-20 lg:px-32 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Story & Philosophy</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Discover the core principles that guide our approach to holistic healthcare
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-sky-300">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h4 className="font-bold text-xl mb-3 text-sky-700">Holistic Approach</h4>
              <p className="text-gray-700 leading-relaxed">We treat people, not just diseases, for lasting change in health, mind, and spirit.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-emerald-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h4 className="font-bold text-xl mb-3 text-emerald-700">Compassion & Trust</h4>
              <p className="text-gray-700 leading-relaxed">Listening, empathy, and caring partnerships are at the heart of every consultation.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-sky-300">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚕️</span>
              </div>
              <h4 className="font-bold text-xl mb-3 text-sky-700">Expert Guidance</h4>
              <p className="text-gray-700 leading-relaxed">Specialized therapy for chronic cases, skin & renal health, lifestyle disorders, and emotional wellbeing.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-xl">
              Every care plan is tailored for each person and combines science with natural remedies for gentle, effective results.
            </p>
          </div>
        </div>
      </section>
{/* Branding + Images Section - Better Alignment */}
<section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Visit Us</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Clinic Address */}
      <div className="bg-gradient-to-br from-emerald-50 to-sky-50 p-8 rounded-2xl shadow-lg animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <Image
            src="https://res.cloudinary.com/dhwxbtiwt/image/upload/v1762446938/sthethoscope_uknyi3.jpg"
            width={200}
            height={140}
            alt="Clinic Stethoscope"
            className="rounded-xl shadow-md transition-transform duration-700 hover:scale-105"
          />
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-700 mb-3">Clinic Address</h4>
            <p className="text-gray-800 font-medium mb-1">Khushalpur Shahpur Road</p>
            <p className="text-gray-800 font-medium mb-1">Near GK Public School</p>
            <p className="text-gray-800 font-bold">Moradabad - 244001</p>
          </div>
        </div>
      </div>
      
      {/* Clinic Hours */}
      <div className="bg-gradient-to-br from-sky-50 to-emerald-50 p-8 rounded-2xl shadow-lg animate-fade-in hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <Image
            src="https://res.cloudinary.com/dhwxbtiwt/image/upload/v1762446944/clinic-doctor_svsaze.jpg"
            width={200}
            height={160}
            alt="Clinic doctor"
            className="rounded-xl shadow-md border-2 border-sky-200 transition-transform duration-700 hover:scale-105"
          />
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-sky-700 mb-3">Clinic Hours</h4>
            <ul className="space-y-2 text-gray-800 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600">●</span> Monday-Saturday
              </li>
              <li className="pl-5 text-sm">10:00 AM - 2:00 PM</li>
              <li className="pl-5 text-sm">6:00 PM - 8:00 PM</li>
              <li className="flex items-center gap-2 text-red-600 font-bold mt-2">
                <span>●</span> Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Our Values - Lighter & Modern */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Core Values</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            The principles that define our commitment to exceptional care
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl p-10 text-center border-t-4 border-emerald-400 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🤝</span>
              </div>
              <h4 className="text-2xl font-extrabold text-emerald-700 mb-3">Integrity</h4>
              <p className="text-gray-700 leading-relaxed">Transparent, ethical treatment and honest communication, always in your best interest.</p>
            </div>
            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl p-10 text-center border-t-4 border-sky-400 group">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">💡</span>
              </div>
              <h4 className="text-2xl font-extrabold text-sky-700 mb-3">Innovation</h4>
              <p className="text-gray-700 leading-relaxed">Continuous improvement in therapy and technology for faster patient relief and safer care.</p>
            </div>
            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl p-10 text-center border-t-4 border-emerald-400 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">❤️</span>
              </div>
              <h4 className="text-2xl font-extrabold text-emerald-700 mb-3">Empathy</h4>
              <p className="text-gray-700 leading-relaxed">Every patient is heard, validated, and supported throughout their healing journey.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
