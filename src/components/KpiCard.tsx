import type { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendVariant?: 'up' | 'warn' | 'neutral';
  icon?: LucideIcon;
}

const KpiCard = ({ label, value, trend, trendVariant, icon: Icon }: KpiCardProps) => {
  const trendClass =
    trendVariant === 'up' ? 'bg-teal-surface text-teal' :
    trendVariant === 'warn' ? 'bg-sos-surface text-sos' :
    'bg-amber_s-surface text-amber_s';

  return (
    <div className="bg-white rounded-xl p-5 border border-ink-200">
      <div className="flex items-start justify-between mb-3">
        <div className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
          {label}
        </div>
        {Icon && <Icon size={16} className="text-ink-400" />}
      </div>
      <div className="text-2xl font-extrabold text-ink-900">{value}</div>
      {trend && (
        <div className={`mt-2 inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded ${trendClass}`}>
          {trend}
        </div>
      )}
    </div>
  );
};

export default KpiCard;
