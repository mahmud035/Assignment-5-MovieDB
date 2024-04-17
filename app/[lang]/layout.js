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
