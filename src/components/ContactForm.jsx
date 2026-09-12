import { useState } from 'react';
import { person } from '../data/site';

const initial = { name: '', email: '', message: '', company: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (values.company) {
      setStatus('sent');
      return;
    }

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setStatus('sending');

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      _replyto: values.email.trim(),
      _subject: `Portfolio message from ${values.name.trim()}`,
      _template: 'table',
      _captcha: 'false',
    };

    const endpoints = [
      '/api/contact',
      `https://formsubmit.co/ajax/${person.email}`,
    ];

    try {
      let delivered = false;
      let lastMessage = 'The message could not be sent.';

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(
              endpoint.startsWith('/api')
                ? {
                    name: payload.name,
                    email: payload.email,
                    message: payload.message,
                  }
                : payload
            ),
          });

          if (response.status === 404) continue;

          const data = await response.json().catch(() => ({}));
          if (response.ok && data.success !== false && data.success !== 'false') {
            delivered = true;
            break;
          }
          lastMessage = data.message || lastMessage;
        } catch {
          // Try the next delivery path.
        }
      }

      if (!delivered) throw new Error(lastMessage);

      setStatus('sent');
      setValues(initial);
    } catch {
      setStatus('error');
      setError(
        `Something went wrong. You can also email me directly at ${person.email}.`
      );
    }
  };

  if (status === 'sent') {
    return (
      <div className="border border-bronze/40 bg-bronze/10 px-6 py-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">Sent</p>
        <p className="mt-3 text-paper">Thank you. Your message was sent.</p>
        <button
          type="button"
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-paper"
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    );
  }

  const fieldClass =
    'w-full border border-line bg-ink px-4 py-3 text-paper outline-none transition placeholder:text-muted/70 focus:border-bronze/60';

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={onChange}
          className={`${fieldClass} mt-2`}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={onChange}
          className={`${fieldClass} mt-2`}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={onChange}
          className={`${fieldClass} mt-2 resize-y`}
          placeholder="What would you like to talk about?"
        />
      </div>

      {error ? <p className="text-sm text-bronze">{error}</p> : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center bg-paper px-6 py-3 text-sm text-ink transition hover:bg-paper-soft disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        Messages go to {person.email}
      </p>
    </form>
  );
}
