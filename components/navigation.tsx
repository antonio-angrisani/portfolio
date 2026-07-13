import Link from "next/link";
import { Container } from "@/components/container";

const links = [
  ["About", "/#about"],
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["Writing", "/#writing"],
  ["Speaking", "/#speaking"],
  ["Contact", "/#contact"],
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-stonewash/88 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Antonio Angrisani
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-graphite transition hover:text-moss"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full border border-ink px-4 py-2 text-sm font-semibold transition hover:bg-ink hover:text-paper"
        >
          Start a conversation
        </Link>
      </Container>
    </header>
  );
}
