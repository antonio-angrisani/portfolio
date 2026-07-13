import Link from "next/link";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { InsightCard } from "@/components/insight-card";
import { MetricCard } from "@/components/metric-card";
import {
  experience,
  featuredWork,
  insights,
  linkedInUrl,
  metrics,
  speakingTopics,
} from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden border-b border-line">
        <Container className="grid min-h-[calc(100vh-4rem)] gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-rise">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Fintech product leadership
            </p>
            <h1 className="max-w-5xl text-balance font-serif text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
              Building consumer fintech products used by millions.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
              I&apos;m Antonio Angrisani, a product leader at Monzo. I&apos;ve spent the
              last decade building, scaling, and leading consumer finance products,
              including Monzo Flex from zero to over 1.5 million customers.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/#work" className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:bg-moss">
                Explore the work
              </Link>
              <Link href="/#experience" className="rounded-full border border-line px-6 py-3 text-sm font-bold transition hover:border-ink">
                Experience
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-paper p-5 shadow-soft">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-graphite">
              <span>Impact snapshot</span>
              <span>Monzo</span>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="border-b border-line">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              About
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-none sm:text-6xl">
              Building consumer fintech products used by millions of people.
            </h2>
          </div>
          <p className="text-lg leading-8 text-graphite">
            I’m a product leader passionate about building products that improve
            people’s financial lives. Over the past decade I’ve helped create and
            scale consumer fintech products, most notably leading the growth of
            Monzo Flex from 0→1 and into one of the UK’s largest consumer credit
            products, serving more than 1.5 million customers. I enjoy turning
            complex problems into simple customer experiences, building
            high-performing teams, and shaping long-term product strategy.
          </p>
        </Container>
      </section>

      <section id="work">
        <Container className="py-16 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
                Selected product leadership themes
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-none sm:text-6xl">
                The through-lines across Antonio’s product work.
              </h2>
            </div>
            <Link href="/#product-leadership" className="text-sm font-bold text-moss hover:text-ink">
              See the patterns
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredWork.map((item) => (
              <article key={item.title} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="font-serif text-2xl leading-none">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-graphite">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="product-leadership" className="border-y border-line">
        <Container className="py-16 sm:py-24">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Product leadership in practice
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-none sm:text-6xl">
              How the work shows up across strategy, execution, and scale.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {[
              ["Context", "Monzo had deep customer trust and a chance to make credit feel clearer, fairer, and more useful."],
              ["Customer problem", "Customers needed flexible borrowing that felt understandable and in-control."],
              ["Strategic insight", "The product could not simply copy credit cards. It needed to behave like a Monzo product."],
              ["Approach", "Align proposition, risk, product experience, and commercial model around customer control."],
              ["Outcome", "Flex scaled from zero to 1.5M+ customers and a £120M+ annualised revenue business."],
              ["Leadership lesson", "In regulated fintech, product, risk, compliance, operations, and growth have to be designed together."],
            ].map(([title, description]) => (
              <article key={title} className="min-h-48 bg-paper p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-graphite">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
                LinkedIn-informed experience
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-none sm:text-6xl">
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
            {experience.map((item) => (
              <article key={item.role} className="rounded-lg border border-line bg-paper p-6">
                <p className="text-sm font-semibold text-moss">
                  {item.company} · {item.timeframe}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-none">{item.role}</h3>
                <p className="mt-4 text-base leading-7 text-graphite">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="writing" className="border-b border-line bg-paper/55">
        <Container className="py-16 sm:py-24">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Writing and thinking
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none sm:text-6xl">
              Essays to publish as the site grows.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {insights.slice(0, 3).map((topic) => (
              <InsightCard key={topic} title={topic} />
            ))}
          </div>
        </Container>
      </section>

      <section id="speaking" className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Speaking and advisory
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none sm:text-6xl">
              Practical lessons from building regulated fintech products at scale.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {speakingTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-graphite"
              >
                {topic}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact">
        <CTASection />
      </section>
    </main>
  );
}
