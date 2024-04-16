import { movieList } from '@/data/data';

export const getMovie = (movieId) => {
  const movie = movieList.results.find(
    (movie) => movie.id.toString() === movieId
  );
  return movie;
};
