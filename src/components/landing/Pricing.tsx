import { Check } from 'lucide-react';
import { portalPath } from '@/lib/site';

const trialFeatures = [
  'Up to 5 users during trial',
  '14 days full access',
  'User & inventory modules included',
  'Role & permission matrix',
  'Attendance, leave & stock tracking',
  'Upgrade anytime from settings',
];

const plans = [
  {
    name: 'Free trial',
    price: '₹0',
    period: 'for 14 days',
    description: 'Explore user and inventory management with your core team.',
    highlighted: true,
    cta: 'Start free trial',
    href: portalPath('/signup'),
    features: trialFeatures,
  },
  {
    name: 'Growth',
    price: 'Flexible',
    period: 'per seat / month',
    description: 'Scale users and inventory operations as your company grows.',
    highlighted: false,
    cta: 'View in portal',
    href: portalPath('/signup'),
    features: [
      'All user & inventory modules',
      'Seat-based pricing',
      'Mid-term plan upgrades',
      'Renew after expiry',
      'Stock & team announcements',
      'Priority onboarding support',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start free, grow when you&apos;re ready
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Every new company gets a 14-day trial with user and inventory
            modules. No credit card required to begin.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.highlighted
                  ? 'border-primary bg-primary-soft/40 shadow-lg shadow-primary/10'
                  : 'border-border bg-surface'
              }`}
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="pb-1 text-sm text-muted">{plan.period}</span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'border border-border bg-background text-foreground hover:bg-primary-soft'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
