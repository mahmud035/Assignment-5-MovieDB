'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLogo from '../public/assets/logo.svg';

const Logo = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <Link href={`/${currentLocale}`}>
      <Image src={NavLogo.src} width={139} height={26} alt="Logo" />
    </Link>
  );
};

export default Logo;
