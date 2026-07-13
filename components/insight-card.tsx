export function InsightCard({ title }: { title: string }) {
  return (
    <article className="rounded-lg border border-line bg-paper p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
        Future essay
      </p>
      <h3 className="mt-8 font-serif text-3xl leading-none">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-graphite">
        A placeholder for Antonio&apos;s thinking on {title.toLowerCase()}.
      </p>
    </article>
  );
}
