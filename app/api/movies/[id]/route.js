import { movieList } from '@/data/data';

export const GET = async (_request, { params }) => {
  const movieId = params.id;
  const movie = movieList.results.find(
    (movie) => movie.id.toString() === movieId
  );

  if (!movie) {
    return Response.json({ success: false, message: 'Movie not found' });
  }

  return Response.json({
    success: true,
    message: 'Movie Retrieved Successfully',
    movie: movie,
  });
};

export const PATCH = async (request, { params }) => {
  const movie = await request.json();
  const movieId = params.id;

  // Check if the movie ID exists
  if (!movieId) {
    return Response.json({ success: false, message: 'No movie found' });
  }

  const movieIndex = movieList.results.findIndex(
    (movie) => movie.id.toString() === movieId
  );

  if (movieIndex === -1) {
    return Response.json({ success: false, message: 'Movie not found' });
  }

  // Check if only the title property is being updated
  if (Object.keys(movie).length !== 1 || !movie.hasOwnProperty('title')) {
    return Response.json({
      success: false,
      message: 'You can only update the title property',
    });
  }

  movieList.results[movieIndex].title = movie.title;

  return Response.json({
    success: true,
    message: 'Movie Updated Successfully',
    updatedMovie: movieList.results[movieIndex],
  });
};

export const DELETE = async (_request, { params }) => {
  const movieId = params.id;
  const movieIndex = movieList.results.findIndex(
    (movie) => movie.id.toString() === movieId
  );

  if (movieIndex === -1) {
    return Response.json({ success: false, message: 'Movie not found' });
  }

  // Get the deleted movie
  const deletedMovie = movieList.results.splice(movieIndex, 1)[0];

  return Response.json({
    success: true,
    message: 'Movie Deleted Successfully',
    deletedMovie: deletedMovie,
  });
};
