import Link from "next/link";

export function CaseStudyCard({
  href,
  eyebrow,
  title,
  summary,
  impact,
}: {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  impact: string[];
}) {
  return (
    <Link
      href={href}
      className="group grid overflow-hidden rounded-lg border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="min-h-48 bg-[linear-gradient(135deg,rgba(31,90,79,0.96),rgba(184,95,54,0.82)),repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_38px)] p-5 text-paper">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/70">
          {eyebrow}
        </p>
        <div className="mt-20 h-px w-20 bg-paper/70 transition group-hover:w-32" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-3xl leading-none">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-graphite">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {impact.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-graphite"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
