'use client';

import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Languages, Moon, Sun, Menu } from 'lucide-react';

export default function Hero({ onOpenMenu, onInfo, onProyectos }: { onOpenMenu: () => void, onInfo: () => void, onProyectos: () => void }) {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const translations = {
    ES: {
      title: 'HOLA, SOY YO FRANCISCO\nPERO PUEDES LLAMARME FRANK',
      subtitle: 'Apasionado por aprender, crear y evolucionar\nen el mundo del desarrollo de software',
      projectLink: '→ ver mis proyectos',
      infoLink: '→ más información',
    },
    EN: {
      title: 'HI, I AM FRANCISCO\nBUT YOU CAN CALL ME FRANK',
      subtitle: 'Passionate about learning, creating and evolving\nin the world of software development',
      projectLink: '→ view my projects',
      infoLink: '→ more information',
    },
    IT: {
      title: 'CIAO, SONO FRANCISCO\nMA PUOI CHIAMARMI FRANK',
      subtitle: 'Appassionato di apprendere, creare ed evolversi\nnel mondo dello sviluppo software',
      projectLink: '→ guarda i miei progetti',
      infoLink: '→ più informazioni',
    },
  };

  const t = translations[language];

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            var(--verde-pastel) 0%, 
            var(--rosado-pastel) 50%, 
            var(--amarillo-pastel) 100%)`
      }}
    >
      {/* Fondos radiales */}
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle at 20% 20%, var(--verde-pastel-soft) 0%, transparent 40%)' }} />
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle at 80% 80%, var(--rosado-pastel-soft) 0%, transparent 40%)' }} />
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(circle at 90% 10%, var(--amarillo-pastel-soft) 0%, transparent 40%)' }} />

      {/* Barra superior */}
      <header className="absolute top-6 left-6 right-6 flex justify-between items-center z-50">
        <span className="text-3xl font-bold text-[var(--text-color)]">F</span>
        <div className="flex items-center gap-5 text-[var(--text-color)]">
          <button onClick={toggleLanguage} className="flex items-center gap-1 text-base hover:underline">
            <Languages className="w-5 h-5" />
            {language}
          </button>
          <button onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button onClick={onOpenMenu}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Contenido */}
      <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-color)] tracking-tight whitespace-pre-line z-10">
        {t.title}
      </h1>

      <p className="mt-6 text-base sm:text-lg text-[var(--text-color)] font-light whitespace-pre-line z-10">
        {t.subtitle}
      </p>

      <div className="mt-10 flex gap-10 text-sm sm:text-base text-[var(--text-color)] font-normal z-10">
        <button onClick={onProyectos} className="hover:underline">{t.projectLink}</button>
        <button onClick={onInfo} className="hover:underline">{t.infoLink}</button>
      </div>
    </section>
  );
}
