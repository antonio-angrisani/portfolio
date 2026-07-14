import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { linkedInUrl } from "@/content/site";

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="For senior product, founder, advisory, and speaking conversations."
        description="Use the links below as placeholders until Antonio adds his preferred email, LinkedIn, and any press or speaking profile."
      />
      <Container className="py-16 sm:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href={linkedInUrl}
            className="rounded-lg border border-line bg-paper p-7 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              LinkedIn
            </p>
            <h2 className="mt-12 font-serif text-4xl leading-none">
              Connect on LinkedIn
            </h2>
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="rounded-lg border border-line bg-paper p-7 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-moss">
              Email
            </p>
            <h2 className="mt-12 font-serif text-4xl leading-none">
              hello@example.com
            </h2>
          </Link>
        </div>
      </Container>
    </main>
  );
}
