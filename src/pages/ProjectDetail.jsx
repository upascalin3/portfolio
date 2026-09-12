import { Link, useParams } from 'react-router-dom';
import { getProject } from '../data/site';
import Illustration from '../components/Illustration';
import { SectionLabel, StatusBadge, Tag } from '../components/ui';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFound />;

  const blocks = [
    project.problem && ['Problem', project.problem],
    project.vision && ['Vision', project.vision],
    project.motivation && ['Motivation', project.motivation],
    project.approach && ['Approach', project.approach],
    project.challenges && ['Challenges', project.challenges],
    project.results && ['Results / Current Status', project.results],
    project.learned && ['What I Learned', project.learned],
    project.future && ['Future Improvements', project.future],
  ].filter(Boolean);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">{project.category}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <StatusBadge>{project.status}</StatusBadge>
        </div>
        <h1 className="mt-5 font-display text-5xl italic md:text-7xl">{project.name}</h1>
        {project.subtitle ? <p className="mt-3 text-lg text-bronze">{project.subtitle}</p> : null}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <Illustration type={project.illustration} className="min-h-[280px]" />
          <aside className="border border-line p-6">
            <SectionLabel>Areas</SectionLabel>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {project.features ? (
              <div className="mt-8">
                <SectionLabel>Features explored</SectionLabel>
                <ul className="mt-4 space-y-2 text-sm text-paper-soft/85">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>

        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-paper-soft/90">{project.description}</p>

        <div className="mt-16 max-w-3xl space-y-12">
          {blocks.map(([label, text]) => (
            <section key={label}>
              <SectionLabel>{label}</SectionLabel>
              <p className="mt-4 leading-relaxed text-paper-soft/90">{text}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 flex gap-6">
          <Link to="/projects" className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">
            ← All projects
          </Link>
          <Link to="/research" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-paper">
            Research
          </Link>
        </div>
      </div>
    </div>
  );
}
