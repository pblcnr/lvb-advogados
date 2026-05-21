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
      <div className="flex flex-col gap-4 text-center">
        {/* Título */}
        <h2 className="font-playfair text-text-primary text-3xl font-bold">
          {title}
        </h2>
        {/* Subtítulo */}
        <p className="text-text-footer text-md mx-auto max-w-xl">{subtitle}</p>
        {/* Botão CTA */}
        <Link
          href="/contato"
          className="group bg-accent text-primary hover:bg-accent-secondary mx-auto mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xs px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
        >
          Fale Conosco
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
