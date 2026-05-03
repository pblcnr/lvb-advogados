'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Profissionais', href: '/profissionais' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-primary fixed top-0 right-0 left-0 z-40 shadow-md">
        <div className="mx-auto flex w-full items-center justify-between px-8 py-4 md:px-12">
          <Image
            src="/assets/logo-header.png"
            alt="Logo LVB Advogados"
            width={80}
            height={80}
            style={{ height: 'auto' }}
          />
          {/* Nav + Botão */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="text-text-primary flex items-center gap-8 text-[14px] tracking-wider uppercase outline-none">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={pathname === link.href ? 'text-accent' : ''}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button className="bg-accent text-primary cursor-pointer rounded-xs px-6 py-2 text-sm font-semibold tracking-wider uppercase">
              CONTATO
            </button>
          </div>
          {/* Botão hambúrguer */}
          <button
            className="text-text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </header>

      {/* Menu mobile deslizante */}
      <div
        className={`bg-primary fixed top-[80px] right-0 z-40 h-auto w-full transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Links de navegação */}
        <nav className="text-text-primary flex flex-col px-6 text-base tracking-wider uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`border-primary-light block border-b py-4 ${pathname === link.href ? 'text-accent' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Botão CONTATO mobile */}
        <div className="mt-8 px-6">
          <button className="bg-accent text-primary w-full cursor-pointer rounded-xs px-6 py-2 text-sm font-semibold tracking-wider uppercase">
            CONTATO
          </button>
        </div>
      </div>
    </>
  );
}
