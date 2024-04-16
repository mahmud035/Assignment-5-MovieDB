import Image from 'next/image';
import Link from 'next/link';
import StarIcon from '../public/assets/star.svg';
import TagIcon from '../public/assets/tag.svg';

const MovieCard = ({ movie }) => {
  const { id, poster_path, title } = movie;

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
        <h3 class="text-xl mb-1">{title}</h3>
        <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center mb-5 space-x-1">
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
          <Image src={StarIcon.src} width={14} height={14} alt="Star icon" />
        </div>
        <Link
          href={`/movies/${id}`}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <Image src={TagIcon.src} width={14} height={14} alt="Tag icon" />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
