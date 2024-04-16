import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MovieDB | Home',
  description: 'MovieDB homepage description',
};

export default function RootLayout({ children }) {
  return (
    // TODO: Toggle dark class to switch between dark and light mode
    <html lang="en" className="dark">
      <body
        className={`${inter.className} dark:bg-body bg-white font-[Sora] dark:text-white text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
