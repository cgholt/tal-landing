import { Metadata } from "next";
import { getPhilosophy } from "lib/content";

export const metadata: Metadata = {
  title: "My Philosophy",
  description: "Tal's professional and personal philosophy.",
};

export default function PhilosophyPage() {
  const philosophy = getPhilosophy();

  return (
    <main className="bg-primary">
      <div className="mx-auto max-w-5xl px-6 py-16 md:grid md:grid-cols-[14rem_1fr] md:gap-12">
        {philosophy.sections.length > 0 && (
          <aside className="mb-10 md:sticky md:top-24 md:mb-0 md:self-start">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface/50">
              On this page
            </p>
            <nav className="mt-3 flex flex-col gap-y-2 md:gap-y-3">
              {philosophy.sections.map((section) => (
                <a
                  key={section.slug}
                  href={`#${section.slug}`}
                  className="text-sm text-surface/70 hover:text-surface transition"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
        )}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-surface">
            {philosophy.title}
          </h1>
          <div
            className="prose-content mt-8 max-w-none text-surface/85 leading-relaxed [&_h1]:text-surface [&_h2]:text-surface [&_h3]:text-surface [&_strong]:text-surface"
            dangerouslySetInnerHTML={{ __html: philosophy.content }}
          />
        </div>
      </div>
    </main>
  );
}
