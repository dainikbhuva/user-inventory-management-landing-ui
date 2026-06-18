import { ArrowRight } from 'lucide-react';
import { APP_NAME, portalPath } from '@/lib/site';

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to unify users and inventory?
            </h2>
            <p className="mt-4 text-base text-blue-100 sm:text-lg">
              Join teams using {APP_NAME} to manage employees, stock, permissions,
              and daily operations from one secure workspace.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={portalPath('/signup')}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-blue-50"
              >
                Create free account
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={portalPath('/login')}
                className="inline-flex rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
