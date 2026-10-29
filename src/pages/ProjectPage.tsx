import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CodeXml,
  ExternalLink,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import Footer from '../components/layout/Footer'
import TechBadge from '../components/ui/TechBadge'
import type { ProjectId } from '../i18n/types'

import { projects } from '@/data/projects'
import { useCurrentLanguage } from '@/i18n/useCurrentLanguage'
import bookezImage from '../../avatar/book-ez/book-ez.png'
import bookezImage2 from '../../avatar/book-ez/book-ez2.png'
import bookezImage3 from '../../avatar/book-ez/book-ez3.png'
import bookezImage4 from '../../avatar/book-ez/book-ez4.png'
import contextMenuImage from '../../avatar/context-api.png'
import hakatonImage from '../../avatar/hakaton1.png'
import hakatonImage2 from '../../avatar/hakaton2.png'
import Header from '../components/layout/Header'

const projectImages: Record<ProjectId, string[]> = {
  bookez: [bookezImage, bookezImage2, bookezImage3, bookezImage4],
  'hakaton-react': [hakatonImage, hakatonImage2],
  'context-menu': [contextMenuImage],
}

function ProjectPage({ projectId }: { projectId: ProjectId }) {
  const { currentLanguage, t } = useCurrentLanguage()
  const project = t.projects[projectId]

  const projectData = projects.find((item) => item.id === projectId)

  if (!projectData) {
    return null
  }
  const images = projectImages[projectId]
  const nextProject = t.projects[projectData.next]

  return (
    <div className="min-h-screen bg-page text-content">
      <Header />

      <main className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to={`/${currentLanguage}`}
          state={{ scrollToSection: 'projects' }}
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-content"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {t.projectPage.backToHome}
        </Link>

        {/* Portfolio / Project */}
        <section className="py-10 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Portfolio / Project
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {'demo' in projectData && projectData.demo && (
              <a
                href={projectData.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-button bg-accent px-5 py-3 text-sm font-medium text-black transition-colors hover:brightness-110"
              >
                {t.projectPage.openDemo}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}

            <a
              href={projectData.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-button border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-surface-secondary"
            >
              <CodeXml size={17} aria-hidden="true" />
              {t.projectPage.repository}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          {!projectData.demo && (
            <p className="mt-4 text-sm text-text-secondary">
              {project.demoStatus}
            </p>
          )}
        </section>

        {/* скриншоты */}
        <section className="pb-12 sm:pb-16">
          <h2 className="mb-5 text-2xl font-semibold">
            {project.gallery.title}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-card border border-border bg-surface ${
                  images.length === 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <a
                  href={image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.gallery.alt} ${index + 1}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <img
                    src={image}
                    alt={`${project.gallery.alt} ${index + 1}`}
                    className="max-h-[620px] w-full object-contain object-top"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* описание */}
        <section className="grid gap-10 border-t border-border py-12 sm:py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-4 leading-8 text-text-secondary">
              {project.overview}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{project.features.title}</h2>
            <ul className="mt-4 space-y-3">
              {project.features.items.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 leading-7 text-text-secondary"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* мой вклад, технологии */}
        <section className="grid gap-10 border-t border-border py-12 sm:py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              {project.contribution.title}
            </h2>
            <p className="mt-4 leading-8 text-text-secondary">
              {project.contribution.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              {project.technologies.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {projectData.technologies.map((technology) => (
                <TechBadge key={technology}>{technology}</TechBadge>
              ))}
            </div>
          </div>
        </section>

        {/* навигация на следующий проект */}
        <nav
          aria-label={
            currentLanguage === 'ru'
              ? 'Навигация по проектам'
              : 'Project navigation'
          }
          className="flex flex-col gap-4 border-t border-border py-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            to={`/${currentLanguage}`}
            state={{ scrollToSection: 'projects' }}
            className="text-sm text-text-secondary transition-colors hover:text-content"
          >
            {t.projectPage.backToHome}
          </Link>

          <Link
            to={`/${currentLanguage}/projects/${projectData.next}`}
            className="inline-flex items-center gap-3 rounded-card border border-border p-4 transition-colors hover:bg-surface-secondary"
          >
            <span>
              <span className="block text-xs text-text-secondary">
                {currentLanguage === 'ru' ? 'Следующий проект' : 'Next project'}
              </span>
              <span className="mt-1 block font-semibold">
                {nextProject.title}
              </span>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  )
}

export default ProjectPage
