import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Illustration from './Illustration';
import { MoreButton, StatusBadge, Tag } from './ui';
import { allProjects, education } from '../data/site';

export function FeaturedProjectCard({ project, large = false }) {
  return (
    <article
      className={`group overflow-hidden border border-line bg-ink-2 transition hover:border-paper-soft/25 ${
        large ? 'md:grid md:grid-cols-2' : ''
      }`}
    >
      <Illustration type={project.illustration} className={large ? 'min-h-[280px]' : 'h-52'} />
      <div className={`flex flex-col justify-between p-6 md:p-8 ${large ? 'md:p-10' : ''}`}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            {project.index ? (
              <span className="font-mono text-[10px] text-bronze">{project.index}</span>
            ) : null}
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
              {project.category}
            </p>
            <StatusBadge>{project.status}</StatusBadge>
          </div>
          <h3 className={`mt-4 font-display italic leading-tight ${large ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-bronze">{project.subtitle}</p>
          <p className={`mt-4 text-sm leading-relaxed text-paper-soft/85 ${large ? 'md:text-base' : 'line-clamp-4'}`}>
            {project.description}
          </p>
        </div>
        <div className="mt-6">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, large ? 6 : 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition group-hover:text-bronze"
          >
            View project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function CompactProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-ink-2 p-6 transition hover:border-paper-soft/25">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {project.index ? (
            <span className="font-mono text-[10px] text-bronze">{project.index}</span>
          ) : null}
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
            {project.category}
          </p>
        </div>
        <StatusBadge>{project.status}</StatusBadge>
      </div>
      <h3 className="mt-4 font-display text-3xl italic">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-soft/80 line-clamp-5">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Link
        to={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper group-hover:text-bronze"
      >
        View project <ArrowUpRight size={14} />
      </Link>
    </article>
  );
}

export function ResearchCard({ item }) {
  return (
    <article className="border border-line border-l-2 border-l-bronze bg-ink-2/80 p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-bronze">{item.number}</span>
        <StatusBadge>{item.status}</StatusBadge>
      </div>
      <h3 className="mt-4 max-w-3xl font-display text-2xl italic leading-snug text-paper md:text-3xl">
        {item.title}
      </h3>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
        {item.institution} · {item.date} · {item.instructor}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.areas.map((area) => (
          <Tag key={area} tone="bronze">
            {area}
          </Tag>
        ))}
      </div>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-paper-soft/85 md:text-base">
        {item.description}
      </p>
      {item.paperNote ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{item.paperNote}</p>
      ) : null}
      <Link
        to={`/research/${item.slug}`}
        className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bronze"
      >
        Read the research <ArrowUpRight size={14} />
      </Link>
    </article>
  );
}

export function EducationList() {
  return (
    <ol>
      {education.map((item, i) => (
        <li key={item.place} className="grid grid-cols-[28px_1fr] gap-5">
          <div className="flex flex-col items-center">
            <span className="mt-1 h-3 w-3 rounded-full border border-bronze bg-ink" />
            {i < education.length - 1 ? <span className="w-px flex-1 bg-line" /> : <span className="h-4" />}
          </div>
          <div className="pb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">{item.date}</p>
            <h3 className="mt-1 font-display text-2xl italic md:text-3xl">{item.place}</h3>
            <p className="mt-1 text-sm text-muted">{item.program}</p>
            {item.extra ? <p className="mt-2 text-sm text-paper-soft/80">{item.extra}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ProjectsIndex({ preview = false }) {
  const [open, setOpen] = useState(!preview);
  const numbered = allProjects.map((project, i) => ({
    ...project,
    index: String(i + 1).padStart(2, '0'),
  }));
  const lead = numbered[0];
  const featured = numbered.slice(1, 3);
  const rest = numbered.slice(3);
  const remaining = rest.length;

  return (
    <div className="space-y-8">
      <FeaturedProjectCard project={lead} large />
      <div className="grid gap-8 lg:grid-cols-2">
        {featured.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {open ? (
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <CompactProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : null}
      {preview && remaining > 0 ? (
        <MoreButton
          expanded={open}
          remaining={remaining}
          label="More projects"
          onClick={() => setOpen((value) => !value)}
        />
      ) : null}
    </div>
  );
}
