import Link from 'next/link';
import { APP_NAME, APP_TAGLINE, portalPath } from '@/lib/site';

const footerLinks = [
  { href: '#features', label: 'Features' },
  { href: '#modules', label: 'Modules' },
  { href: '#pricing', label: 'Pricing' },
  { href: portalPath('/signup'), label: 'Sign up', external: true },
  { href: portalPath('/login'), label: 'Sign in', external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                U
              </span>
              <span className="font-heading text-lg font-bold text-foreground">{APP_NAME}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">{APP_TAGLINE}</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1" aria-label="Footer">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted sm:text-left">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
