import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { useCurrentLanguage } from '@/i18n/useCurrentLanguage'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  const { currentLanguage, t } = useCurrentLanguage()

  return (
    <div className="min-h-screen bg-page p-4 text-content">
      <Header />

      <main className="mx-auto max-w-content p-4">
        <h1 className="text-3xl font-bold">{t.notFound.title}</h1>

        <Link
          to={`/${currentLanguage}`}
          className="mt-4 inline-flex text-accent hover:brightness-110"
        >
          {t.notFound.backToHome}
        </Link>
      </main>

      <Footer />
    </div>
  )
}
export default NotFoundPage
