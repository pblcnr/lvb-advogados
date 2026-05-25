import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function CTASection({
  title,
  subtitle,
  className,
}: CTASectionProps) {
  return (
    <section className={`py-16 ${className ?? 'bg-primary-light'}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-center md:px-16">
        {/* Título */}
        <h2 className="font-playfair text-text-primary text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        {/* Subtítulo */}
        <p className="text-text-footer md:text-md mx-auto max-w-xl text-sm">
          {subtitle}
        </p>
        {/* Botão CTA */}
        <Link
          href="/contato"
          className="group bg-accent text-primary hover:bg-accent-secondary mx-auto mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xs px-6 py-2 text-sm font-semibold tracking-widest uppercase transition-colors duration-300 md:mt-8 md:px-8 md:py-3"
        >
          Fale Conosco
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
