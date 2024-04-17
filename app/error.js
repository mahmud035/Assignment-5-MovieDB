'use client';

import Link from 'next/link';

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 -mt-20">
      <h2 className="text-5xl font-bold">
        Something went wrong: {error.message}
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

export default ErrorPage;
