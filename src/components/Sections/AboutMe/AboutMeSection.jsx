import React from 'react';

export default function AboutMeSection() {
  return (
    <div className="relative flex h-full items-center">
      <div className="group relative flex h-fit w-full transform flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-orange-400
       bg-white/10 p-8 text-left leading-relaxed text-neutral-200 transition-all duration-500 ease-in-out hover:scale-[1.02] 
       hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] sm:border-neutral-500 sm:hover:border-orange-400 md:max-h-fit md:max-w-[450px] md:text-sm lg:max-h-full
        lg:max-w-lg lg:text-base">
        <p>
          Hi there! I'm{' '}
          <span className="font-semibold text-[#FFD700]">Carlos De Leon</span>,
          a{' '}
          <span className="font-semibold text-[#FFD700]">
            Software Engineering student
          </span>{' '}
          currently in a{' '}
          <span className="font-semibold text-[#FFD700]">
            development internship
          </span>{' '}
          at a tourism tech company serving{' '}
          <span className="font-semibold text-[#FFD700]">
            Mexico and the Dominican Republic
          </span>
          . Transitioning from{' '}
          <span className="font-semibold text-[#FFD700]">
            10+ years as a Restaurant COO and General Manager
          </span>
          , where I led{' '}
          <span className="font-semibold text-[#FFD700]">
            teams of 100+ people
          </span>{' '}
          and managed operations with{' '}
          <span className="font-semibold text-[#FFD700]">
            $1.5M USD monthly revenue at 30% profit margins
          </span>
          .
          <br />
          <br />
          Today, I'm building responsive web applications with{' '}
          <span className="font-semibold text-[#FFD700]">
            React, Next.js, Astro, Tailwind CSS, and Firebase
          </span>
          , focusing on{' '}
          <span className="font-semibold text-[#FFD700]">
            clean code and intuitive UI/UX
          </span>
          . My operations background brings proven{' '}
          <span className="font-semibold text-[#FFD700]">
            project management, data-driven decision making, and high-pressure
            performance skills
          </span>{' '}
          to every technical challenge I tackle.
        </p>
      </div>
    </div>
  );
}
