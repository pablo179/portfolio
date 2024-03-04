import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguajeContext';
import { Quicksand } from 'next/font/google';

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
    <html lang='en'>
      <body className={`bg-white ${quicksand.variable} font-quicksand max-w-8xl mx-auto`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
