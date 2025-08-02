import React from 'react';

function Activity({ updated, active }) {
  const isActive = Boolean(active);

  return (
    <div className="border-border/30 flex items-center justify-between border-t border-orange-400/40 pt-4 text-gray-400">
      <div className="flex items-center gap-1 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clock h-3 w-3"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{updated}</span>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <div
          className={`h-2 w-2 rounded-full ${
            isActive ? 'animate-pulse bg-emerald-400' : 'bg-orange-400'
          }`}
        />
        <span className={isActive ? 'text-emerald-400' : 'text-orange-400'}>
          {isActive ? 'Active Project' : 'Inactive Project'}
        </span>
      </div>
    </div>
  );
}

export default Activity;
