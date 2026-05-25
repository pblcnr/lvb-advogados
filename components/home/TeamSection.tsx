import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const socios = [
  {
    name: 'Dr. Diego Lima',
    role: 'Sócio',
    image: '/assets/team/diego.jpg',
  },
  {
    name: 'Dra. Isadora Valochi',
    role: 'Sócia',
    image: '/assets/team/isadora.jpg',
  },
  {
    name: 'Dr. Arthur Baldochi',
    role: 'Sócio',
    image: '/assets/team/arthur.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-primary-offwhite py-16 md:py-30">
      <div className="mx-auto max-w-8xl items-center px-6 text-center md:px-16">
        {/* Label e título da seção */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase">
          Nossa Equipe
        </p>
        <h2 className="font-playfair text-primary mt-2 mb-12 text-3xl font-bold md:text-4xl">
          Profissionais Especializados
        </h2>
        {/* Grid de profissionais */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {socios.map((socio) => (
            <div key={socio.name} className="flex flex-col items-center gap-2">
              {/* Foto circular */}
              <div className="h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src={socio.image}
                  alt={socio.name}
                  width={192}
                  height={192}
                  className="object-cover object-top"
                />
              </div>
              {/* Nome e cargo */}
              <h3 className="font-playfair text-primary text-xl font-bold">
                {socio.name}
              </h3>
              <p className="text-text-secondary text-md">{socio.role}</p>
            </div>
          ))}
        </div>
        {/* Link CTA */}
        <Link
          href="/profissionais"
          className="group text-accent mt-12 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase"
        >
          Conheça nossos profissionais
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
