'use client';
import { useEffect, useState } from 'react';

export default function GitHubCalendar() {
  const [weeks, setWeeks] = useState([]);
  const [total, setTotal] = useState(0);
  const [bestDay, setBestDay] = useState(null);
  const [avgPerWeek, setAvgPerWeek] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());

  const fetchData = async (selectedYear) => {
    const res = await fetch(`/api/github-contributions?year=${selectedYear}`);
    const data = await res.json();
    const calendar =
      data.data.user.contributionsCollection.contributionCalendar;

    setWeeks(calendar.weeks);
    setTotal(calendar.totalContributions);

    let maxDay = null;
    let totalCount = 0;

    calendar.weeks.forEach((week) =>
      week.contributionDays.forEach((day) => {
        totalCount += day.contributionCount;
        if (!maxDay || day.contributionCount > maxDay.contributionCount) {
          maxDay = day;
        }
      })
    );

    setBestDay(maxDay);
    setAvgPerWeek(Math.round(totalCount / calendar.weeks.length));
  };

  useEffect(() => {
    fetchData(year);
  }, [year]);

  const getColor = (count) => {
    if (count === 0) return 'rgba(255, 255, 255, 0.08)';
    if (count < 3) return '#fed7aa';
    if (count < 6) return '#fdba74';
    return '#fb923c';
  };

  return (
    <div className="w-full max-w-full hidden md:block px-2 text-white sm:px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-[#c2c6da] sm:text-3xl md:text-4xl">
          Github Contributions
        </h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 sm:w-20 md:w-24"></div>
      </div>

      {/* Controles y estadísticas */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        {/* Selector de año */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="text-xs text-gray-300 sm:text-sm">
            Select year:
          </label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="rounded-md border border-gray-600 bg-gray-800 px-2 py-1 text-xs text-white sm:text-sm"
          >
            {[2025, 2024, 2023, 2022, 2021].map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Estadísticas */}
        <div className="space-y-1 text-xs text-orange-300 sm:text-sm">
          <p>
            <strong>Total contributions:</strong> {total}
          </p>
          {bestDay && (
            <p>
              <strong>Most active day:</strong>{' '}
              {new Date(bestDay.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
              ({bestDay.contributionCount} contributions)
            </p>
          )}
          <p>
            <strong>Average per week:</strong> {avgPerWeek}
          </p>
        </div>
      </div>

      {/* Calendario */}
      <div className="animate-fadeIn mt-4 grid w-full max-w-full grid-cols-[repeat(53,1fr)] gap-[2px] overflow-x-auto rounded-lg border border-orange-400/60 bg-black/20 p-2 sm:gap-[3px] sm:p-3">
        {weeks.map((week, i) => (
          <div key={i} className="grid grid-rows-7 gap-[2px] sm:gap-[3px]">
            {week.contributionDays.map((day, j) => (
              <div key={j} className="group relative">
                <div
                  style={{ backgroundColor: getColor(day.contributionCount) }}
                  className="h-2 w-2 rounded-[2px] transition-transform duration-200 hover:scale-125 hover:shadow-lg hover:shadow-orange-400/40 sm:h-3 sm:w-3 sm:rounded-[3px] md:h-4 md:w-4"
                ></div>

                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-10 left-1/2 z-50 -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-[10px] whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:text-xs">
                  {day.contributionCount} contributions on{' '}
                  {new Date(day.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Animación CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
