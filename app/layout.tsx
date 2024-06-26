import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Nomad Page',
  description: 'Destination Generator'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Vagaspace | Vacation rentals for digital nomads, & more</title>
        <meta charSet="UTF-8" />
        <meta name="agd-partner-manual-verification" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
