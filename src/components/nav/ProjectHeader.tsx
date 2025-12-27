import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProjectHeader = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => router.push('/#projects')}
          className="group hover:backdrop-lg inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap text-slate-400 transition-all duration-300 hover:text-white focus-visible:ring-1 focus-visible:ring-orange-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </button>
      </div>
    </header>
  );
};

export default ProjectHeader;
