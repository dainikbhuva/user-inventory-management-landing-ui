const modules = [
  'Users & employee profiles',
  'Inventory items & SKUs',
  'Stock adjustments',
  'Inventory categories',
  'Roles & permission matrix',
  'Attendance & shift templates',
  'Leave requests & approvals',
  'Holiday calendar',
  'Departments & designations',
  'Announcements & notifications',
  'Plan, billing & seat management',
];

export function Modules() {
  return (
    <section id="modules" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Modules</p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              User management and inventory, side by side
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Every module shares the same roles, permissions, and company
              context — so your team manages people and stock with one login and
              one consistent experience.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {modules.map((module) => (
                <li
                  key={module}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-background px-4 py-3 text-sm font-medium text-foreground"
                >
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {module}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
