'use client';
import { useState, createContext, ReactNode, FC, useCallback, useMemo } from 'react';
import content from '@/public/content.json';
import { Content, Lang } from '@/types';

export const Context = createContext({
  lang: 'en',
  setLang: (newLang: string) => {},
  getText: (key: string) => '' as string, 
});

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState('en');
  const setLangMemoized = useCallback((newLang: string) => {
    setLang(newLang);
  }, []);
  const getText = useMemo(() => {
    const jsonContent = content as Content;
    return (key: string) => {
        if(jsonContent[key] && jsonContent[key][lang as Lang]) {
          return jsonContent[key][lang as Lang];
        }
        return '';
    };
  }, [lang]);

  return (
    <Context.Provider value={{ lang, setLang: setLangMemoized, getText }}>
      {children}
    </Context.Provider>
  );
};
