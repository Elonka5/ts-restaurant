import Hero from '../components/Hero/Hero';
import MenuSection from '../components/MenuSection/MenuSection';
import Cook from '../components/Cook/Cook';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import RecentPost from '../RecentPost/RecentPost';
import ReservationSection from '../components/ReservationSection/ReservationSection';
import CategorySection from '../components/CategorySection/CategorySection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <MenuSection />
      <Cook />
      <FeaturesSection />
      <RecentPost />
      <ReservationSection />
      <CategorySection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
