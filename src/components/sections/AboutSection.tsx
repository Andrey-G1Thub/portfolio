import Card from '@/components/ui/Card'
import type { Language, Translations } from '@/i18n/types'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'

type AboutSectionProps = {
  about: Translations['home']['about']
  currentLanguage: Language
}

function AboutSection({ about, currentLanguage }: AboutSectionProps) {
  return (
    <section
      id="about"
      data-reveal
      className="scroll-mt-8 py-16 sm:py-20 reveal-on-scroll"
    >
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          03 / About
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{about.title}</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <p className="leading-8 text-text-secondary">{about.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <GraduationCap
              className="shrink-0 text-accent"
              size={22}
              aria-hidden="true"
            />
            <h3 className="font-semibold">{about.education}</h3>
          </div>

          <p className="mt-3 leading-7 text-text-secondary">
            {about.educationDescription}
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <BriefcaseBusiness
              className="shrink-0 text-accent"
              size={22}
              aria-hidden="true"
            />
            <h3 className="font-semibold">
              {currentLanguage === 'ru'
                ? 'Подход к разработке'
                : 'Development approach'}
            </h3>
          </div>

          <p className="mt-4 leading-8 text-text-secondary">
            {about.independentWork}
          </p>
        </Card>
      </div>
    </section>
  )
}
export default AboutSection
