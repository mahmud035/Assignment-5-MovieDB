'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TagIcon from '../public/assets/tag.svg';

const NavigateMovieDetails = ({ id }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <Link
      href={`/${currentLocale}/movies/${id}`}
      className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
    >
      <Image src={TagIcon.src} width={14} height={14} alt="Tag icon" />
      <span>Details</span>
    </Link>
  );
};

export default NavigateMovieDetails;
