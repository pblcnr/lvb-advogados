import PageBanner from '@/components/PageBanner';
import HistorySection from '@/components/quem-somos/HistorySection';
import OfficeSection from '@/components/quem-somos/OfficeSection';
import ValueSection from '@/components/quem-somos/ValueSection';

export default function QuemSomos() {
  return (
    <>
      <PageBanner
        title="Quem Somos"
        subtitle="Conheça nossa história e nossos valores"
      />
      <HistorySection />
      <ValueSection />
      <OfficeSection />
    </>
  );
}
