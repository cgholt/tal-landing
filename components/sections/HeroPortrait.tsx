import Image from "next/image";
import Link from "next/link";
import SectionCircles from "components/SectionCircles";

export default function HeroPortrait({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage,
  backgroundImageAlt = "",
  portraitImage,
  portraitImageAlt = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string | null;
  backgroundImageAlt?: string;
  portraitImage?: string | null;
  portraitImageAlt?: string;
}) {
  const hasCollage = backgroundImage || portraitImage;

  return (
    <section className="relative bg-primary">
      <div className="hidden md:block">
        <SectionCircles tint="var(--primary)" />
      </div>
      <div className="relative z-10 md:grid md:grid-cols-[4fr_6fr] md:gap- md:items-stretch md:min-h-[640px]">
        {hasCollage && (
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md px-6 pt-16 md:mx-0 md:aspect-auto md:h-full md:max-w-none md:px-0 md:pt-0">
            {backgroundImage && (
              <div className="absolute inset-y-0 left-0 w-[35%] overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
                <Image
                  src={backgroundImage}
                  alt={backgroundImageAlt}
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover opacity-50"
                />
              </div>
            )}
            {portraitImage && (
              <div className="absolute left-[22%] top-[10%] h-[80%] w-[60%] overflow-hidden border-2 border-surface shadow-xl md:left-[30%] md:top-[18%] md:h-[64%] md:w-[45%]">
                <Image
                  src={portraitImage}
                  alt={portraitImageAlt}
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover"
                  priority
                  fetchPriority="high"
                />
              </div>
            )}
          </div>
        )}
        <div className="px-6 py-16 text-left space-y-10 md:py-24 md:pl-0 md:pr-10 md:text-left">
          {eyebrow && (
            <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-surface/60">
              {eyebrow}
            </p>
          )}
          <h1 className="whitespace-pre-line text-4xl/tight md:text-5xl/tight text-surface">
            {title}
          </h1>
          {subtitle && (
            <p className="whitespace-normal md:whitespace-pre-line font-[family-name:var(--font-fanwood)] text-lg md:text-xl text-surface/85">
              {subtitle}
            </p>
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
