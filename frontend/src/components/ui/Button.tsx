import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: Variant;
  className?: string;
}

interface ButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
  to?: never;
  href?: never;
}

interface InternalLinkProps extends BaseProps {
  children: ReactNode;
  to: string;
  href?: never;
}

interface ExternalLinkProps extends BaseProps {
  children: ReactNode;
  href: string;
  to?: never;
  target?: string;
  rel?: string;
}

type Props = ButtonProps | InternalLinkProps | ExternalLinkProps;

const styles: Record<Variant, string> = {
  primary: 'bg-accent text-bg hover:bg-accent-hover font-medium',
  secondary:
    'border border-border text-text hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-accent',
};

const base =
  'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm transition-colors';

export function Button(props: Props) {
  if ('to' in props && props.to) {
    const { to, variant = 'primary', children, className = '' } = props;
    return (
      <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const {
      href,
      variant = 'primary',
      children,
      className = '',
      target,
      rel,
    } = props;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  const {
    variant = 'primary',
    children,
    className = '',
    ...rest
  } = props as ButtonProps;
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}