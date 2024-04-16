import Image from 'next/image';
import Link from 'next/link';
import SunIcon from '../public/assets/icons/sun.svg';
import Logo from '../public/assets/logo.svg';
import Ring from '../public/assets/ring.svg';
import ShoppingCartIcon from '../public/assets/shopping-cart.svg';

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between py-6 space-x-10">
        <Link href="/">
          <Image src={Logo.src} width={139} height={26} alt="Logo" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={Ring.src} width={24} height={24} alt="Ring icon" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={SunIcon.src} width={24} height={24} alt="Sun icon" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src={ShoppingCartIcon.src}
                width={24}
                height={24}
                alt="Shopping cart icon"
              />
            </Link>
          </li>
          <li>{/* <SwitchLanguage /> */}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
