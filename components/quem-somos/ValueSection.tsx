'use client';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';

const services = [
  {
    icon: FaBullseye,
    title: 'Missão',
    description:
      'Oferecer soluções jurídicas inovadoras e personalizadas, atuando com excelência e compromisso na defesa dos interesses de nossos clientes.',
  },
  {
    icon: FaEye,
    title: 'Visão',
    description:
      'Ser referência nacional em advocacia especializada nas áreas de Direito Digital, Propriedade Intelectual, Concorrencial e Empresarial.',
  },
  {
    icon: FaHeart,
    title: 'Valores',
    description:
      'Ética, inovação, comprometimento, transparência e excelência em todas as relações profissionais.',
  },
];

export default function ValueSection() {
  return (
    <section className="bg-primary py-30">
      <div className="mx-auto max-w-7xl items-center text-center">
        {/* Título da seção */}
        <h2 className="font-playfair text-text-primary mt-2 mb-12 text-4xl font-bold">
          Missão, Visão e Valores
        </h2>
        {/* Grid de cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                className="group border-primary-light hover:border-accent border px-6 py-10 text-center transition-all duration-300 hover:scale-105"
                key={service.title}
              >
                {/* Ícone */}
                <Icon className="text-accent mx-auto mb-6 text-4xl transition-transform duration-300 group-hover:scale-110" />
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
        </motion.div>
      </div>
    </section>
  );
}
