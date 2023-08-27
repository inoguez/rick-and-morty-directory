import './globals.css';
import { Montserrat } from 'next/font/google';

const font = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Directorio Rick & Morty',
  description: 'Directorio de Rick & Morty consumiendo API',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={font.className}>{children}</body>
    </html>
  );
}
