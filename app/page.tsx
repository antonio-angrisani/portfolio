import Link from "next/link";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import {
  experience,
  featuredWork,
  linkedInUrl,
} from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden border-b border-line">
        <Container className="grid min-h-[calc(88vh-4rem)] gap-12 py-16 sm:py-24 lg:items-center">
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
              <Link href="/work" className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:bg-moss">
                Explore the work
              </Link>
              <Link href="/#experience" className="rounded-full border border-line px-6 py-3 text-sm font-bold transition hover:border-ink">
                Experience
              </Link>
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
                Experience
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-none sm:text-6xl">
                A decade building and scaling consumer finance products.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite">
                I’ve worked across the full arc of consumer fintech: taking products from 0→1, scaling them to millions of customers, and leading the strategy, teams, and operating model needed to grow them responsibly.
              </p>
            </div>
            <a
              href={linkedInUrl}
              className="justify-self-start rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:bg-moss md:justify-self-end"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="grid gap-5">
            {experience.map((company) => (
              <article key={company.company} className="rounded-lg border border-line bg-paper p-6">
                <div className="grid gap-5 sm:grid-cols-[72px_1fr] sm:items-center">
                  <div className={company.logo === "monzo" ? "grid h-[72px] w-[72px] place-items-center overflow-hidden rounded-lg bg-[#14233c]" : "grid h-[72px] w-[72px] place-items-center overflow-hidden rounded-lg bg-white shadow-[inset_0_0_0_1px_rgba(0,174,239,0.12)]"}>
                    {company.logo === "monzo" ? (
                      <img src="/monzo-logo.png" alt="Monzo Bank logo" className="h-[72px] w-[72px] object-cover" />
                    ) : (
                      <img src="/barclays-logo.png" alt="Barclays logo" className="h-[72px] w-[72px] object-contain" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-moss">
                      {company.company} · {company.timeframe}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl leading-none">
                      {company.summary}
                    </h3>
                  </div>
                </div>
                <div className="mt-8 grid gap-0 border-l-2 border-line pl-8">
                  {company.roles.map((role) => (
                    <div key={role.title} className="relative pb-7 pl-6 last:pb-0 before:absolute before:left-[-39px] before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-copper before:ring-[6px] before:ring-paper">
                      <h4 className="text-lg font-bold">{role.title}</h4>
                      <p className="mt-1 text-sm text-graphite/70">{role.timeframe}</p>
                      <p className="mt-4 max-w-4xl text-base leading-7 text-graphite">
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

      <section id="writing" className="border-b border-line bg-paper/55">
        <Container className="py-16 sm:py-24">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Writing
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none sm:text-6xl">
              Occasional notes on consumer fintech and product
            </h2>
          </div>
          <div>
            {[
              {
                number: "01",
                title: "How insights shaped building a 0→1 product: Monzo Flex",
                summary: "A look at how customer insight shaped the early development of Monzo Flex.",
                meta: "Product Strategy · 2022",
                url: "https://monzo.com/blog/2022/11/16/how-insights-shaped-building-a-0-1-product-monzo-flex",
              },
              {
                number: "02",
                title: "What 0→1 fintech products need before they scale",
                summary: "Lessons from turning early customer insight into a regulated product category.",
                meta: "Product strategy · Coming soon",
                url: "#",
              },
            ].map((item) => (
              <Link
                key={item.number}
                href={item.url}
                className="group grid gap-3 py-7 text-inherit no-underline transition-colors sm:grid-cols-[48px_1fr_auto] sm:gap-6"
                aria-label={`Read ${item.title}`}
                target={item.url === "#" ? undefined : "_blank"}
                rel={item.url === "#" ? undefined : "noreferrer"}
              >
                <span className="text-xs font-extrabold tracking-[0.12em] text-moss/70">
                  {item.number}
                </span>
                <span className="grid gap-2">
                  <strong className="font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-clay sm:text-4xl">
                    {item.title}
                  </strong>
                  <span className="max-w-2xl text-base leading-relaxed text-moss">
                    {item.summary}
                  </span>
                </span>
                <span className="text-sm font-bold text-moss sm:whitespace-nowrap">
                  {item.meta} →
                </span>
              </Link>
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
