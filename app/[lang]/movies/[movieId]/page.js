import MovieDetails from '@/components/MovieDetails';
import { movieList } from '@/data/data';
import { notFound } from 'next/navigation';

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
