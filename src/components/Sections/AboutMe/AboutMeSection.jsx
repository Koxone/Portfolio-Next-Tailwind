'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMeSection() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto mt-10 flex max-w-[300px] items-center sm:max-w-[575px] md:mt-0 md:h-full md:max-h-fit md:max-w-[450px] md:text-sm lg:mt-0 lg:max-h-full lg:max-w-lg lg:text-base xl:mt-0">
      <div className="group relative flex h-fit w-full transform flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-orange-400 bg-white/10 p-8 text-left leading-relaxed text-neutral-200 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] sm:max-w-[575px] sm:border-neutral-500 sm:hover:border-orange-400">
        <p>
          {t('aboutMeSection.hi')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.name')}</span>,{' '}
          {t('aboutMeSection.a')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.student')}</span>{' '}
          {t('aboutMeSection.currently')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.internship')}</span>{' '}
          {t('aboutMeSection.atCompany')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.company')}</span>.{' '}
          {t('aboutMeSection.transition')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.experience')}</span>,{' '}
          {t('aboutMeSection.where')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.teams')}</span>{' '}
          {t('aboutMeSection.andManaged')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.operations')}</span>
          .
          <br />
          <br />
          {t('aboutMeSection.today')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.stack')}</span>,{' '}
          {t('aboutMeSection.focusing')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.focus')}</span>.{' '}
          {t('aboutMeSection.background')}{' '}
          <span className="font-semibold text-[#FFD700]">{t('aboutMeSection.skills')}</span>{' '}
          {t('aboutMeSection.end')}
        </p>
      </div>
    </div>
  );
}
