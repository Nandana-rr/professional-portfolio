import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/nandanaraj-portrait.jpg";
import { profile, sections, about, teaching } from "@/content/profile";
import { Container } from "@/components/site/PageHeader";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "",
      "NANDANARAJ R — Assistant Professor, Department of Computer Science and Engineering, College of Engineering Cherthala - IHRD. Teaching NLP, data analytics and machine learning.",
    ),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain overflow-hidden">
        <Container className="relative pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid items-end gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7 md:pb-6">
              <p className="eyebrow animate-rise text-sage-deep">
                Portfolio · Vol. 01 — {profile.location}
              </p>
              <h1 className="mt-6 text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] font-light tracking-[-0.04em]">
                <span className="animate-rise block [animation-delay:80ms]">NANDANA</span>
                <span className="animate-rise block [animation-delay:160ms]">
                  <em className="font-normal text-sage-deep">RAJ</em> R.
                </span>
              </h1>
              <div className="animate-rise mt-10 grid gap-6 border-t border-foreground/80 pt-6 [animation-delay:260ms] sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-muted-foreground">Designation</p>
                  <p className="mt-2 font-display text-xl">{profile.designation}</p>
                  <p className="text-sm text-muted-foreground">{profile.department}</p>
                </div>
                <div>
                  <p className="eyebrow text-muted-foreground">Institution</p>
                  <p className="mt-2 font-display text-xl">{profile.institution}</p>
                  <p className="text-sm text-muted-foreground">Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="relative md:col-span-5">
              <div
                aria-hidden
                className="absolute -right-4 -bottom-4 h-full w-[85%] rounded-sm bg-sage md:-right-8 md:-bottom-8"
              />
              <figure className="relative">
                <div className="animate-reveal overflow-hidden rounded-sm shadow-[var(--shadow-frame)] [animation-delay:200ms]">
                  <img
                    src={portrait}
                    alt="Portrait of NANDANARAJ R"
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[1.6s] hover:scale-[1.03]"
                    width={1235}
                    height={1274}
                  />
                </div>
                <figcaption className="eyebrow mt-3 flex justify-between text-muted-foreground">
                  <span>Fig. 01</span>
                  <span>Computer Science & Engineering</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section>
        <Container className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <p className="eyebrow text-sage-deep md:col-span-3">Introduction</p>
          <div className="md:col-span-9">
            <p className="font-display text-3xl leading-[1.25] font-light md:text-5xl">
              <span className="float-left mr-3 font-display text-7xl leading-[0.8] text-sage-deep italic md:text-8xl">
                {profile.intro.charAt(0)}
              </span>
              {profile.intro.slice(1)}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                Get in touch <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Interests marquee */}
      <section aria-label="Areas of interest" className="overflow-hidden border-y border-foreground/80 py-5">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...about.interests, ...about.interests].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl italic md:text-4xl">
              {t}
              <span aria-hidden className="text-sage">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* At a glance */}
      <section>
        <Container className="grid gap-px overflow-hidden py-16 sm:grid-cols-3 md:py-24">
          {[
            { k: "M.Tech", v: "Computer Science & Engineering", s: "APJ Abdul Kalam Technological University" },
            { k: String(teaching.length).padStart(2, "0"), v: "Courses & laboratories", s: "Including CST473 Natural Language Processing" },
            { k: "03", v: "Hacktoberfest editions", s: "Open-source contributions on GitHub" },
          ].map((f) => (
            <div key={f.v} className="border-t border-foreground/80 pt-6 pr-6 pb-8">
              <p className="font-display text-6xl font-light text-sage-deep md:text-7xl">{f.k}</p>
              <p className="mt-4 font-medium">{f.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.s}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Contents */}
      <section>
        <Container className="grid gap-10 pb-16 md:grid-cols-12 md:pb-24">
          <div className="md:col-span-3">
            <p className="eyebrow text-sage-deep">Contents</p>
            <p className="mt-4 max-w-[14rem] text-sm text-muted-foreground">
              Eight chapters covering background, teaching, research and contributions.
            </p>
          </div>
          <ol className="md:col-span-9">
            {sections.map((s, i) => (
              <li key={s.to} className="border-b border-border first:border-t">
                <Link
                  to={s.to}
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5 transition-colors hover:bg-secondary md:grid-cols-[4rem_1fr_1fr_auto] md:px-3"
                >
                  <span className="eyebrow text-sage-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:italic md:text-3xl">
                    {s.label}
                  </span>
                  <span className="hidden text-sm text-muted-foreground md:block">{s.blurb}</span>
                  <span
                    aria-hidden
                    className="text-xl text-muted-foreground transition-all duration-500 group-hover:-rotate-45 group-hover:text-foreground"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
