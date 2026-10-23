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
import type { Language, ProjectId } from './i18n/types'

const projects: Record<
  ProjectId,
  {
    repository: string
    demo?: string
  }
> = {
  bookez: {
    repository: 'https://github.com/Andrey-G1Thub/bookez-hotel-booking',
  },
  'hakaton-react': {
    repository: 'https://github.com/Andrey-G1Thub/HaKatonReact',
    demo: 'https://andrey-g1thub.github.io/HaKatonReact/',
  },
  'context-menu': {
    repository: 'https://github.com/Artemsushko/context-menu',
    demo: 'https://artemsushko.github.io/context-menu/',
  },
}

// const projects: Record<
//   ProjectId,
//   {
//     title: string
//     description: Record<Language, string>
//     repository: string
//     demo?: string
//   }
// > = {
//   bookez: {
//     title: 'BookEz',
//     description: {
//       ru: 'Дипломный проект — приложение для бронирования отелей.',
//       en: 'Diploma project — a hotel booking application.',
//     },
//     repository: 'https://github.com/Andrey-G1Thub/bookez-hotel-booking',
//   },
//   'hakaton-react': {
//     title: 'HaKatonReact',
//     description: {
//       ru: 'Приложение с карточками, лайками и фильтрацией.',
//       en: 'An application featuring cards, likes and filtering.',
//     },
//     repository: 'https://github.com/Andrey-G1Thub/HaKatonReact',
//     demo: 'https://andrey-g1thub.github.io/HaKatonReact/',
//   },
//   'context-menu': {
//     title: 'Context Menu',
//     description: {
//       ru: 'Проект с контекстным меню и интерактивными элементами.',
//       en: 'A project featuring a context menu and interactive elements.',
//     },
//     repository: 'https://github.com/Artemsushko/context-menu',
//     demo: 'https://artemsushko.github.io/context-menu/',
//   },
// }

function LanguageGuard() {
  const { lang } = useParams()

  if (lang !== 'ru' && lang !== 'en') {
    return <Navigate to="/ru" replace />
  }

  return <Outlet />
}

function ProjectPage({ projectId }: { projectId: ProjectId }) {
  const { lang } = useParams()
  const language: Language = lang === 'en' ? 'en' : 'ru'
  const t = translations[language]
  const project = projects[projectId]
  const projectText = t.projects[projectId]

  return (
    <div className="min-h-screen bg-page p-4 text-content">
      <Header />

      <main className="mx-auto max-w-content p-4">
        <Link
          to={`/${language}`}
          className="text-text-secondary transition-colors hover:text-content"
        >
          {t.projectPage.backToHome}
        </Link>

        <h1 className="mt-8 text-3xl font-bold">{projectText.title}</h1>

        <p className="mt-4 text-text-secondary">{projectText.description}</p>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-accent transition-colors hover:brightness-110"
            >
              {t.projectPage.openDemo}
            </a>
          )}

          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:brightness-110"
          >
            {t.projectPage.repository}
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
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
