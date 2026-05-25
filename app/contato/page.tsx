import ContactForm from '@/components/contato/ContactForm';
import MapsSection from '@/components/contato/MapsSection';
import PageBanner from '@/components/PageBanner';

export default function Contato() {
  return (
    <>
      <PageBanner title="Contato" subtitle="Entre em contato conosco" />
      <ContactForm />
      <MapsSection />
    </>
  );
}
