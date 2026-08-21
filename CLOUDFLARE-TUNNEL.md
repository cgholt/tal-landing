# Sharing the site via Cloudflare Tunnel

One-time setup already done: `cloudflared` is installed (`/usr/local/bin/cloudflared`).

## Start

```bash
# 1. Start the dev server (from repo root)
npm run dev &

# 2. Start the tunnel, pointed at whatever port dev printed (usually 3000)
cloudflared tunnel --url http://localhost:3000 &
```

The tunnel logs a random URL like:

```
https://<random-words>.trycloudflare.com
```

Share that URL. It stays live as long as both background processes keep running.

## Shut down

```bash
pkill -f "cloudflared tunnel"
pkill -f "next dev"
```

## Notes

- Free "quick tunnel" — no Cloudflare account, no fixed URL, new random URL every time you start it.
- No uptime guarantee; fine for a quick demo, not for anything long-lived.
- If port 3000 is already in use, `npm run dev` will pick 3001 instead — match the `--url` port to whatever it actually prints.
