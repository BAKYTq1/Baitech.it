interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">{title}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{description}</h2>
    </div>
  );
}
