import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'
import type { LucideIcon } from 'lucide-react'

type TechnologyGroup = {
  title: string
  icon: LucideIcon
  technologies: string[]
}

type StackSectionProps = {
  title: string
  technologyGroups: TechnologyGroup[]
}

function StackSection({ title, technologyGroups }: StackSectionProps) {
  return (
    <section
      data-reveal
      className="scroll-mt-8 py-16 sm:py-20 reveal-on-scroll"
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          02 / Skills
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {technologyGroups.map((group) => {
          const Icon = group.icon

          return (
            <Card key={group.title}>
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-border bg-surface-secondary p-3 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <TechBadge key={technology}>{technology}</TechBadge>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
export default StackSection
