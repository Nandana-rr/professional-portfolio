import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/nandanaraj-portrait.jpg.asset.json";
import { about, profile } from "@/content/profile";
import { Container, PageHeader, Placeholder } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Me",
      "Academic background and professional interests of NANDANARAJ R — Machine Learning, NLP, Explainable AI and Database Systems.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        number="01"
        kicker="About Me"
        title={
          <>
            Teaching as a way of <em className="text-sage-deep">thinking clearly.</em>
          </>
        }
      />
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="sticky top-24">
            <img
              src={portrait.url}
              alt="NANDANARAJ R"
              className="aspect-square w-full max-w-xs rounded-sm object-cover object-top grayscale transition-all duration-1000 hover:grayscale-0"
              loading="lazy"
            />
            <dl className="mt-6 max-w-xs space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Role</dt>
                <dd>{profile.designation}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Department</dt>
                <dd>CSE</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Based in</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="space-y-6 text-lg leading-relaxed md:text-xl">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <h2 className="mt-16 text-3xl font-light">Professional interests</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {about.interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-foreground/70 px-4 py-2 text-sm transition-colors hover:border-sage-deep hover:bg-sage-soft"
              >
                {i}
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-3xl font-light">Teaching philosophy</h2>
          <div className="mt-4">
            {about.teachingPhilosophy ? (
              <blockquote className="border-l-2 border-sage-deep pl-6 font-display text-2xl italic">
                {about.teachingPhilosophy}
              </blockquote>
            ) : (
              <Placeholder>Add a short teaching philosophy statement</Placeholder>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
