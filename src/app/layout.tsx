import type { Metadata } from 'next';
import { Patrick_Hand, Architects_Daughter, Caveat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SketchFilters from '@/components/SketchFilters';
import ClientWrapper from '@/components/ClientWrapper';

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-patrick-hand',
});

const architectsDaughter = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-architects-daughter',
});

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Michelangelo Bartolotta | Architetto',
  description: 'C\'è chi abita il mondo. E chi lo disegna. Portfolio di architettura contemporanea di Michelangelo Bartolotta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${patrickHand.variable} ${architectsDaughter.variable} ${caveat.variable}`}>
      <body className="paper-texture">
        <SketchFilters />
        <ClientWrapper>
          <Header />
          <main className="pt-20 min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
