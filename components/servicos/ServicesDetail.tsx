'use client';
import { motion } from 'framer-motion';
import {
  FaBalanceScale,
  FaGlobe,
  FaShieldAlt,
  FaSuitcase,
} from 'react-icons/fa';

const services = [
  {
    icon: FaGlobe,
    title: 'Direito Digital',
    description:
      'Oferecemos consultoria especializada em todas as questões jurídicas do ambiente digital, desde a adequação à LGPD até a proteção contra crimes cibernéticos, passando por contratos de tecnologia e regulação de plataformas.',
    areas: [
      'Proteção de dados pessoais',
      'E-commerce e negócios digitais',
      'Crimes cibernéticos',
      'Contratos de tecnologia',
      'Regulação de plataformas digitais',
      'Marco Civil da Internet',
    ],
  },
  {
    icon: FaShieldAlt,
    title: 'Propriedade Intelectual',
    description:
      'Protegemos os ativos intangíveis de nossos clientes com estratégias abrangentes de propriedade intelectual, incluindo registros, licenciamentos e defesa contra violações.',
    areas: [
      'Registro de marcas e patentes',
      'Direitos autorais',
      'Segredos industriais',
      'Transferência de tecnologia',
      'Licenciamente e franquias',
      'Combate à pirataria',
    ],
  },
  {
    icon: FaBalanceScale,
    title: 'Direito Concorrencial',
    description:
      'Atuamos em todas as frentes do direito concorrencial, desde a consultoria preventiva até a defesa em processos perante o CADE, garantindo que nossos clientes operem em conformidade com a legislação antitruste.',
    areas: [
      'Consultoria antitruste',
      'Análise de atos de concentração',
      'Defesa em processos administrativos',
      'Compliance concorrencial',
      'Cartéis e práticas anticoncorrenciais',
      'Controle de condutas',
    ],
  },
  {
    icon: FaSuitcase,
    title: 'Direito Empresarial',
    description:
      'Prestamos assessoria completa em direito empresarial, apoiando empresas em todas as fases de seu desenvolvimento, desde a constituição até operações complexas de M&A e reestruturação societária.',
    areas: [
      'Contratos empresariais',
      'Direito societário',
      'Fusões e aquisições (M&A)',
      'Governança corporativa',
      'Recuperação judicial e falência',
      'Compliance empresarial',
    ],
  },
];

export default function ServicesDetail() {
  return (
    <section className="bg-primary-offwhite py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        {services.map((service, index) => {
          const Icon = service.icon;

          const contentSide = (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 inline-flex w-fit p-4">
                  <Icon className="text-accent text-3xl" />
                </div>
                <h2 className="font-playfair text-primary text-2xl font-bold md:text-3xl">
                  {service.title}
                </h2>
              </div>
              <p className="text-text-secondary text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          );

          const listSide = (
            <div className="bg-accent/5 border-accent/20 border p-6 md:p-8">
              <p className="text-accent mb-6 text-xs font-semibold tracking-widest uppercase">
                Áreas de Atuação
              </p>
              <ul className="flex flex-col gap-3">
                {service.areas.map((area) => (
                  <li
                    key={area}
                    className="text-text-secondary flex items-center gap-3 text-sm"
                  >
                    <span className="text-accent text-xs">●</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          );

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
                {index % 2 !== 0 ? (
                  <>
                    <div className="order-last md:order-first">{listSide}</div>
                    <div className="order-first md:order-last">
                      {contentSide}
                    </div>
                  </>
                ) : (
                  <>
                    <div>{contentSide}</div>
                    <div>{listSide}</div>
                  </>
                )}
              </div>
              {index < services.length - 1 && (
                <hr className="my-10 border-gray-200 md:my-16" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
