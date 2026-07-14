import { CaseStudyPreview } from "@/components/case-study-preview";
import { Container } from "@/components/container";
import { caseStudies } from "@/content/site";

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <div className="mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Selected work
            </p>
            <h2 className="mt-4 max-w-5xl font-serif text-4xl leading-none sm:text-6xl">
              A closer look at the work that has shaped how I build products, scale businesses and lead teams.
            </h2>
          </div>
        </div>
        <div className="grid gap-4">
          {caseStudies.map((study) => (
            <CaseStudyPreview key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
