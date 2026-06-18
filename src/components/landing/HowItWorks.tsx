import { portalPath } from '@/lib/site';

const steps = [
  {
    step: '01',
    title: 'Create your company',
    description:
      'Sign up with company details and your Super Admin account. A 14-day trial starts automatically.',
  },
  {
    step: '02',
    title: 'Set up users & inventory',
    description:
      'Configure roles, departments, inventory categories, leave types, and shifts so the portal fits your operations.',
  },
  {
    step: '03',
    title: 'Invite your team',
    description:
      'Add employees with auto-generated passwords emailed on create. They manage users, stock, and daily tasks from day one.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">How it works</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Register your company, set up users and inventory, and onboard your
            first team members today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <article
              key={item.step}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="font-heading text-4xl font-bold text-primary/20">{item.step}</span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={portalPath('/signup')}
            className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Get started — it&apos;s free for 14 days
          </a>
        </div>
      </div>
    </section>
  );
}
