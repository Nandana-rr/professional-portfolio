import { Link, useLocation } from "@tanstack/react-router";
import { sections, profile } from "@/content/profile";

export function SiteFooter() {
  const { pathname } = useLocation();
  const idx = sections.findIndex((s) => s.to === pathname);
  const next = idx === -1 ? sections[0] : sections[(idx + 1) % sections.length];
  const nextNumber = idx === -1 ? 1 : ((idx + 1) % sections.length) + 1;

  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      {next && pathname !== "/contact" && (
        <Link
          to={next.to}
          className="group block border-b border-ink-foreground/15"
          aria-label={`Next: ${next.label}`}
        >
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 py-14 md:px-10 md:py-20">
            <div>
              <p className="eyebrow text-sage">Next · {String(nextNumber).padStart(2, "0")}</p>
              <p className="mt-3 font-display text-4xl transition-all duration-700 group-hover:italic md:text-7xl">
                {next.label}
              </p>
            </div>
            <span
              aria-hidden
              className="font-display text-5xl text-sage transition-transform duration-700 group-hover:translate-x-3 md:text-7xl"
            >
              →
            </span>
          </div>
        </Link>
      )}
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-lg">{profile.name}</p>
          <p className="mt-1 text-ink-foreground/60">
            {profile.designation}, {profile.institution}
          </p>
        </div>
        <ul className="space-y-1 text-ink-foreground/70">
          <li>
            <a className="link-underline" href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>
          </li>
          <li>
            <a className="link-underline" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link-underline" href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <div className="md:text-right">
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="link-underline text-sage"
          >
            Download academic CV ↓
          </a>
          <p className="mt-2 text-ink-foreground/40">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
