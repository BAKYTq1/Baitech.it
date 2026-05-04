import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function Card({ title, description, footer, children, className = '' }: CardProps) {
  return (
    <div className={`section-card rounded-3xl p-8 shadow-soft ${className}`}>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
        {children}
      </div>
      {footer ? <div className="mt-6 text-sm text-slate-300">{footer}</div> : null}
    </div>
  );
}
