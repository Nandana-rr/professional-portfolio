import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/content/profile";
import { Container, PageHeader } from "@/components/site/PageHeader";
import { CvCard } from "@/components/site/CvCard";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact",
      "Contact Nandanaraj R by email, phone, LinkedIn or GitHub, and download the academic CV.",
    ),
  component: ContactPage,
});

function ContactPage() {
  const c = profile.contact;
  const rows = [
    { label: "Email", value: c.email, href: `mailto:${c.email}`, external: false },
    { label: "Phone", value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}`, external: false },
    { label: "LinkedIn", value: c.linkedinLabel, href: c.linkedin, external: true },
    { label: "GitHub", value: c.githubLabel, href: c.github, external: true },
  ];
  return (
    <>
      <PageHeader
        number="08"
        kicker="Contact"
        title={
          <>
            Let&apos;s <em className="text-sage-deep">talk.</em>
          </>
        }
        lede="For academic collaboration, teaching opportunities or student queries — email is the quickest way to reach me."
      />
      <Container>
        <ul className="border-t border-foreground/80">
          {rows.map((r) => (
            <li key={r.label} className="border-b border-border">
              <a
                href={r.href}
                {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 md:grid-cols-[10rem_1fr_auto] md:py-9"
              >
                <span className="eyebrow col-span-2 text-sage-deep md:col-span-1">{r.label}</span>
                <span className="min-w-0 font-display text-2xl [overflow-wrap:anywhere] transition-all duration-500 group-hover:translate-x-2 group-hover:italic sm:text-3xl md:text-5xl">
                  {r.value}
                </span>
                <span
                  aria-hidden
                  className="text-2xl text-muted-foreground transition-all duration-500 group-hover:-rotate-45 group-hover:text-foreground"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          {profile.department}, {profile.institution}, Kerala.
        </p>
        <div className="mt-20">
          <CvCard />
        </div>
      </Container>
    </>
  );
}
