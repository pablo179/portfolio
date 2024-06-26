import type { Metadata } from 'next';
import './globals.scss';
import './mixins.scss';
import { LanguageProvider } from '@/context/LanguajeContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { Quicksand } from 'next/font/google';
import 'bulma/css/bulma.css';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const quicksand = Quicksand({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-quicksand',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
        <body
          className={`${quicksand.variable} font-quicksand container is-max-desktop`}
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </body>
    </ThemeProvider>
  );
}
