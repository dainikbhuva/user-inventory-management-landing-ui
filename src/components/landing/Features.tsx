import {
  Bell,
  CalendarCheck,
  Clock,
  Lock,
  Package,
  UserCog,
} from 'lucide-react';

const features = [
  {
    icon: UserCog,
    title: 'User & employee management',
    description:
      'Add employees with auto-generated credentials, assign roles, and manage profiles, departments, and designations.',
  },
  {
    icon: Package,
    title: 'Inventory & SKU tracking',
    description:
      'Maintain product catalogues with SKUs, categories, pricing, quantities, and stock status across locations.',
  },
  {
    icon: Lock,
    title: 'Role-based permissions',
    description:
      'Control user and inventory access per role — separate create, read, update, and delete rights for every module.',
  },
  {
    icon: Clock,
    title: 'Attendance & shifts',
    description:
      'Configure office hours and shift templates, then track daily check-ins and attendance from one dashboard.',
  },
  {
    icon: CalendarCheck,
    title: 'Leave & holidays',
    description:
      'Employees apply for leave, managers approve requests, and everyone shares the same company holiday calendar.',
  },
  {
    icon: Bell,
    title: 'Stock alerts & announcements',
    description:
      'Get visibility into low-stock items, stock adjustments, and broadcast company updates to the right teams.',
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Features</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            People operations and inventory, connected
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            One portal for HR workflows and stock management — from onboarding
            employees to tracking SKUs and stock levels.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-background p-6 transition hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
