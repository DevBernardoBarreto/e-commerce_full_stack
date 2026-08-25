type PlaceholderStateProps = {
  title: string;
  description: string;
};

export function PlaceholderState({ title, description }: PlaceholderStateProps) {
  return (
    <section className="rounded-xl border border-stone-200 bg-[var(--surface)] p-8">
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
        Em breve
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">{title}</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600">{description}</p>
    </section>
  );
}
