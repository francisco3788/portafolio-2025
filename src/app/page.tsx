'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';
import Proyectos from './components/Proyectos';
import DetalleProyecto from './components/DetalleProyecto';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'hero' | 'menu' | 'acerca' | 'contacto' | 'proyectos' | 'detalle'>('hero');
  const [selectedProyecto, setSelectedProyecto] = useState<any>(null);

  return (
    <main className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Hero 
              onOpenMenu={() => setCurrentPage('menu')} 
              onInfo={() => setCurrentPage('acerca')}
              onProyectos={() => setCurrentPage('proyectos')}
            />
          </motion.div>
        )}

        {currentPage === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Menu 
              onBack={() => setCurrentPage('hero')} 
              onAcerca={() => setCurrentPage('acerca')}
              onContacto={() => setCurrentPage('contacto')}
              onProyectos={() => setCurrentPage('proyectos')}
            />
          </motion.div>
        )}

        {currentPage === 'acerca' && (
          <motion.div
            key="acerca"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <AcercaDe 
              onBack={() => setCurrentPage('hero')} 
              onOpenMenu={() => setCurrentPage('menu')} 
            />
          </motion.div>
        )}

        {currentPage === 'contacto' && (
          <motion.div
            key="contacto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Contacto 
              onBack={() => setCurrentPage('hero')} 
              onOpenMenu={() => setCurrentPage('menu')} 
            />
          </motion.div>
        )}

        {currentPage === 'proyectos' && (
          <motion.div
            key="proyectos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Proyectos 
              onBack={() => setCurrentPage('hero')} 
              onOpenMenu={() => setCurrentPage('menu')} 
              onSelectProyecto={(proyecto: any) => {
                setSelectedProyecto(proyecto);
                setCurrentPage('detalle');
              }}
            />
          </motion.div>
        )}

        {currentPage === 'detalle' && selectedProyecto && (
          <motion.div
            key="detalle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <DetalleProyecto 
              onBack={() => setCurrentPage('proyectos')} 
              onOpenMenu={() => setCurrentPage('menu')} 
              proyecto={selectedProyecto}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
