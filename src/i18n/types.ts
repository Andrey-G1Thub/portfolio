export type Language = 'ru' | 'en'

export type ProjectId = 'bookez' | 'hakaton-react' | 'context-menu'

export interface Translations {
  navigation: {
    ariaLabel: string
    projects: string
    about: string
    contact: string
  }

  header: {
    switchToEnglish: string
    switchToRussian: string
    contactButton: string
  }

  footer: {
    contact: string
  }

  home: {
    hero: {
      role: string
      title: string
      description: string
      viewProjects: string
      contact: string
    }
    projects: {
      title: string
      description: string
      viewProject: string
      repository: string
      demo: string
    }
    about: {
      title: string
      description: string
    }
    stack: {
      title: string
    }
    journey: {
      title: string
    }
    certificates: {
      title: string
      viewCertificate: string
    }
    contact: {
      title: string
      description: string
      email: string
      github: string
    }
  }

  projectPage: {
    backToHome: string
    openDemo: string
    repository: string
  }

  projects: Record<
    ProjectId,
    {
      title: string
      description: string
    }
  >

  notFound: {
    title: string
    backToHome: string
  }
}
