function TechBadge({ name, color }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none ${color}`}
    >
      {name}
    </span>
  );
}

export default TechBadge;
