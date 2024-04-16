'use client';

import { locales } from '@/middleware';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SwitchLanguage = () => {
  const pathname = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    console.log({ segments });
    segments[1] = locale;
    return segments.join('/');
  };

  // TODO: যদি Select ব্যবহার করি তাহলে option এর মধ্যে <Link>{locale}</Link> ব্যবহার করতে হবে।

  return (
    <ul className="flex gap-3 mt-4">
      {locales.map((locale) => (
        <li key={locale}>
          <Link
            href={redirectedPathName(locale)}
            className="text-white rounded px-3 py-1.5 bg-teal-400"
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SwitchLanguage;
