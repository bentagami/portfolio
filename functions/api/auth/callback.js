/**
 * GET /api/auth/callback
 * Handles the GitHub OAuth callback. Exchanges the temporary `code` for an
 * access token, then posts it back to the CMS window via postMessage.
 *
 * Required env vars (Cloudflare Pages → Settings → Environment Variables):
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 */
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return buildResponse('error', 'Missing OAuth code');
  }

  try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return buildResponse('error', data.error_description || data.error);
    }

    return buildResponse('success', data.access_token);

  } catch (err) {
    return buildResponse('error', err.message);
  }
}

/**
 * Builds an HTML popup response that postMessages the result back to the
 * CMS opener window in the format Sveltia CMS / Decap CMS expects, then
 * closes itself.
 */
function buildResponse(status, payload) {
  // Sveltia CMS expects: "authorization:github:<status>:<JSON>"
  const body = status === 'success'
    ? JSON.stringify({ token: payload, provider: 'github' })
    : JSON.stringify({ error: payload });

  const message = `authorization:github:${status}:${body}`;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Authenticating…</title></head>
<body>
<script>
  try {
    var msg = ${JSON.stringify(message)};
    if (window.opener) {
      window.opener.postMessage(msg, '*');
    }
  } finally {
    window.close();
  }
<\/script>
<p>Authentication ${status === 'success' ? 'successful' : 'failed'}. You may close this window.</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' },
  });
}
