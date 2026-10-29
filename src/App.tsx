import { useEffect, useState } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

import AboutSection from '@/components/sections/AboutSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import JourneySection from '@/components/sections/JourneySection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import StackSection from '@/components/sections/StackSection'
import { getTechnologyGroups } from '@/data/technologyGroups'
import { useCurrentLanguage } from '@/i18n/useCurrentLanguage'
import portrait from '../avatar/avatar-optimized.jpg'

function App() {
  const { currentLanguage, t } = useCurrentLanguage()
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
  const technologyGroups = getTechnologyGroups(home.stack.groups)

  return (
    <div className="min-h-screen bg-page text-content">
      <Header />

      <main className="mx-auto max-w-content px-4 sm:px-6">
        <HeroSection
          hero={home.hero}
          currentLanguage={currentLanguage}
          portrait={portrait}
          onScrollToSection={scrollToSection}
        />

        <ProjectsSection
          currentLanguage={currentLanguage}
          homeProjects={home.projects}
          projectTranslations={t.projects}
        />

        <StackSection
          title={home.stack.title}
          technologyGroups={technologyGroups}
        />

        <AboutSection about={home.about} currentLanguage={currentLanguage} />

        <JourneySection journey={home.journey} />

        <CertificatesSection
          certificatesText={home.certificates}
          currentLanguage={currentLanguage}
        />

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
