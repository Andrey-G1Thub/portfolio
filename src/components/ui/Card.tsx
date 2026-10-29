import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement>

function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-card border border-border bg-surface p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
