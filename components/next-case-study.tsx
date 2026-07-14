import Link from "next/link";
import { caseStudies } from "@/content/site";

type CaseStudy = (typeof caseStudies)[number];

export function NextCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block rounded-lg border border-line bg-ink p-7 text-paper transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-4 focus-visible:ring-offset-stonewash"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/60">
        Next case study
      </p>
      <p className="mt-8 text-sm font-bold text-paper/70">{study.label}</p>
      <h2 className="mt-2 font-serif text-4xl leading-none">{study.title}</h2>
      <span className="mt-8 inline-block text-sm font-bold transition group-hover:translate-x-1">
        Read next →
      </span>
    </Link>
  );
}
