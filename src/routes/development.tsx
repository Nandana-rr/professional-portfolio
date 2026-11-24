import { createFileRoute } from "@tanstack/react-router";
import { development } from "@/content/profile";
import { Container, PageHeader, Placeholder } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/development")({
  head: () =>
    pageHead(
      "Professional Development",
      "Professional development of Nandanaraj R — NPTEL Data Science certification and Data Science & Machine Learning training at Camerin Group, Kochi.",
    ),
  component: DevelopmentPage,
});

function DevelopmentPage() {
  return (
    <>
      <PageHeader
        number="06"
        kicker="Professional Development"
        title={
          <>
            Always a <em className="text-sage-deep">student, too.</em>
          </>
        }
        lede="Certification and training undertaken to deepen expertise in data science and machine learning."
      />
      <Container className="grid gap-6 md:grid-cols-2">
        {development.map((d, i) => (
          <article
            key={d.title}
            className={`group relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-sm p-8 transition-all duration-700 hover:-translate-y-1 md:p-10 ${
              i % 2 === 0 ? "bg-sage-soft" : "border border-foreground/80"
            }`}
          >
            <div className="flex justify-between">
              <span className="eyebrow text-sage-deep">{d.kind}</span>
              <span className="font-display text-5xl font-light text-sage-deep/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <h2 className="text-3xl leading-tight font-normal md:text-4xl">{d.title}</h2>
              <p className="mt-3 text-muted-foreground">{d.issuer}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {d.duration && (
                  <span className="rounded-full bg-background px-3 py-1 font-mono text-xs">{d.duration}</span>
                )}
                {d.year ? (
                  <span className="rounded-full bg-background px-3 py-1 font-mono text-xs">{d.year}</span>
                ) : (
                  <Placeholder>Add year</Placeholder>
                )}
              </div>
            </div>
          </article>
        ))}
      </Container>
    </>
  );
}
