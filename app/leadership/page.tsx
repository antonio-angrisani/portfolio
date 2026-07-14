import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { principles } from "@/content/site";

export default function LeadershipPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Leadership"
        title="Building product organisations that can handle ambiguity and scale."
        description="Antonio's leadership approach is built for regulated, cross-functional environments where product, engineering, design, data, risk, operations, marketing, and compliance need to move together."
      />
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-serif text-4xl leading-none sm:text-5xl">
            Operating principles
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite">
            The goal is not more process. It is a clearer operating system for
            deciding, learning, and scaling.
          </p>
        </div>
        <div className="grid gap-4">
          {principles.map((principle, index) => (
            <article key={principle} className="rounded-lg border border-line bg-paper p-6">
              <p className="font-serif text-3xl text-moss">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-5 text-lg leading-8 text-graphite">{principle}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
