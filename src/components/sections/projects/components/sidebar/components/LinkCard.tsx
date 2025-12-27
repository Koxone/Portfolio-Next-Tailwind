import { ArrowUpRightIcon } from 'lucide-react';

function LinkCard({ href, icon: Icon, title, subtitle, iconBg, iconColor }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-slate-700/30"
    >
      <div className={`h-8 w-8 rounded-lg ${iconBg} flex items-center justify-center`}>
        <Icon className={iconColor} />
      </div>
      <div className="flex-1">
        <p className="font-medium text-white">{title}</p>
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>
      <ArrowUpRightIcon className="text-slate-500 transition-colors group-hover:text-white" />
    </a>
  );
}

export default LinkCard;
