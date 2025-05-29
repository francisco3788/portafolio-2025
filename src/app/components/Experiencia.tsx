'use client';

import { Menu as MenuIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experiencia({ onBack, onOpenMenu }: {
  onBack: () => void;
  onOpenMenu: () => void;
}) {
  const { language } = useLanguage();

  const content = {
    ES: {
      title: 'EXPERIENCIA',
      academica: 'Académica',
      laboral: 'Laboral',
      estudios: [
        {
          titulo: 'Ingeniería de Software (En curso)',
          institucion: 'Universidad Cooperativa de Colombia',
          anio: '2021 - Presente'
        },
        {
          titulo: 'Curso Profesional de Desarrollo Web',
          institucion: 'Platzi',
          anio: '2023'
        },
      ],
      trabajos: [
        {
          cargo: 'Colaborador en Proyecto Universitario',
          empresa: 'Sistema de Gestión Académica',
          anio: '2023'
        },
        {
          cargo: 'Maquetador UI Freelance',
          empresa: 'Landing page para fintech (proyecto personal)',
          anio: '2024'
        }
      ]
    },
    EN: {
      title: 'EXPERIENCE',
      academica: 'Academic',
      laboral: 'Work',
      estudios: [
        {
          titulo: 'Software Engineering (Ongoing)',
          institucion: 'Cooperative University of Colombia',
          anio: '2021 - Present'
        },
        {
          titulo: 'Professional Web Development Course',
          institucion: 'Platzi',
          anio: '2023'
        },
      ],
      trabajos: [
        {
          cargo: 'Collaborator in University Project',
          empresa: 'Academic Management System',
          anio: '2023'
        },
        {
          cargo: 'Freelance UI Layout Designer',
          empresa: 'Landing page for fintech (personal project)',
          anio: '2024'
        }
      ]
    },
    IT: {
      title: 'ESPERIENZA',
      academica: 'Accademica',
      laboral: 'Lavorativa',
      estudios: [
        {
          titulo: 'Ingegneria del Software (In corso)',
          institucion: 'Università Cooperativa della Colombia',
          anio: '2021 - Presente'
        },
        {
          titulo: 'Corso Professionale di Sviluppo Web',
          institucion: 'Platzi',
          anio: '2023'
        },
      ],
      trabajos: [
        {
          cargo: 'Collaboratore in Progetto Universitario',
          empresa: 'Sistema di Gestione Accademica',
          anio: '2023'
        },
        {
          cargo: 'Web Designer Freelance',
          empresa: 'Landing page per fintech (progetto personale)',
          anio: '2024'
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
        <button onClick={onBack} className="text-3xl font-bold">F</button>
        <button onClick={onOpenMenu}><MenuIcon className="w-6 h-6" /></button>
      </header>

      <h1 className="text-5xl font-bold mb-8">{t.title}</h1>

      {/* Académica */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">{t.academica}</h2>
        <ul className="space-y-4">
          {t.estudios.map((e, i) => (
            <li key={i} className="bg-white/10 p-4 rounded-xl">
              <h3 className="text-xl font-bold">{e.titulo}</h3>
              <p className="text-sm">{e.institucion}</p>
              <p className="text-sm italic">{e.anio}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Laboral */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">{t.laboral}</h2>
        <ul className="space-y-4">
          {t.trabajos.map((t, i) => (
            <li key={i} className="bg-white/10 p-4 rounded-xl">
              <h3 className="text-xl font-bold">{t.cargo}</h3>
              <p className="text-sm">{t.empresa}</p>
              <p className="text-sm italic">{t.anio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
