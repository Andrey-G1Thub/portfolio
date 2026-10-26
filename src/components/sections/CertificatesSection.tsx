import Card from '@/components/ui/Card'
import type { Language, Translations } from '@/i18n/types'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import frontendCertificate from '../../../avatar/sertificats/djunior-frontend.png'
import greenApiCertificate from '../../../avatar/sertificats/green-api.png'

type CertificatesSectionProps = {
  certificatesText: Translations['home']['certificates']
  currentLanguage: Language
}

function CertificatesSection({
  certificatesText,
  currentLanguage,
}: CertificatesSectionProps) {
  const certificates = [
    {
      title: certificatesText.frontend,
      image: frontendCertificate,
      alt:
        currentLanguage === 'ru'
          ? 'Сертификат курса Frontend-разработчика'
          : 'Frontend Developer course certificate',
    },
    {
      title: certificatesText.greenApi,
      image: greenApiCertificate,
      alt:
        currentLanguage === 'ru'
          ? 'Сертификат Green API'
          : 'Green API certificate',
    },
  ]
  type Certificate = (typeof certificates)[number]

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null)

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

  return (
    <>
      <section
        id="certificates"
        data-reveal
        className="scroll-mt-8 py-16 sm:py-20 reveal-on-scroll"
      >
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            05 / Certificates
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {certificatesText.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <Card key={certificate.title} className="p-4">
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="group block w-full rounded-card text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`${certificatesText.viewCertificate}: ${certificate.title}`}
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
                  {certificatesText.viewCertificate}
                </span>
              </button>
            </Card>
          ))}
        </div>
      </section>

      {/* модальное окно */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            className="relative max-h-[90vh] w-full max-w-4xl rounded-card border border-border bg-surface p-4 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={
                currentLanguage === 'ru'
                  ? 'Закрыть сертификат'
                  : 'Close certificate'
              }
            >
              ×
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.alt}
              className="max-h-[calc(90vh-3rem)] w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
export default CertificatesSection
