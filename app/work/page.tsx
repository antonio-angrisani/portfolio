import { CaseStudyCard } from "@/components/case-study-card";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { caseStudies, featuredWork } from "@/content/site";

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Work"
        title="Case studies in consumer fintech, credit, and product scale."
        description="A curated view of Antonio's product leadership: from 0→1 creation to scaling a regulated consumer credit portfolio and the organisation behind it."
      />
      <Container className="py-16 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              href={`/work/${study.slug}`}
              eyebrow={study.eyebrow}
              title={study.title}
              summary={study.summary}
              impact={study.impact}
            />
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredWork.map((item) => (
            <article key={item.title} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
                Portfolio theme
              </p>
              <h2 className="mt-8 font-serif text-3xl leading-none">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-graphite">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
