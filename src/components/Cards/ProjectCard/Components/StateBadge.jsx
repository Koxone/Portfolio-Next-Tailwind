import React from 'react';

function StateBadge({ completed }) {
  return (
    <div className="absolute top-4 right-4 z-20">
      <div
        className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold shadow-lg backdrop-blur-sm ${
          completed
            ? 'border-emerald-500/20 bg-emerald-500/60 text-emerald-950'
            : 'border-orange-500/20 bg-orange-500/10 text-orange-400'
        }`}
      >
        {completed ? 'Completed' : 'In Progress'}
      </div>
    </div>
  );
}

export default StateBadge;
