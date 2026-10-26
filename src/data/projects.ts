import bookezImage from '../../avatar/book-ez/book-ez.png'
import contextMenuImage from '../../avatar/context-api.png'
import hakatonImage from '../../avatar/hakaton1.png'

export const projects = [
  {
    id: 'bookez',
    image: bookezImage,
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Docker',
    ],
    repository: 'https://github.com/Andrey-G1Thub/bookez-hotel-booking',
  },
  {
    id: 'hakaton-react',
    image: hakatonImage,
    technologies: ['React', 'JavaScript', 'CSS'],
    repository: 'https://github.com/Andrey-G1Thub/HaKatonReact',
    demo: 'https://andrey-g1thub.github.io/HaKatonReact/',
  },
  {
    id: 'context-menu',
    image: contextMenuImage,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    repository: 'https://github.com/Artemsushko/context-menu',
    demo: 'https://artemsushko.github.io/context-menu/',
  },
] as const

export type Project = (typeof projects)[number]
