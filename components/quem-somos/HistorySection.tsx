'use client';
import { motion } from 'framer-motion';

export default function HistorySection() {
  return (
    <section className="bg-primary-offwhite py-16 md:py-30">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        <motion.div
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Coluna esquerda — conteúdo textual */}
          <div>
            {/* Label */}
            <p className="text-accent mb-3 text-sm font-semibold tracking-widest uppercase">
              Nossa História
            </p>
            {/* Título */}
            <h2 className="font-playfair text-primary text-3xl font-bold md:text-4xl">
              Tradição e{' '}
              <span className="text-accent font-bold italic">inovação</span>{' '}
              caminham juntas
            </h2>
            {/* Parágrafos */}
            <p className="text-text-secondary mt-4 text-base">
              Fundado com a missão de oferecer advocacia de excelência, o
              escritório LVB Advogados nasceu da união de profissionais com
              vasta experiência em áreas estratégicas do Direito.
            </p>
            <p className="text-text-secondary mt-4 text-base">
              Com atuação focada em Direito Digital, Propriedade Intelectual,
              Direito Concorrencial e Direito Empresarial, nos consolidamos como
              referência para empresas que buscam segurança jurídica em um mundo
              cada vez mais conectado e competitivo.
            </p>
            <p className="text-text-secondary mt-4 text-base">
              Nosso escritório conta com unidades em Ribeirão Preto e Franca,
              atendendo clientes de todo o Brasil com dedicação e compromisso.
            </p>
          </div>
          {/* Coluna direita — imagem do escritório */}
          <div>
            <div className="flex h-64 w-full items-center justify-center rounded border-2 border-dashed border-gray-300 text-gray-400 md:h-80">
              Foto do escritório
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
