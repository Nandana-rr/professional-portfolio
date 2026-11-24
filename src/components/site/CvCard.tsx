import { profile } from "@/content/profile";

export function CvCard() {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-sage-soft">
      <div className="grid gap-8 p-8 md:grid-cols-12 md:items-end md:p-14">
        <div className="md:col-span-7">
          <p className="eyebrow text-sage-deep">Curriculum Vitae</p>
          <h2 className="mt-4 text-4xl leading-tight font-light md:text-6xl">
            The full record, <em className="text-sage-deep">on one page.</em>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Education, teaching, projects, certifications and academic activities — in a printable PDF.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="inline-flex items-center justify-between gap-6 rounded-full bg-ink px-7 py-4 text-ink-foreground transition-all duration-500 hover:gap-10 hover:bg-sage-deep"
          >
            <span>Download academic CV</span>
            <span aria-hidden className="text-lg">↓</span>
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm text-sage-deep"
          >
            or view it in a new tab
          </a>
        </div>
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-6 font-display text-[12rem] leading-none text-sage/30 italic transition-transform duration-1000 group-hover:-translate-y-2 md:text-[18rem]"
      >
        CV
      </span>
    </div>
  );
}
