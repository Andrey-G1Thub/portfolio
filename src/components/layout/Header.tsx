import Link from '../ui/Link'
import Button from '../ui/Button'

function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-5 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-wide"
        >
          ANDREY RUKSHENAS
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Основная навигация"
        >
          <Link href="#projects" variant="muted">
            Проекты
          </Link>
          <Link href="#about" variant="muted">
            Обо мне
          </Link>
          <Link href="#contact" variant="muted">
            Контакты
          </Link>
        </nav>

        <Button className="shrink-0 px-4 py-2">Связаться</Button>
      </div>
    </header>
  )
}

export default Header
