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
          'Junior-разработчик, который развивает навыки создания современных веб-интерфейсов.',
      },

      stack: {
        title: 'Технологии',
      },

      journey: {
        title: 'Мой путь',
      },

      certificates: {
        title: 'Сертификаты',
        viewCertificate: 'Посмотреть сертификат',
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
          'A junior developer improving his skills in building modern web interfaces.',
      },

      stack: {
        title: 'Tech stack',
      },

      journey: {
        title: 'My journey',
      },

      certificates: {
        title: 'Certificates',
        viewCertificate: 'View certificate',
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
