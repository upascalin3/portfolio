import { initiatives, leadership } from '../data/site';
import { FadeIn, SectionLabel } from '../components/ui';

export default function ImpactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel>Impact</SectionLabel>
          <h1 className="mt-4 font-display text-5xl italic md:text-7xl">Leadership & community</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Student leadership, mentoring, and community initiatives from Rwanda Coding Academy and
            high school — the work of showing up for other people, not only for projects.
          </p>
        </FadeIn>

        <section className="mt-16">
          <SectionLabel>Leadership & Activities</SectionLabel>
          <div className="mt-8 space-y-0">
            {leadership.map((item) => (
              <article key={item.id} className="border-t border-line py-8">
                <h2 className="font-display text-3xl italic">{item.title}</h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                  {item.org}
                </p>
                <p className="mt-4 max-w-3xl leading-relaxed text-paper-soft/90">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionLabel>Initiatives & Community Impact</SectionLabel>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {initiatives.map((item) => (
              <article key={item.id} className="border border-line p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bronze">{item.role}</p>
                <h2 className="mt-3 font-display text-3xl italic">{item.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-paper-soft/90">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
