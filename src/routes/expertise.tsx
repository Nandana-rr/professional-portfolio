import { createFileRoute } from "@tanstack/react-router";
import { expertise } from "@/content/profile";
import { Container, PageHeader } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/expertise")({
  head: () =>
    pageHead(
      "Technical Expertise",
      "Technical expertise of NANDANARAJ R — Python, Java, C, MySQL, Machine Learning, Data Science, NLP, DBMS, Git and GitHub.",
    ),
  component: ExpertisePage,
});

function ExpertisePage() {
  return (
    <>
      <PageHeader
        number="05"
        kicker="Technical Expertise"
        title={
          <>
            Tools of the <em className="text-sage-deep">trade.</em>
          </>
        }
        lede="Languages, methods and systems used in teaching and project work."
      />
      <Container>
        <div className="divide-y divide-border border-y border-foreground/80">
          {expertise.map((g, gi) => (
            <div key={g.group} className="grid gap-6 py-10 md:grid-cols-12 md:py-12">
              <div className="md:col-span-4">
                <p className="eyebrow text-sage-deep">{String(gi + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-2xl font-normal">{g.group}</h2>
              </div>
              <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3 md:col-span-8">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default font-display text-4xl font-light transition-all duration-500 hover:text-sage-deep hover:italic md:text-6xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
