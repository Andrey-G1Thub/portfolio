import { useNavigate, useParams, useLocation } from 'react-router-dom'
import Link from '../ui/Link'
import Button from '../ui/Button'
import { translations } from '../../i18n/translations'

function Header() {
  const navigate = useNavigate()
  const { lang } = useParams()
  const location = useLocation()

  const currentLanguage = lang === 'en' ? 'en' : 'ru'
  const t = translations[currentLanguage]
  const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru'

  const switchLanguage = () => {
    const currentPath = location.pathname.replace(/^\/(ru|en)/, '')
    navigate(`/${nextLanguage}${currentPath}`)
  }

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-5 sm:px-6">
        <Link
          href={`/${currentLanguage}`}
          className="shrink-0 text-base font-semibold tracking-wide"
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
              navigate(`/${currentLanguage}#projects`)
            }}
          >
            {t.navigation.projects}
          </Link>

          <Link
            href={`#about`}
            variant="muted"
            onClick={(event) => {
              event.preventDefault()
              navigate(`/${currentLanguage}#about`)
            }}
          >
            {t.navigation.about}
          </Link>

          <Link
            href={`#contact`}
            variant="muted"
            onClick={(event) => {
              event.preventDefault()
              navigate(`/${currentLanguage}#contact`)
            }}
          >
            {t.navigation.contact}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={switchLanguage}
            className="rounded border border-border px-3 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label={
              currentLanguage === 'ru'
                ? 'Switch to English'
                : 'Переключить на русский'
            }
          >
            {currentLanguage === 'ru'
              ? t.header.switchToEnglish
              : t.header.switchToRussian}
          </button>

          <Button className="shrink-0 px-4 py-2">
            {t.header.contactButton}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
