import { Service } from "lib/content";
import SectionCircles from "components/SectionCircles";

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
        <p className="text-xs font-bold tracking-widest text-secondary-foreground text-center uppercase">
          Services
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl text-secondary-foreground text-center">
          {title || "Ways we can work together"}
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-7">
          {items.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-surface p-8"
            >
              <h3 className="text-xl font-bold text-surface-foreground">{service.title}</h3>
              <p className="mt-3 text-tertiary leading-relaxed">{service.blurb}</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-primary-foreground">
                  {service.duration} &middot; {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
