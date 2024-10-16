import Header from '@/components/Header';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 -mt-20">
        <h2 className="text-5xl font-bold">404 : Page Not Found </h2>
        <div>The page you are requesting was not found!!</div>
        <Link
          href="/"
          className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
        >
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
