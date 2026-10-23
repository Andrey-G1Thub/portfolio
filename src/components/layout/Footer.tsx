import Link from '../ui/Link'
import { useParams } from 'react-router-dom'
import { translations } from '../../i18n/translations'

function Footer() {
  const { lang } = useParams()
  const currentLanguage = lang === 'en' ? 'en' : 'ru'
  const t = translations[currentLanguage]

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

          <Link href="#contact" variant="muted">
            {t.footer.contact}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
