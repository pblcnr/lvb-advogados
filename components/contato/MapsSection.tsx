'use client';
import { motion } from 'framer-motion';

const offices = [
  {
    city: 'Ribeirão Preto',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5881483848457!2d-47.79689652389331!3d-21.208513780486122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b8d213dba8fd%3A0xf648f1d6f5aa1435!2sRua%20Milton%20Jos%C3%A9%20Robusti%2C%2075%20-%20Jardim%20Bot%C3%A2nico%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014021-613!5e0!3m2!1spt-BR!2sbr!4v1779385060979!5m2!1spt-BR!2sbr',
  },
  {
    city: 'Franca',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.2359089346573!2d-47.40482462390782!3d-20.537526380991693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a6303313c24d%3A0x75089d2e4b3f1121!2sR.%20Gen.%20Telles%2C%201700%20-%20Estacao%2C%20Franca%20-%20SP%2C%2014400-450!5e0!3m2!1spt-BR!2sbr!4v1779385206007!5m2!1spt-BR!2sbr',
  },
];

export default function MapsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        {/* Título da seção */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-primary mb-12 text-4xl font-bold">
            Nossos Escritórios no Mapa
          </h2>
        </motion.div>
        {/* Grid de mapas */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          {offices.map((office) => (
            <iframe
              key={office.city}
              src={office.mapSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
