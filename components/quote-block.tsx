export function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-copper pl-6 font-serif text-3xl leading-tight text-ink sm:text-4xl">
      {children}
    </blockquote>
  );
}
