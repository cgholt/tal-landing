import type { ContactContent } from "lib/content";
import ContactForm from "components/ContactForm";
import SectionCircles from "components/SectionCircles";

export default function ContactSection({
  contactContent,
}: {
  contactContent: ContactContent;
}) {
  return (
    <section className="relative bg-background-tinted">
      <div className="hidden md:block">
        <SectionCircles tint="var(--background-tinted)" />
      </div>
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-16">
        <h2 className="text-3xl text-primary-foreground">Reach out</h2>
        <div className="mt-3 h-1 w-16 bg-primary rounded" />
        <p className="mt-4 text-tertiary">
          A free 15-minute call to see whether we&apos;re a fit. I reply to everything within two business days.
        </p>
        <ContactForm contactContent={contactContent} />
      </div>
    </section>
  );
}
