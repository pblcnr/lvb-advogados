import Image from 'next/image';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="relative h-64 md:h-120">
      {/* Imagem de fundo */}
      <Image
        src="/assets/background_hero.jpg"
        alt="Porta de vidro com o logo da LVB Advogados"
        fill
        className="object-cover"
      />
      {/* Overlay azul */}
      <div className="bg-primary/80 absolute inset-0 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
        {/* Título principal */}
        <h1 className="text-text-primary font-playfair mx-auto max-w-3xl text-4xl leading-tight font-bold md:text-6xl">
          {title}
        </h1>
        {/* Subtítulo */}
        <p className="text-text-secondary mx-auto mt-6 max-w-xl text-xl">
          {subtitle}
        </p>
        {/* Linha decorativa */}
        <div className="bg-accent mt-4 h-px w-12" />
      </div>
    </div>
  );
}
