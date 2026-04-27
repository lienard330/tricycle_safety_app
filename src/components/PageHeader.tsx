import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

const PageHeader = ({ title, subtitle, action }: PageHeaderProps) => (
  <div className="flex items-center justify-between mb-6">
    <div>
      <h1 className="text-xl font-extrabold text-ink-900">{title}</h1>
      {subtitle && <p className="text-sm text-ink-500 mt-0.5">{subtitle}</p>}
    </div>
    {action}
  </div>
);

export default PageHeader;
