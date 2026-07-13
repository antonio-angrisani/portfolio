export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-line bg-paper p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <p className="font-serif text-4xl leading-none tracking-tight sm:text-5xl">
        {value}
      </p>
      <p className="mt-5 text-sm leading-5 text-graphite">{label}</p>
    </div>
  );
}
