'use client';

import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Languages, Moon, Sun, X } from 'lucide-react';

export default function Menu({
  onBack,
  onAcerca,
  onContacto,
  onProyectos,
  onTestimonios,
  onExperiencia,
  onHabilidades, // ✅ Nuevo
}: {
  onBack: () => void;
  onAcerca: () => void;
  onContacto: () => void;
  onProyectos: () => void;
  onTestimonios: () => void;
  onExperiencia: () => void;
  onHabilidades: () => void; // ✅ Nuevo
}) {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const translations = {
    ES: ['BIENVENIDO', 'PROYECTOS', 'ACERCA DE', 'CONTACTO', 'TESTIMONIOS', 'EXPERIENCIA', 'HABILIDADES', 'GitHub', 'LinkedIn'],
    EN: ['WELCOME', 'PROJECTS', 'ABOUT', 'CONTACT', 'TESTIMONIALS', 'EXPERIENCE', 'SKILLS', 'GitHub', 'LinkedIn'],
    IT: ['BENVENUTO', 'PROGETTI', 'CHI SONO', 'CONTATTI', 'TESTIMONIANZE', 'ESPERIENZA', 'COMPETENZE', 'GitHub', 'LinkedIn'],
  };

  const items = translations[language];

  return (
    <section
      className="min-h-screen w-full px-6 sm:px-20 py-6 sm:py-12 flex flex-col text-[var(--text-color)] relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg,
            var(--verde-pastel) 0%,
            var(--rosado-pastel) 50%,
            var(--amarillo-pastel) 100%)`,
      }}
    >
      {/* Fondos radiales */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(circle at 20% 20%, var(--verde-pastel-soft) 0%, transparent 40%)' }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(circle at 80% 80%, var(--rosado-pastel-soft) 0%, transparent 40%)' }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(circle at 90% 10%, var(--amarillo-pastel-soft) 0%, transparent 40%)' }}
      />

      {/* Barra de navegación */}
      <header className="flex justify-between items-center mb-10">
        <button
          onClick={onBack}
          className="text-3xl font-bold text-[var(--text-color)]"
        >
          <span className="text-[var(--text-color)]">F</span>
          <span className="text-[var(--text-color)] text-base ml-2 hidden sm:inline">Frank</span>
          <span className="text-[var(--text-color)] text-base ml-1 hidden sm:inline">/ Francisco</span>
        </button>

        <div className="flex items-center gap-5">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-base hover:underline"
          >
            <Languages className="w-5 h-5" />
            {language}
          </button>

          <button onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button onClick={onBack}>
            <X className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Menú principal */}
      <div className="flex flex-col gap-8 sm:gap-10">
        {items.slice(0, 7).map((text, i) => (
          <div
            key={i}
            className="text-left group cursor-pointer"
            onClick={
              i === 0 ? onBack :
              i === 1 ? onProyectos :
              i === 2 ? onAcerca :
              i === 3 ? onContacto :
              i === 4 ? onTestimonios :
              i === 5 ? onExperiencia :
              i === 6 ? onHabilidades :
              undefined
            }
          >
            <p className="text-sm mb-1">{`0${i + 1} 0${i + 1} 0${i + 1}`}</p>
            <h2 className="text-5xl sm:text-6xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
              {text}
            </h2>
          </div>
        ))}
      </div>

      {/* Enlaces sociales */}
      <div className="mt-16 text-sm flex flex-col gap-2 sm:flex-row sm:gap-8">
        <a href="https://github.com/francisco3788" className="hover:underline">↗ {items[7]}</a>
        <a href="https://www.linkedin.com/in/francisco-molina-b39326368/" className="hover:underline">↗ {items[8]}</a>
      </div>
    </section>
  );
}
