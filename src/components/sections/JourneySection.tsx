import Card from '@/components/ui/Card'
import type { Translations } from '@/i18n/types'

type JourneySectionProps = {
  journey: Translations['home']['journey']
}

function JourneySection({ journey }: JourneySectionProps) {
  return (
    <section
      id="journey"
      data-reveal
      className="scroll-mt-8 py-16 sm:py-20 reveal-on-scroll"
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          04 / Journey
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{journey.title}</h2>
      </div>

      <Card className="border-l-2 border-l-accent">
        <p className="text-sm font-medium text-accent">
          {journey.educationPeriod}
        </p>
        <h3 className="mt-3 text-xl font-semibold">{journey.education}</h3>
        <p className="mt-4 leading-7 text-text-secondary">{journey.current}</p>
      </Card>
    </section>
  )
}
export default JourneySection
