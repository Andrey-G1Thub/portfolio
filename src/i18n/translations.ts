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
          'Дипломный Fullstack-проект — приложение для бронирования отелей с поиском, фильтрацией, JWT-авторизацией и системой ролей.',
        overview:
          'Веб-приложение для поиска и бронирования отелей. Проект объединяет клиентскую часть, серверную логику и работу с базой данных.',
        features: {
          title: 'Основные возможности',
          items: [
            'Поиск и фильтрация отелей',
            'Регистрация и авторизация с JWT',
            'Разграничение доступа по ролям',
            'Серверная обработка запросов и работа с MongoDB',
          ],
        },
        contribution: {
          title: 'Мой вклад',
          description:
            'Дипломный проект, над которым я работал в рамках обучения Fullstack-разработке. Реализовывал и изучал взаимодействие клиентской и серверной частей приложения.',
        },
        technologies: {
          title: 'Технологии',
          items: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
            'Docker',
          ],
        },
        gallery: {
          title: 'Скриншоты проекта',
          alt: 'Скриншот приложения BookEz',
        },
        demoStatus:
          'Публичное демо временно недоступно. Проект можно изучить в репозитории.',
        nextProject: 'HaKatonReact',
      },

      'hakaton-react': {
        title: 'HaKatonReact',
        description:
          'Проект React-хакатона с карточками сотрудников, лайками и фильтрацией данных.',
        overview:
          'Практический командный проект, созданный в рамках задания на React. Интерфейс позволяет работать с карточками и фильтровать отображаемые данные.',
        features: {
          title: 'Основные возможности',
          items: [
            'Отображение карточек',
            'Добавление и снятие лайков',
            'Фильтрация данных',
            'Интерактивное взаимодействие с интерфейсом',
          ],
        },
        contribution: {
          title: 'Мой вклад',
          description:
            'С помощью AI-инструментов я реализовал компоненты карточек, логику лайков и фильтрацию в соответствии с требованиями задания.',
        },
        technologies: {
          title: 'Технологии',
          items: ['React', 'JavaScript', 'CSS'],
        },
        gallery: {
          title: 'Скриншоты проекта',
          alt: 'Скриншот React-проекта HaKatonReact',
        },
        demoStatus: 'Демо доступно онлайн.',
        nextProject: 'Context Menu',
      },

      'context-menu': {
        title: 'Context Menu',
        description:
          'Командный JavaScript-проект с контекстным меню и интерактивными элементами.',
        overview:
          'Учебный командный проект, посвящённый созданию интерактивных элементов интерфейса на JavaScript.',
        features: {
          title: 'Основные возможности',
          items: [
            'Пользовательское контекстное меню',
            'Интерактивные элементы интерфейса',
          ],
        },
        contribution: {
          title: 'Мой вклад',
          description:
            'Участвовал в командной разработке учебного проекта. Работа помогла получить практический опыт взаимодействия с общим кодом и Git.',
        },
        technologies: {
          title: 'Технологии',
          items: ['JavaScript', 'HTML', 'CSS'],
        },
        gallery: {
          title: 'Скриншоты проекта',
          alt: 'Скриншот проекта Context Menu',
        },
        demoStatus: 'Демо доступно онлайн.',
        nextProject: 'BookEz',
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
          'A fullstack diploma project — a hotel booking application with search, filtering, JWT authentication, and role-based access.',
        overview:
          'A web application for searching and booking hotels. The project combines a client-side interface, server-side logic, and database operations.',
        features: {
          title: 'Key Features',
          items: [
            'Hotel search and filtering',
            'Registration and JWT authentication',
            'Role-based access control',
            'Server-side request handling and MongoDB integration',
          ],
        },
        contribution: {
          title: 'My Contribution',
          description:
            'A diploma project developed during my Fullstack training. I worked on and studied the interaction between the client-side and server-side parts of the application.',
        },
        technologies: {
          title: 'Technologies',
          items: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
            'Docker',
          ],
        },
        gallery: {
          title: 'Project Screenshots',
          alt: 'BookEz application screenshot',
        },
        demoStatus:
          'The public demo is currently unavailable. You can explore the source code in the repository.',
        nextProject: 'HaKatonReact',
      },

      'hakaton-react': {
        title: 'HaKatonReact',
        description:
          'A React hackathon project featuring employee cards, likes, and data filtering.',
        overview:
          'A team project built as part of a React assignment. The interface allows users to interact with cards and filter displayed data.',
        features: {
          title: 'Key Features',
          items: [
            'Card-based interface',
            'Like and unlike interactions',
            'Data filtering',
            'Interactive UI elements',
          ],
        },
        contribution: {
          title: 'My Contribution',
          description:
            'With the help of AI tools, I implemented the card components, like functionality, and filtering according to the assignment requirements.',
        },
        technologies: {
          title: 'Technologies',
          items: ['React', 'JavaScript', 'CSS'],
        },
        gallery: {
          title: 'Project Screenshots',
          alt: 'HaKatonReact project screenshot',
        },
        demoStatus: 'A live demo is available.',
        nextProject: 'Context Menu',
      },

      'context-menu': {
        title: 'Context Menu',
        description:
          'A collaborative JavaScript project featuring a custom context menu and interactive elements.',
        overview:
          'A team learning project focused on building interactive interface elements with JavaScript.',
        features: {
          title: 'Key Features',
          items: ['Custom context menu', 'Interactive UI elements'],
        },
        contribution: {
          title: 'My Contribution',
          description:
            'Contributed to a team learning project and gained practical experience working with a shared codebase and Git. ',
        },
        technologies: {
          title: 'Technologies',
          items: ['JavaScript', 'HTML', 'CSS'],
        },
        gallery: {
          title: 'Project Screenshots',
          alt: 'Context Menu project screenshot',
        },
        demoStatus: 'A live demo is available.',
        nextProject: 'BookEz',
      },
    },

    notFound: {
      title: 'Page not found',
      backToHome: 'Back to home',
    },
  },
}
