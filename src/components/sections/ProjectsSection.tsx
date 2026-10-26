import { Link as RouterLink } from 'react-router-dom'

import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'
import { projects } from '@/data/projects'
import type { Language, Translations } from '@/i18n/types'
import { ArrowUpRight, CodeXml } from 'lucide-react'

type ProjectsSectionProps = {
  currentLanguage: Language
  homeProjects: Translations['home']['projects']
  projectTranslations: Translations['projects']
}

function ProjectsSection({
  currentLanguage,
  homeProjects,
  projectTranslations,
}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      data-reveal
      className="scroll-mt-8 py-16 sm:py-20 reveal-on-scroll"
    >
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          01 / Portfolio
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{homeProjects.title}</h2>
        <p className="mt-4 leading-7 text-text-secondary">
          {homeProjects.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => {
          const projectText = projectTranslations[project.id]

          return (
            <Card
              key={project.id}
              className="flex h-full flex-col overflow-hidden p-0"
            >
              <img
                src={project.image}
                alt={`${projectText.title} preview`}
                className="aspect-[16/10] w-full border-b border-border object-cover object-top"
                loading="lazy"
              />

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold">{projectText.title}</h3>

                <p className="mt-3 flex-1 leading-7 text-text-secondary">
                  {projectText.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <TechBadge key={technology}>{technology}</TechBadge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <RouterLink
                    to={`/${currentLanguage}/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {homeProjects.viewProject}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </RouterLink>

                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <CodeXml size={16} aria-hidden="true" />
                    {homeProjects.repository}
                  </a>

                  {'demo' in project && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {homeProjects.demo}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
export default ProjectsSection
