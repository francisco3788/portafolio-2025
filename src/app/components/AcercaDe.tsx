'use client';

import { useLanguage } from '../context/LanguageContext';
import { Menu as MenuIcon } from 'lucide-react';
import Image from 'next/image';

export default function AcercaDe({ onBack, onOpenMenu }: { onBack: () => void, onOpenMenu: () => void }) {
  const { language } = useLanguage();

  const translations = {
    ES: {
      title: 'ACERCA DE',
      paragraph:
        '¡Hola! soy Francisco y uso Frank como mi apodo en las redes sociales,Soy un estudiante de Ingeniería de Software con un entusiasmo inmenso por el mundo de la tecnología. Estoy inmerso en el fascinante universo del desarrollo web, explorando herramientas como React, Next.js y Tailwind CSS, y estoy dando mis primeros pasos en el diseño UX/UI y la creación de APIs, un área que me emociona descubrir y dominar poco a poco. Me apasiona construir soluciones digitales que mezclen creatividad y funcionalidad, y siempre estoy abierto a aprender algo nuevo que me lleve al siguiente nivel.Fuera de la pantalla, mi vida está llena de energía: soy un fanático del fútbol, tanto verlo como jugarlo con amigos, y no hay nada que disfrute más que un buen partido. La música es mi banda sonora diaria; escucho de todo, desde pop hasta rock, reggaetón y clásicos, dependiendo del momento. También soy un apasionado de los videojuegos, especialmente FIFA, donde paso horas perfeccionando mis habilidades. El cine es otra de mis grandes pasiones: adoro sumergirme en una buena película, desde épicas de acción hasta historias que te hacen pensar. Y, por supuesto, mi curiosidad me impulsa a investigar y aprender constantemente, ya sea sobre software, diseño o cualquier tema que despierte mi interés.Estoy en un viaje de crecimiento continuo, y me encanta compartir lo que voy creando.',
      cv: 'currículum vitae',
    },
    EN: {
      title: 'ABOUT ME',
      paragraph:
        "Hello! I'm Francisco, but I go by Frank on social media. I'm a Software Engineering student with an immense passion for the world of technology. I'm deeply immersed in the fascinating universe of web development, exploring tools like React, Next.js, and Tailwind CSS, and taking my first steps in UX/UI design and API creation—an area that excites me and that I'm gradually mastering. I love building digital solutions that blend creativity and functionality, and I'm always open to learning something new to take my skills to the next level.Off-screen, my life is full of energy: I'm a huge football fan, both watching and playing with friends, and there's nothing I enjoy more than a good match. Music is my daily soundtrack; I listen to everything from pop to rock, reggaeton, and classics, depending on the mood. I'm also a passionate gamer, especially when it comes to FIFA, where I spend hours honing my skills. Movies are another big passion of mine: I love diving into a great film, from action-packed epics to thought-provoking stories. And, of course, my curiosity drives me to constantly research and learn, whether it's about software, design, or any topic that sparks my interest.I'm on a journey of continuous growth, and I love sharing what I'm creating.",
      cv: 'curriculum vitae',
    },
    IT: {
      title: 'CHI SONO',
      paragraph:
        'Ciao! Sono Francisco, ma sui social media mi conoscono come Frank. Sono uno studente di Ingegneria del Software con un entusiasmo immenso per il mondo della tecnologia. Sono profondamente immerso nellaffascinante universo dello sviluppo web, esplorando strumenti come React, Next.js e Tailwind CSS, e sto muovendo i miei primi passi nel design UX/UI e nella creazione di API, unarea che mi entusiasma e che sto imparando a padroneggiare poco a poco. Adoro costruire soluzioni digitali che combinano creatività e funzionalità, e sono sempre aperto a imparare qualcosa di nuovo per portare le mie competenze al livello successivo.Fuori dallo schermo, la mia vita è piena di energia: sono un grande appassionato di calcio, sia guardarlo che giocarci con gli amici, e non cè niente che mi piaccia di más di una bella partita. La musica è la colonna sonora della mia giornata; ascolto di tutto, dal pop al rock, dal reggaeton ai classici, a seconda del momento. Sono anche un appassionato di videogiochi, specialmente FIFA, dove passo ore a perfezionare le mie abilità. Il cinema è unaltra delle mie grandi passioni: adoro immergermi in un bel film, dalle epiche dazione alle storie che fanno riflettere. E, naturalmente, la mia curiosità mi spinge a ricercare e imparare costantemente, che si tratti di software, design o qualsiasi argomento che stimoli il mio interesse.Sono in un viaggio di crescita continua e amo condividere ciò che creo.',
      cv: 'curriculum vitae',
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

      {/* Encabezado */}
      <header className="flex justify-between items-center mb-10 w-full">
        <button onClick={onBack} className="text-3xl font-bold text-[var(--text-color)]">
          F
        </button>

        <button onClick={onOpenMenu} aria-label="Abrir menú">
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      <div className="flex flex-col sm:flex-row gap-10 w-full">
        <div className="flex-1">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">{t.title}</h1>
          <hr className="border-t border-[var(--text-color)] opacity-30 mb-6" />
          <p className="text-base sm:text-lg leading-relaxed">{t.paragraph}</p>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 text-sm sm:text-base hover:underline cursor-pointer inline-flex items-center gap-1"
          >
            ↓ {t.cv}
          </a>
        </div>

        <div className="flex-1 flex justify-center items-center relative"> {/* Contenedor relativo */}
          <Image
            src="/FotoPerfil.jpg"
            alt="Foto de perfil de Francisco"
            fill
            style={{
              objectFit: 'contain',
              position: 'absolute',
              top: '50%', // Centra verticalmente
              transform: 'translateY(-50%)', // Ajusta para centrar perfectamente
            }}
            className="rounded-xl max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}