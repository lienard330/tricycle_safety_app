interface StatusPillProps {
  status: string;
  variant?: 'teal' | 'amber' | 'red' | 'gray';
}

const variantClasses: Record<string, string> = {
  teal: 'bg-teal-surface text-teal',
  amber: 'bg-amber_s-surface text-amber_s',
  red: 'bg-sos-surface text-sos',
  gray: 'bg-ink-100 text-ink-500',
};

const StatusPill = ({ status, variant = 'gray' }: StatusPillProps) => (
  <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded ${variantClasses[variant]}`}>
    {status}
  </span>
);

export default StatusPill;
