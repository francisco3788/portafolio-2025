'use client';

import { useLanguage } from '../context/LanguageContext';
import { Menu as MenuIcon } from 'lucide-react';

export default function Proyectos({ onBack, onOpenMenu, onSelectProyecto }: {
  onBack: () => void,
  onOpenMenu: () => void,
  onSelectProyecto: (proyecto: any) => void,
}) {
  const { language } = useLanguage();

  const translations = {
    ES: {
      title: 'PROYECTOS',
      projects: [
        { name: 'Reproductor de Música Web', tag: 'Desarrollo web' },
        { name: 'UniTrack', tag: 'Productividad / Frontend' },
        { name: 'Pluo - Maquetación Landing Financiera', tag: 'Diseño UX/UI' },
      ]
    },
    EN: {
      title: 'PROJECTS',
      projects: [
        { name: 'Music Player Web App', tag: 'Web Development' },
        { name: 'UniTrack', tag: 'Productivity / Frontend' },
        { name: 'Pluo – Financial Landing Page Mockup', tag: 'UX/UI Design' },
      ]
    },
    IT: {
      title: 'PROGETTI',
      projects: [
        { name: 'Riproduttore Musicale Web', tag: 'Sviluppo Web' },
        { name: 'UniTrack', tag: 'Produttività / Frontend' },
        { name: 'Pluo – Maquette Landing Finanziaria', tag: 'Design UX/UI' },
      ]
    },
  };

  const proyectosData = [
    {
      titulo: {
        ES: 'Reproductor de Música Web',
        EN: 'Web Music Player',
        IT: 'Lettore Musicale Web'
      },
      descripcion: {
        ES: 'Aplicación web funcional para subir, reproducir, eliminar y gestionar canciones. Permite a los usuarios cargar archivos de audio y controlar la reproducción desde una interfaz personalizada, desarrollada con Flask y desplegada en la nube',
        EN: 'Functional web app to upload, play, delete, and manage songs. Users can upload audio files and control playback through a custom interface, built with Flask and deployed to the cloud.',
        IT: 'Applicazione web funzionale per caricare, riprodurre, eliminare e gestire brani musicali. Gli utenti possono caricare file audio e controllare la riproduzione tramite un’interfaccia personalizzata, sviluppata con Flask e distribuita nel cloud.',
      },
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Python', 'Render'],
      anio: 2024,
      cliente: {
        ES: 'Proyecto académico personal',
        EN: 'Personal academic project',
        IT: 'Progetto accademico personale'
      },
      rol: {
        ES: 'Desarrollador Fullstack',
        EN: 'Fullstack Developer',
        IT: 'Sviluppatore Fullstack'
      },
      imagen: '/reproductorMusica.png', // Ruta de la imagen
      link: 'https://reproductordemusica.onrender.com/', // Enlace al proyecto
    },
    {
      titulo: {
        ES: 'UniTrack',
        EN: 'UniTrack',
        IT: 'UniTrack'
      },
      descripcion: {
        ES: 'Plataforma web para organizar tareas, clases y evaluaciones. Diseñada para estudiantes universitarios, permite registrar fechas clave, configurar asignaturas y recibir recordatorios automáticos para mejorar el rendimiento académico.',
        EN: 'Web platform to organize tasks, classes, and exams. Designed for university students, it allows users to record important dates, set up subjects, and receive automatic reminders to boost academic performance.',
        IT: 'Piattaforma web per organizzare compiti, lezioni ed esami. Progettata per studenti universitari, consente di registrare date importanti, configurare materie e ricevere promemoria automatici per migliorare il rendimento accademico.'
      },
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      anio: 2025,
      cliente: {
        ES: 'Proyecto personal',
        EN: 'Personal project',
        IT: 'Progetto personale'
      },
      rol: {
        ES: 'Diseñador UX/UI & Desarrollador Frontend en Next.js',
        EN: 'UX/UI Designer & Frontend Developer in Next.js',
        IT: 'Designer UX/UI & Sviluppatore Frontend in Next.js'
      },
      imagen: '/unitrack.png', // Ruta de la imagen
      link: 'https://taller-next-js-y-tailwind.vercel.app/', // Enlace al proyecto
    },
    {
      titulo: {
        ES: 'Pluo: Landing Page',
        EN: 'Pluo: Landing Page',
        IT: 'Pluo: Landing Page'
      },
      descripcion: {
        ES: 'Proyecto de maquetación UI que replica una landing page para una plataforma financiera. Centrado en el diseño responsivo y la fidelidad visual, construido con Next.js y Tailwind CSS como práctica de diseño frontend.',
        EN: 'UI mockup project replicating a landing page for a financial platform. Focused on responsive design and visual fidelity, built with Next.js and Tailwind CSS as a frontend design practice.',
        IT: 'Progetto di mockup UI che replica una landing page per una piattaforma finanziaria. Incentrato sul design responsivo e sulla fedeltà visiva, realizzato con Next.js e Tailwind CSS come esercizio di design frontend.'
      },
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      anio: 2025,
      cliente: {
        ES: 'Proyecto de práctica personal (UI estático)',
        EN: 'Personal practice project (static UI)',
        IT: 'Progetto personale di pratica (UI statica)'
      },
      rol: {
        ES: 'Maquetador Frontend y Diseñador UI',
        EN: 'Frontend Layout Designer & UI Designer',
        IT: 'Layout Designer Frontend & Designer UI'
      },
      imagen: '/pluto.png', // Ruta de la imagen
      link: 'https://taller-dise-o-ui-con-inteligencia-artificial.vercel.app/', // Enlace al proyecto// No se incluye link porque es un proyecto estático
    },
  ];

  const t = translations[language];

  return (
    <section
      className="min-h-screen w-full px-6 sm:px-20 py-6 sm:py-12 flex flex-col text-[var(--text-color)]"
      style={{
        background: 'linear-gradient(135deg, var(--verde-pastel) 0%, var(--rosado-pastel) 50%, var(--amarillo-pastel) 100%)',
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <button onClick={onBack} className="text-3xl font-bold text-[var(--text-color)]">
          F
        </button>
        <button onClick={onOpenMenu}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">{t.title}</h1>
        <span className="text-2xl">{t.projects.length}</span>
      </div>

      <ul className="w-full divide-y divide-[var(--text-color)]/20">
        {t.projects.map((project, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-5 cursor-pointer hover:bg-white/10 transition"
            onClick={() => onSelectProyecto(proyectosData[index])}
          >
            <span className="text-xl sm:text-2xl">{project.name}</span>
            <span className="text-base text-right text-nowrap">{project.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}