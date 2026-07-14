import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { QuoteBlock } from "@/components/quote-block";
import { experience, linkedInUrl } from "@/content/site";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="A product leader shaped by consumer finance, scale, and trust."
        description="Antonio's work sits at the intersection of customer behavior, commercial strategy, product craft, and the operational realities of regulated financial services."
      />
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <QuoteBlock>
          The best fintech products make complicated financial decisions feel
          understandable, fair, and useful.
        </QuoteBlock>
        <div className="space-y-6 text-lg leading-8 text-graphite">
          <p>
            Antonio Angrisani is a fintech product leader at Monzo, known for
            building and scaling consumer finance products with a focus on
            responsible growth. His work includes Monzo Flex, which grew from
            zero to over 1.5 million customers and became a £120M+ annualised
            revenue business.
          </p>
          <p>
            Over more than seven years at Monzo, Antonio has worked across 0→1
            product development, scale-up execution, retention, monetisation,
            lending, credit-building, and product organisation design.
          </p>
          <p>
            He is interested in what comes next for consumer fintech: products
            that deepen customer trust, improve financial resilience, and build
            durable businesses without hiding complexity from customers.
          </p>
        </div>
      </Container>
      <section className="border-t border-line">
        <Container className="py-16 sm:py-24">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
                LinkedIn-informed experience
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
                Source the facts from LinkedIn. Curate the story for impact.
              </h2>
            </div>
            <a
              href={linkedInUrl}
              className="justify-self-start rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:bg-moss md:justify-self-end"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="grid gap-4">
            {experience.map((company) => (
              <article key={company.company} className="rounded-lg border border-line bg-paper p-6">
                <p className="text-sm font-semibold text-moss">
                  {company.company} · {company.timeframe}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-none">{company.summary}</h3>
                <div className="mt-6 grid gap-5 border-l-2 border-line pl-6">
                  {company.roles.map((role) => (
                    <div key={role.title}>
                      <h4 className="text-lg font-bold">{role.title}</h4>
                      <p className="mt-1 text-sm text-graphite/70">{role.timeframe}</p>
                      <p className="mt-3 text-base leading-7 text-graphite">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
