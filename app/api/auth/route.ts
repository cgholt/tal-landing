import { NextRequest, NextResponse } from "next/server";

// Step 1 of the Decap CMS GitHub login: /admin opens this route in a popup and
// we bounce to GitHub. GitHub then calls back to ./callback. The OAuth app's
// callback URL must be exactly <SITE_URL>/api/auth/callback.
export async function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json({ error: "OAuth not configured" }, { status: 500 });
  }

  const redirectUri = `${req.nextUrl.origin}/api/auth/callback`;
  // "repo" lets Decap commit content to the (private) repo.
  const scope = "repo,user";

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", scope);

  return NextResponse.redirect(authUrl.toString());
}
