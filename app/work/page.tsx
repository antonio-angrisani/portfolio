import { CaseStudyPreview } from "@/components/case-study-preview";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { caseStudies } from "@/content/site";

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Work"
        title="Selected product leadership case studies."
        description="Three challenge-led stories across 0→1 product creation, portfolio strategy, and the operating model needed to scale products used by millions."
      />
      <Container className="py-16 sm:py-24">
        <div className="grid gap-4">
          {caseStudies.map((study) => (
            <CaseStudyPreview key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </main>
  );
}
