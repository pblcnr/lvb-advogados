import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-primary-light py-16">
      <div className="flex flex-col gap-4 text-center">
        {/* Título */}
        <h2 className="font-playfair text-text-primary text-3xl font-bold">
          Precisa de assessoria jurídica especializada?
        </h2>
        {/* Subtítulo */}
        <p className="text-text-footer text-md mx-auto max-w-xl">
          Entre em contato e descubra como podemos ajudar sua empresa a crescer
          com segurança jurídica.
        </p>
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
