import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { sections, profile } from "@/content/profile";

const primary = ["/about", "/teaching", "/research", "/contact"] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          open
            ? "bg-transparent text-ink-foreground"
            : scrolled
              ? "border-b border-border bg-background/85 backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
          <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-display text-xl font-medium tracking-tight">
              {profile.firstName}
              <span className={open ? "text-sage" : "text-sage-deep"}> {profile.lastName}.</span>
            </span>
            <span className="eyebrow hidden text-muted-foreground lg:inline">CSE · Faculty</span>
          </Link>

          <nav className="flex items-center gap-1">
            <ul className={`hidden items-center gap-1 transition-opacity md:flex ${open ? "pointer-events-none opacity-0" : ""}`}>
              {primary.map((to) => {
                const s = sections.find((x) => x.to === to)!;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      activeProps={{ className: "text-foreground bg-secondary" }}
                    >
                      {s.short}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="ml-2 flex items-center gap-3 rounded-full border border-current px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              <span>{open ? "Close" : "Index"}</span>
              <span className="relative block h-2.5 w-4" aria-hidden>
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-transform duration-500 ${open ? "top-1 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-transform duration-500 ${open ? "top-1 -rotate-45" : "top-2"}`}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Full-screen editorial index */}
      <div
        className={`fixed inset-0 z-30 bg-ink text-ink-foreground transition-[clip-path] duration-700 ease-[var(--ease-editorial)] ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 gap-10 overflow-y-auto px-5 pt-24 pb-10 md:grid-cols-12 md:px-10">
          <div className="hidden md:col-span-4 md:flex md:flex-col md:justify-end">
            <p className="eyebrow text-sage">Contents</p>
            <p className="mt-4 max-w-xs font-display text-2xl leading-snug italic text-ink-foreground/80">
              An academic portfolio in eight short chapters.
            </p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="link-underline mt-8 w-fit text-sm text-ink-foreground/70"
            >
              {profile.contact.email}
            </a>
          </div>
          <ol className="md:col-span-8">
            <li className="border-b border-ink-foreground/15">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-5 py-3 md:py-4"
              >
                <span className="eyebrow w-8 text-sage">00</span>
                <span className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">
                  Home
                </span>
              </Link>
            </li>
            {sections.map((s, i) => (
              <li key={s.to} className="border-b border-ink-foreground/15">
                <Link
                  to={s.to}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="group flex items-baseline gap-5 py-3 md:py-4"
                  activeProps={{ className: "text-sage" }}
                >
                  <span className="eyebrow w-8 text-sage">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-3 group-hover:italic md:text-5xl">
                    {s.label}
                  </span>
                  <span className="ml-auto hidden text-sm text-ink-foreground/50 lg:inline">{s.blurb}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
