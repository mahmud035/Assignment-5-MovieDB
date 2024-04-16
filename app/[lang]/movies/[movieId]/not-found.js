'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MovieNotFoundPage = () => {
  const pathname = usePathname();
  const pathnameArray = pathname.split('/');

  return (
    <div className="flex flex-col items-center justify-center h-screen col-span-12 gap-4 -mt-20">
      <h2 className="text-5xl font-bold">404</h2>
      <h2 className="text-4xl font-bold">
        This movie with &quot;{pathnameArray[3]}&quot; id was not found!!
      </h2>
      <Link
        href="/"
        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
      >
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default MovieNotFoundPage;
