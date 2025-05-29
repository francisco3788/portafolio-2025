'use client';

import { useLanguage } from '../context/LanguageContext';
import { Menu as MenuIcon } from 'lucide-react';

export default function Testimonios({ onBack, onOpenMenu }: {
  onBack: () => void,
  onOpenMenu: () => void,
}) {
  const { language } = useLanguage();

  const texts = {
    ES: {
      testimonios: 'Testimonios',
      descripcion: 'Lo que dicen quienes han trabajado conmigo:',
    },
    EN: {
      testimonios: 'Testimonials',
      descripcion: 'What those who worked with me say:',
    },
    IT: {
      testimonios: 'Testimonianze',
      descripcion: 'Cosa dicono coloro che hanno lavorato con me:',
    },
  };

  const t = texts[language];

  const testimonios = [
    {
      nombre: {
        ES: 'Danilo Carlosama',
        EN: 'Danilo Carlosama',
        IT: 'Danilo Carlosama',
      },
      mensaje: {
        ES: 'Trabajar con Francisco fue una experiencia enriquecedora. Su dedicación al detalle y compromiso son destacables.',
        EN: 'Working with Francisco was an enriching experience. His attention to detail and commitment stand out.',
        IT: 'Lavorare con Francisco è stata un\'esperienza arricchente. La sua attenzione ai dettagli e l\'impegno sono notevoli.',
      }
    },
    {
      nombre: {
        ES: 'Sebastián Rojas',
        EN: 'Sebastian Rojas',
        IT: 'Sebastiano Rojas',
      },
      mensaje: {
        ES: 'Un profesional comprometido y muy creativo. Siempre dispuesto a aportar nuevas ideas al equipo.',
        EN: 'A dedicated and very creative professional. Always willing to bring new ideas to the team.',
        IT: 'Un professionista impegnato e molto creativo. Sempre pronto a contribuire con nuove idee al team.',
      }
    }
  ];

  return (
    <section
      className="min-h-screen w-full px-6 sm:px-20 py-6 sm:py-12 flex flex-col gap-16 text-[var(--text-color)]"
      style={{
        background: 'linear-gradient(135deg, var(--verde-pastel) 0%, var(--rosado-pastel) 50%, var(--amarillo-pastel) 100%)',
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center">
        <button onClick={onBack} className="text-3xl font-bold text-[var(--text-color)]">
          F
        </button>
        <button onClick={onOpenMenu}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      {/* Testimonios */}
      <div>
        <h2 className="text-4xl font-bold mb-4">{t.testimonios}</h2>
        <p className="mb-6 text-base opacity-80">{t.descripcion}</p>
        <div className="grid gap-6">
          {testimonios.map((item, i) => (
            <div key={i} className="p-4 bg-white/10 rounded-xl shadow">
              <p className="text-sm mb-2 italic">"{item.mensaje[language]}"</p>
              <span className="text-sm font-semibold block text-right">- {item.nombre[language]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
