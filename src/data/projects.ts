import bookezImage from '../../avatar/book-ez/book-ez.png'
import contextMenuImage from '../../avatar/context-api.png'
import hakatonImage from '../../avatar/hakaton1.png'

import type { ProjectId } from '@/i18n/types'

type ProjectData = {
  id: ProjectId
  image: string
  technologies: readonly string[]
  repository: string
  demo?: string
  next: ProjectId
}

export const projects = [
  {
    id: 'bookez',
    image: bookezImage,
    technologies: [
      'React',
      'TypeScript',
      'Redux-Thunk',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Docker',
      'Docker Compose',
      'Tailwind CSS',
    ],
    repository: 'https://github.com/Andrey-G1Thub/bookez-hotel-booking',
    next: 'hakaton-react',
  },
  {
    id: 'hakaton-react',
    image: hakatonImage,
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
    repository: 'https://github.com/Andrey-G1Thub/HaKatonReact',
    demo: 'https://andrey-g1thub.github.io/HaKatonReact/',
    next: 'context-menu',
  },
  {
    id: 'context-menu',
    image: contextMenuImage,
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
    repository: 'https://github.com/Artemsushko/context-menu',
    demo: 'https://artemsushko.github.io/context-menu/',
    next: 'bookez',
  },
] satisfies readonly ProjectData[]

export type Project = (typeof projects)[number]
