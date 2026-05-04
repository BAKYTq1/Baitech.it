import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-blue-500 shadow-glow',
  outline: 'border border-primary text-white hover:bg-white/5',
  ghost: 'text-slate-100 hover:text-white',
};

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-soft-in-out ' +
        variants[variant] +
        ' ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
