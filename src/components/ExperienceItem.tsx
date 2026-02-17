type ExperienceItemProps = {
  role: string;
  organization: string;
  location?: string;
  courtOrInstitution?: string;
  period: string;
  bullets: string[];
};

export function ExperienceItem({
  role,
  organization,
  location,
  courtOrInstitution,
  period,
  bullets,
}: ExperienceItemProps) {
  return (
    <article className="rounded-2xl border border-border-subtle bg-card-background/90 p-5 shadow-sm">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            {role}
          </h3>
          <p className="text-xs text-muted sm:text-sm">
            {organization}
            {courtOrInstitution ? ` · ${courtOrInstitution}` : ""}
            {location ? ` · ${location}` : ""}
          </p>
        </div>
        <p className="mt-1 text-xs font-medium text-muted sm:mt-0">{period}</p>
      </header>

      <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-muted sm:text-sm">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

