import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import '../globals.css';
import { getDictionary } from './dictionaries/dictionaries';

export const metadata = {
  title: 'Home | MovieDB',
  description: 'MovieDB homepage description',
};

const MoviesLayout = async ({ children, params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const sidebar = dictionary?.sidebar;

  return (
    // TODO: Toggle dark class to switch between dark and light mode
    // <html lang="en" className="dark">
    //   <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
    //     <Header />

    //     <main>
    //       <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
    //         <Sidebar sidebar={sidebar} />
    //         {children}
    //       </div>
    //     </main>

    //     <Footer />

    //     {/* Render Modal */}
    //     <div id="modal-root-content" />
    //   </body>
    // </html>

    <>
      <Header />

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar sidebar={sidebar} />
          {children}
        </div>
      </main>

      <Footer />

      {/* Render Modal */}
      <div id="modal-root-content" />
    </>
  );
};

export default MoviesLayout;
