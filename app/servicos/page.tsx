import PageBanner from '@/components/PageBanner';
import ServicesDetail from '@/components/servicos/ServicesDetail';

export default function ServicePage() {
  return (
    <>
      <PageBanner
        title="Áreas de Atuação"
        subtitle="Soluções jurídicas especializadas para cada necessidade"
      />
      <ServicesDetail />
    </>
  );
}
