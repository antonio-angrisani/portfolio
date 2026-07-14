import { notFound } from "next/navigation";
import { CapabilityTags } from "@/components/capability-tags";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { MetricHighlight } from "@/components/metric-highlight";
import { NextCaseStudy } from "@/components/next-case-study";
import { caseStudies } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  return {
    title: study ? `${study.title} | Antonio Angrisani` : "Case Study",
    description: study?.summary,
  };
}

const narrativeSections = [
  ["challenge", "The challenge"],
  ["insight", "The insight"],
  ["approach", "The approach"],
  ["myRole", "My role"],
] as const;

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const studyIndex = caseStudies.findIndex((item) => item.slug === params.slug);
  const study = caseStudies[studyIndex];

  if (!study) {
    notFound();
  }

  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];

  return (
    <main>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1fr_0.45fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-moss">
              {study.number} · {study.eyebrow}
            </p>
            <p className="text-sm font-bold text-moss">{study.label}</p>
            <h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl leading-[0.96] tracking-tight sm:text-7xl">
              {study.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-graphite">
              {study.summary}
            </p>
          </div>
          <aside className="rounded-lg border border-line bg-paper p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Key outcome
            </p>
            <MetricHighlight>{study.result}</MetricHighlight>
            <dl className="mt-8 grid gap-5 text-sm">
              {[
                ["Role", study.role],
                ["Time period", study.timeframe],
                ["Scope", study.scope],
              ].map(([term, description]) => (
                <div key={term}>
                  <dt className="font-bold text-ink">{term}</dt>
                  <dd className="mt-1 leading-6 text-graphite">{description}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>

      <Container className="py-16 sm:py-24">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <CapabilityTags tags={study.capabilities} />
          <div className="flex flex-wrap gap-2 md:justify-end">
            {study.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-bold text-graphite"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {narrativeSections.map(([key, label]) => (
            <section key={key} className="rounded-lg border border-line bg-paper p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
                {label}
              </p>
              <p className="mt-8 text-lg leading-8 text-graphite">
                {study.sections[key]}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-5 rounded-lg border border-line bg-paper p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
            Key decisions
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {study.sections.decisions.map((decision) => (
              <li key={decision} className="border-t border-line pt-4 text-base leading-7 text-graphite">
                {decision}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {[
            ["Outcomes", study.sections.outcomes],
            ["What I learned", study.sections.learned],
          ].map(([title, items]) => (
            <section key={title as string} className="rounded-lg border border-line bg-paper p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
                {title as string}
              </p>
              <ul className="mt-8 grid gap-4">
                {(items as string[]).map((item) => (
                  <li key={item} className="border-t border-line pt-4 text-base leading-7 text-graphite">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <NextCaseStudy study={nextStudy} />
        </div>
      </Container>
      <CTASection />
    </main>
  );
}
