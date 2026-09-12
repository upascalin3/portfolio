const RECIPIENT = 'uwayopascaline87@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { name, email, message, company } = req.body || {};

  if (company) {
    res.status(200).json({ success: true });
    return;
  }

  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: 'Please fill in your name, email, and message.' });
    return;
  }

  const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _replyto: email,
      _subject: `Portfolio message from ${name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({}));
  res.status(response.ok ? 200 : 502).json(data);
}
