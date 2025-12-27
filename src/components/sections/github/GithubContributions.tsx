'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function ContributionsSection() {
  const theme = {
    dark: ['rgba(255, 255, 255, 0.08)', '#fed7aa', '#fdba74', '#fb923c', '#ea580c'],
  };

  return (
    <div className="w-ffit hidden max-w-full px-2 text-white sm:px-4 md:block">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-[#c2c6da] sm:text-3xl md:text-4xl">
          Github Contributions
        </h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-linear-to-r from-orange-400 to-yellow-400 sm:w-20 md:w-24"></div>
      </div>

      {/* Calendar */}
      <div className="rounded-lg border border-orange-400/60 bg-black/20 p-4">
        <GitHubCalendar
          username="koxone"
          theme={theme}
          colorScheme="dark"
          blockSize={16}
          blockMargin={3}
          fontSize={14}
        />
      </div>
    </div>
  );
}
