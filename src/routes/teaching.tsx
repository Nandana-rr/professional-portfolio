import { createFileRoute } from "@tanstack/react-router";
import { teaching } from "@/content/profile";
import { Container, PageHeader, Placeholder } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/teaching")({
  head: () =>
    pageHead(
      "Teaching Portfolio",
      "Courses taught by Nandanaraj R — Natural Language Processing (CST473), Data Analytics Laboratory and Python and Statistical Modeling Laboratory.",
    ),
  component: TeachingPage,
});

function TeachingPage() {
  return (
    <>
      <PageHeader
        number="03"
        kicker="Teaching Portfolio"
        title={
          <>
            In the classroom <em className="text-sage-deep">& the lab.</em>
          </>
        }
        lede="Courses and laboratories handled, from language models to statistical modelling in Python."
      />
      <Container>
        <div className="grid gap-6 md:grid-cols-12">
          {teaching.map((c, i) => (
            <article
              key={c.title}
              className={`group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-sm p-8 transition-transform duration-700 hover:-translate-y-1 md:p-10 ${
                i === 0
                  ? "bg-ink text-ink-foreground md:col-span-12 md:min-h-[26rem]"
                  : "border border-foreground/80 bg-card md:col-span-6"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={`eyebrow ${i === 0 ? "text-sage" : "text-sage-deep"}`}>
                  {c.code ?? `Lab ${String(i).padStart(2, "0")}`}
                </span>
                <span className={`eyebrow ${i === 0 ? "text-ink-foreground/60" : "text-muted-foreground"}`}>
                  {c.role}
                </span>
              </div>
              <div>
                <h2
                  className={`font-light leading-[1.02] transition-all duration-700 group-hover:italic ${
                    i === 0 ? "text-5xl md:text-8xl" : "text-3xl md:text-4xl"
                  }`}
                >
                  {c.title}
                </h2>
                <p className={`mt-4 max-w-xl ${i === 0 ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
                  {c.note}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.cohort ? (
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs ${
                        i === 0 ? "bg-ink-foreground/10" : "bg-sage-soft text-sage-deep"
                      }`}
                    >
                      {c.cohort}
                    </span>
                  ) : (
                    <Placeholder>Add semester / cohort</Placeholder>
                  )}
                </div>
              </div>
              {i === 0 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-16 font-display text-[14rem] leading-none text-sage/15 italic md:text-[22rem]"
                >
                  NLP
                </span>
              )}
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>Course materials & student feedback:</span>
          <Placeholder>Add links to syllabus, notes or feedback</Placeholder>
        </div>
      </Container>
    </>
  );
}
