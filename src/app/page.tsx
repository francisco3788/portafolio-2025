'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';
import Proyectos from './components/Proyectos';
import DetalleProyecto from './components/DetalleProyecto';
import Testimonios from './components/Testimonios';
import Experiencia from './components/Experiencia';
import Habilidades from './components/Habilidades'; // ✅ Nuevo import

interface Proyecto {
  titulo: { [key: string]: string };
  descripcion: { [key: string]: string };
  tecnologias: string[];
  anio: number;
  cliente: { [key: string]: string };
  rol: { [key: string]: string };
  imagen: string;
  link: string;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    'hero' | 'menu' | 'acerca' | 'contacto' | 'proyectos' | 'detalle' | 'testimonios' | 'experiencia' | 'habilidades'
  >('hero'); // ✅ se agrega 'habilidades'

  const [selectedProyecto, setSelectedProyecto] = useState<Proyecto | null>(null);

  return (
    <main className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 'hero' && (
          <motion.div key="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Hero 
              onOpenMenu={() => setCurrentPage('menu')} 
              onInfo={() => setCurrentPage('acerca')}
              onProyectos={() => setCurrentPage('proyectos')}
            />
          </motion.div>
        )}

        {currentPage === 'menu' && (
          <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Menu 
              onBack={() => setCurrentPage('hero')} 
              onAcerca={() => setCurrentPage('acerca')}
              onContacto={() => setCurrentPage('contacto')}
              onProyectos={() => setCurrentPage('proyectos')}
              onTestimonios={() => setCurrentPage('testimonios')}
              onExperiencia={() => setCurrentPage('experiencia')}
              onHabilidades={() => setCurrentPage('habilidades')} // ✅ nueva función
            />
          </motion.div>
        )}

        {currentPage === 'acerca' && (
          <motion.div key="acerca" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <AcercaDe onBack={() => setCurrentPage('hero')} onOpenMenu={() => setCurrentPage('menu')} />
          </motion.div>
        )}

        {currentPage === 'contacto' && (
          <motion.div key="contacto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Contacto onBack={() => setCurrentPage('hero')} onOpenMenu={() => setCurrentPage('menu')} />
          </motion.div>
        )}

        {currentPage === 'proyectos' && (
          <motion.div key="proyectos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Proyectos 
              onBack={() => setCurrentPage('hero')} 
              onOpenMenu={() => setCurrentPage('menu')} 
              onSelectProyecto={(proyecto: Proyecto) => {
                setSelectedProyecto(proyecto);
                setCurrentPage('detalle');
              }}
            />
          </motion.div>
        )}

        {currentPage === 'detalle' && selectedProyecto && (
          <motion.div key="detalle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <DetalleProyecto 
              onBack={() => setCurrentPage('proyectos')} 
              onOpenMenu={() => setCurrentPage('menu')} 
              proyecto={selectedProyecto}
            />
          </motion.div>
        )}

        {currentPage === 'testimonios' && (
          <motion.div key="testimonios" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Testimonios onBack={() => setCurrentPage('hero')} onOpenMenu={() => setCurrentPage('menu')} />
          </motion.div>
        )}

        {currentPage === 'experiencia' && (
          <motion.div key="experiencia" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Experiencia onBack={() => setCurrentPage('hero')} onOpenMenu={() => setCurrentPage('menu')} />
          </motion.div>
        )}

        {currentPage === 'habilidades' && (
          <motion.div key="habilidades" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Habilidades onBack={() => setCurrentPage('hero')} onOpenMenu={() => setCurrentPage('menu')} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
