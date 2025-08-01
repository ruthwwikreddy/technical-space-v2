import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

// Base card component with glass effect and hover animations
export function Card({ 
  children, 
  className = '', 
  onClick, 
  role = 'div',
  tabIndex,
  ariaLabel,
  icon: Icon,
  title,
  description
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  ariaLabel?: string;
  icon?: LucideIcon;
  title?: string;
  description?: string;
}) {
  return (
    <div 
      onClick={onClick}
      className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-6 
        transition-all duration-300 hover:transform hover:-translate-y-1 
        overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 
        border border-white/10 hover:border-blue-500/30 group ${className}`}
      role={onClick ? 'button' : role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {/* Animated background glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      {Icon && <Icon className="w-8 h-8 mb-4 text-blue-400" />}
      {title && <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>}
      {description && <p className="text-gray-300">{description}</p>}
      {children}
    </div>
  );
}

// Card subcomponents
export function CardHeader({ 
  children, 
  className = '' 
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ 
  children, 
  className = '' 
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-xl font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ 
  children, 
  className = '' 
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-gray-300 ${className}`}>
      {children}
    </div>
  );
}