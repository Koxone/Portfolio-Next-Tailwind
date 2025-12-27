import FeaturesCard from './FeaturesCard';
import { ZapIcon } from 'lucide-react';

function FeaturesGrid({ tFeatures, projectFeatures }) {
  return (
    <section>
      <div className="rounded-xl border border-orange-400/50 text-white shadow backdrop-blur-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
              <ZapIcon className="text-blue-400" />
            </div>
            {tFeatures}
          </h2>
        </div>
        <div className="p-6 pt-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectFeatures.map((feature, index) => (
              <FeaturesCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
