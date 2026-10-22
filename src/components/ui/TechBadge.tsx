type TechBadgeProps = {
  children: string
}

function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-secondary px-3 py-1 text-sm text-text-secondary">
      {children}
    </span>
  )
}

export default TechBadge
