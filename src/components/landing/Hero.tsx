import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Package,
  Shield,
  Users,
} from 'lucide-react';
import { APP_NAME, APP_TAGLINE, portalPath } from '@/lib/site';

const highlights = [
  '14-day free trial — no card required',
  'Users, roles & permissions in one workspace',
  'Inventory, SKUs, stock levels & categories',
];

export function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <Shield className="h-3.5 w-3.5" />
            Users + inventory in one place
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Manage your team and{' '}
            <span className="text-primary">inventory</span> from one portal
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {APP_NAME} is your {APP_TAGLINE.toLowerCase()}. Onboard employees,
            control access, track attendance and leave, and keep stock, SKUs,
            and categories up to date — without switching between tools.
          </p>

          <ul className="mt-6 space-y-2.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={portalPath('/signup')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              Create company account
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={portalPath('/login')}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-primary-soft"
            >
              Sign in to portal
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="glass-card relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-200/60">
            <div className="flex items-center gap-2 border-b border-border bg-slate-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-medium text-muted">Workspace preview</span>
            </div>

            <div className="grid gap-4 p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Active users', value: '24', icon: Users },
                  { label: 'Products', value: '156', icon: Package },
                  { label: 'Low stock', value: '8', icon: AlertTriangle },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-surface p-3"
                  >
                    <stat.icon className="mb-2 h-4 w-4 text-primary" />
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] leading-tight text-muted sm:text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-border bg-surface p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Inventory overview</p>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                    8 alerts
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: 'Electronics', sku: 'SKU-1042', stock: 82 },
                    { name: 'Office supplies', sku: 'SKU-2088', stock: 45 },
                    { name: 'Packaging', sku: 'SKU-3011', stock: 12 },
                  ].map((item) => (
                    <div key={item.sku} className="flex items-center gap-3">
                      <div className="h-8 w-8 shrink-0 rounded-lg bg-primary-soft text-center text-xs font-bold leading-8 text-primary">
                        {item.name[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium text-foreground">{item.name}</p>
                        <p className="text-[10px] text-muted">{item.sku}</p>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${item.stock}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
