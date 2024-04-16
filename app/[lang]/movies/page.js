import MovieList from '@/components/MovieList';
import { movieList } from '@/data/data';

export const generateStaticParams = () => {
  return movieList.results.map((movie) => ({
    id: movie.id.toString(),
  }));
};

const HomePage = async () => {
  return (
    <>
      <MovieList />
    </>
  );
};

export default HomePage;
