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
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-surface">
          {philosophy.title}
        </h1>
        <div
          className="prose-content mt-8 max-w-none text-surface/85 leading-relaxed [&_h1]:text-surface [&_h2]:text-surface [&_h3]:text-surface [&_strong]:text-surface"
          dangerouslySetInnerHTML={{ __html: philosophy.content }}
        />
      </div>
    </main>
  );
}
