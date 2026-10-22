import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-button px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50'

  const variantStyles = {
    primary: 'bg-accent text-black hover:brightness-110 active:brightness-95',
    secondary:
      'border border-border bg-surface text-content hover:bg-surface-secondary active:bg-page',
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
