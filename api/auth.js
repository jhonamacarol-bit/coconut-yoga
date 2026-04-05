export default async function handler(req, res) {
  const { code, provider } = req.query;

  // Início do fluxo — redireciona para o GitHub
  if (provider === 'github' && !code) {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      scope: 'repo',
      redirect_uri: 'https://coconut-yoga.vercel.app/api/auth',
    });
    return res.redirect(`https://github.com/login/oauth/authorize?${params}`);
  }

  // Callback — troca o code pelo token
  if (code) {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: 'https://coconut-yoga.vercel.app/api/auth',
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).send(`<script>window.opener.postMessage('authorization:github:error:${data.error}','*');window.close();</script>`);
    }

    return res.send(`
      <script>
        window.opener.postMessage(
          'authorization:github:success:' + JSON.stringify({
            token: "${data.access_token}",
            provider: "github"
          }),
          '*'
        );
        window.close();
      </script>
    `);
  }

  res.status(400).json({ error: 'Invalid request' });
}