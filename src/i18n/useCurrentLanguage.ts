import { useParams } from 'react-router-dom'

import { translations } from './translations'
import type { Language } from './types'

export function useCurrentLanguage() {
  const { lang } = useParams()

  const currentLanguage: Language = lang === 'en' ? 'en' : 'ru'
  const t = translations[currentLanguage]

  return { currentLanguage, t }
}
