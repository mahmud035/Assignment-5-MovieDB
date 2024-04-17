import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import { getMovie } from '@/utils';
import Image from 'next/image';

const MovieDetails = async ({ movieId, lang }) => {
  const movie = getMovie(movieId);
  const dictionary = await getDictionary(lang);

  const {
    backdrop_path,
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    vote_count,
    popularity,
  } = movie || {};

  return (
    <section>
      <div>
        <Image
          className="w-full object-cover rounded object-top max-h-[300px] lg:max-h-[500px]"
          src={backdrop_path}
          width={1200}
          height={500}
          alt="backdrop_path"
        />
      </div>

      <div className="grid grid-cols-12 gap-8 py-12">
        <div className="col-span-2">
          <Image
            src={poster_path}
            className="rounded"
            width={180}
            height={265}
            alt="poster_path"
          />
        </div>
        <div className="col-span-8">
          <h2 className="text-2xl font-bold text-slate-300">
            {original_title}
          </h2>
          <p className="my-2 italic text-slate-400">{overview}</p>
          <ul className="my-8 space-y-2 text-slate-300">
            <li>Release Date : {release_date}</li>
            <li>Average Vote : {vote_average}</li>
            <li>Vote Count : {vote_count}</li>
            <li>Popularity : {popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
            {dictionary?.content?.streamInHD}
          </button>
          <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
            {dictionary?.content?.downloadInHD}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
