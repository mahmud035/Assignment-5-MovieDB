import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export const metadata = {
  title: 'MovieDB | Home',
  description: 'MovieDB homepage description',
};

export default function RootLayout({ children }) {
  return (
    // TODO: Toggle dark class to switch between dark and light mode
    <html lang="en" className="dark">
      <body
        className={`dark:bg-body bg-white font-[Sora] dark:text-white text-dark`}
      >
        <Header />

        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
