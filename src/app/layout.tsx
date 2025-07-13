import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mini Blog Reader',
  description: 'Work Assesment Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='flex-grow flex flex-col items-center justify-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
