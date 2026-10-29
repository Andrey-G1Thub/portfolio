import { createHashRouter, Navigate } from 'react-router-dom'
import App from './App'

import LanguageGuard from '@/components/layout/LanguageGuard'
import NotFoundPage from '@/components/layout/NotFoundPage'
import ProjectPage from './pages/ProjectPage'



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
