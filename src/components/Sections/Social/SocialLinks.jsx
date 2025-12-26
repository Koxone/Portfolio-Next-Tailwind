'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

function SocialLinks() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-4">
      <a
        href="/resume.docx"
        download
        className="hover:flash hidden cursor-pointer rounded-[9999px] border bg-white px-2 py-1.5 font-medium text-black lg:block"
      >
        {t('resumeButton.button')}
      </a>

      <a href="https://github.com/Koxone" className="hover:flash">
        <img
          src="/assets/icons/github.png"
          alt="GitHub"
          className="h-full w-9"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/carlos-d-leon/"
        className="hover:flash"
      >
        <img
          src="/assets/icons/linkedin.png"
          alt="LinkedIn"
          className="h-full w-9"
        />
      </a>
      <a
        href="https://www.instagram.com/carlos.d.leon/"
        className="hover:flash"
      >
        <img
          src="/assets/icons/instagram.png"
          alt="Instagram"
          className="h-full w-9"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
