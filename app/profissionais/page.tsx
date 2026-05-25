import PageBanner from '@/components/PageBanner';
import TeamDetail from '@/components/profissionais/TeamDetail';

export default function Profissionais() {
  return (
    <>
      <PageBanner
        title="Profissionais"
        subtitle="Conheça nossa equipe de especialistas"
      />
      <TeamDetail />
    </>
  );
}
