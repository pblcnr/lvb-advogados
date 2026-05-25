'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const offices = [
  {
    city: 'Ribeirão Preto',
    address: 'Rua Milton José Robusti, 75 - Sala 109, Jardim Botânico',
  },
  {
    city: 'Franca',
    address: 'Rua General Telles, 1700 - Sala 405, Centro',
  },
];

export default function OfficesSection() {
  return (
    <section className="bg-primary-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        {/* Label e título da seção */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Nossos Escritórios
          </p>
          <h2 className="font-playfair text-primary mt-2 mb-12 text-4xl font-bold">
            Onde Estamos
          </h2>
        </motion.div>
        {/* Grid de escritórios */}
        <motion.div
          className="grid grid-cols-1 gap-16 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          {offices.map((office) => (
            <div key={office.city}>
              {/* Placeholder de imagem */}
              <div className="flex h-64 w-full items-center justify-center rounded border-2 border-dashed border-gray-300 text-gray-400">
                Foto do escritório de {office.city}
              </div>
              {/* Ícone + cidade */}
              <div className="mt-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                <h3 className="font-playfair text-primary text-xl font-bold">
                  {office.city}
                </h3>
              </div>
              {/* Endereço */}
              <p className="text-text-secondary mt-2 text-sm">
                {office.address}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
