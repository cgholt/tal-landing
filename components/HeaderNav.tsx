"use client";

import { useState } from "react";
import Link from "next/link";
import type { SiteConfig } from "lib/content";
import NavCircles from "components/NavCircles";

export default function HeaderNav({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  const [open, setOpen] = useState(false);
  const links = siteConfig.nav.filter((link) => link.enabled !== false);

  const renderLinks = (onNavigate?: () => void) =>
    links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={onNavigate}
          className="nav-link text-sm md:text-base font-medium text-surface/90 hover:text-surface transition"
        >
          {link.label}
        </Link>
      </li>
    ));

  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="md:hidden">
          <NavCircles />
        </div>
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="text-left">
            <Link
              href="/"
              className="text-xl font-semibold text-surface font-[family-name:var(--font-quattrocento)]"
            >
              {siteConfig.name}
            </Link>
            {(siteConfig.email || siteConfig.phone) && (
              <div className="flex gap-3 mt-1 text-xs text-surface/80">
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-surface transition">
                    {siteConfig.email}
                  </a>
                )}
                {siteConfig.phone && (
                  <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-surface transition">
                    {siteConfig.phone}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">{renderLinks()}</ul>
            <Link
              href="/#contact"
              className="rounded-md bg-surface px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-surface hover:text-surface/80 transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <ul className="flex flex-col items-center gap-4 mt-4 md:hidden">
          {renderLinks(() => setOpen(false))}
        </ul>
      )}
    </div>
  );
}
