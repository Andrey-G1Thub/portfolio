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
        role: 'Junior Fullstack Developer',
        title: 'Андрей Рукшенас',
        description:
          'Разрабатываю веб-приложения на React и TypeScript, создаю серверную часть на Node.js и Express. Работаю с REST API, базами данных и развёртыванием приложений. Использую современные инструменты разработки, включая AI, и постоянно развиваю технические навыки.',
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
          'Мой путь в разработке начался с интереса к созданию веб-приложений и стремления развиваться в IT. У меня высшее техническое и экономическое образование, а также инженерный опыт, который сформировал  системный подход к задачам, внимание к деталям и ответственность за результат.',
        education: 'Образование',
        educationDescription:
          'В 2025–2026 годах я прошёл профессиональную переподготовку по программе «Фронтенд-разработчик» в Result University и получил диплом и сертификат. В ходе обучения и работы над проектами получил практический опыт разработки frontend- и backend-частей приложений, работы с базами данных, тестированием и развёртыванием.',
        independentWork:
          'Мой основной стек — React, TypeScript, Node.js и Express. В учебных и самостоятельных проектах я реализовывал клиентские интерфейсы, серверную логикику и REST API, работал с базами данных и развёртыванием приложений. В дипломном проекте BookEz прошёл полный цикл разработки fullstack-приложения — от реализации функциональности до настройки Docker и развёртывания на VPS. В разработке использую техническую документацию и AI-инструменты для анализа задач, изучения новых решений, проверки кода и отладки. Для меня важно понимать логику реализации, проверять результат и постепенно повышать самостоятельность. Продолжаю развивать навыки fullstack-разработки, совершенствовать качество кода и расширять портфолио новыми проектами.',
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
          'Завершил профессиональную переподготовку по Frontend-разработке',
        educationPeriod: '19 мая 2025 — 15 апреля 2026',
        current:
          'Продолжаю практиковаться, развивать портфолио и углублять знания в Frontend и Fullstack-разработке.',
      },

      certificates: {
        title: 'Образование и сертификаты',
        viewCertificate: 'Открыть документ',
        diploma: 'Диплом о профессиональной переподготовке',
        frontend: 'Frontend-разработчик — Result University',
        greenApi: 'Разработка и интеграция чат-ботов на базе GREEN-API',
      },

      contact: {
        title: 'Давайте общаться',
        description:
          'Открыт к предложениям о работе, профессиональному общению и новым задачам в веб-разработке.',
        email: 'Написать на почту',
        github: 'Мой GitHub',
        copyEmail: 'Копировать email',
        emailCopied: 'Email скопирован!',
        emailCopyError: 'Не удалось скопировать email. Скопируй адрес вручную.',
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
        description: 'BookEz — Fullstack-сервис бронирования отелей',
        overview:
          'Дипломный проект, разработанный в рамках обучения в Result University. За четыре недели активной разработки создал fullstack-приложение на React и TypeScript с серверной частью на Node.js и Express.',
        features: {
          title: 'Основные возможности',
          items: [
            'Поиск и фильтрация отелей с учётом доступности номеров на выбранные даты.',
            'Регистрация и авторизация с использованием JWT и bcrypt.',
            'Ролевая модель доступа: Admin, Manager и User.',
            'Управление отелями, номерами и бронированиями.',
            'Отзывы и загрузка изображений.',
            'REST API и хранение данных в MongoDB с использованием Mongoose.',
          ],
        },
        contribution: {
          title: 'Мой вклад',
          description:
            'Самостоятельно реализовал клиентскую и серверную части, связал frontend с REST API, разработал модели данных и логику доступа по ролям. Реализовал проверку пересечения дат при бронировании, загрузку изображений через Multer и интерфейсы управления. Развёртывание: Подготовил multi-stage Docker-сборку, объединил приложение и MongoDB с помощью Docker Compose и настроил развёртывание на VPS под Ubuntu. Настроил хранение данных и загруженных изображений через volumes.',
        },
        technologies: {
          title: 'Технологии',
          items: [
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
          'Проект на React с карточками сотрудников, лайками и фильтрацией данных.',
        overview:
          'Учебный проект, созданный в рамках React-хакатона за 24 часа.',
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
            'Самостоятельно реализовал проект по требованиям задания, используя AI-инструменты в процессе разработки. Проверял работу компонентов и взаимодействие функций, дорабатывал решение в соответствии с требованиями.',
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
        description: 'Context Menu — интерактивное контекстное меню',
        overview:
          'Командный учебный проект на JavaScript, разработанный в рамках курса.',
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
            'Реализовал таймер, разработал подсчёт кликов пользователя за определённый промежуток времени, участвовал в командной разработке и объединении изменений в общий проект с использованием Git.',
        },
        technologies: {
          title: 'Технологии',
          items: ['JavaScript', 'HTML', 'CSS', 'Git'],
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
        role: 'Junior Fullstack Developer',
        title: 'Andrey Rukshenas',
        description:
          'I develop web applications using React and TypeScript, with server-side functionality built using Node.js and Express. I work with REST APIs, databases, and application deployment. I use modern development tools, including AI, and continuously expand my technical skills.',
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
          'My path in development began with an interest in creating web applications and a desire to develop in IT. I have higher technical and economic education, as well as engineering experience, which helped to form a systematic approach to tasks, attention to detail and responsibility for the result.',
        education: 'Education',
        educationDescription:
          'In 2025–2026, I completed professional retraining under the Frontend Developer program at Result University and received a diploma and a certificate. Through my studies and project work, I gained practical experience in frontend and backend development, working with databases, testing, and application deployment.',
        independentWork:
          'My main technology stack includes React, TypeScript, Node.js, and Express. In educational and personal projects, I have developed user interfaces, implemented server-side logic and REST APIs, worked with databases, and deployed applications. For my graduation project, BookEz, I worked through the full development cycle of a fullstack application, from implementing its functionality to configuring Docker and deploying it to a VPS. I use technical documentation and AI tools to analyze tasks, explore unfamiliar solutions, review code, and debug issues. I aim not only to deliver working software but also to understand implementation decisions, verify results, and become increasingly independent in my work. I continue to strengthen my fullstack development skills, improve code quality, and expand my portfolio with new projects.',
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
          'Completed a professional retraining  in Frontend Development',

        educationPeriod: 'May 19, 2025 — April 15, 2026',
        current:
          'Continuing to practice, develop my portfolio, and deepen my knowledge of Frontend and Fullstack development.',
      },

      certificates: {
        title: 'Education & Certificates',
        viewCertificate: 'View document',
        diploma: 'Professional Retraining Diploma',
        frontend: 'Frontend Developer — Result University',
        greenApi: 'Chatbot Development and Integration with GREEN-API',
      },

      contact: {
        title: "Let's Connect",
        description:
          'Open to job offers, professional networking, and new challenges in web development',
        email: 'Send an email',
        github: 'My GitHub',
        copyEmail: 'Copy email',
        emailCopied: 'Email copied!',
        emailCopyError:
          'Could not copy email. Please copy the address manually.',
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
        description: 'BookEz — Fullstack-hotel booking service',
        overview:
          'A graduation project developed as part of a study at Result University. In four weeks of active development, I created a fullstack application in React and TypeScript with a server part on Node.js and Express.',
        features: {
          title: 'Key Features',
          items: [
            'Search and filter hotels based on room availability on selected dates.',
            'Registration and authorization using JWT and bcrypt',
            'Role model of access: Admin, Manager and User',
            'Management of hotels, rooms and bookings',
            'Reviews and image uploads',
            'REST API and data storage in MongoDB using Mongoose.',
          ],
        },
        contribution: {
          title: 'My Contribution',
          description:
            'Independently developed the client and server sides of the application, integrated the frontend with the REST API, and implemented data models and role-based access control. Implemented booking date-overlap validation, image uploads using Multer, and management interfaces. Deployment: Prepared a multi-stage Docker build, configured the application and MongoDB using Docker Compose, and deployed the application to an Ubuntu VPS. Configured persistent storage for database data and uploaded images using Docker volumes.',
        },
        technologies: {
          title: 'Technologies',
          items: [
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
          'A React project with  employee cards, likes, and data filtering.',
        overview:
          'A training project created as part of the React hackathon in 24 hours.',
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
            'Independently implemented the project according to the requirements of the assignment, using AI tools during the development process. I checked the operation of components and the interaction of functions, and finalized the solution in accordance with the requirements.',
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
        description: 'Context Menu — interactive context menu',
        overview:
          'A JavaScript team learning project developed as part of the course.',
        features: {
          title: 'Key Features',
          items: ['Custom context menu', 'Interactive UI elements'],
        },
        contribution: {
          title: 'My Contribution',
          description:
            'Implemented a timer and click counting over a specified time interval. Also participated in team development and merging changes using Git',
        },
        technologies: {
          title: 'Technologies',
          items: ['JavaScript', 'HTML', 'CSS', 'Git'],
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
