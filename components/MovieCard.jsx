import Image from 'next/image';
import StarIcon from '../public/assets/star.svg';
import NavigateMovieDetails from './NavigateMovieDetails';

const MovieCard = ({ movie }) => {
  const { id, poster_path, title } = movie || {};

  return (
    <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
      <Image
        className="object-cover w-full"
        src={poster_path}
        width={300}
        height={400}
        alt="movie thumbnail"
      />
      <figcaption className="pt-4">
        <h3 className="mb-1 text-xl">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center mb-5 space-x-1">
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
        </div>

        <NavigateMovieDetails id={id} />
      </figcaption>
    </figure>
  );
};

export default MovieCard;
