import React from 'react';
import Hero from '../components/Hero/Hero';
import MenuSection from '../components/MenuSection/MenuSection';
import Cook from '../components/Cook/Cook';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import RecentPost from '../RecentPost/RecentPost';
import ReservationSection from '../components/ReservationSection/ReservationSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <MenuSection />
      <Cook />
      <FeaturesSection />
      <RecentPost />
      <ReservationSection />
    </div>
  );
};

export default Home;
