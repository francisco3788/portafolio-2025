'use client';

import { useLanguage } from '../context/LanguageContext';
import { Menu as MenuIcon } from 'lucide-react';

export default function Contacto({ onBack, onOpenMenu }: { onBack: () => void; onOpenMenu: () => void }) {
  const { language } = useLanguage();

  const translations = {
    ES: {
      title: 'CONTACTO',
      emailLabel: 'CORREO ELECTRÓNICO',
      email: 'molinapacho72@gmail.com',
      socialLabel: 'REDES SOCIALES',
      github: 'github',
      linkedin: 'linkedin',
    },
    EN: {
      title: 'CONTACT',
      emailLabel: 'EMAIL',
      email: 'molinapacho72@gmail.com',
      socialLabel: 'SOCIAL NETWORKS',
      github: 'github',
      linkedin: 'linkedin',
    },
    IT: {
      title: 'CONTATTI',
      emailLabel: 'EMAIL',
      email: 'molinapacho72@gmail.com',
      socialLabel: 'RETI SOCIALI',
      github: 'github',
      linkedin: 'linkedin',
    },
  };

  const t = translations[language];

  return (
    <section
      className="min-h-screen w-full px-6 sm:px-20 py-6 sm:py-12 flex flex-col text-[var(--text-color)] relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, var(--verde-pastel) 0%, var(--rosado-pastel) 50%, var(--amarillo-pastel) 100%)',
      }}
    >
      {/* Fondos radiales */}
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle at 20% 20%, var(--verde-pastel-soft) 0%, transparent 40%)' }} />
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle at 80% 80%, var(--rosado-pastel-soft) 0%, transparent 40%)' }} />
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle at 90% 10%, var(--amarillo-pastel-soft) 0%, transparent 40%)' }} />

      {/* Encabezado */}
      <header className="flex justify-between items-center mb-10 w-full">
        <button onClick={onBack} className="text-3xl font-bold text-[var(--text-color)]">
          F
        </button>
        <button onClick={onOpenMenu} aria-label="Abrir menú">
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      <h1 className="text-5xl sm:text-6xl font-bold mb-6">{t.title}</h1>
      <hr className="border-t border-[var(--text-color)] opacity-30 mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <h2 className="text-lg font-semibold mb-2">{t.emailLabel}</h2>
          <a href={`mailto:${t.email}`} className="hover:underline">↗ {t.email}</a>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">{t.socialLabel}</h2>
          <div className="flex flex-col gap-2">
            <a href="https://github.com/francisco3788" className="hover:underline">↗ {t.github}</a>
            <a href="https://www.linkedin.com/in/francisco-molina-b39326368/" className="hover:underline">↗ {t.linkedin}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
