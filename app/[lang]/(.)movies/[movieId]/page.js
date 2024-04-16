import Modal from '@/components/Modal';
import MovieDetails from '@/components/MovieDetails';

const MovieModal = ({ params: { movieId, lang } }) => {
  return (
    <Modal>
      <MovieDetails movieId={movieId} lang={lang} />;
    </Modal>
  );
};

export default MovieModal;
