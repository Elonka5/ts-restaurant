import { AboutHero } from '../components/Hero/AboutHero/AboutHero';
import { OurStorySection } from '../components/OurStorySection/OurStorySection';
import { StaffSection } from '../components/StaffSection/StaffSection';
import Video from '../components/Video/Video';
import { ProcessSection } from '../components/ProcessSection/ProcessSection';
import ReservationSection from '../components/ReservationSection/ReservationSection';

const About = () => {
  return (
    <main>
      <AboutHero />
      <OurStorySection />
      <StaffSection />
      <Video />
      <ProcessSection />
      <ReservationSection />
    </main>
  );
};

export default About;
