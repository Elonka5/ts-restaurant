import React from 'react';
import HeroMenuPage from '../components/Hero/HeroMenu/HeroMenu';
import { StartersSection } from '../components/StartersSection/StartersSection';
import { MainsSection } from '../components/MainsSection/MainsSection';
import DrinksSection from '../components/DrinksSection/DrinksSection';
import ReservationSection from '../components/ReservationSection/ReservationSection';

const Menu = () => {
  return (
    <main>
      <HeroMenuPage />
      <StartersSection />
      <MainsSection />
      <DrinksSection />
      <ReservationSection />
    </main>
  );
};

export default Menu;
