import React from 'react';
import ContactHero from '../components/Hero/ContactHero/ContactHero';
import LocationSection from '../components/LocationSection/LocationSection';
import ReservationSection from '../components/ReservationSection/ReservationSection';

const Contact = () => {
  return (
    <main>
      <ContactHero />
      <LocationSection />
      <ReservationSection />
    </main>
  );
};

export default Contact;
