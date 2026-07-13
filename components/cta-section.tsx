import Link from "next/link";
import { Container } from "@/components/container";

export function CTASection() {
  return (
    <section className="bg-moss text-paper">
      <Container className="grid gap-8 py-16 md:grid-cols-[1.2fr_auto] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/65">
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none sm:text-6xl">
            For founder, CPO, advisory, and speaking conversations.
          </h2>
        </div>
        <Link
          href="/#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-6 text-sm font-bold text-ink transition hover:bg-ink hover:text-paper"
        >
          Get in touch
        </Link>
      </Container>
    </section>
  );
}
