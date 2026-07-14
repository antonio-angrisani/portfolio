export function MetricHighlight({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-serif text-3xl leading-none text-ink sm:text-4xl">
      {children}
    </p>
  );
}
