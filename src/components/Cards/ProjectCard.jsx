import React from 'react';

export default function ProjectCard({
  url = '',
  title = '',
  text,
  children,
  development,
}) {
  return (
    <a
      id={title.toLowerCase().replace(/\s+/g, '-')}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid w-full transform grid-rows-[auto_1fr_auto] items-center justify-center gap-4 overflow-hidden rounded-2xl border border-orange-400 bg-white/10 p-5 text-left text-sm leading-relaxed text-neutral-200 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] sm:border-neutral-500 sm:hover:border-orange-400"
    >
      <span className="animate-spark absolute z-20 h-2 w-2 max-w-[50px] rounded-full bg-orange-400 opacity-100 sm:hidden sm:group-hover:block"></span>

      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-center text-2xl font-semibold text-orange-400">
            {title}
          </h2>
          <img className="w-6" src="/ExternalIcon.png" alt="External Icon" />
        </div>

        {development && (
          <p className="text-center text-sm text-slate-400">(Early Access)</p>
        )}
      </div>

      <div className="text-center">{text}</div>

      <div className="flex justify-center">{children}</div>
    </a>
  );
}
