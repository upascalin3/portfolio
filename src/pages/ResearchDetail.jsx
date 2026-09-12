import { Link, useParams } from 'react-router-dom';
import { getResearch } from '../data/site';
import Illustration from '../components/Illustration';
import { SectionLabel, StatusBadge, Tag } from '../components/ui';
import NotFound from './NotFound';

const sections = [
  ['problem', 'Problem'],
  ['motivation', 'Motivation'],
  ['approach', 'Approach'],
  ['challenges', 'Challenges'],
  ['results', 'Results / Current Status'],
  ['learned', 'What I Learned'],
  ['future', 'Future'],
];

export default function ResearchDetail() {
  const { slug } = useParams();
  const item = getResearch(slug);

  if (!item) return <NotFound />;

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
          Research {item.number} · {item.institution}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <StatusBadge>{item.status}</StatusBadge>
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-4xl italic leading-tight md:text-6xl">
          {item.title}
        </h1>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {item.date} · Instructor: {item.instructor}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.areas.map((area) => (
            <Tag key={area} tone="bronze">
              {area}
            </Tag>
          ))}
        </div>
        <div className="mt-12">
          <Illustration type={item.illustration} className="max-h-[420px]" />
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-paper-soft/90">{item.description}</p>
        {item.paperNote ? (
          <p className="mt-4 max-w-3xl leading-relaxed text-paper-soft/80">{item.paperNote}</p>
        ) : null}

        <div className="mt-16 max-w-3xl space-y-12">
          {sections.map(([key, label]) => (
            <section key={key}>
              <SectionLabel>{label}</SectionLabel>
              <p className="mt-4 leading-relaxed text-paper-soft/90">{item[key]}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 flex gap-6">
          <Link to="/research" className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">
            ← All research
          </Link>
          <Link to="/projects" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-paper">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
