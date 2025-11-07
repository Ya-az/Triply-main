import { HeroSection } from '../components/sections/HeroSection.jsx';
import { ServicesSection } from '../components/sections/ServicesSection.jsx';
import { DestinationsSection } from '../components/sections/DestinationsSection.jsx';
import { BookingSection } from '../components/sections/BookingSection.jsx';
import { TestimonialsSection } from '../components/sections/TestimonialsSection.jsx';
import { ContactSection } from '../components/sections/ContactSection.jsx';

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default Home;
