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
        role: 'Frontend / Fullstack Developer',
        title: 'Андрей Рукшенас',
        description:
          'Создаю веб-приложения на React и TypeScript, изучаю fullstack-разработку и использую AI-инструменты для анализа задач и поиска решений.',
        viewProjects: 'Посмотреть проекты',
        contact: 'Связаться со мной',
      },

      projects: {
        title: 'Избранные проекты',
        description:
          'Практические проекты, в которых я применял знания Frontend и Fullstack-разработки.',
        viewProject: 'Подробнее',
        repository: 'Репозиторий GitHub',
        demo: 'Открыть демо',
      },

      about: {
        title: 'Обо мне',
        description:
          'У меня техническое и экономическое образование, а также инженерный бэкграунд. В 2025 году я начал профессиональный путь в веб-разработке и прошёл обучение на Frontend-разработчика в Result University.',
        education: 'Образование',
        educationDescription:
          'Завершил обучение на Frontend-разработчика в Result University в апреле 2026 года. Ранее получил высшее техническое и экономическое образование.',
        independentWork:
          'Мой основной фокус — React, TypeScript и современные веб-интерфейсы. Мне также интересны серверная логика, базы данных и развёртывание приложений. Использую документацию, практические эксперименты и AI-инструменты для анализа задач, обучения и поиска решений. Ценю системный подход, самостоятельность и ответственность за результат.',
      },

      stack: {
        title: 'Технологии',
        groups: {
          frontend: 'Frontend',
          state: 'Управление состоянием',
          backend: 'Backend',
          tools: 'Инструменты и AI',
        },
      },

      journey: {
        title: 'Мой путь',
        education:
          'Завершил курс профессиональной переподготовки по Frontend-разработке',
        educationPeriod: '19 мая 2025 — 15 апреля 2026',
        current:
          'Продолжаю практиковаться, развивать портфолио и углублять знания в Frontend и Fullstack-разработке.',
      },

      certificates: {
        title: 'Сертификаты',
        viewCertificate: 'Посмотреть сертификат',
        frontend: 'Frontend-разработчик — Result University',
        greenApi: 'Разработка и интеграция чат-ботов на базе GREEN-API',
      },

      contact: {
        title: 'Давайте общаться',
        description:
          'Открыт к предложениям о работе, профессиональному общению и новым задачам в веб-разработке.',
        email: 'Написать на почту',
        github: 'Мой GitHub',
      },
    },

    projectPage: {
      backToHome: 'На главную',
      openDemo: 'Открыть демо',
      repository: 'Репозиторий GitHub',
    },

    projects: {
      bookez: {
        title: 'BookEz',
        description:
          'Дипломный Fullstack-проект — приложение для бронирования отелей с системой ролей, JWT-авторизацией, поиском и фильтрацией. Включает React, TypeScript, Node.js, Express, MongoDB и Docker.',
      },

      'hakaton-react': {
        title: 'HaKatonReact',
        description:
          'Проект React-хакатона: интерфейс с динамическими карточками сотрудников, лайками и фильтрацией данных. Мой вклад включал разработку карточек, лайков и фильтрации по заданию.',
      },

      'context-menu': {
        title: 'Context Menu',
        description:
          'Командный JavaScript-проект с кастомным контекстным меню и интерактивными элементами. Работа над проектом включала практику взаимодействия с кодом команды и Git.',
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
        role: 'Junior Frontend / Fullstack Developer',
        title: 'Andrey Rukshenas',
        description:
          'I build web applications with React and TypeScript, explore fullstack development, and use AI tools to analyze tasks and explore solutions.',
        viewProjects: 'View projects',
        contact: 'Get in touch',
      },

      projects: {
        title: 'Selected Projects',
        description:
          'Practical projects where I applied my Frontend and Fullstack development skills.',
        viewProject: 'Learn more',
        repository: 'GitHub repository',
        demo: 'Live demo',
      },

      about: {
        title: 'About me',
        description:
          'I have backgrounds in engineering and economics. In 2025, I began my professional journey in web development and completed Frontend Developer training at Result University.',
        education: 'Education',
        educationDescription:
          'Completed Frontend Developer training at Result University in April 2026. Previously earned higher education qualifications in engineering and economics.',
        independentWork:
          'My main focus is React, TypeScript, and modern web interfaces. I am also interested in server-side logic, databases, and deployment. I use documentation, hands-on experimentation, and AI tools to analyze tasks, learn, and explore solutions. I value a systematic approach, independence, and responsibility for results.',
      },

      stack: {
        title: 'Tech Stack',
        groups: {
          frontend: 'Frontend',
          state: 'State Management',
          backend: 'Backend',
          tools: 'Tools & AI',
        },
      },

      journey: {
        title: 'My Journey',
        education:
          'Completed a professional retraining course in Frontend development',

        educationPeriod: 'May 19, 2025 — April 15, 2026',
        current:
          'Continuing to practice, develop my portfolio, and deepen my knowledge of Frontend and Fullstack development.',
      },

      certificates: {
        title: 'Certificates',
        viewCertificate: 'View certificate',
        frontend: 'Frontend Developer — Result University',
        greenApi: 'Chatbot Development and Integration with GREEN-API',
      },

      contact: {
        title: "Let's Connect",
        description:
          'Open to job opportunities, professional connections, and new challenges in web development.',
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
        description:
          'A fullstack diploma project: a hotel booking application with role-based access, JWT authentication, search, and filtering. Built with React, TypeScript, Node.js, Express, MongoDB, and Docker.',
      },

      'hakaton-react': {
        title: 'HaKatonReact',
        description:
          'A React hackathon project featuring dynamic employee cards, likes, and data filtering. My assigned work included implementing the cards, likes, and filtering.',
      },

      'context-menu': {
        title: 'Context Menu',
        description:
          'A collaborative JavaScript project featuring a custom context menu and interactive elements. The project provided practice working with a team codebase and Git.',
      },
    },

    notFound: {
      title: 'Page not found',
      backToHome: 'Back to home',
    },
  },
}
