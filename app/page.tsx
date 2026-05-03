import About from '@/components/About';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import LocationSection from '@/components/LocationSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceSection />
      <TeamSection />
      <CTASection />
      <LocationSection />
    </>
  );
}
