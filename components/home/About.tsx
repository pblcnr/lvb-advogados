import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-primary-offwhite py-30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* Coluna esquerda — conteúdo textual */}
          <div>
            {/* Label */}
            <p className="text-accent mb-3 text-sm font-semibold tracking-widest uppercase">
              Sobre Nós
            </p>
            {/* Título */}
            <h2 className="font-playfair text-primary text-4xl font-bold">
              Compromisso com a{' '}
              <span className="text-accent font-bold italic">excelência</span>{' '}
              jurídica
            </h2>
            {/* Parágrafos */}
            <p className="text-text-secondary mt-4 text-base">
              O escritório LVB Advogados é referência em Direito Digital,
              Propriedade Intelectual, Direito Concorrencial e Direito
              Empresarial, atuando com inovação e compromisso junto a seus
              clientes.
            </p>
            <p className="text-text-secondary mt-4 text-base">
              Com escritórios em Ribeirão Preto e Franca, oferecemos atendimento
              personalizado e soluções estratégicas para empresas e
              empreendedores de todo o Brasil.
            </p>
            {/* Link CTA com seta animada */}
            <Link
              href="/sobre"
              className="text-accent group mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase"
            >
              Saiba mais sobre nós
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          {/* Coluna direita — imagem do escritório */}
          <div>
            <div className="flex h-80 w-full items-center justify-center rounded border-2 border-dashed border-gray-300 text-gray-400">
              Foto do escritório
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
