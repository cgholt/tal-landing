"use client";

import { useEffect } from "react";
import "./globals.css";

// next/font loaders can't run in global-error.tsx (Next.js requires this file to be
// a Client Component, and font loaders are Server Component-only), so the fonts are
// loaded via a plain <link> and wired into the same --font-quattrocento/--font-karla
// vars that app/globals.css already keys its font-family rules off of.
const fontVarStyle = {
  "--font-quattrocento": "Quattrocento, serif",
  "--font-karla": "Karla, sans-serif",
} as React.CSSProperties;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en" style={fontVarStyle}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&family=Quattrocento:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#fdfbf7] text-[#2a2724]" style={{ fontFamily: "var(--font-karla), sans-serif" }}>
        <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-quattrocento), serif" }}>Something went wrong</h1>
          <p className="mt-4 text-lg text-[#6b625c]">
            We encountered an unexpected error.
          </p>
          <button
            onClick={reset}
            className="mt-8 inline-flex items-center rounded-md bg-[#d46d7a] px-6 py-3 text-white font-medium hover:opacity-90 transition"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
