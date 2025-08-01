'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w- mx-auto flex flex-col items-center justify-center gap-8">
      <div>
        <h2 className="mb-2 text-center text-4xl font-bold text-[#c2c6da]">
          Experience
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
      </div>

      <div className="group relative flex w-full transform flex-col items-center justify-center overflow-hidden rounded-2xl border border-orange-400 bg-white/5 p-10 text-left text-base leading-relaxed text-neutral-200 backdrop-blur-sm transition-all duration-500 ease-in-out hover:scale-[1.02] hover:border-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] sm:border-neutral-600">
        <span className="animate-spark absolute z-20 hidden h-2 w-2 rounded-full opacity-100 group-hover:block hover:bg-orange-400"></span>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/5 to-purple-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className="relative z-10 w-full">
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold text-orange-300">
              Frontend Developer
            </h3>
            <p className="text-sm text-neutral-400">
              Tourism Tech Solutions • Mexico & Dominican Republic
            </p>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 md:max-h-none ${
              expanded ? 'max-h-[2000px]' : 'max-h-[200px]'
            }`}
          >
            <ul className="space-y-4">
              {[
                {
                  text: (
                    <>
                      Currently in a{' '}
                      <span className="font-medium text-yellow-300">
                        development internship
                      </span>{' '}
                      building production-ready applications for airport and
                      e-commerce clients using{' '}
                      <span className="font-medium text-yellow-300">
                        React, Tailwind CSS, Next.js, ASTRO and REST APIs
                      </span>
                      .
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Led the implementation of a{' '}
                      <span className="font-medium text-yellow-300">
                        dynamic coupon system with Google Wallet and Apple
                        Wallet integration
                      </span>
                      , collaborating with backend teams to deliver seamless
                      payment flows.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <span className="font-medium text-yellow-300">
                        Self-taught developer
                      </span>{' '}
                      advancing through hands-on projects, technical
                      documentation, and structured online learning while
                      pursuing formal certification.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Multilingual communicator:{' '}
                      <span className="font-medium text-yellow-300">
                        Spanish (native)
                      </span>
                      ,{' '}
                      <span className="font-medium text-yellow-300">
                        English (C1)
                      </span>
                      ,{' '}
                      <span className="font-medium text-yellow-300">
                        Portuguese (B1)
                      </span>{' '}
                      — enabling effective collaboration across international
                      teams and clients.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Leverage{' '}
                      <span className="font-medium text-yellow-300">
                        10+ years of operations leadership
                      </span>{' '}
                      to drive technical projects with clear architecture
                      decisions, stakeholder alignment, and consistent delivery.
                    </>
                  ),
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400"></div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 text-center md:hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-orange-400 underline transition hover:text-orange-300"
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          </div>

          <div className="mt-8 border-t border-neutral-700 pt-6">
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'React', color: 'bg-orange-400/20 text-orange-300' },
                { label: 'Next.js', color: 'bg-blue-400/20 text-blue-300' },
                {
                  label: 'Tailwind CSS',
                  color: 'bg-cyan-400/20 text-cyan-300',
                },
                { label: 'Astro', color: 'bg-purple-400/20 text-purple-300' },
                { label: 'REST APIs', color: 'bg-green-400/20 text-green-300' },
                { label: 'GraphQL', color: 'bg-indigo-400/20 text-indigo-300' },
                {
                  label: 'Firebase',
                  color: 'bg-yellow-400/20 text-yellow-300',
                },
                { label: 'Shopify API', color: 'bg-pink-400/20 text-pink-300' },
                { label: 'Framer Motion', color: 'bg-red-400/20 text-red-300' },
                { label: 'i18n', color: 'bg-teal-400/20 text-teal-300' },
                { label: 'Vercel', color: 'bg-gray-400/20 text-gray-300' },
                {
                  label: 'GitHub API',
                  color: 'bg-emerald-400/20 text-emerald-300',
                },
                { label: 'Zustand', color: 'bg-lime-400/20 text-lime-300' },
                { label: 'Context API', color: 'bg-rose-400/20 text-rose-300' },
                {
                  label: 'Google Wallet',
                  color: 'bg-amber-400/20 text-amber-300',
                },
                {
                  label: 'Apple Wallet',
                  color: 'bg-pink-400/20 text-pink-300',
                },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
