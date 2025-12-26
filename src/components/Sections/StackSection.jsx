'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function StackSection() {
  const { t } = useTranslation();

  const renderItems = (items) =>
    items.map((item, i) => (
      <li
        key={i}
        className={`group glow-card relative ${item.border} p-3 ${item.bg} flex h-full max-h-[65px] w-full max-w-[65px] flex-col items-center gap-2 rounded-2xl backdrop-blur-md ${item.hover}`}
      >
        <div className="flex h-14 w-14 items-center justify-center p-1">
          <img src={item.url} alt={item.tooltip} className="max-h-full max-w-full object-contain" />
        </div>
        <span className={`tooltip ${item.text} ${item.border} ${item.bg}`}>{item.tooltip}</span>
      </li>
    ));

  return (
    <section className="flex w-full flex-col items-center gap-10">
      <div>
        <h2 className="mb-2 text-center text-4xl font-bold text-[#c2c6da]">Stack</h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
      </div>

      {/* MAIN STACK */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-semibold text-[#c2c6da]">{t('stack.main')}</h3>
        <ul className="flex flex-wrap justify-center gap-5 md:grid md:grid-cols-5">
          {renderItems([
            {
              url: '/StackIcons/next.svg',
              tooltip: 'Next.js',
              border: 'border-white',
              text: 'text-white',
              bg: 'bg-white/10',
              hover: 'hover-glow-white',
            },
            {
              url: '/StackIcons/react.svg',
              tooltip: 'React',
              border: 'border-cyan-300',
              text: 'text-cyan-300',
              bg: 'bg-cyan-300/10',
              hover: 'hover-glow-cyan',
            },
            {
              url: '/StackIcons/ts.svg',
              tooltip: 'Typescript',
              border: 'border-blue-500',
              text: 'text-blue-500',
              bg: 'bg-blue-500/10',
              hover: 'hover-glow-blue',
            },
            {
              url: '/StackIcons/js.svg',
              tooltip: 'Javascript',
              border: 'border-amber-500',
              text: 'text-amber-500',
              bg: 'bg-amber-500/10',
              hover: 'hover-glow-amber',
            },
            {
              url: '/StackIcons/tailwind.svg',
              tooltip: 'Tailwind',
              border: 'border-sky-400',
              text: 'text-sky-400',
              bg: 'bg-sky-400/10',
              hover: 'hover-glow-sky',
            },
          ])}
        </ul>
      </div>

      {/* Backend Stack */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-semibold text-[#c2c6da]">{t('stack.also')}</h3>
        <ul className="flex flex-wrap justify-center gap-5 md:grid md:grid-cols-5">
          {renderItems([
            {
              url: '/StackIcons/nodejs.svg',
              tooltip: 'Node.js',
              border: 'border-green-500',
              text: 'text-green-500',
              bg: 'bg-green-500/10',
              hover: 'hover-glow-green',
            },
            {
              url: '/StackIcons/jwt.svg',
              tooltip: 'JWT',
              border: 'border-amber-500',
              text: 'text-amber-500',
              bg: 'bg-amber-500/10',
              hover: 'hover-glow-amber',
            },
            {
              url: '/StackIcons/zod.svg',
              tooltip: 'Zod',
              border: 'border-blue-400',
              text: 'text-blue-400',
              bg: 'bg-blue-400/10',
              hover: 'hover-glow-blue',
            },
            {
              url: '/StackIcons/tanstack.svg',
              tooltip: 'TanStack Query',
              border: 'border-green-500',
              text: 'text-green-500',
              bg: 'bg-green-500/10',
              hover: 'hover-glow-green',
            },
            {
              url: '/StackIcons/shopify.svg',
              tooltip: 'Shopify API',
              border: 'border-emerald-400',
              text: 'text-emerald-400',
              bg: 'bg-emerald-400/10',
              hover: 'hover-glow-lime',
            },
          ])}
        </ul>
      </div>

      {/* Databases and Storage Stack */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-semibold text-[#c2c6da]">{t('stack.database')}</h3>
        <ul className="flex flex-wrap justify-center gap-5 md:grid md:grid-cols-4">
          {renderItems([
            {
              url: '/StackIcons/mongo.svg',
              tooltip: 'MongoDB',
              border: 'border-green-400',
              text: 'text-green-400',
              bg: 'bg-green-400/10',
              hover: 'hover-glow-green',
            },
            {
              url: '/StackIcons/mongoose.svg',
              tooltip: 'Mongoose',
              border: 'border-red-400',
              text: 'text-red-400',
              bg: 'bg-red-400/10',
              hover: 'hover-glow-red',
            },
            {
              url: '/StackIcons/blob.svg',
              tooltip: 'Vercel BLOB',
              border: 'border-yellow-400',
              text: 'text-yellow-400',
              bg: 'bg-yellow-400/10',
              hover: 'hover-glow-yellow',
            },
            {
              url: '/StackIcons/firebase.svg',
              tooltip: 'Firebase',
              border: 'border-yellow-400',
              text: 'text-yellow-400',
              bg: 'bg-yellow-400/10',
              hover: 'hover-glow-yellow',
            },
          ])}
        </ul>
      </div>

      {/* TOOLS & INTEGRATIONS */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-semibold text-[#c2c6da]">{t('stack.tools')}</h3>
        <ul className="flex flex-wrap justify-center gap-5">
          {renderItems([
            {
              url: '/StackIcons/astro.png',
              tooltip: 'Astro',
              border: 'border-purple-400',
              text: 'text-purple-400',
              bg: 'bg-purple-400/10',
              hover: 'hover-glow-purple',
            },
            {
              url: '/StackIcons/vite.png',
              tooltip: 'Vite',
              border: 'border-purple-400',
              text: 'text-purple-400',
              bg: 'bg-purple-400/10',
              hover: 'hover-glow-purple',
            },
            {
              url: '/StackIcons/firebase.png',
              tooltip: 'Firebase',
              border: 'border-amber-500',
              text: 'text-amber-500',
              bg: 'bg-amber-500/10',
              hover: 'hover-glow-amber',
            },
            {
              url: '/StackIcons/shopify.svg',
              tooltip: 'Shopify',
              border: 'border-emerald-400',
              text: 'text-emerald-400',
              bg: 'bg-emerald-400/10',
              hover: 'hover-glow-lime',
            },
            {
              url: '/StackIcons/postman.svg',
              tooltip: 'Postman',
              border: 'border-orange-400',
              text: 'text-orange-400',
              bg: 'bg-orange-400/10',
              hover: 'hover-glow-orange',
            },
            {
              url: '/StackIcons/i18.svg',
              tooltip: 'i18Next',
              border: 'border-lime-400',
              text: 'text-lime-400',
              bg: 'bg-lime-400/10',
              hover: 'hover-glow-lime',
            },
            {
              url: '/StackIcons/figma.png',
              tooltip: 'Figma',
              border: 'border-pink-500',
              text: 'text-pink-500',
              bg: 'bg-pink-500/10',
              hover: 'hover-glow-pink',
            },
            {
              url: '/StackIcons/FramerMotion.svg',
              tooltip: 'Framer Motion',
              border: 'border-purple-400',
              text: 'text-purple-400',
              bg: 'bg-purple-400/10',
              hover: 'hover-glow-purple',
            },
            {
              url: '/StackIcons/Shadcn-UI.svg',
              tooltip: 'Shadcn/UI',
              border: 'border-white',
              text: 'text-white',
              bg: 'bg-white/10',
              hover: 'hover-glow-white scale-110',
            },
            {
              url: '/StackIcons/prettier.png',
              tooltip: 'Prettier',
              border: 'border-indigo-400',
              text: 'text-indigo-400',
              bg: 'bg-indigo-400/10',
              hover: 'hover-glow-indigo',
            },
            {
              url: '/StackIcons/git.png',
              tooltip: 'Git',
              border: 'border-orange-600',
              text: 'text-orange-600',
              bg: 'bg-orange-600/10',
              hover: 'hover-glow-orange',
            },
            {
              url: '/StackIcons/github.svg',
              tooltip: 'GitHub',
              border: 'border-neutral-500',
              text: 'text-neutral-200',
              bg: 'bg-neutral-500/10',
              hover: 'hover-glow-white',
            },
            {
              url: '/StackIcons/linux.png',
              tooltip: 'Linux',
              border: 'border-yellow-500',
              text: 'text-yellow-500',
              bg: 'bg-yellow-500/10',
              hover: 'hover-glow-yellow',
            },
            {
              url: '/StackIcons/npm.png',
              tooltip: 'NPM',
              border: 'border-red-500',
              text: 'text-red-500',
              bg: 'bg-red-500/10',
              hover: 'hover-glow-red',
            },
            {
              url: '/StackIcons/vercel.svg',
              tooltip: 'Vercel',
              border: 'border-neutral-400',
              text: 'text-neutral-300',
              bg: 'bg-neutral-500/10',
              hover: 'hover-glow-white',
            },
          ])}
        </ul>
      </div>
    </section>
  );
}
