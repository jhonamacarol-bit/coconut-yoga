export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

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
    }),
  });

  const data = await response.json();

  if (data.error) {
    return res.status(400).json({ error: data.error });
  }

  const script = `
    <script>
      const message = {
        token: "${data.access_token}",
        provider: "github"
      };
      window.opener.postMessage(
        'authorization:github:success:' + JSON.stringify(message),
        '*'
      );
      window.close();
    </script>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.send(script);
}