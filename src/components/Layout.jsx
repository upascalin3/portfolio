import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { nav, person } from '../data/site';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 12 : false
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? 'bg-ink/85 backdrop-blur-md border-b border-line' : ''
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl italic text-paper">UP</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted sm:inline">
            Uwayo Pascaline
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                  isActive ? 'text-bronze' : 'text-muted hover:text-paper'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-10 ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center bg-paper text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <nav className="min-h-[calc(100svh-4.75rem)] border-t border-line bg-ink px-5 py-8 lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-3xl italic ${isActive ? 'text-bronze' : 'text-paper'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl italic">{person.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            Computer Science · Economics minor · Columbia Engineering · Expected {person.graduation}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <a href={person.github} target="_blank" rel="noreferrer" className="hover:text-paper">
            GitHub
          </a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">
            LinkedIn
          </a>
          <a href={`mailto:${person.email}`} className="hover:text-paper">
            Email
          </a>
          <Link to="/resume" className="hover:text-paper">
            Resume
          </Link>
          <a href={person.resumeDoc} target="_blank" rel="noreferrer" className="hover:text-paper">
            Google Doc
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70">
          © {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="grain" />
      <ScrollToTop />
      <Navbar />
      <main id="main" className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
