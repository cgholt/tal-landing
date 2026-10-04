import Link from "next/link";
import { Metadata } from "next";
import { getSpeakingPage } from "lib/content";

export const metadata: Metadata = {
  title: "Speaking Engagements",
  description:
    "Clinical education and speaking engagements on sexuality, relationships, trauma, and couples therapy for institutions and event planners.",
};

export default function SpeakingEngagementsPage() {
  const s = getSpeakingPage();

  return (
    <main>
      <section className="relative bg-primary">
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-surface">
            {s.title}
          </h1>
          <p className="mt-5 text-balance font-[family-name:var(--font-fanwood)] text-xl md:text-2xl text-surface">
            {s.subtitle}
          </p>
          <div
            className="prose-content mt-10 text-lg text-surface/90 leading-relaxed [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: s.introContent }}
          />
        </div>
      </section>

      {s.upcoming.length > 0 && (
        <section className="relative bg-secondary">
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold text-secondary-foreground">
              {s.upcomingTitle}
            </h2>
            <div className="mt-3 h-1 w-16 bg-accent rounded" />
            <div className="mt-8 grid gap-6">
              {s.upcoming.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-surface p-8"
                >
                  <p className="text-sm font-semibold text-accent">{item.date}</p>
                  <h3 className="mt-1 text-xl font-bold text-surface-foreground">
                    {item.organization}
                  </h3>
                  <p className="mt-2 font-semibold text-surface-foreground">
                    {item.title}
                  </p>
                  <p className="mt-3 text-tertiary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative bg-background-tinted">
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-primary-foreground">
            {s.experienceTitle}
          </h2>
          <div className="mt-3 h-1 w-16 bg-accent rounded" />
          <div className="mt-8 space-y-10">
            {s.experience.map((item) => (
              <div key={item.organization}>
                <h3 className="text-lg font-bold text-primary-foreground">
                  {item.organization}
                </h3>
                <p className="text-tertiary">
                  {item.role} · {item.dateRange}
                </p>
                <p className="mt-3 text-tertiary leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-secondary">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-secondary-foreground">
            {s.engagementsTitle}
          </h2>
          <div className="mt-3 h-1 w-16 bg-accent rounded" />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.engagements.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-8"
              >
                <h3 className="text-lg font-bold text-surface-foreground">
                  {item.organization}
                </h3>
                <p className="text-sm text-tertiary">
                  {item.program} · {item.dateRange}
                </p>
                <p className="mt-3 font-semibold text-surface-foreground">
                  {item.title}
                </p>
                <p className="mt-3 text-tertiary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-background-tinted">
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-primary-foreground">
            {s.topicsTitle}
          </h2>
          <div className="mt-3 h-1 w-16 bg-accent rounded" />
          <ul className="mt-8 divide-y divide-border">
            {s.topics.map((item) => (
              <li key={item.title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-bold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-tertiary leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-secondary">
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-secondary-foreground">
            {s.formatsTitle}
          </h2>
          <ul className="mt-6 space-y-6">
            {s.formats.map((item) => (
              <li key={item.title}>
                <h3 className="font-bold text-secondary-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-secondary-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-secondary-foreground/70 italic">{s.formatsNote}</p>
        </div>
      </section>

      <section className="relative bg-primary">
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-surface">
            {s.closingTitle}
          </h2>
          <p className="mt-4 text-surface/85">{s.closingContent}</p>
          <Link
            href={s.closingCtaHref}
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground transition-transform duration-200 hover:scale-[1.02]"
          >
            {s.closingCtaText}
          </Link>
        </div>
      </section>
    </main>
  );
}
