import Link from "next/link";
import { CapabilityTags } from "@/components/capability-tags";
import { MetricHighlight } from "@/components/metric-highlight";
import { caseStudies } from "@/content/site";

type CaseStudy = (typeof caseStudies)[number];

export function CaseStudyPreview({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group grid gap-6 rounded-lg border border-line bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-4 focus-visible:ring-offset-stonewash md:grid-cols-[80px_1fr_220px]"
    >
      <div className="font-serif text-5xl leading-none text-moss/70">
        {study.number}
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-bold text-moss">{study.label}</p>
          {"status" in study ? (
            <span className="rounded-full border border-line bg-stonewash px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-graphite">
              {study.status}
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 max-w-3xl font-serif text-3xl leading-none text-ink sm:text-5xl">
          {study.title}
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:text-lg">
          {study.summary}
        </p>
        <div className="mt-6">
          <CapabilityTags tags={study.capabilities} />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 border-t border-line pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-moss">
            Result
          </p>
          <MetricHighlight>{study.result}</MetricHighlight>
        </div>
        <span className="text-sm font-bold text-moss transition group-hover:translate-x-1 group-hover:text-ink">
          Read case study →
        </span>
      </div>
    </Link>
  );
}
