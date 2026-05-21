import Image from 'next/image';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Profissionais', href: '/profissionais' },
  { label: 'Contato', href: '/contato' },
];

const offices = [
  {
    city: 'Ribeirão Preto',
    address: 'Rua Milton José Robusti, 75 - Sala 109, Jardim Botânico',
    phone: '(16) 3632-3930',
  },
  {
    city: 'Franca',
    address: 'Rua General Telles, 1700 - Sala 405, Centro',
    phone: '(16) 3711-2900',
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto px-6 py-16 md:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/logo-footer.png"
              alt="Logo LVB Advogados"
              width={150}
              height={100}
              style={{ height: 'auto' }}
            />
            <p className="text-text-footer text-sm">
              Advocacia inteligente para um mundo em transformação. Soluções
              jurídicas inovadoras e personalizadas.
            </p>
          </div>
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">
              Navegação
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-footer hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {offices.map((office) => (
            <div key={office.city}>
              <p className="text-accent mb-4 text-sm font-semibold tracking-widest uppercase">
                {office.city}
              </p>
              <div className="mb-4 flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent mt-0.5 shrink-0" />
                <span className="text-text-footer text-sm">
                  {office.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaPhone className="text-accent mt-0.5 shrink-0" />
                <span className="text-text-footer text-sm">{office.phone}</span>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-primary-light mt-12 border-t" />
        <div className="mt-8 block md:flex md:items-center md:justify-between">
          <p className="text-text-secondary text-center text-xs md:text-left">
            © 2026 LVB Advogados. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex justify-center gap-4 md:mt-0">
            <a
              href="#"
              className="text-text-footer hover:text-accent transition-colors"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href="#"
              className="text-text-footer hover:text-accent transition-colors"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="text-text-footer hover:text-accent transition-colors"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
