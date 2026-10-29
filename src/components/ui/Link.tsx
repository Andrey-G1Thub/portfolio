import type { AnchorHTMLAttributes } from 'react'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'default' | 'muted'
}

function Link({
  variant = 'default',
  className = '',
  children,
  ...props
}: LinkProps) {
  const baseStyles =
    'inline-flex items-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

  const variantStyles = {
    default: 'text-accent hover:brightness-110',
    muted: 'text-text-secondary hover:text-content',
  }

  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
