import { Container } from "@/components/container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-line">
      <Container className="py-20 sm:py-28">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-moss">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.96] tracking-tight sm:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-graphite">
          {description}
        </p>
      </Container>
    </section>
  );
}
