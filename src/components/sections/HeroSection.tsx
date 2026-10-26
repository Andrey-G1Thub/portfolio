import Button from '@/components/ui/Button'
import TechBadge from '@/components/ui/TechBadge'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

type HeroSectionProps = {
  home: {
    hero: {
      role: string
      title: string
      description: string
      viewProjects: string
      contact: string
    }
  }
  currentLanguage: 'ru' | 'en'
  portrait: string
  onScrollToSection: (id: string) => void
}

function HeroSection({
  home,
  portrait,
  onScrollToSection,
  currentLanguage,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="grid scroll-mt-8 items-center gap-10 py-16 sm:py-20 md:grid-cols-[1.3fr_0.7fr] md:gap-14 md:py-28 animate-fade-in-up"
    >
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {home.hero.role}
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {home.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
          {home.hero.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => onScrollToSection('projects')}>
            {home.hero.viewProjects}
            <ArrowDownRight size={18} aria-hidden="true" />
          </Button>

          <Button
            variant="secondary"
            onClick={() => onScrollToSection('contact')}
          >
            {home.hero.contact}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <TechBadge>React</TechBadge>
          <TechBadge>TypeScript</TechBadge>
          <TechBadge>JavaScript</TechBadge>
        </div>
      </div>

      <div className="mx-auto w-full max-w-sm md:max-w-none">
        <div className="overflow-hidden rounded-card border border-border bg-surface p-2">
          <img
            src={portrait}
            alt={
              currentLanguage === 'ru' ? 'Андрей Рукшенас' : 'Andrey Rukshenas'
            }
            className="aspect-[4/5] w-full rounded-card object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
export default HeroSection
