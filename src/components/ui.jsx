import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MotionDiv = motion.div;

export function FadeIn({ children, className = '', delay = 0, y = 18 }) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  );
}

export function SectionLabel({ children }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
      {children}
    </p>
  );
}

export function Tag({ children, tone = 'default' }) {
  const tones = {
    default: 'border-line text-paper-soft/90',
    bronze: 'border-bronze/35 text-bronze',
    signal: 'border-signal/35 text-signal',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-bronze/40 bg-bronze/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bronze">
      {children}
    </span>
  );
}

export function MoreButton({ expanded, remaining, onClick, label = 'More' }) {
  return (
    <div className="mt-10 flex items-center gap-4">
      <span className="h-px flex-1 bg-line" aria-hidden />
      <button
        type="button"
        onClick={onClick}
        aria-expanded={expanded}
        className="inline-flex items-center gap-2.5 border border-line bg-ink px-5 py-2.5 text-paper transition hover:border-bronze/50 hover:text-bronze"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
          {expanded ? 'Show less' : label}
        </span>
        {!expanded && remaining ? (
          <span className="font-mono text-[11px] text-muted">+{remaining}</span>
        ) : null}
        <ChevronDown
          size={16}
          className={`transition duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      <span className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}

export function MoreLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition hover:border-bronze/50 hover:text-bronze"
    >
      {children}
      <ChevronDown size={14} className="-rotate-90" />
    </Link>
  );
}

export function Expandable({ items, previewCount, render, moreLabel = 'More', className = '' }) {
  const [open, setOpen] = useState(false);
  const remaining = Math.max(items.length - previewCount, 0);
  const visible = open || remaining === 0 ? items : items.slice(0, previewCount);

  return (
    <div>
      <div className={className}>
        {visible.map((item, index) => render(item, index))}
      </div>
      {remaining > 0 ? (
        <MoreButton
          expanded={open}
          remaining={remaining}
          label={moreLabel}
          onClick={() => setOpen((value) => !value)}
        />
      ) : null}
    </div>
  );
}

