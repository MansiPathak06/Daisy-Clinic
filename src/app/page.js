import React from 'react';
import MainBanner from './components/MainBanner';
import ServiceSection from './components/ServiceSection';
import ClinicInfo from './components/ClinicInfo';
import ContactSection from './components/ContactSection';

const page = () => {
  return (
    <div>
      <MainBanner/>
      <ServiceSection/>
      <ClinicInfo/>
      <ContactSection/>
    </div>
  );
}

export default page;
