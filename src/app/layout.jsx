import '@/app/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import I18nProvider from '@/components/providers/Languages/I18nProvider';
import MainHeader from '@/components/Headers/MainHeader';
import StarFieldBackground from '@/components/Animations/StarFieldBackground';
import Image from 'next/image';

export const metadata = {
  title: 'Next.js Template',
  description:
    'Reusable Next.js + Tailwind + Framer Motion + i18n starter template for projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise-bg bg-gray-900">
        <MainHeader />
        <StarFieldBackground />
        <Image
          src="/assets/background.svg"
          className="fixed top-0 left-0 -z-10 h-full w-full blur-[100px]"
          fill={false}
          width={500}
          height={500}
          alt="background"
          priority
        />
        <I18nProvider>{children}</I18nProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
