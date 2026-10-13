# Solo-practice website template

A CMS-driven, single-scrolling-page marketing site for a solo practice
(therapist, coach, consultant, …). Built with **Next.js 16 (App Router)**,
**Tailwind CSS v4**, **TypeScript**, and a file-based content system edited
through **Decap CMS**. No database — all content lives in `content/`.

## Spinning up a new client site

- **[TEMPLATE.md](./TEMPLATE.md)** — per-client content checklist (copy, images, CMS, badges).
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — infrastructure: repo, email/SMTP, OAuth, Vercel, domain, go-live.
- **[RESEND.md](./RESEND.md)** — recommended way to send the contact-form email (transactional, avoids consumer-mailbox pitfalls).

In short:

1. **Use this template** on GitHub (or clone) to create the client's repo.
2. `cp .env.example .env.local` and fill it in (see `.env.example`).
3. Replace everything in `content/` and `public/images/`.
4. Point `public/admin/config.yml` at the client's repo + deployed URL.

## Live site: talnesichi.com

This repo is also the production site, deployed on Vercel. Merging to `main`
auto-deploys; every PR gets a preview URL. Env vars live in Vercel (names in
`.env.example`). The client edits content at `/admin`, which commits to `main`.
Account ownership and transfer notes are kept outside the repo, in the private
handover doc, so no credentials or account details live in git.

Pages beyond the homepage: `/privacy`, `/philosophy`, `/speaking-engagements`,
and `/services/[slug]` (content in `content/`).

## Development

```bash
npm install
npm run dev        # dev server (http://localhost:3000)
npm run build      # production build
npm run lint       # ESLint
npm run test:run   # Vitest (single run)
npm run cms        # local Decap CMS editor (no OAuth)
```

Requires the Node version in `.nvmrc`. Image optimization needs Python +
Pillow (`pip install Pillow`). The pre-commit hook is **not** installed by
`npm install`; enable it once per clone:

```bash
printf '#!/bin/sh\npython3 scripts/optimize-images.py\n' > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

## Architecture

See **[CLAUDE.md](./CLAUDE.md)** for a full tour: the content system, homepage
layout/section ordering, theming and color presets, CMS auth, the image
pipeline, and API routes.
