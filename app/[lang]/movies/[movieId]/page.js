import MovieDetails from '@/components/MovieDetails';
import Sidebar from '@/components/Sidebar';
import { movieList } from '@/data/data';
import { getMovie } from '@/utils';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../dictionaries/dictionaries';

export const generateMetadata = ({ params: { movieId } }) => {
  const movie = getMovie(movieId);

  if (!movie) {
    return {
      title: 'Movie Details | MovieDB',
      description: movie?.overview,
    };
  }

  return {
    title: `${movie?.title} | MovieDB`,
    description: movie?.overview,
  };
};

export const generateStaticParams = () => {
  return movieList.results.map((movie) => ({
    id: movie.id.toString(),
  }));
};

const MovieDetailsPage = async ({ params: { movieId, lang } }) => {
  const dictionary = await getDictionary(lang);
  const sidebar = dictionary?.sidebar;

  const movie = movieList.results.find(
    (movie) => movie.id.toString() === movieId
  );

  // conditionally call not-found
  if (!movie) {
    notFound();
  }

  return (
    <>
      <Sidebar sidebar={sidebar} />
      <MovieDetails movieId={movieId} lang={lang} />
    </>
  );
};

export default MovieDetailsPage;
