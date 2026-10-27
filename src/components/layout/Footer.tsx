import { useCurrentLanguage } from '@/i18n/useCurrentLanguage'
import { useLocation, useNavigate } from 'react-router-dom'
import Link from '../ui/Link'

function Footer() {
  const navigate = useNavigate()
  const { currentLanguage, t } = useCurrentLanguage()
  const location = useLocation()

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === `/${currentLanguage}`) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/${currentLanguage}`, {
        state: { scrollToSection: sectionId },
      })
    }
  }

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Andrey Rukshenas
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="https://github.com/Andrey-G1Thub"
            variant="muted"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>

          <Link
            href={`/${currentLanguage}#contact`}
            variant="muted"
            onClick={(event) => {
              event.preventDefault()
              navigateToSection('contact')
            }}
          >
            {t.footer.contact}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
