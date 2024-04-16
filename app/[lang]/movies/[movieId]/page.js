import MovieDetails from '@/components/MovieDetails';
import { movieList } from '@/data/data';
import { getMovie } from '@/utils';
import { notFound } from 'next/navigation';

export const generateMetadata = ({ params: { movieId } }) => {
  const movie = getMovie(movieId);

  return {
    title: `${movie.title} | MovieDB`,
    description: movie.overview,
  };
};

export const generateStaticParams = () => {
  return movieList.results.map((movie) => ({
    id: movie.id.toString(),
  }));
};

const MovieDetailsPage = ({ params: { movieId, lang } }) => {
  const movie = movieList.results.find(
    (movie) => movie.id.toString() === movieId
  );

  // conditionally call not-found
  if (!movie) {
    notFound();
  }

  return <MovieDetails movieId={movieId} lang={lang} />;
};

export default MovieDetailsPage;
