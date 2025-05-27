'use client';

import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Menu as MenuIcon } from 'lucide-react';

export default function DetalleProyecto({ onBack, onOpenMenu, proyecto }: {
  onBack: () => void,
  onOpenMenu: () => void,
  proyecto: {
    titulo: Record<string, string>,
    descripcion: Record<string, string>,
    tecnologias: string[],
    anio: number,
    cliente: Record<string, string>,
    rol: Record<string, string>,
    imagen: string, // Nueva propiedad para la URL de la imagen
    link?: string, // Nueva propiedad para el enlace (opcional)
  },
}) {
  const { language } = useLanguage();

  const texts = {
    ES: {
      volver: 'volver a proyectos',
      descripcion: 'Descripción',
      cliente: 'Cliente',
      tecnologias: 'Tecnologías',
      rol: 'Rol',
      anio: 'Año',
    },
    EN: {
      volver: 'back to projects',
      descripcion: 'Description',
      cliente: 'Client',
      tecnologias: 'Technologies',
      rol: 'Role',
      anio: 'Year',
    },
    IT: {
      volver: 'torna ai progetti',
      descripcion: 'Descrizione',
      cliente: 'Cliente',
      tecnologias: 'Tecnologie',
      rol: 'Ruolo',
      anio: 'Anno',
    },
  };

  const t = texts[language];

  return (
    <section
      className="min-h-screen w-full px-6 sm:px-20 py-6 sm:py-12 flex flex-col text-[var(--text-color)] relative"
      style={{
        background: 'linear-gradient(135deg, var(--verde-pastel) 0%, var(--rosado-pastel) 50%, var(--amarillo-pastel) 100%)',
      }}
    >
      {/* Botón menú */}
      <div className="absolute top-6 right-6">
        <button onClick={onOpenMenu}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 flex-1 mt-12">
        {/* Imagen con enlace */}
        <div className="flex-1 rounded-xl bg-gray-100 h-[300px] sm:h-[400px] flex items-center justify-center overflow-hidden">
          {proyecto.link ? (
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo[language]}
                className="w-full h-full object-cover"
              />
            </a>
          ) : (
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo[language]}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Detalles */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">{proyecto.titulo[language]}</h2>

          <div className="mb-6">
            <h3 className="font-bold mb-2">{t.descripcion}</h3>
            <p className="text-sm leading-relaxed">
              {proyecto.descripcion[language]}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold mb-1">{t.tecnologias}</h3>
              <div className="flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tech, i) => (
                  <span key={i} className="bg-white/20 px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-1">{t.cliente}</h3>
              <p>{proyecto.cliente[language]}</p>
              <h3 className="font-bold mt-4 mb-1">{t.anio}</h3>
              <p>{proyecto.anio}</p>
              <h3 className="font-bold mt-4 mb-1">{t.rol}</h3>
              <p>{proyecto.rol[language]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón inferior izquierdo fijo */}
      <button
        onClick={onBack}
        className="fixed bottom-4 left-4 text-sm sm:text-base flex items-center gap-1 font-medium z-50 text-[var(--text-color)]"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> {t.volver}
      </button>
    </section>
  );
}