import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message?: string;
}

const EmptyState = ({ icon: Icon, title, message }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-14 h-14 bg-ink-100 rounded-xl flex items-center justify-center mb-4">
      <Icon size={26} className="text-ink-400" />
    </div>
    <p className="text-sm font-bold text-ink-700">{title}</p>
    {message && <p className="text-xs text-ink-500 mt-1 max-w-xs">{message}</p>}
  </div>
);

export default EmptyState;
