import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'outline' | 'danger' | 'ghost';
  size?: 'default' | 'small';
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
}

const variantClasses: Record<string, string> = {
  primary: 'bg-teal text-white hover:bg-teal-dark',
  outline: 'bg-white text-teal border border-teal hover:bg-teal-surface',
  danger: 'bg-sos text-white hover:bg-red-700',
  ghost: 'text-ink-500 hover:bg-ink-100',
};

const sizeClasses: Record<string, string> = {
  default: 'px-4 py-2 text-sm',
  small: 'px-3 py-1.5 text-xs',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  icon: Icon,
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
      inline-flex items-center justify-center gap-2 font-semibold rounded-lg
      transition-colors disabled:opacity-50 disabled:cursor-not-allowed
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${fullWidth ? 'w-full' : ''}
    `}
  >
    {Icon && <Icon size={size === 'small' ? 14 : 16} />}
    {children}
  </button>
);

export default Button;
