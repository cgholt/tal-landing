import Image from "next/image";
import Link from "next/link";
import { renderTextWithUnderline } from "lib/renderTextWithUnderline";
import SectionCircles from "components/SectionCircles";

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  image,
  imageCredit,
  imagePosition = "top",
}: {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string | null;
  imageCredit?: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative bg-primary">
      <div className="hidden md:block">
        <SectionCircles tint="var(--primary)" />
      </div>
      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 py-20 ${
          image ? "md:grid md:grid-cols-2 md:gap-10 md:items-center" : ""
        }`}
      >
        {image && (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none md:static md:order-2 md:opacity-100 md:flex md:items-center md:justify-center"
            {...(imageCredit ? { title: imageCredit } : {})}
          >
            <div className="relative w-full h-full max-w-2xl md:max-w-none md:w-full md:h-auto md:aspect-[5/4]">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                style={{ objectPosition: imagePosition }}
                priority
                fetchPriority="high"
              />
              <div
                className="absolute inset-0 bg-secondary mix-blend-multiply"
                style={{
                  WebkitMaskImage: `url(${image})`,
                  maskImage: `url(${image})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: imagePosition,
                  maskPosition: imagePosition,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        )}
        <div className="relative text-center space-y-8 md:order-1 md:text-left">
          <h1 className="whitespace-pre-line text-4xl/tight md:text-6xl/tight text-surface">
            {title}
          </h1>
          {subtitle && (
            <p className="font-[family-name:var(--font-fanwood)] text-lg md:text-xl text-surface/85">{subtitle}</p>
          )}
          {ctaText && ctaHref && (
            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-md bg-surface px-6 py-3 text-primary-foreground font-bold hover:opacity-90 transition"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
