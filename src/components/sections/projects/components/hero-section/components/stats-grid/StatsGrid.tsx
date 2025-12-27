import { AwardIcon, CodeXmlIcon, UsersIcon } from 'lucide-react';
import StatsCard from './components/StatsCard';

function StatsGrid({ teamSize, technologies, status }) {
  const stats = [
    {
      icon: UsersIcon,
      label: 'Team Size',
      value: teamSize,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: CodeXmlIcon,
      label: 'Technologies',
      value: technologies,
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: AwardIcon,
      label: 'Status',
      value: status,
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}

export default StatsGrid;
