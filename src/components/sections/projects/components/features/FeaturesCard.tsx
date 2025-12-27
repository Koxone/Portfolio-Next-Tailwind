import { CircleCheckBigIcon } from 'lucide-react';

function FeaturesCard({ title, description }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-orange-400/50 p-6 backdrop-blur-lg transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-700/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20">
        <CircleCheckBigIcon className="text-orange-400" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="leading-relaxed text-slate-300">{description}</p>
      </div>
    </div>
  );
}

export default FeaturesCard;
