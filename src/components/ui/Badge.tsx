import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200">
      {children}
    </span>
  );
}
