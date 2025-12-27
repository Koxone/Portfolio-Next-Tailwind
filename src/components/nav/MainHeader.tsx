'use client';

import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function MainHeader() {
  // i18n instance
  const { i18n } = useTranslation();

  // Current pathname
  const pathname = usePathname();

  // Language toggle handler
  const toggleLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('es');
    } else if (i18n.language === 'es') {
      i18n.changeLanguage('pt');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <header
      className={`flex ${pathname === '/project' ? 'hidden' : 'flex'} h-16 w-full items-center justify-between border-b border-gray-800 bg-gray-900 px-5 py-8 md:p-8`}
    >
      <Image src="/logo.png" alt="Logo Icon" width={40} height={40} style={{ width: 'auto' }} />

      <div className="flex items-center gap-2 text-xs text-white sm:gap-8 sm:text-base">
        <a
          className="transition-transform duration-200 hover:scale-125 hover:text-[#FFD700]"
          target="_blank"
          href="https://github.com/Koxone"
        >
          Github
        </a>
        <a
          className="hidden transition-transform duration-200 hover:scale-125 hover:text-[#FFD700] md:block"
          target="_blank"
          href="https://www.youtube.com/@KoxDeveloper"
        >
          Youtube
        </a>
        <a
          className="transition-transform duration-200 hover:scale-125 hover:text-[#FFD700]"
          href="#footer"
        >
          Contact
        </a>

        {/* Language Button */}
        <button
          onClick={toggleLanguage}
          className="flex cursor-pointer items-center gap-1 rounded-md border border-gray-500 px-3 py-1 text-xs font-medium text-[#FFD700] transition-colors duration-200 hover:border-yellow-400 hover:text-yellow-400 sm:text-sm"
        >
          {/* {i18n.language.toUpperCase()} */}
          <Image src="/StackIcons/LanguageIcon.svg" alt="Language" width={20} height={20} />
        </button>
      </div>
    </header>
  );
}
