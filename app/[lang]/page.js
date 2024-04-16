import MovieList from '@/components/MovieList';
import Sidebar from '@/components/Sidebar';
import { getDictionary } from './dictionaries/dictionaries';

const HomePage = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const sidebar = dictionary?.sidebar;

  return (
    <>
      <Sidebar sidebar={sidebar} />
      <MovieList />
    </>
  );
};

export default HomePage;
