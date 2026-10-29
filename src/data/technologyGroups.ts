import type { TechnologyGroup, Translations } from '@/i18n/types'
import { Code2, Database, Layers3, Wrench } from 'lucide-react'

type StackGroupTranslations = Translations['home']['stack']['groups']

export function getTechnologyGroups(
  groups: StackGroupTranslations,
): TechnologyGroup[] {
  return [
    {
      title: groups.frontend,
      icon: Code2,
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Vite',
        'Tailwind CSS',
      ],
    },
    {
      title: groups.state,
      icon: Layers3,
      technologies: ['Redux', 'Redux-Thunk', 'Context API'],
    },
    {
      title: groups.backend,
      icon: Database,
      technologies: [
        'Node.js',
        'Express',
        'REST API',
        'MongoDB',
        'Mongoose',
        'JWT',
        'bcrypt',
        'Docker',
        'Docker Compose',
      ],
    },
    {
      title: groups.tools,
      icon: Wrench,
      technologies: [
        'Git',
        'GitHub',
        'VS Code',
        'Cursor',
        'ChatGPT',
        'Gemini',
        'Postman',
      ],
    },
  ]
}
