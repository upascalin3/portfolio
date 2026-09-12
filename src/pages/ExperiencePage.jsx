import { experience, journey } from '../data/site';
import { FadeIn, SectionLabel, Tag } from '../components/ui';

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
          <h1 className="mt-4 font-display text-5xl italic md:text-7xl">Work so far</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Internships and contributions where I learned how software is built in collaboration,
            especially around application logic, data, and healthcare systems.
          </p>
        </FadeIn>

        <div className="mt-16">
          {experience.map((item) => (
            <article key={item.id} className="grid gap-6 border-t border-line py-12 md:grid-cols-[220px_1fr]">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">{item.date}</p>
              <div>
                <h2 className="font-display text-4xl italic">{item.org}</h2>
                <p className="mt-2 text-signal">{item.role}</p>
                <p className="mt-5 max-w-2xl leading-relaxed text-paper-soft/90">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <Tag key={h}>{h}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-8 border-t border-line pt-16">
          <SectionLabel>My Journey</SectionLabel>
          <h2 className="mt-4 font-display text-4xl italic">Education and work, in order</h2>
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
      </div>
    </div>
  );
}
