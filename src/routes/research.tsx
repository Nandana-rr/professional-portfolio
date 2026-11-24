import { createFileRoute } from "@tanstack/react-router";
import { research } from "@/content/profile";
import { Container, PageHeader, Placeholder } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/research")({
  head: () =>
    pageHead(
      "Research & Projects",
      "Explainable Hybrid Fake News Detection using Machine Learning and BERT — academic research project by NANDANARAJ R.",
    ),
  component: ResearchPage,
});

function ResearchPage() {
  const p = research.featured;
  return (
    <>
      <PageHeader
        number="04"
        kicker="Research & Projects"
        title={
          <>
            Making machine judgement <em className="text-sage-deep">explainable.</em>
          </>
        }
      />
      <Container>
        <article className="grid gap-10 border-t border-foreground/80 pt-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-sage-deep">{p.type}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full bg-secondary px-3 py-1 font-mono text-xs">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="link-underline text-sage-deep">
                  View project ↗
                </a>
              ) : (
                <Placeholder>Add repository or report link</Placeholder>
              )}
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl leading-tight font-normal md:text-6xl">{p.title}</h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{p.summary}</p>

            {/* Pipeline diagram */}
            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-foreground/80 bg-foreground/80 sm:grid-cols-3">
              {[
                { n: "i.", t: "Preprocess", d: "Clean and prepare news text" },
                { n: "ii.", t: "Classify", d: "Hybrid ML + BERT model" },
                { n: "iii.", t: "Explain", d: "Show why a prediction was made" },
              ].map((s) => (
                <div key={s.t} className="group bg-background p-6 transition-colors duration-500 hover:bg-sage-soft">
                  <p className="font-display text-2xl text-sage-deep italic">{s.n}</p>
                  <p className="mt-4 font-display text-2xl">{s.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>

            <ul className="mt-12 space-y-4">
              {p.points.map((pt, i) => (
                <li key={pt} className="flex gap-5 border-b border-border pb-4 text-lg">
                  <span className="eyebrow pt-1.5 text-sage-deep">{String(i + 1).padStart(2, "0")}</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <section className="mt-24 grid gap-10 border-t border-foreground/80 pt-10 md:grid-cols-12">
          <h2 className="text-3xl font-light md:col-span-4">Publications</h2>
          <div className="md:col-span-8">
            {research.publications.length > 0 ? (
              <ol className="space-y-6">
                {research.publications.map((pub) => (
                  <li key={pub.title}>
                    <p className="font-display text-xl">{pub.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {pub.venue} · {pub.year}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <Placeholder>Add publications when available</Placeholder>
            )}
          </div>
        </section>
      </Container>
    </>
  );
}
