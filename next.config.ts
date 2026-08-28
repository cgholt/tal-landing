import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare quick tunnels (see CLOUDFLARE-TUNNEL.md) hand out a new random
  // *.trycloudflare.com host each run, so this can't be pinned to one value.
  // Without it, dev-mode blocks cross-origin requests to HMR/JS chunks and
  // the page never hydrates client-side.
  allowedDevOrigins: ["*.trycloudflare.com"],
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/faqs", destination: "/#faq", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/services/:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
