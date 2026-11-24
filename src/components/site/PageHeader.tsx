import type { ReactNode } from "react";

export function PageHeader({
  number,
  kicker,
  title,
  lede,
}: {
  number: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <section className="grain">
      <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-14 md:px-10 md:pt-44 md:pb-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="animate-rise md:col-span-3">
            <p className="eyebrow text-sage-deep">
              <span className="text-foreground">{number}</span> — {kicker}
            </p>
            <div className="mt-4 h-px w-16 bg-foreground" />
          </div>
          <div className="md:col-span-9">
            <h1 className="animate-rise text-5xl leading-[0.95] font-light [animation-delay:100ms] md:text-8xl">
              {title}
            </h1>
            {lede && (
              <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:200ms]">
                {lede}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 md:px-10 ${className}`}>{children}</div>;
}

/** Visible slot for information that hasn't been added yet. */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="placeholder-slot inline-flex items-center gap-2 rounded-sm px-2 py-0.5 font-mono text-xs">
      <span aria-hidden>+</span>
      {children}
    </span>
  );
}
