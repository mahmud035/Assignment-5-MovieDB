import MovieDetails from '@/components/MovieDetails';

const MovieDetailsPage = ({ params: { movieId, lang } }) => {
  return <MovieDetails movieId={movieId} lang={lang} />;
};

export default MovieDetailsPage;
