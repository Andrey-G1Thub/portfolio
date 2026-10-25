import { useParams, Link as RouterLink } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowUpRight,
  CodeXml,
  Mail,
  Code2,
  Layers3,
  Database,
  Wrench,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react'

import Button from './components/ui/Button'
import TechBadge from './components/ui/TechBadge'
import Card from './components/ui/Card'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { translations } from './i18n/translations'

import portrait from '../avatar/avatar.jpg'
import bookezImage from '../avatar/book-ez/book-ez.png'
import hakatonImage from '../avatar/hakaton1.png'
import contextMenuImage from '../avatar/context-api.png'
import frontendCertificate from '../avatar/sertificats/djunior-frontend.png'
import greenApiCertificate from '../avatar/sertificats/green-api.png'

function App() {
  const { lang } = useParams()
  const currentLanguage = lang === 'en' ? 'en' : 'ru'
  const t = translations[currentLanguage]
  const home = t.home

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const projects = [
    {
      id: 'bookez',
      image: bookezImage,
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'Docker',
      ],
      repository: 'https://github.com/Andrey-G1Thub/bookez-hotel-booking',
    },
    {
      id: 'hakaton-react',
      image: hakatonImage,
      technologies: ['React', 'JavaScript', 'CSS'],
      repository: 'https://github.com/Andrey-G1Thub/HaKatonReact',
      demo: 'https://andrey-g1thub.github.io/HaKatonReact/',
    },
    {
      id: 'context-menu',
      image: contextMenuImage,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      repository: 'https://github.com/Artemsushko/context-menu',
      demo: 'https://artemsushko.github.io/context-menu/',
    },
  ] as const

  const technologyGroups = [
    {
      title: home.stack.groups.frontend,
      icon: Code2,
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Vite',
        'Tailwind CSS',
      ],
    },
    {
      title: home.stack.groups.state,
      icon: Layers3,
      technologies: ['Redux', 'Context API'],
    },
    {
      title: home.stack.groups.backend,
      icon: Database,
      technologies: [
        'Node.js',
        'Express',
        'REST API',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Docker',
      ],
    },
    {
      title: home.stack.groups.tools,
      icon: Wrench,
      technologies: ['Git', 'GitHub', 'VS Code', 'Cursor', 'ChatGPT', 'Gemini'],
    },
  ]

  const certificates = [
    {
      title: home.certificates.frontend,
      image: frontendCertificate,
      alt:
        currentLanguage === 'ru'
          ? 'Сертификат курса Frontend-разработчика'
          : 'Frontend Developer course certificate',
    },
    {
      title: home.certificates.greenApi,
      image: greenApiCertificate,
      alt:
        currentLanguage === 'ru'
          ? 'Сертификат Green API'
          : 'Green API certificate',
    },
  ]

  return (
    <div className="min-h-screen bg-page text-content">
      <Header />

      <main className="mx-auto max-w-content px-4 sm:px-6">
        {/* Hero */}
        <section
          id="home"
          className="grid scroll-mt-8 items-center gap-10 py-16 sm:py-20 md:grid-cols-[1.3fr_0.7fr] md:gap-14 md:py-28"
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
              <Button onClick={() => scrollToSection('projects')}>
                {home.hero.viewProjects}
                <ArrowDownRight size={18} aria-hidden="true" />
              </Button>

              <Button
                variant="secondary"
                onClick={() => scrollToSection('contact')}
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
                  currentLanguage === 'ru'
                    ? 'Андрей Рукшенас'
                    : 'Andrey Rukshenas'
                }
                className="aspect-[4/5] w-full rounded-card object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-8 py-16 sm:py-20">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              01 / Portfolio
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {home.projects.title}
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              {home.projects.description}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => {
              const projectText = t.projects[project.id]

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
                    <h3 className="text-xl font-semibold">
                      {projectText.title}
                    </h3>

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
                        {home.projects.viewProject}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </RouterLink>

                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        <CodeXml size={16} aria-hidden="true" />
                        {home.projects.repository}
                      </a>

                      {'demo' in project && project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                          {home.projects.demo}
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

        {/* Tech stack */}
        <section id="stack" className="scroll-mt-8 py-16 sm:py-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              02 / Skills
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {home.stack.title}
            </h2>
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

        {/* About */}
        <section id="about" className="scroll-mt-8 py-16 sm:py-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              03 / About
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {home.about.title}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <p className="leading-8 text-text-secondary">
                {home.about.description}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <GraduationCap
                  className="shrink-0 text-accent"
                  size={22}
                  aria-hidden="true"
                />
                <h3 className="font-semibold">{home.about.education}</h3>
              </div>

              <p className="mt-3 leading-7 text-text-secondary">
                {home.about.educationDescription}
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
                {home.about.independentWork}
              </p>
            </Card>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="scroll-mt-8 py-16 sm:py-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              04 / Journey
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {home.journey.title}
            </h2>
          </div>

          <Card className="border-l-2 border-l-accent">
            <p className="text-sm font-medium text-accent">
              {home.journey.educationPeriod}
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              {home.journey.education}
            </h3>
            <p className="mt-4 leading-7 text-text-secondary">
              {home.journey.current}
            </p>
          </Card>
        </section>

        {/* Certificates */}
        <section id="certificates" className="scroll-mt-8 py-16 sm:py-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              05 / Certificates
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {home.certificates.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <Card key={certificate.title} className="p-4">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label={`${home.certificates.viewCertificate}: ${certificate.title}`}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    loading="lazy"
                    className="max-h-80 w-full rounded-card object-contain transition-opacity group-hover:opacity-80"
                  />
                  <span className="mt-4 inline-flex items-center gap-2 font-medium text-accent">
                    {certificate.title}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                  <span className="mt-2 block text-sm text-text-secondary">
                    {home.certificates.viewCertificate}
                  </span>
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-8 py-16 sm:py-24">
          <Card className="border-accent/30 bg-surface p-6 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              06 / Contact
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {home.contact.title}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
              {home.contact.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:andreyrukshenas@gmail.com"
                className="inline-flex items-center gap-2 rounded-button bg-accent px-5 py-3 text-sm font-medium text-black transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Mail size={18} aria-hidden="true" />
                {home.contact.email}
              </a>

              <a
                href="https://github.com/Andrey-G1Thub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-button border border-border bg-surface px-5 py-3 text-sm font-medium text-content transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <CodeXml size={18} aria-hidden="true" />
                {home.contact.github}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
