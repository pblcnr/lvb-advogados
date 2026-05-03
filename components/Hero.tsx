import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Imagem de fundo */}
      <Image
        src="/assets/background_hero.jpg"
        alt="Porta de vidro com o logo da LVB Advogados"
        fill
        className="object-cover"
      />
      {/* Overlay azul */}
      <div className="bg-primary/80 absolute inset-0 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
        {/* Linha decorativa */}
        <div className="bg-accent mb-8 h-px w-12" />
        {/* Título principal */}
        <h1 className="text-text-primary font-playfair mx-auto max-w-3xl text-4xl leading-tight font-bold md:text-7xl">
          Advocacia{' '}
          <span className="text-accent font-playfair italic">inteligente</span>{' '}
          para um mundo em transformação
        </h1>
        {/* Subtítulo */}
        <p className="text-text-secondary mx-auto mt-6 max-w-xl text-lg">
          Soluções jurídicas inovadoras e personalizadas para proteger seus
          interesses no cenário digital e empresarial.
        </p>
        {/* Botão CTA */}
        <Link
          href="/contato"
          className="group border-accent text-accent hover:bg-accent hover:text-primary mt-12 inline-flex cursor-pointer items-center gap-2 rounded-xs border px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
        >
          Fale Conosco
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
