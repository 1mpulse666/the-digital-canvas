import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uk' | 'ru' | 'en';

interface Translations {
  nav: {
    about: string;
    skills: string;
    services: string;
    projects: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    available: string;
    greeting: string;
    name: string;
    description: string;
    viewWork: string;
    letsTalk: string;
    titles: string[];
  };
  about: {
    label: string;
    title: string;
    titleHighlight: string;
    description1: string;
    description2: string;
    cleanCode: string;
    cleanCodeDesc: string;
    modernDesign: string;
    modernDesignDesc: string;
    performance: string;
    performanceDesc: string;
    collaboration: string;
    collaborationDesc: string;
  };
  contact: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    email: string;
    location: string;
    available: string;
    availableDesc: string;
    yourName: string;
    yourEmail: string;
    subject: string;
    message: string;
    sendMessage: string;
    sending: string;
    messageSent: string;
    getBackSoon: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    toastTitle: string;
    toastDescription: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    connect: string;
    madeWith: string;
    builtWith: string;
  };
}

const translations: Record<Language, Translations> = {
  uk: {
    nav: {
      about: 'Про мене',
      skills: 'Навички',
      services: 'Послуги',
      projects: 'Проєкти',
      contact: 'Контакти',
      hireMe: 'Найняти мене',
    },
    hero: {
      available: 'Доступний для фріланс роботи',
      greeting: 'Привіт, я',
      name: 'Artem',
      description: 'Я створюю красиві, адаптивні та зручні веб-додатки. Перетворюю ідеї в реальність за допомогою чистого коду та креативних рішень.',
      viewWork: 'Переглянути роботи',
      letsTalk: 'Зв\'язатися',
      titles: ['Веб-розробник', 'UI/UX Ентузіаст', 'React Спеціаліст', 'Креативний Кодер'],
    },
    about: {
      label: '// Про мене',
      title: 'Захоплений',
      titleHighlight: 'Створенням',
      description1: 'Я фріланс веб-розробник з пристрастю до створення красивих, функціональних та орієнтованих на користувача цифрових продуктів. Маючи міцну основу в сучасних веб-технологіях, я перетворюю складні проблеми в прості, елегантні рішення.',
      description2: 'Моя подорож у веб-розробці почалася з цікавості і переросла в цілеспрямоване прагнення до досконалості. Кожен проєкт — це можливість розширити межі та створити щось надзвичайне.',
      cleanCode: 'Чистий код',
      cleanCodeDesc: 'Написання підтримуваного, масштабованого та добре задокументованого коду',
      modernDesign: 'Сучасний дизайн',
      modernDesignDesc: 'Створення візуально приголомшливих та інтуїтивних інтерфейсів',
      performance: 'Продуктивність',
      performanceDesc: 'Оптимізація для швидкості та плавного користувацького досвіду',
      collaboration: 'Співпраця',
      collaborationDesc: 'Тісна робота з клієнтами для втілення їхнього бачення в життя',
    },
    contact: {
      label: '// Зв\'язатися',
      title: 'Давайте працювати',
      titleHighlight: 'Разом',
      description: 'Маєте проєкт на думці? Буду радий почути про нього. Давайте створимо щось неймовірне разом.',
      email: 'Електронна пошта',
      location: 'Локація',
      available: 'Зараз доступний',
      availableDesc: 'Наразі я приймаю нові проєкти. Давайте обговоримо, як я можу допомогти втілити ваші ідеї в життя.',
      yourName: 'Ваше ім\'я',
      yourEmail: 'Ваша пошта',
      subject: 'Тема',
      message: 'Повідомлення',
      sendMessage: 'Надіслати',
      sending: 'Надсилання...',
      messageSent: 'Повідомлення надіслано!',
      getBackSoon: 'Я відповім вам якнайшвидше.',
      namePlaceholder: 'Іван Петренко',
      emailPlaceholder: 'ivan@example.com',
      subjectPlaceholder: 'Запит на проєкт',
      messagePlaceholder: 'Розкажіть про свій проєкт...',
      toastTitle: 'Повідомлення надіслано!',
      toastDescription: 'Дякую за звернення. Я відповім вам найближчим часом!',
    },
    footer: {
      description: 'Створення красивих, функціональних веб-додатків. Давайте створимо щось неймовірне разом.',
      quickLinks: 'Швидкі посилання',
      connect: 'Зв\'язок',
      madeWith: 'Зроблено з',
      builtWith: 'Створено на React + TypeScript',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      services: 'Услуги',
      projects: 'Проекты',
      contact: 'Контакты',
      hireMe: 'Нанять меня',
    },
    hero: {
      available: 'Доступен для фриланс работы',
      greeting: 'Привет, я',
      name: 'Artem',
      description: 'Я создаю красивые, адаптивные и удобные веб-приложения. Превращаю идеи в реальность с помощью чистого кода и креативных решений.',
      viewWork: 'Посмотреть работы',
      letsTalk: 'Связаться',
      titles: ['Веб-разработчик', 'UI/UX Энтузиаст', 'React Специалист', 'Креативный Кодер'],
    },
    about: {
      label: '// Обо мне',
      title: 'Увлечен',
      titleHighlight: 'Созданием',
      description1: 'Я фриланс веб-разработчик со страстью к созданию красивых, функциональных и ориентированных на пользователя цифровых продуктов. Имея прочную основу в современных веб-технологиях, я превращаю сложные проблемы в простые, элегантные решения.',
      description2: 'Мой путь в веб-разработке начался с любопытства и перерос в целеустремленное стремление к совершенству. Каждый проект — это возможность расширить границы и создать что-то необыкновенное.',
      cleanCode: 'Чистый код',
      cleanCodeDesc: 'Написание поддерживаемого, масштабируемого и хорошо документированного кода',
      modernDesign: 'Современный дизайн',
      modernDesignDesc: 'Создание визуально потрясающих и интуитивных интерфейсов',
      performance: 'Производительность',
      performanceDesc: 'Оптимизация для скорости и плавного пользовательского опыта',
      collaboration: 'Сотрудничество',
      collaborationDesc: 'Тесная работа с клиентами для воплощения их видения в жизнь',
    },
    contact: {
      label: '// Связаться',
      title: 'Давайте работать',
      titleHighlight: 'Вместе',
      description: 'Есть проект на уме? Буду рад услышать о нем. Давайте создадим что-то невероятное вместе.',
      email: 'Электронная почта',
      location: 'Локация',
      available: 'Сейчас доступен',
      availableDesc: 'В настоящее время я принимаю новые проекты. Давайте обсудим, как я могу помочь воплотить ваши идеи в жизнь.',
      yourName: 'Ваше имя',
      yourEmail: 'Ваша почта',
      subject: 'Тема',
      message: 'Сообщение',
      sendMessage: 'Отправить',
      sending: 'Отправка...',
      messageSent: 'Сообщение отправлено!',
      getBackSoon: 'Я отвечу вам как можно скорее.',
      namePlaceholder: 'Иван Петров',
      emailPlaceholder: 'ivan@example.com',
      subjectPlaceholder: 'Запрос на проект',
      messagePlaceholder: 'Расскажите о своем проекте...',
      toastTitle: 'Сообщение отправлено!',
      toastDescription: 'Спасибо за обращение. Я отвечу вам в ближайшее время!',
    },
    footer: {
      description: 'Создание красивых, функциональных веб-приложений. Давайте создадим что-то невероятное вместе.',
      quickLinks: 'Быстрые ссылки',
      connect: 'Связь',
      madeWith: 'Сделано с',
      builtWith: 'Создано на React + TypeScript',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      hireMe: 'Hire Me',
    },
    hero: {
      available: 'Available for freelance work',
      greeting: "Hi, I'm",
      name: 'Artem',
      description: 'I craft beautiful, responsive, and user-friendly web experiences. Turning ideas into reality with clean code and creative solutions.',
      viewWork: 'View My Work',
      letsTalk: "Let's Talk",
      titles: ['Web Developer', 'UI/UX Enthusiast', 'React Specialist', 'Creative Coder'],
    },
    about: {
      label: '// About Me',
      title: 'Passionate About',
      titleHighlight: 'Creating',
      description1: "I'm a freelance web developer with a passion for building beautiful, functional, and user-centered digital experiences. With a strong foundation in modern web technologies, I transform complex problems into simple, elegant solutions.",
      description2: 'My journey in web development started with curiosity and has evolved into a dedicated pursuit of excellence. Every project is an opportunity to push boundaries and deliver something extraordinary.',
      cleanCode: 'Clean Code',
      cleanCodeDesc: 'Writing maintainable, scalable, and well-documented code',
      modernDesign: 'Modern Design',
      modernDesignDesc: 'Creating visually stunning and intuitive user interfaces',
      performance: 'Performance',
      performanceDesc: 'Optimizing for speed and smooth user experiences',
      collaboration: 'Collaboration',
      collaborationDesc: 'Working closely with clients to bring their vision to life',
    },
    contact: {
      label: '// Get In Touch',
      title: "Let's Work",
      titleHighlight: 'Together',
      description: "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
      email: 'Email',
      location: 'Location',
      available: 'Currently Available',
      availableDesc: "I'm currently accepting new projects. Let's discuss how I can help bring your ideas to life.",
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      messageSent: 'Message Sent!',
      getBackSoon: "I'll get back to you as soon as possible.",
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      subjectPlaceholder: 'Project Inquiry',
      messagePlaceholder: 'Tell me about your project...',
      toastTitle: 'Message sent!',
      toastDescription: "Thanks for reaching out. I'll get back to you soon!",
    },
    footer: {
      description: "Building beautiful, functional web experiences. Let's create something amazing together.",
      quickLinks: 'Quick Links',
      connect: 'Connect',
      madeWith: 'Made with',
      builtWith: 'Built with React + TypeScript',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('uk');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
