'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Types
import { STACK_GROUPS } from './services/helpers';

export default function StackSection() {
  const { t } = useTranslation();

  return (
    <section className="flex w-full flex-col items-center gap-10">
      <div>
        <h2 className="mb-2 text-center text-4xl font-bold text-[#c2c6da]">Stack</h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-orange-400 to-yellow-400" />
      </div>

      {STACK_GROUPS.map((group) => (
        <div key={group.titleKey} className="flex flex-col items-center gap-3">
          <h3 className="text-lg font-semibold text-[#c2c6da]">{t(group.titleKey)}</h3>
          <ul
            className={`flex flex-wrap justify-center gap-5 ${group.cols ? `md:grid ${group.cols}` : ''}`}
          >
            {group.items.map((item) => (
              <li
                key={item.tooltip}
                className={`group glow-card relative ${item.border} p-3 ${item.bg} flex h-full max-h-17 w-full max-w-17 flex-col items-center gap-2 rounded-2xl backdrop-blur-md ${item.hover}`}
              >
                <div className="flex h-14 w-14 items-center justify-center p-1">
                  <Image
                    src={item.url}
                    alt={item.tooltip}
                    width={64}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className={`tooltip ${item.text} ${item.border} ${item.bg}`}>
                  {item.tooltip}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
