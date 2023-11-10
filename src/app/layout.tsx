import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BootstrapClient from './BootstrapClient';
import NavBar from '@/app/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SummitQuest',
  description: 'The site specializes in finding national parks amd mountains to climb.',
  // viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className} data-bs-theme={'dark'}>
        <NavBar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
