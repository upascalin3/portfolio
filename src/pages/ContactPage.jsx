import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contact, person } from '../data/site';
import { FadeIn, SectionLabel } from '../components/ui';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-display text-5xl italic md:text-7xl">{contact.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{contact.text}</p>
        </FadeIn>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-2">
          <ContactForm />

          <div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-sm text-ink hover:bg-paper-soft"
              >
                <Mail size={16} /> Email Me
              </a>
              <a
                href={person.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm hover:border-paper-soft"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm hover:border-paper-soft"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center justify-center border border-bronze px-5 py-3 text-sm text-bronze hover:bg-bronze hover:text-ink"
              >
                View Resume
              </Link>
              <a
                href={person.resumeDoc}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm hover:border-paper-soft"
              >
                Google Doc
              </a>
            </div>

            <dl className="mt-12 grid gap-8 border-t border-line pt-10">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${person.email}`} className="text-paper hover:text-bronze">
                    {person.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">GitHub</dt>
                <dd className="mt-2">
                  <a href={person.github} target="_blank" rel="noreferrer" className="text-paper hover:text-bronze">
                    github.com/{person.githubHandle}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Portfolio</dt>
                <dd className="mt-2">portfolio-uwayo.vercel.app</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Resume</dt>
                <dd className="mt-2">
                  <Link to="/resume" className="text-paper hover:text-bronze">
                    View on this site
                  </Link>
                  <span className="text-muted"> · </span>
                  <a href={person.resumePdf} target="_blank" rel="noreferrer" className="text-paper hover:text-bronze">
                    PDF
                  </a>
                  <span className="text-muted"> · </span>
                  <a href={person.resumeDoc} target="_blank" rel="noreferrer" className="text-paper hover:text-bronze">
                    Google Doc
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
