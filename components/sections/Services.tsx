import Link from "next/link";
import { Service } from "lib/content";
import SectionCircles from "components/SectionCircles";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Services({
  title,
  items,
}: {
  title?: string;
  items: Service[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="relative bg-secondary">
      <div className="hidden md:block">
        <SectionCircles tint="var(--secondary)" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl text-secondary-foreground text-center">
          {title || "Ways we can work together"}
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-7">
          {items.map((service) => (
            <Link
              key={service.title}
              href={`/services/${slugify(service.title)}`}
              className="block rounded-xl border border-border bg-surface p-8 transition-transform duration-200 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold text-surface-foreground">{service.title}</h3>
              <p className="mt-3 text-tertiary leading-relaxed">{service.blurb}</p>
              <div className="mt-5 flex justify-end">
                <svg
                  className="h-5 w-5 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
