'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ES' | 'EN' | 'IT';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === 'ES' ? 'EN' : prev === 'EN' ? 'IT' : 'ES'
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
