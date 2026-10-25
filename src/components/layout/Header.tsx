import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from '../ui/Link'
import Button from '../ui/Button'
import { translations } from '../../i18n/translations'

function Header() {
  const navigate = useNavigate()
  const { lang } = useParams()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const currentLanguage = lang === 'en' ? 'en' : 'ru'
  const t = translations[currentLanguage]
  const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru'

  useEffect(() => {
    if (!location.pathname.match(/^\/(ru|en)$/)) {
      return
    }

    const sectionId = location.state?.scrollToSection as string | undefined

    if (!sectionId) {
      return
    }

    const section = document.getElementById(sectionId)

    section?.scrollIntoView({ behavior: 'smooth' })

    navigate(location.pathname, {
      replace: true,
      state: null,
    })
  }, [location.pathname, location.state, navigate])

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === `/${currentLanguage}`) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/${currentLanguage}`, {
        state: { scrollToSection: sectionId },
      })
    }
  }

  const switchLanguage = () => {
    const currentPath = location.pathname.replace(/^\/(ru|en)/, '')
    navigate(`/${nextLanguage}${currentPath}`)
  }

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-5 sm:gap-6 sm:px-6">
        <Link
          href="#"
          className="shrink-0 text-base font-semibold tracking-wide"
          onClick={(event) => {
            event.preventDefault()
            navigate({
              pathname: `/${currentLanguage}`,
            })
          }}
        >
          ANDREY RUKSHENAS
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label={t.navigation.ariaLabel}
        >
          <Link
            href={`#projects`}
            variant="muted"
            onClick={(event) => {
              event.preventDefault()
              navigateToSection('projects')
            }}
          >
            {t.navigation.projects}
          </Link>

          <Link
            href={`#about`}
            variant="muted"
            onClick={(event) => {
              event.preventDefault()
              navigateToSection('about')
            }}
          >
            {t.navigation.about}
          </Link>

          <Link
            href={`#contact`}
            variant="muted"
            onClick={(event) => {
              event.preventDefault()
              navigateToSection('contact')
            }}
          >
            {t.navigation.contact}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={switchLanguage}
            className="shrink-0 rounded border border-border px-2 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-3"
            aria-label={
              currentLanguage === 'ru'
                ? 'Switch to English'
                : 'Переключить на русский'
            }
          >
            <span className="sm:hidden">
              {currentLanguage === 'ru' ? 'EN' : 'RU'}
            </span>
            <span className="hidden sm:inline">
              {currentLanguage === 'ru'
                ? t.header.switchToEnglish
                : t.header.switchToRussian}
            </span>
          </button>

          {/* бургер для мобилки */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded border border-border text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
            aria-label={
              isMobileMenuOpen
                ? currentLanguage === 'ru'
                  ? 'Закрыть меню'
                  : 'Close menu'
                : currentLanguage === 'ru'
                  ? 'Открыть меню'
                  : 'Open menu'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {' '}
            {isMobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>

          <div className="hidden md:block">
            <Button
              className="shrink-0 px-4 py-2"
              onClick={() => navigateToSection('contact')}
            >
              {t.header.contactButton}
            </Button>
          </div>
        </div>
      </div>

      {/* мобильное меню */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t.navigation.ariaLabel}
          className="border-t border-border px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-content flex-col gap-4 sm:px-2">
            <Link
              href="#projects"
              variant="muted"
              onClick={(event) => {
                event.preventDefault()
                setIsMobileMenuOpen(false)
                navigateToSection('projects')
              }}
            >
              {t.navigation.projects}
            </Link>

            <Link
              href="#about"
              variant="muted"
              onClick={(event) => {
                event.preventDefault()
                setIsMobileMenuOpen(false)
                navigateToSection('about')
              }}
            >
              {t.navigation.about}
            </Link>

            <Link
              href="#contact"
              variant="muted"
              onClick={(event) => {
                event.preventDefault()
                setIsMobileMenuOpen(false)
                navigateToSection('contact')
              }}
            >
              {t.navigation.contact}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
