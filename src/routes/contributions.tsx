import { createFileRoute } from "@tanstack/react-router";
import { contributions } from "@/content/profile";
import { Container, PageHeader, Placeholder } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contributions")({
  head: () =>
    pageHead(
      "Academic Contributions",
      "Academic contributions of NANDANARAJ R — Hacktoberfest (3 editions), open-source work, FDP activities and technical seminars.",
    ),
  component: ContributionsPage,
});

function ContributionsPage() {
  return (
    <>
      <PageHeader
        number="07"
        kicker="Academic Contributions"
        title={
          <>
            Beyond the <em className="text-sage-deep">syllabus.</em>
          </>
        }
        lede="Open-source work, faculty development activities and participation in the wider academic community."
      />
      <Container>
        <ol>
          {contributions.map((c, i) => (
            <li
              key={c.title}
              className="group grid gap-4 border-t border-foreground/80 py-8 transition-colors duration-500 last:border-b hover:bg-secondary md:grid-cols-12 md:items-baseline md:px-4"
            >
              <span className="eyebrow text-sage-deep md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="text-3xl font-normal transition-all duration-500 group-hover:italic md:col-span-5 md:text-4xl">
                {c.title}
              </h2>
              <p className="text-muted-foreground md:col-span-4">{c.detail}</p>
              <span className="w-fit rounded-full border border-foreground/60 px-3 py-1 font-mono text-xs md:col-span-2 md:justify-self-end">
                {c.tag}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>Committees, invited talks or workshops conducted:</span>
          <Placeholder>Add when available</Placeholder>
        </div>
      </Container>
    </>
  );
}
