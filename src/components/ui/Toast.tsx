interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

export default function Toast({ type, message }: ToastProps) {
  return (
    <div
      className={
        'fixed bottom-6 right-6 z-50 max-w-sm rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-soft ' +
        (type === 'success' ? 'border-accent text-accent' : 'border-red-500/20 text-red-300')
      }
    >
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
