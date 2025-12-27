function StatsCard({ icon: Icon, label, value, iconBg, iconColor }) {
  return (
    <div className="backdrop-lg flex w-fit items-center justify-center rounded-xl border border-orange-400/50 px-2 py-1 text-white shadow backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl ${iconBg} flex items-center justify-center`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div>
          <p className="text-xs text-slate-400">{label}</p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
