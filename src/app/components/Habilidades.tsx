'use client';

import { Menu as MenuIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Habilidades({ onBack, onOpenMenu }: {
  onBack: () => void;
  onOpenMenu: () => void;
}) {
  const { language } = useLanguage();

  const content = {
    ES: {
      title: 'HABILIDADES',
      secciones: [
        {
          titulo: 'Frontend',
          items: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript']
        },
        {
          titulo: 'Backend',
          items: ['Flask', 'Django', 'PHP']
        },
        {
          titulo: 'Bases de Datos',
          items: ['MongoDB', 'MySQL Workbench', 'MariaDB']
        },
        {
          titulo: 'DevOps / Cloud',
          items: ['Amazon Web Services (básico)']
        },
        {
          titulo: 'Ciberseguridad',
          items: ['Fundamentos de hacking ético']
        },
        {
          titulo: 'Diseño',
          items: ['Conocimientos básicos, en proceso de mejora']
        }
      ]
    },
    EN: {
      title: 'SKILLS',
      secciones: [
        {
          titulo: 'Frontend',
          items: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript']
        },
        {
          titulo: 'Backend',
          items: ['Flask', 'Django', 'PHP']
        },
        {
          titulo: 'Databases',
          items: ['MongoDB', 'MySQL Workbench', 'MariaDB']
        },
        {
          titulo: 'DevOps / Cloud',
          items: ['Amazon Web Services (basic)']
        },
        {
          titulo: 'Cybersecurity',
          items: ['Basics of ethical hacking']
        },
        {
          titulo: 'Design',
          items: ['Basic knowledge, currently improving']
        }
      ]
    },
    IT: {
      title: 'COMPETENZE',
      secciones: [
        {
          titulo: 'Frontend',
          items: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript']
        },
        {
          titulo: 'Backend',
          items: ['Flask', 'Django', 'PHP']
        },
        {
          titulo: 'Database',
          items: ['MongoDB', 'MySQL Workbench', 'MariaDB']
        },
        {
          titulo: 'DevOps / Cloud',
          items: ['Amazon Web Services (base)']
        },
        {
          titulo: 'Sicurezza informatica',
          items: ['Nozioni base di hacking etico']
        },
        {
          titulo: 'Design',
          items: ['Conoscenze di base, in fase di miglioramento']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section
      className="min-h-screen w-full px-6 sm:px-20 py-6 sm:py-12 flex flex-col text-[var(--text-color)]"
      style={{
        background: 'linear-gradient(135deg, var(--verde-pastel) 0%, var(--rosado-pastel) 50%, var(--amarillo-pastel) 100%)',
      }}
    >
      <header className="flex justify-between items-center mb-10">
        <button onClick={onBack} className="text-3xl font-bold text-[var(--text-color)]">
          F
        </button>
        <button onClick={onOpenMenu}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      <h1 className="text-5xl font-bold mb-8">{t.title}</h1>

      <div className="grid gap-8">
        {t.secciones.map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl font-semibold mb-2">{section.titulo}</h2>
            <ul className="flex flex-wrap gap-3">
              {section.items.map((item, j) => (
                <li key={j} className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
