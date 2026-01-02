import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SketchFilters from '@/components/SketchFilters';
import ClientWrapper from '@/components/ClientWrapper';

export const metadata: Metadata = {
  title: 'Michelangelo Bartolotta | Architetto',
  description: 'Dopo Dio c\'è l\'architetto. Portfolio di architettura contemporanea di Michelangelo Bartolotta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
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
