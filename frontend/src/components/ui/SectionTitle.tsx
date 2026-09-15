import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      )}
    </div>
  );
}