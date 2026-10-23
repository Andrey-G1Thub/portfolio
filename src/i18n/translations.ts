import type { Language, Translations } from './types'

export const translations: Record<Language, Translations> = {
  ru: {
    navigation: {
      ariaLabel: 'Основная навигация',
      projects: 'Проекты',
      about: 'Обо мне',
      contact: 'Контакты',
    },

    header: {
      switchToEnglish: 'Переключить на английский',
      switchToRussian: 'Переключить на русский',
      contactButton: 'Связаться',
    },

    footer: {
      contact: 'Контакты',
    },

    home: {
      hero: {
        role: 'Junior Frontend Developer',
        title: 'Андрей Рукшенас',
        description:
          'Разрабатываю веб-приложения с React, TypeScript и современными инструментами.',
        viewProjects: 'Посмотреть проекты',
        contact: 'Связаться со мной',
      },

      projects: {
        title: 'Проекты',
        description: 'Избранные проекты и практические работы.',
        viewProject: 'Подробнее',
        repository: 'Репозиторий GitHub',
        demo: 'Открыть приложение',
      },

      about: {
        title: 'Обо мне',
        description:
          'Junior Frontend-разработчик, развивающий навыки создания современных веб-интерфейсов.',
        education: 'Обучение',
        educationDescription:
          'Завершил курс Frontend-разработчика и продолжаю закреплять знания на практике.',
        independentWork:
          'Самостоятельно изучаю технологии, решаю учебные задачи и развиваю собственные проекты.',
      },

      stack: {
        title: 'Технологии',
        groups: {
          frontend: 'Frontend',
          state: 'Управление состоянием',
          backend: 'Backend',
          tools: 'Инструменты',
        },
      },
      journey: {
        title: 'Мой путь',
        education:
          'Завершил курс профессиональной переподготовки по Frontend-разработке',
        educationPeriod: '19 мая 2025 — 15 апреля 2026',
        current: 'Продолжаю обучение, практикуюсь и развиваю портфолио.',
      },
      certificates: {
        title: 'Сертификаты',
        viewCertificate: 'Посмотреть сертификат',
        frontend: 'Курс Frontend-разработчика',
        greenApi: 'Сертификат Green API',
      },

      contact: {
        title: 'Контакты',
        description:
          'Открыт к предложениям о работе и профессиональному общению.',
        email: 'Написать на почту',
        github: 'Мой GitHub',
      },
    },

    projectPage: {
      backToHome: 'На главную',
      openDemo: 'Открыть приложение',
      repository: 'Репозиторий GitHub',
    },

    projects: {
      bookez: {
        title: 'BookEz',
        description: 'Дипломный проект — приложение для бронирования отелей.',
      },

      'hakaton-react': {
        title: 'HaKatonReact',
        description: 'Приложение с карточками, лайками и фильтрацией.',
      },

      'context-menu': {
        title: 'Context Menu',
        description: 'Проект с контекстным меню и интерактивными элементами.',
      },
    },

    notFound: {
      title: 'Страница не найдена',
      backToHome: 'Вернуться на главную',
    },
  },

  en: {
    navigation: {
      ariaLabel: 'Main navigation',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },

    header: {
      switchToEnglish: 'Switch to English',
      switchToRussian: 'Switch to Russian',
      contactButton: 'Contact',
    },

    footer: {
      contact: 'Contact',
    },

    home: {
      hero: {
        role: 'Junior Frontend Developer',
        title: 'Andrey Rukshenas',
        description:
          'I build web applications using React, TypeScript, and modern development tools.',
        viewProjects: 'View projects',
        contact: 'Get in touch',
      },

      projects: {
        title: 'Projects',
        description: 'Selected projects and practical work.',
        viewProject: 'Learn more',
        repository: 'GitHub repository',
        demo: 'Open application',
      },

      about: {
        title: 'About me',
        description:
          'Junior Frontend Developer improving my skills in building modern web interfaces.',
        education: 'Education',
        educationDescription:
          'Completed a Frontend Developer course and continue to strengthen my skills through practice.',
        independentWork:
          'I study technologies independently, solve practical assignments, and develop personal projects.',
      },

      stack: {
        title: 'Tech stack',
        groups: {
          frontend: 'Frontend',
          state: 'State Management',
          backend: 'Backend',
          tools: 'Tools',
        },
      },

      journey: {
        title: 'My journey',
        education:
          'Completed a professional retraining course in Frontend development',
        educationPeriod: 'May 19, 2025 — April 15, 2026',
        current: 'Continuing to learn, practice, and develop my portfolio.',
      },

      certificates: {
        title: 'Certificates',
        viewCertificate: 'View certificate',
        frontend: 'Frontend Developer course',
        greenApi: 'Green API certificate',
      },

      contact: {
        title: 'Contact',
        description: 'Open to job opportunities and professional connections.',
        email: 'Send an email',
        github: 'My GitHub',
      },
    },

    projectPage: {
      backToHome: 'Back to home',
      openDemo: 'Live demo',
      repository: 'GitHub repository',
    },

    projects: {
      bookez: {
        title: 'BookEz',
        description: 'Diploma project — a hotel booking application.',
      },

      'hakaton-react': {
        title: 'HaKatonReact',
        description: 'An application featuring cards, likes, and filtering.',
      },

      'context-menu': {
        title: 'Context Menu',
        description:
          'A project featuring a context menu and interactive elements.',
      },
    },

    notFound: {
      title: 'Page not found',
      backToHome: 'Back to home',
    },
  },
}
