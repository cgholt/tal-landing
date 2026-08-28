import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "lib/content";

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.blurb };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/#services" className="text-sm text-accent hover:underline">
          &larr; Back to services
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-surface">{service.title}</h1>
        <div
          className="prose-content mt-8 max-w-none text-surface/85 leading-relaxed [&_h1]:text-surface [&_h2]:text-surface [&_h3]:text-surface [&_strong]:text-surface"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
        <Link
          href="/#contact"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground transition-transform duration-200 hover:scale-[1.02]"
        >
          Get in touch
        </Link>
      </div>
    </main>
  );
}
