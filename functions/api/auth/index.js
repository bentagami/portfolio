/**
 * GET /api/auth
 * Begins the GitHub OAuth flow by redirecting to GitHub's authorization page.
 * Cloudflare Pages Function — runs at the edge, no separate Worker needed.
 *
 * Required environment variables (set in Cloudflare Pages → Settings → Variables):
 *   GITHUB_CLIENT_ID     — from your GitHub OAuth App
 *   GITHUB_CLIENT_SECRET — from your GitHub OAuth App
 */
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get('site_id') || url.origin;

  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    redirect_uri: `${url.origin}/api/auth/callback`,
    scope: 'repo,user',
    state: redirectTo,
  });

  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params}`,
    302
  );
}
