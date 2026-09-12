import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">404</p>
      <h1 className="mt-4 font-display text-5xl italic">This page is not here.</h1>
      <p className="mt-4 max-w-md text-muted">The path you followed does not match a page on this site.</p>
      <Link to="/" className="mt-8 bg-paper px-5 py-3 text-sm text-ink hover:bg-paper-soft">
        Back home
      </Link>
    </div>
  );
}
