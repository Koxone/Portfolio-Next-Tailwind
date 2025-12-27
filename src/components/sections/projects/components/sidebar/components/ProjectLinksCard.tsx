import { ExternalLinkIcon, GithubIcon, GlobeIcon } from 'lucide-react';
import LinkCard from './LinkCard';

function ProjectLinksCard({ url, urlGit }) {
  const links = [
    {
      href: url,
      icon: GlobeIcon,
      title: 'Live Demo',
      subtitle: url ? url.split('/').filter(Boolean).pop() : '',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      href: urlGit,
      icon: GithubIcon,
      title: 'Source Code',
      subtitle: urlGit ? urlGit.split('/').slice(4).join('/') : '',
      iconBg: 'bg-slate-700/50',
      iconColor: 'text-slate-300',
    },
  ];
  return (
    <div className="backdrop-lg rounded-xl border border-orange-400/50 text-white shadow backdrop-blur-sm">
      <div className="flex flex-col space-y-1.5 pt-6 pb-3 pl-6">
        <h3 className="flex items-center gap-3 text-xl font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
            <ExternalLinkIcon className="text-blue-400" />
          </div>
          Links
        </h3>
      </div>
      <div className="space-y-3 p-6 pt-0">
        {links.map((link, index) => (
          <LinkCard key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

export default ProjectLinksCard;
