import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { caseStudies } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  return {
    title: study ? study.title : "Case Study",
    description: study?.summary,
  };
}

const labels = [
  ["context", "Context"],
  ["problem", "Customer problem"],
  ["insight", "Strategic insight"],
  ["approach", "Product approach"],
  ["execution", "Execution challenges"],
  ["impact", "Commercial impact"],
  ["lessons", "Leadership lessons"],
  ["differently", "What Antonio would do differently now"],
] as const;

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main>
      <PageHeader eyebrow={study.eyebrow} title={study.title} description={study.summary} />
      <Container className="py-16 sm:py-24">
        <div className="mb-12 flex flex-wrap gap-2">
          {study.impact.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-graphite"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {labels.map(([key, label]) => (
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
      </Container>
      <CTASection />
    </main>
  );
}
