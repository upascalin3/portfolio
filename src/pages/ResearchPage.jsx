import { Link } from 'react-router-dom';
import { research, researchIntro } from '../data/site';
import { ResearchCard } from '../components/Cards';
import { FadeIn, SectionLabel } from '../components/ui';

export default function ResearchPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel>Research</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-display text-5xl italic md:text-7xl">
            {researchIntro.title}
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-paper-soft/90">
            {researchIntro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </FadeIn>
        <div className="mt-16 space-y-8">
          {research.map((item) => (
            <ResearchCard key={item.slug} item={item} />
          ))}
        </div>
        <p className="mt-12 text-sm text-muted">
          These are student research projects. They are investigations, not published claims of
          scientific proof.
        </p>
        <Link to="/projects" className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">
          See related projects →
        </Link>
      </div>
    </div>
  );
}
