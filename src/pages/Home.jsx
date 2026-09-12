import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import {
  about,
  approach,
  contact,
  experience,
  future,
  initiatives,
  journey,
  leadership,
  person,
  philosophy,
  research,
  researchIntro,
  skills,
  storyArc,
} from '../data/site';
import { EducationList, ProjectsIndex, ResearchCard } from '../components/Cards';
import ContactForm from '../components/ContactForm';
import { NetworkHero } from '../components/Illustration';
import { Expandable, FadeIn, MoreButton, MoreLink, SectionLabel, Tag } from '../components/ui';
import profileImg from '../assets/profile.png';

function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full min-w-0 max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>;
}

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutText = [...about.paragraphs, ...about.closing];
  const aboutPreview = aboutText.slice(0, 2);
  const aboutRest = aboutText.slice(2);
  const skillGroups = Object.entries(skills);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
        <div className="pointer-events-none absolute -right-24 top-10 hidden h-[640px] w-[720px] opacity-60 md:block md:right-0">
          <NetworkHero />
        </div>
        <Container className="relative flex min-h-[calc(100svh-6rem)] flex-col justify-center pb-20">
          <FadeIn className="w-full min-w-0">
            <p className="max-w-full font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-signal sm:text-[11px] sm:tracking-[0.28em]">
              Columbia Engineering · Computer Science · Economics minor · {person.graduation}
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block sm:inline">{person.name.split(' ')[0]}</span>
              <span className="block italic text-bronze sm:inline"> {person.name.split(' ')[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl font-mono text-[11px] uppercase tracking-[0.16em] text-paper-soft sm:text-sm sm:tracking-[0.22em]">
              {person.headline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty break-words text-paper-soft/90 sm:text-lg">
              {person.subheadline}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty break-words text-muted sm:text-base">
              {person.introduction}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <a href="#projects" className="inline-flex items-center justify-center bg-paper px-5 py-3 text-sm text-ink hover:bg-paper-soft">
                View Projects
              </a>
              <a href="#research" className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm hover:border-paper-soft">
                Explore Research
              </a>
              <a href="#about" className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm hover:border-paper-soft">
                About Me
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center justify-center border border-bronze px-5 py-3 text-sm text-bronze hover:bg-bronze hover:text-ink"
              >
                View Resume
              </Link>
              <a href="#contact" className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm hover:border-paper-soft">
                Contact
              </a>
            </div>
          </FadeIn>
          <div className="mt-16 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <ArrowDownRight size={14} />
            Scroll to continue
          </div>
        </Container>
      </section>

      <div className="border-y border-line">
        <Container className="flex gap-8 overflow-x-auto py-4 no-scrollbar">
          {storyArc.map((step, i) => (
            <div key={step} className="flex shrink-0 items-center gap-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <span className="text-bronze">{String(i + 1).padStart(2, '0')}</span> {step}
              </span>
              {i < storyArc.length - 1 ? <span className="text-line">→</span> : null}
            </div>
          ))}
        </Container>
      </div>

      <Section id="about">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.85fr]">
            <FadeIn>
              <SectionLabel>About</SectionLabel>
              <h2 className="mt-4 font-display text-4xl italic md:text-5xl">{about.title}</h2>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-paper-soft/90">
                {aboutPreview.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {aboutOpen
                  ? aboutRest.map((p) => (
                      <p key={p}>{p}</p>
                    ))
                  : null}
              </div>
              <MoreButton
                expanded={aboutOpen}
                label="More about me"
                onClick={() => setAboutOpen((value) => !value)}
              />
              {aboutOpen ? (
                <Link
                  to="/about"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bronze"
                >
                  Open the full About page <ArrowUpRight size={14} />
                </Link>
              ) : null}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative">
                <img
                  src={profileImg}
                  alt="Uwayo Pascaline"
                  className="aspect-[4/5] w-full object-cover object-top grayscale-[20%]"
                />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {person.background}
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {about.intersections.map((item) => (
              <div key={item.from} className="border border-line p-5">
                <p className="font-display text-xl italic text-paper">{item.from}</p>
                <p className="mt-2 text-sm text-muted">{item.to}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="education" className="bg-ink-2/40">
        <Container>
          <FadeIn>
            <SectionLabel>Education</SectionLabel>
            <h2 className="mt-4 font-display text-4xl italic md:text-5xl">Where I have studied</h2>
          </FadeIn>
          <div className="mt-12">
            <EducationList />
          </div>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <FadeIn>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>Projects</SectionLabel>
                <h2 className="mt-4 font-display text-4xl italic md:text-5xl">Things I am building</h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  All of my projects in one place, in order: health, finance, education, agriculture,
                  nutrition, and robotics. Each is labeled honestly for where it stands.
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bronze"
              >
                All projects <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeIn>
          <ProjectsIndex preview />
        </Container>
      </Section>

      <Section id="research" className="bg-ink-2/40">
        <Container>
          <FadeIn>
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>Research</SectionLabel>
                <h2 className="mt-4 max-w-3xl font-display text-4xl italic md:text-5xl">
                  Investigate first. Build second.
                </h2>
              </div>
              <MoreLink to="/research">All research</MoreLink>
            </div>
            <div className="mt-8 max-w-3xl space-y-4 text-[15px] leading-relaxed text-paper-soft/90">
              <p>{researchIntro.paragraphs[0]}</p>
            </div>
          </FadeIn>
          <div className="mt-12">
            <Expandable
              items={research}
              previewCount={1}
              moreLabel="More research"
              className="space-y-6"
              render={(item) => <ResearchCard key={item.slug} item={item} />}
            />
          </div>
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <FadeIn>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-4 font-display text-4xl italic md:text-5xl">Where I have worked</h2>
          </FadeIn>
          <div className="mt-12 space-y-0">
            {experience.map((item, i) => (
              <article key={item.id} className="grid gap-6 border-t border-line py-10 md:grid-cols-[200px_1fr]">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">{item.date}</p>
                <div>
                  <h3 className="font-display text-3xl italic">{item.org}</h3>
                  <p className="mt-1 text-sm text-signal">{item.role}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper-soft/85">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <Tag key={h}>{h}</Tag>
                    ))}
                  </div>
                </div>
                {i === experience.length - 1 ? null : null}
              </article>
            ))}
          </div>
          <div className="mt-4">
            <MoreLink to="/experience">Full timeline</MoreLink>
          </div>
        </Container>
      </Section>

      <Section id="leadership">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel>Leadership & Activities</SectionLabel>
              <h2 className="mt-4 font-display text-4xl italic">Showing up for people</h2>
              <div className="mt-8">
                <Expandable
                  items={leadership}
                  previewCount={2}
                  moreLabel="More activities"
                  className="space-y-8"
                  render={(item) => (
                    <div key={item.id} className="border-t border-line pt-6">
                      <h3 className="font-display text-2xl italic">{item.title}</h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                        {item.org}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-paper-soft/85">{item.description}</p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div>
              <SectionLabel>Initiatives & Community Impact</SectionLabel>
              <h2 className="mt-4 font-display text-4xl italic">Building with others</h2>
              <div className="mt-8">
                <Expandable
                  items={initiatives}
                  previewCount={2}
                  moreLabel="More initiatives"
                  className="space-y-8"
                  render={(item) => (
                    <div key={item.id} className="border-t border-line pt-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-2xl italic">{item.name}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bronze">
                          {item.role}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-paper-soft/85">{item.description}</p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <MoreLink to="/impact">All leadership & impact</MoreLink>
          </div>
        </Container>
      </Section>

      <Section id="skills" className="bg-ink-2/40">
        <Container>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic md:text-5xl">Tools I work with</h2>
          <div className="mt-12">
            <Expandable
              items={skillGroups}
              previewCount={4}
              moreLabel="More skills"
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
              render={([group, items]) => (
                <div key={group}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">{group}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              )}
            />
          </div>
        </Container>
      </Section>

      <Section id="journey">
        <Container>
          <SectionLabel>My Journey</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic md:text-5xl">A path, not a résumé line</h2>
          <ol className="mt-12 space-y-0">
            {journey.map((item, i) => (
              <li key={item.place + item.date} className="grid grid-cols-[28px_1fr] gap-5">
                <div className="flex flex-col items-center">
                  <span className="mt-1 h-3 w-3 rounded-full border border-bronze bg-ink" />
                  {i < journey.length - 1 ? <span className="w-px flex-1 bg-line" /> : <span className="h-4" />}
                </div>
                <div className="pb-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">{item.date}</p>
                  <h3 className="mt-1 font-display text-2xl italic md:text-3xl">{item.place}</h3>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="approach" className="bg-ink-2/40">
        <Container>
          <SectionLabel>My Approach</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic md:text-5xl">How I work through a problem</h2>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-5">
            {approach.map((step) => (
              <div key={step.number} className="bg-ink p-6">
                <p className="font-mono text-xs text-bronze">{step.number}</p>
                <h3 className="mt-4 font-display text-2xl italic">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="philosophy">
        <Container>
          <div className="border border-line px-6 py-16 text-center md:px-16 md:py-24">
            <SectionLabel>Personal Philosophy</SectionLabel>
            <blockquote className="mx-auto mt-8 max-w-3xl">
              {philosophy.map((line) => (
                <p key={line} className="font-display text-3xl italic leading-snug text-paper md:text-5xl">
                  {line}
                </p>
              ))}
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section id="future" className="bg-ink-2/40">
        <Container>
          <SectionLabel>Future</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic md:text-5xl">{future.title}</h2>
          <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-relaxed text-paper-soft/90">
            {future.paragraphs.slice(0, 3).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
            I am especially interested in the intersection of
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {future.intersections.map((item) => (
              <span key={item} className="border border-bronze/30 px-4 py-2 font-display text-xl italic text-bronze">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-paper-soft/90">
            {future.paragraphs[3]}
          </p>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-5xl italic md:text-6xl">{contact.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{contact.text}</p>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
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
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {person.githubHandle} · portfolio-uwayo.vercel.app
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
