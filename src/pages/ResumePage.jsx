import { Download, ExternalLink } from 'lucide-react';
import { person } from '../data/site';
import { FadeIn, SectionLabel } from '../components/ui';

export default function ResumePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel>Resume</SectionLabel>
          <h1 className="mt-4 font-display text-5xl italic md:text-7xl">Resume</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            View my resume here, download the PDF, or open the Google Doc.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={person.resumePdf}
              download="Uwayo-Pascaline-Resume.pdf"
              className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-sm text-ink hover:bg-paper-soft"
            >
              <Download size={16} /> Download PDF
            </a>
            <a
              href={person.resumeDoc}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm hover:border-paper-soft"
            >
              <ExternalLink size={16} /> View Google Doc
            </a>
          </div>
        </FadeIn>

        <div className="mt-12 overflow-hidden border border-line bg-paper">
          <iframe
            title={`${person.name} resume`}
            src={`${person.resumePdf}#view=FitH`}
            className="h-[min(85svh,1180px)] w-full"
          />
        </div>
        <p className="mt-4 text-sm text-muted">
          If the preview does not load,{' '}
          <a href={person.resumePdf} target="_blank" rel="noreferrer" className="text-paper underline decoration-line underline-offset-4 hover:text-bronze">
            open the PDF
          </a>{' '}
          or use the Google Doc link above.
        </p>
      </div>
    </div>
  );
}
