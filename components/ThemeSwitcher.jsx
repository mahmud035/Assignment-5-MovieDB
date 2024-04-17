'use client';

import { ThemeContext } from '@/contexts/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import MoonIcon from '../public/assets/icons/moon.svg';
import SunIcon from '../public/assets/icons/sun.svg';

const ThemeSwitcher = () => {
  const { lightTheme, darkTheme, themeMode } = useContext(ThemeContext);

  // NOTE: Toggle Theme Mode
  const handleToggleTheme = (themeMode) => {
    if (typeof window !== 'undefined') {
      if (themeMode === 'dark') {
        lightTheme();
        localStorage.setItem('themeMode', 'light');
      } else {
        darkTheme();
        localStorage.setItem('themeMode', 'dark');
      }
    } else {
      if (themeMode === 'dark') {
        lightTheme();
      } else {
        darkTheme();
      }
    }
  };

  return (
    <Link
      href="#"
      onClick={() => handleToggleTheme(themeMode)}
      className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
    >
      {themeMode === 'dark' ? (
        <Image src={SunIcon.src} width={24} height={24} alt="Sun icon" />
      ) : (
        <Image src={MoonIcon.src} width={24} height={24} alt="Moon icon" />
      )}
    </Link>
  );
};

export default ThemeSwitcher;
