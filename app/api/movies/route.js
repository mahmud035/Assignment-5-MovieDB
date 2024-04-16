import { movieList } from '@/data/data';

export const GET = async () => {
  const movies = movieList.results;

  return Response.json({
    success: true,
    message: 'Movies Retrieved Successfully',
    movies: movies,
  });
};
