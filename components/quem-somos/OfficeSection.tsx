'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const offices = [
  {
    city: 'Ribeirão Preto',
    address: 'Rua Milton José Robusti, 75 - Sala 109, Jardim Botânico',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5881483848457!2d-47.79689652389331!3d-21.208513780486122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b8d213dba8fd%3A0xf648f1d6f5aa1435!2sRua%20Milton%20Jos%C3%A9%20Robusti%2C%2075%20-%20Jardim%20Bot%C3%A2nico%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014021-613!5e0!3m2!1spt-BR!2sbr!4v1779385060979!5m2!1spt-BR!2sbr',
  },
  {
    city: 'Franca',
    address: 'Rua General Telles, 1700 - Sala 405, Centro',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.2359089346573!2d-47.40482462390782!3d-20.537526380991693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a6303313c24d%3A0x75089d2e4b3f1121!2sR.%20Gen.%20Telles%2C%201700%20-%20Estacao%2C%20Franca%20-%20SP%2C%2014400-450!5e0!3m2!1spt-BR!2sbr!4v1779385206007!5m2!1spt-BR!2sbr',
  },
];

export default function OfficeSection() {
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
              {/* Mapa */}
              <iframe
                src={office.mapSrc}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
