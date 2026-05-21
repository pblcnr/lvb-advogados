import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import ServiceSection from '@/components/home/ServiceSection';
import TeamSection from '@/components/home/TeamSection';
import CTASection from '@/components/CTASection';
import LocationSection from '@/components/home/LocationSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceSection />
      <TeamSection />
      <CTASection
        title="Precisa de assessoria jurídica especializada?"
        subtitle="Entre em contato e descubra como podemos ajudar sua empresa a crescer com segurança jurídica."
      />
      <LocationSection />
    </>
  );
}
