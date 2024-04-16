import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import MovieCard from './MovieCard';

const MovieList = async () => {
  const movies = await getDictionary('data');

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
