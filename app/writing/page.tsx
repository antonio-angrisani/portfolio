import { Container } from "@/components/container";
import { InsightCard } from "@/components/insight-card";
import { PageHeader } from "@/components/page-header";
import { insights } from "@/content/site";

export default function WritingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Writing"
        title="Notes on consumer fintech, credit, retention, and responsible growth."
        description="A home for future essays and public thinking. These placeholders make the publishing structure ready before the essays exist."
      />
      <Container className="grid gap-5 py-16 sm:py-24 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((topic) => (
          <InsightCard key={topic} title={topic} />
        ))}
      </Container>
    </main>
  );
}
