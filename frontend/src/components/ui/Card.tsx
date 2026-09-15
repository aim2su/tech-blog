import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
}

export function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`bg-surface border border-border rounded-xl p-5 transition-colors hover:border-accent/50 ${className}`}
    >
      {children}
    </Tag>
  );
}