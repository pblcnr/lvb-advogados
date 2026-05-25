'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

const offices = [
  {
    city: 'Ribeirão Preto',
    address:
      'Av. Presidente Vargas, 2121 - Sala 1507, Jardim California, Ribeirão Preto - SP',
    phone: '(16) 3632-3930',
  },
  {
    city: 'Franca',
    address: 'Rua General Telles, 1700 - Sala 405, Centro, Franca - SP',
    phone: '(16) 3711-2900',
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-primary-offwhite py-20">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        <motion.div
          className="grid grid-cols-1 gap-16 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Coluna esquerda — formulário */}
          <div>
            <h2 className="font-playfair text-primary mb-2 text-3xl font-bold">
              Envie uma mensagem
            </h2>
            <p className="text-text-secondary mb-8 text-sm">
              Preencha o formulário e nossa equipe retornará o mais breve
              possível.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Nome e E-mail */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="focus:border-accent border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="focus:border-accent border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors outline-none"
                />
              </div>
              {/* Telefone e Assunto */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="focus:border-accent border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors outline-none"
                />
                <input
                  type="text"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="focus:border-accent border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors outline-none"
                />
              </div>
              {/* Mensagem */}
              <textarea
                placeholder="Sua mensagem..."
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="focus:border-accent resize-none border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors outline-none"
              />
              {/* Botão enviar */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-accent text-primary hover:bg-accent-secondary inline-flex w-fit cursor-pointer items-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane size={14} />
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              {/* Feedback */}
              {status === 'success' && (
                <p className="text-sm text-green-600">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500">
                  Erro ao enviar a mensagem. Tente novamente.
                </p>
              )}
            </form>
          </div>

          {/* Coluna direita — informações de contato */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-playfair text-primary mb-6 text-2xl font-bold">
                Informações de Contato
              </h3>
              {/* WhatsApp */}
              <div className="mb-4 flex items-center gap-3">
                <FaWhatsapp className="text-accent text-xl" />
                <a
                  href="https://wa.me/5516363239300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent text-sm transition-colors"
                >
                  WhatsApp: (16) 3632-3930
                </a>
              </div>
              {/* E-mail */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent text-xl" />
                <a
                  href="mailto:contato@lvbadv.com.br"
                  className="text-text-secondary hover:text-accent text-sm transition-colors"
                >
                  contato@lvbadv.com.br
                </a>
              </div>
            </div>

            {/* Cards de escritórios */}
            <div className="flex flex-col gap-4">
              {offices.map((office) => (
                <div key={office.city} className="border border-gray-200 p-6">
                  {/* Ícone + cidade */}
                  <div className="mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent" />
                    <h4 className="font-playfair text-primary text-lg font-bold">
                      {office.city}
                    </h4>
                  </div>
                  {/* Endereço */}
                  <p className="text-text-secondary mb-2 text-sm">
                    {office.address}
                  </p>
                  {/* Telefone */}
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-accent text-xs" />
                    <a
                      href={`https://wa.me/55${office.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-secondary text-sm transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div>
              <h4 className="font-playfair text-primary mb-4 text-lg font-bold">
                Redes Sociais
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent hover:border-accent border border-gray-200 p-3 transition-colors"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent hover:border-accent border border-gray-200 p-3 transition-colors"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
