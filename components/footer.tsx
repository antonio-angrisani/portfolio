import Link from "next/link";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-serif text-3xl">Antonio Angrisani</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-paper/70">
            Fintech product leadership, consumer credit, responsible growth, and
            product organisations built for scale.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-paper/70">
          <Link href="/#work" className="hover:text-paper">Work</Link>
          <Link href="/#writing" className="hover:text-paper">Writing</Link>
          <Link href="/#contact" className="hover:text-paper">Contact</Link>
        </div>
      </Container>
    </footer>
  );
}
