import {
  createHashRouter,
  Link,
  Navigate,
  Outlet,
  useParams,
} from 'react-router-dom'
import App from './App'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { translations } from './i18n/translations'
import type { Language } from './i18n/types'

import ProjectPage from './pages/ProjectPage'

function LanguageGuard() {
  const { lang } = useParams()

  if (lang !== 'ru' && lang !== 'en') {
    return <Navigate to="/ru" replace />
  }

  return <Outlet />
}

function NotFoundPage() {
  const { lang } = useParams()
  const language: Language = lang === 'en' ? 'en' : 'ru'
  const t = translations[language]

  return (
    <div className="min-h-screen bg-page p-4 text-content">
      <Header />

      <main className="mx-auto max-w-content p-4">
        <h1 className="text-3xl font-bold">{t.notFound.title}</h1>

        <Link
          to={`/${language}`}
          className="mt-4 inline-flex text-accent hover:brightness-110"
        >
          {t.notFound.backToHome}
        </Link>
      </main>

      <Footer />
    </div>
  )
}

export const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/ru" replace />,
  },
  {
    path: '/:lang',
    element: <LanguageGuard />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'projects/bookez',
        element: <ProjectPage projectId="bookez" />,
      },
      {
        path: 'projects/hakaton-react',
        element: <ProjectPage projectId="hakaton-react" />,
      },
      {
        path: 'projects/context-menu',
        element: <ProjectPage projectId="context-menu" />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
