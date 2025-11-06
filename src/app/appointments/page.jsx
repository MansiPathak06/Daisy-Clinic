// app/appointments/page.jsx
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Separate component that uses useSearchParams
function AppointmentForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    appointmentType: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    symptoms: '',
    previousTreatment: '',
    medications: '',
    allergies: '',
    additionalNotes: ''
  });

  const [bookingComplete, setBookingComplete] = useState(false);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setBookingComplete(true);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'General Consultation',
    'Skin Diseases Treatment',
    'Women Health Treatment',
    'Child Health Treatment',
    'Mental Health Treatment',
    'Kidney Diseases Treatment',
    'Respiratory Treatment',
    'Arthritis Management',
    'Diabetes Care',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  // Success Screen
  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full mt-20 bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-cyan-100">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Appointment Confirmed! 🎉</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your appointment request has been successfully submitted!
          </p>
          
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 mb-8 border border-cyan-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-bold text-gray-800 text-lg">Email Sent Successfully!</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Your appointment details have been sent to <span className="font-semibold">Dr. Daisy's Clinic</span>
              <br />
              You will receive a confirmation call/email within 24 hours.
            </p>
          </div>

          <div className="bg-cyan-50 rounded-lg p-4 mb-8 border border-cyan-200">
            <p className="text-sm text-gray-700">
              📧 Confirmation email sent to clinic
              <br />
              📱 Keep your phone handy for confirmation call
              <br />
              🕐 Clinic hours: Mon-Sat 9AM-2PM & 5PM-6PM
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointments"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
            >
              Book Another Appointment
            </a>
            <a
              href="/"
              className="bg-white text-cyan-600 border-2 border-cyan-500 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-all"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Book Your <span className="text-cyan-100">Appointment</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-50">
              Schedule a consultation with Dr. Daisy - Your path to natural healing starts here
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="bg-white shadow-sm sticky top-0 z-40 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: 'Personal Info' },
                { num: 2, label: 'Appointment' },
                { num: 3, label: 'Medical Info' },
                { num: 4, label: 'Review' }
              ].map((item, index) => (
                <div key={item.num} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= item.num
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step > item.num ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        item.num
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium hidden sm:block ${
                      step >= item.num ? 'text-cyan-600' : 'text-gray-500'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className={`flex-1 h-1 mx-2 rounded transition-all ${
                      step > item.num ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form 
              action="https://formsubmit.co/pathakmansi608@gmail.com" 
              method="POST"
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-cyan-100"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="🏥 New Appointment Booking - Dr. Daisy's Clinic" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/appointments?success=true` : ''} />

              {/* Hidden inputs to preserve all form data across steps */}
              <input type="hidden" name="First_Name" value={formData.firstName} />
              <input type="hidden" name="Last_Name" value={formData.lastName} />
              <input type="hidden" name="Email" value={formData.email} />
              <input type="hidden" name="Phone_Number" value={formData.phone} />
              <input type="hidden" name="Age" value={formData.age} />
              <input type="hidden" name="Gender" value={formData.gender} />
              <input type="hidden" name="Appointment_Type" value={formData.appointmentType} />
              <input type="hidden" name="Service_Required" value={formData.service} />
              <input type="hidden" name="Preferred_Date" value={formData.preferredDate} />
              <input type="hidden" name="Preferred_Time" value={formData.preferredTime} />
              <input type="hidden" name="Symptoms_Concerns" value={formData.symptoms} />
              <input type="hidden" name="Previous_Treatment" value={formData.previousTreatment} />
              <input type="hidden" name="Current_Medications" value={formData.medications} />
              <input type="hidden" name="Allergies" value={formData.allergies} />
              <input type="hidden" name="Additional_Notes" value={formData.additionalNotes} />
              
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Personal Information</h2>
                    <p className="text-gray-600">Let's start with your basic details</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="1"
                        max="120"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="25"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Appointment Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Appointment Details</h2>
                    <p className="text-gray-600">Choose your preferred date, time, and service</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Appointment Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['First Visit', 'Follow-up', 'Online Consultation'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, appointmentType: type }))}
                          className={`p-4 rounded-lg border-2 font-medium transition-all ${
                            formData.appointmentType === type
                              ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                              : 'border-gray-300 hover:border-cyan-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Available slots: Monday - Saturday, 9 AM - 2 PM & 5 PM - 6 PM. Sunday closed.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Medical Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Medical Information</h2>
                    <p className="text-gray-600">Help us understand your health concerns better</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Symptoms/Concerns <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                      placeholder="Describe your symptoms or health concerns..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Treatment (if any)
                    </label>
                    <textarea
                      name="previousTreatment"
                      value={formData.previousTreatment}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                      placeholder="Any previous treatments or consultations..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Medications
                    </label>
                    <input
                      type="text"
                      name="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="List any medications you're currently taking..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Allergies
                    </label>
                    <input
                      type="text"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="Any known allergies..."
                    />
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <p className="text-sm text-gray-700">
                      <strong>Privacy Notice:</strong> All medical information is kept strictly confidential and used only for treatment purposes.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Review Your Appointment</h2>
                    <p className="text-gray-600">Please review all information before submitting</p>
                  </div>

                  {/* Personal Info Review */}
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-200">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-gray-600">Name:</span> <span className="font-semibold">{formData.firstName} {formData.lastName}</span></div>
                      <div><span className="text-gray-600">Email:</span> <span className="font-semibold">{formData.email}</span></div>
                      <div><span className="text-gray-600">Phone:</span> <span className="font-semibold">{formData.phone}</span></div>
                      <div><span className="text-gray-600">Age:</span> <span className="font-semibold">{formData.age} years</span></div>
                      <div><span className="text-gray-600">Gender:</span> <span className="font-semibold capitalize">{formData.gender}</span></div>
                    </div>
                  </div>

                  {/* Appointment Details Review */}
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-200">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                      Appointment Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-gray-600">Type:</span> <span className="font-semibold">{formData.appointmentType}</span></div>
                      <div><span className="text-gray-600">Service:</span> <span className="font-semibold">{formData.service}</span></div>
                      <div><span className="text-gray-600">Date:</span> <span className="font-semibold">{formData.preferredDate}</span></div>
                      <div><span className="text-gray-600">Time:</span> <span className="font-semibold">{formData.preferredTime}</span></div>
                    </div>
                  </div>

                  {/* Medical Info Review */}
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-200">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                      Medical Information
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-600 block mb-1">Symptoms:</span>
                        <p className="font-semibold bg-white p-3 rounded-lg">{formData.symptoms}</p>
                      </div>
                      {formData.previousTreatment && (
                        <div>
                          <span className="text-gray-600 block mb-1">Previous Treatment:</span>
                          <p className="font-semibold bg-white p-3 rounded-lg">{formData.previousTreatment}</p>
                        </div>
                      )}
                      {formData.medications && (
                        <div>
                          <span className="text-gray-600 block mb-1">Medications:</span>
                          <p className="font-semibold bg-white p-3 rounded-lg">{formData.medications}</p>
                        </div>
                      )}
                      {formData.allergies && (
                        <div>
                          <span className="text-gray-600 block mb-1">Allergies:</span>
                          <p className="font-semibold bg-white p-3 rounded-lg">{formData.allergies}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>

                  {/* Terms & Conditions */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-5 h-5 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the <a href="#" className="text-cyan-600 hover:underline">terms and conditions</a> and confirm that all information provided is accurate. I understand that appointments are subject to availability confirmation.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="flex-1 px-6 py-3 border-2 border-cyan-500 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-all"
                  >
                    ← Previous
                  </button>
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Confirm Appointment
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Book With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose from multiple time slots that fit your schedule</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Confirmation</h3>
                <p className="text-gray-600">Get immediate booking confirmation via email & SMS</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Care</h3>
                <p className="text-gray-600">Personalized homeopathic treatment from Dr. Daisy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-lg mb-6 text-cyan-50">
              For urgent appointments or queries, call us directly
            </p>
            <a 
              href="tel:6359752842" 
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +91 635 975 2842
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main component that wraps AppointmentForm in Suspense
export default function AppointmentsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      </div>
    }>
      <AppointmentForm />
    </Suspense>
  );
}
