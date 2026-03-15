import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PasswordGate from '@/components/PasswordGate';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'BEAUTY SPHERE - Дилерский центр Профессиональной космецевтики',
  description: 'Все для работы косметологов. Официальный дилер более 15 брендов. 100% оригинальная продукция.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased font-sans min-h-screen flex flex-col`}>
        <PasswordGate>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </PasswordGate>
      </body>
    </html>
  );
}
