import {
  ArrowUpRight,
  Code2,
  CodeXml,
  Copy,
  Database,
  Layers3,
  Mail,
  Wrench,
} from 'lucide-react'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Card from '@/components/ui/Card'
import { translations } from '@/i18n/translations'

import AboutSection from '@/components/sections/AboutSection'
import HeroSection from '@/components/sections/HeroSection'
import JourneySection from '@/components/sections/JourneySection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import StackSection from '@/components/sections/StackSection'
import portrait from '../avatar/avatar-optimized.jpg'
import frontendCertificate from '../avatar/sertificats/djunior-frontend.png'
import greenApiCertificate from '../avatar/sertificats/green-api.png'

function App() {
  const { lang } = useParams()
  const currentLanguage = lang === 'en' ? 'en' : 'ru'
  const t = translations[currentLanguage]
  const home = t.home

  // для переключения языка в <html lang="en">
  useEffect(() => {
    document.documentElement.lang = currentLanguage
  }, [currentLanguage])

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null)

  const [emailCopyStatus, setEmailCopyStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('andreyrukshenas@gmail.com')
      setEmailCopyStatus('success')
    } catch {
      setEmailCopyStatus('error')
    }
  }

  useEffect(() => {
    if (emailCopyStatus === 'idle') return

    const timeoutId = window.setTimeout(() => {
      setEmailCopyStatus('idle')
    }, 2500)

    return () => window.clearTimeout(timeoutId)
  }, [emailCopyStatus])

  useEffect(() => {
    if (!selectedCertificate) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCertificate])

  //наблюдение за секциями
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

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

  type Certificate = (typeof certificates)[number]

  return (
    <div className="min-h-screen bg-page text-content">
      <Header />

      <main className="mx-auto max-w-content px-4 sm:px-6">
        {/* <HeroSection/> */}
        <HeroSection
          home={home}
          currentLanguage={currentLanguage}
          portrait={portrait}
          onScrollToSection={scrollToSection}
        />

        {/* Projects */}
        <ProjectsSection
          currentLanguage={currentLanguage}
          homeProjects={home.projects}
          projectTranslations={t.projects}
        />

        {/* Tech stack */}
        <StackSection
          title={home.stack.title}
          technologyGroups={technologyGroups}
        />

        {/* About */}
        <AboutSection about={home.about} currentLanguage={currentLanguage} />

        {/* Journey */}
        <JourneySection journey={home.journey} />

        {/* Contact */}
        {/* <section id="contact" className="scroll-mt-8 py-16 sm:py-20">
          <Card className="border-accent/30 bg-surface p-6 sm:p-10">
            <div className="mt-8">
              <p className="mb-4 break-all text-sm text-text-secondary">
                andreyrukshenas@gmail.com
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:andreyrukshenas@gmail.com"
                  className="inline-flex items-center gap-2 rounded-button bg-accent px-5 py-3 text-sm font-medium text-black transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <Mail size={18} aria-hidden="true" />
                  {home.contact.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-button border border-border bg-surface px-5 py-3 text-sm font-medium text-content transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <Copy size={18} aria-hidden="true" />
                  {home.contact.copyEmail}
                </button>

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

              <p
                className="mt-3 min-h-5 text-sm"
                aria-live="polite"
                role="status"
              >
                {emailCopyStatus === 'success' && (
                  <span className="text-accent">
                    {home.contact.emailCopied}
                  </span>
                )}

                {emailCopyStatus === 'error' && (
                  <span className="text-red-400">
                    {home.contact.emailCopyError}
                  </span>
                )}
              </p>
            </div>
          </Card>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}

export default App
