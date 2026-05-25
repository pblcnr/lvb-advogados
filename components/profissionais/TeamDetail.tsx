'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const professionals = [
  {
    name: 'Nome do Profissional 1',
    role: 'Sócio Fundador',
    specialty: 'Direito Digital e Propriedade Intelectual',
    oab: 'OAB/SP 000.000',
    bio: 'Formado pela Universidade de São Paulo, com especialização em Direito Digital. Atua há mais de 15 anos na área, com foco em proteção de dados e propriedade intelectual.',
    tags: ['Direito Digital', 'Propriedade Intelectual', 'LGPD'],
    image: '/assets/team/placeholder.jpg',
  },
  {
    name: 'Nome do Profissional 2',
    role: 'Sócia Fundadora',
    specialty: 'Direito Concorrencial e Empresarial',
    oab: 'OAB/SP 000.000',
    bio: 'Formado pela Universidade de São Paulo, com especialização em Direito Digital. Atua há mais de 15 anos na área, com foco em proteção de dados e propriedade intelectual.',
    tags: ['Direito Digital', 'Propriedade Intelectual', 'LGPD'],
    image: '/assets/team/placeholder.jpg',
  },
  {
    name: 'Nome do Profissional 3',
    role: 'Advogado Associado',
    specialty: 'Direito Empresarial',
    oab: 'OAB/SP 000.000',
    bio: 'Formado pela Universidade de São Paulo, com especialização em Direito Digital. Atua há mais de 15 anos na área, com foco em proteção de dados e propriedade intelectual.',
    tags: ['Direito Digital', 'Propriedade Intelectual', 'LGPD'],
    image: '/assets/team/placeholder.jpg',
  },
  {
    name: 'Nome do Profissional 4',
    role: 'Advogado Associado',
    specialty: 'Direito Digital e Propriedade Intelectual',
    oab: 'OAB/SP 000.000',
    bio: 'Formado pela Universidade de São Paulo, com especialização em Direito Digital. Atua há mais de 15 anos na área, com foco em proteção de dados e propriedade intelectual.',
    tags: ['Direito Digital', 'Propriedade Intelectual', 'LGPD'],
    image: '/assets/team/placeholder.jpg',
  },
  {
    name: 'Nome do Profissional 5',
    role: 'Advogada Associada',
    specialty: 'Direito Concorrencial e Empresarial',
    oab: 'OAB/SP 000.000',
    bio: 'Formado pela Universidade de São Paulo, com especialização em Direito Digital. Atua há mais de 15 anos na área, com foco em proteção de dados e propriedade intelectual.',
    tags: ['Direito Digital', 'Propriedade Intelectual', 'LGPD'],
    image: '/assets/team/placeholder.jpg',
  },
  {
    name: 'Nome do Profissional 6',
    role: 'Advogado Associado',
    specialty: 'Direito Empresarial',
    oab: 'OAB/SP 000.000',
    bio: 'Formado pela Universidade de São Paulo, com especialização em Direito Digital. Atua há mais de 15 anos na área, com foco em proteção de dados e propriedade intelectual.',
    tags: ['Direito Digital', 'Propriedade Intelectual', 'LGPD'],
    image: '/assets/team/placeholder.jpg',
  },
];

export default function TeamDetail() {
  const [openCards, setOpenCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setOpenCards((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <section className="bg-primary-offwhite py-20">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        {/* Grid de profissionais */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {professionals.map((professional, index) => (
            <div
              key={professional.name}
              className="flex flex-col items-center border border-gray-200 p-12 text-center"
            >
              {/* Foto circular placeholder */}
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-sm text-gray-400">
                Foto
              </div>
              {/* Nome */}
              <h3 className="font-playfair text-primary mb-1 text-xl font-bold">
                {professional.name}
              </h3>
              {/* Cargo */}
              <p className="text-accent mb-1 text-sm font-semibold">
                {professional.role}
              </p>
              {/* Especialidade */}
              <p className="text-text-secondary mb-4 text-sm">
                {professional.specialty}
              </p>
              {/* Botão Ver Mais / Ver Menos */}
              <button
                onClick={() => toggleCard(index)}
                className="text-accent flex cursor-pointer items-center gap-2 text-sm font-semibold tracking-widest uppercase"
              >
                {openCards.has(index) ? (
                  <>
                    VER MENOS <FaChevronUp size={12} />
                  </>
                ) : (
                  <>
                    VER MAIS <FaChevronDown size={12} />
                  </>
                )}
              </button>
              {/* Seção expansível */}
              <AnimatePresence>
                {openCards.has(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="w-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="mt-4 border-t border-gray-200 pt-4 text-left"
                    >
                      {/* OAB */}
                      <p className="text-text-secondary mb-2 text-sm font-semibold">
                        {professional.oab}
                      </p>
                      {/* Bio */}
                      <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                        {professional.bio}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {professional.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border-accent text-accent border px-2 py-0.5 text-xs whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
