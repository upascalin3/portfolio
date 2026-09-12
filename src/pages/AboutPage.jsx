import { Link } from 'react-router-dom';
import { about, approach, journey, person, philosophy, skills } from '../data/site';
import { EducationList } from '../components/Cards';
import { FadeIn, SectionLabel, Tag } from '../components/ui';
import profileImg from '../assets/profile.png';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-4 font-display text-5xl italic md:text-7xl">{about.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            {person.headline} at {person.school}. Computer Science, with a planned Economics minor.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src={profileImg}
            alt="Uwayo Pascaline"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div className="space-y-5 text-[16px] leading-relaxed text-paper-soft/90">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {about.closing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {about.intersections.map((item) => (
            <div key={item.from} className="border border-line p-6">
              <p className="font-display text-2xl italic">{item.from}</p>
              <p className="mt-2 text-muted">{item.to}</p>
            </div>
          ))}
        </div>

        <section id="education" className="mt-24">
          <SectionLabel>Education</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic">Where I have studied</h2>
          <div className="mt-12">
            <EducationList />
          </div>
        </section>

        <section className="mt-8">
          <SectionLabel>My Journey</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic">From FAWE to Columbia</h2>
          <ol className="mt-12">
            {journey.map((item, i) => (
              <li key={item.place + item.date} className="grid grid-cols-[28px_1fr] gap-5">
                <div className="flex flex-col items-center">
                  <span className="mt-1 h-3 w-3 rounded-full border border-bronze" />
                  {i < journey.length - 1 ? <span className="w-px flex-1 bg-line" /> : <span className="h-4" />}
                </div>
                <div className="pb-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">{item.date}</p>
                  <h3 className="mt-1 font-display text-3xl italic">{item.place}</h3>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic">What I am learning to do well</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">{group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>My Approach</SectionLabel>
          <div className="mt-8 grid gap-6 md:grid-cols-5">
            {approach.map((step) => (
              <div key={step.number} className="border-t border-bronze/40 pt-5">
                <p className="font-mono text-xs text-bronze">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl italic">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <blockquote className="mt-24 border border-line px-6 py-16 text-center md:px-16">
          {philosophy.map((line) => (
            <p key={line} className="font-display text-3xl italic md:text-4xl">
              {line}
            </p>
          ))}
        </blockquote>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/research" className="border border-line px-5 py-3 text-sm hover:border-paper-soft">
            Research
          </Link>
          <Link to="/projects" className="border border-line px-5 py-3 text-sm hover:border-paper-soft">
            Projects
          </Link>
          <Link to="/contact" className="bg-paper px-5 py-3 text-sm text-ink hover:bg-paper-soft">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
