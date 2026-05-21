import { FaMapMarkerAlt } from 'react-icons/fa';

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

export default function LocationSection() {
  return (
    <section className="bg-primary-offwhite py-20">
      <div className="mx-auto max-w-7xl items-center text-center">
        {/* Label e título da seção */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase">
          Localização
        </p>
        <h2 className="font-playfair text-primary mt-2 mb-12 text-4xl font-bold">
          Onde Estamos
        </h2>
        {/* Grid de escritórios */}
        <div className="grid grid-cols-2 gap-10">
          {offices.map((office) => (
            <div
              key={office.city}
              className="border border-gray-200 p-10 text-left"
            >
              {/* Ícone + cidade */}
              <div className="mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                <h3 className="font-playfair text-primary text-xl font-bold">
                  {office.city}
                </h3>
              </div>
              {/* Endereço e telefone */}
              <p className="text-text-secondary text-sm">{office.address}</p>
              <p className="text-accent mt-2 text-sm">{office.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
