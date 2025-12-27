import './globals.css';
import Image from 'next/image';

import I18nProvider from '@/providers/i18Provider';
import StarFieldBackground from '../animations/StarFieldBackground';
import MainHeader from '@/components/nav/MainHeader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise-bg bg-gray-900">
        <I18nProvider>
          <MainHeader />
          <StarFieldBackground />

          <Image
            src="/assets/background.svg"
            className="fixed top-0 left-0 -z-10 h-full w-full blur-[100px]"
            width={500}
            height={500}
            alt="background"
            priority
          />

          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
