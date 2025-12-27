import { LayersIcon } from 'lucide-react';
import TechBadge from './TechBadge';

function TechStackCard({ technologies }) {
  return (
    <div className="backdrop-lg rounded-xl border border-orange-400/50 text-white shadow backdrop-blur-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="cur flex items-center gap-3 text-xl font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20">
            <LayersIcon className="text-purple-400" />
          </div>
          Tech Stack
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechBadge
              key={index}
              name={tech}
              color="inline-flex items-center cursor-auto rounded-md border border-blue-500/20 bg-orange-400/60 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-500/20"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStackCard;
