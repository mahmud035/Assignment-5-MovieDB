import Image from 'next/image';
import Link from 'next/link';
import CommingSoonIcon from '../public/assets/icons/commingSoon.svg';
import FavouriteIcon from '../public/assets/icons/favourite.svg';
import NewReleaseIcon from '../public/assets/icons/newRelease.svg';
import TrendingIcon from '../public/assets/icons/trending.svg';
import WatchLaterIcon from '../public/assets/icons/watchLater.svg';

const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
          >
            <Image
              src={TrendingIcon.src}
              width={24}
              height={24}
              alt="Trending icon"
            />
            <span>Trending</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          >
            <Image
              src={NewReleaseIcon.src}
              width={24}
              height={24}
              alt="New release icon"
            />
            <span>New Releases</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          >
            <Image
              src={CommingSoonIcon.src}
              width={24}
              height={24}
              alt="Comming soon"
            />
            <span>Coming Soon</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          >
            <Image
              src={FavouriteIcon.src}
              width={24}
              height={24}
              alt="Favourites"
            />
            <span>Favourites</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src={WatchLaterIcon.src}
              width={24}
              height={24}
              alt="WatchLater"
            />
            <span>Watch Later</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
