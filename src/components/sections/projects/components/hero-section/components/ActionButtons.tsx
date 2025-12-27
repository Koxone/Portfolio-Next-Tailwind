import { ArrowUpRightIcon, EyeIcon, GithubIcon } from 'lucide-react';

export default function ActionButtons({ demo, code }) {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        target="_blank"
        className="group flex items-center gap-2 rounded-xl bg-yellow-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:from-orange-600 hover:to-yellow-600 hover:shadow-lg hover:shadow-orange-500/25"
        href={demo}
      >
        <EyeIcon />
        View Live Project
        <ArrowUpRightIcon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
      <a
        target="_blank"
        className="backdrop-lg flex items-center gap-2 rounded-xl border border-orange-400/50 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg"
        href={code}
      >
        <GithubIcon />
        View Source Code
      </a>
    </div>
  );
}
