import { createFileRoute } from "@tanstack/react-router";
import { education } from "@/content/profile";
import { Container, PageHeader } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/education")({
  head: () =>
    pageHead(
      "Education",
      "Education of NANDANARAJ R — M.Tech and B.Tech in Computer Science and Engineering (APJ Abdul Kalam Technological University) and Diploma in Computer Engineering.",
    ),
  component: EducationPage,
});

function EducationPage() {
  return (
    <>
      <PageHeader
        number="02"
        kicker="Education"
        title={
          <>
            A steady climb in <em className="text-sage-deep">computing.</em>
          </>
        }
        lede="From a Diploma in Computer Engineering to a Master's in Computer Science and Engineering."
      />
      <Container>
        <ol className="relative">
          {education.map((e, i) => (
            <li
              key={e.degree}
              className="group grid gap-4 border-t border-foreground/80 py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="md:col-span-3">
                <p className="font-display text-6xl font-light text-sage-deep transition-all duration-700 group-hover:italic md:text-8xl">
                  {e.year}
                </p>
              </div>
              <div className="md:col-span-9">
                <p className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")} / {String(education.length).padStart(2, "0")}</p>
                <h2 className="mt-3 text-3xl leading-tight font-normal md:text-4xl">{e.degree}</h2>
                <p className="mt-3 text-muted-foreground">{e.institution}</p>
                {e.university && <p className="text-muted-foreground">{e.university}</p>}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
