import { Code2, Database, Layers3, Wrench } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { translations } from '@/i18n/translations'

import AboutSection from '@/components/sections/AboutSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import JourneySection from '@/components/sections/JourneySection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import StackSection from '@/components/sections/StackSection'
import portrait from '../avatar/avatar-optimized.jpg'

function App() {
  const { lang } = useParams()
  const currentLanguage = lang === 'en' ? 'en' : 'ru'
  const t = translations[currentLanguage]
  const home = t.home

  // для переключения языка в <html lang="en">
  useEffect(() => {
    document.documentElement.lang = currentLanguage
  }, [currentLanguage])

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

  //   if (!selectedCertificate) return

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === 'Escape') {
  //       setSelectedCertificate(null)
  //     }
  //   }

  //   window.addEventListener('keydown', handleKeyDown)

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown)
  //   }
  // }, [selectedCertificate])

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

  return (
    <div className="min-h-screen bg-page text-content">
      <Header />

      <main className="mx-auto max-w-content px-4 sm:px-6">
        {/* <HeroSection/> */}
        <HeroSection
          hero={home.hero}
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

        {/* Certificates */}
        <CertificatesSection
          certificatesText={home.certificates}
          currentLanguage={currentLanguage}
        />
        {/* Contact */}
        <ContactSection
          emailCopyStatus={emailCopyStatus}
          onCopyEmail={copyEmail}
          contact={home.contact}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
