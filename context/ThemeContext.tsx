'use client';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Theme } from '@/types';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (newTheme: Theme['theme']) => {},
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme['theme']>('light');
  const setThemeMemoized = useMemo(
    () => (newTheme: Theme['theme']) => {
      setTheme(newTheme);
    },
    []
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeMemoized }}>
      <html lang='en' data-theme={theme}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
};
