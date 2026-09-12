import { roboticsIntro } from '../data/site';
import { ProjectsIndex } from '../components/Cards';
import { FadeIn, SectionLabel } from '../components/ui';

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel>Projects</SectionLabel>
          <h1 className="mt-4 font-display text-5xl italic md:text-7xl">Building to understand</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            All projects are collected here, in order: SurVie, Stratiq, OpenLab, Sarura, Platy AI,
            then robotics work from Rwanda Coding Academy. They are concepts, explorations, and
            student collaborations, labeled honestly for where each one stands.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{roboticsIntro}</p>
        </FadeIn>

        <div className="mt-16">
          <ProjectsIndex />
        </div>
      </div>
    </div>
  );
}
