import Link from 'next/link';
import {
  FaGlobe,
  FaShieldAlt,
  FaBalanceScale,
  FaBriefcase,
  FaArrowRight,
} from 'react-icons/fa';

const services = [
  {
    icon: FaGlobe,
    title: 'Direito Digital',
    description:
      'Proteção jurídica para o ambiente digital, incluindo privacidade de dados, e-commerce e crimes cibernéticos.',
  },
  {
    icon: FaShieldAlt,
    title: 'Propriedade Intelectual',
    description:
      'Registro e proteção de marcas, patentes, direitos autorais e segredos industriais.',
  },
  {
    icon: FaBalanceScale,
    title: 'Direito Concorrencial',
    description:
      'Consultoria antitruste, análise de concentrações e defesa em processos administrativos.',
  },
  {
    icon: FaBriefcase,
    title: 'Direito Empresarial',
    description:
      'Assessoria completa em contratos, societário, M&A e governança corporativa.',
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-primary py-16 md:py-30">
      <div className="mx-auto max-w-8xl items-center px-6 text-center md:px-16">
        {/* Label e título da seção */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase">
          Especialidades
        </p>
        <h2 className="font-playfair text-text-primary mt-2 mb-12 text-3xl font-bold md:text-4xl">
          Áreas de Atuação
        </h2>
        {/* Grid de cards de serviços */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                className="group border-primary-light hover:border-accent border px-6 py-10 text-left transition-all duration-300 hover:scale-105"
                key={service.title}
              >
                {/* Ícone */}
                <Icon className="text-accent mb-6 text-4xl transition-transform duration-300 group-hover:scale-110" />
                {/* Título do card */}
                <h3 className="font-playfair text-text-primary mb-4 text-lg font-bold">
                  {service.title}
                </h3>
                {/* Descrição */}
                <p className="text-text-footer text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* Botão CTA */}
        <Link
          href="/servicos"
          className="group border-accent text-accent hover:bg-accent hover:text-primary mt-12 inline-flex cursor-pointer items-center gap-2 rounded-xs border px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
        >
          Ver todos os serviços
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
