import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import BootstrapClient from './BootstrapClient';
import NavBar from '@/app/NavBar';
import Footer from './Footer';

const fredoka = Fredoka({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SummitQuest',
  description: 'The site specializes in finding national parks and mountains to climb.',
  // viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fredoka.className} data-bs-theme={'dark'}>
        <NavBar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
