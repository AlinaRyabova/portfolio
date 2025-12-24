import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/AlinaRyabova", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alina-ryabova/",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:alinavr7@gmail.com", icon: Mail },
  { name: "Telegram", href: "https://t.me/R_Alina_V", icon: Send },
  { name: "CV", href: "/AlinaRiabova_CV.pdf", icon: FileText },
];

export const DATA = {
  en: {
    hero: {
      role: "Junior Fullstack Developer",
      title: "Precision focused Fullstack Developer.",
      description:
        "Combining 25 years of leadership experience with modern web technologies like Next.js and Node.js.",
      cta: "Contact Me",
      downloadCv: "Download CV",
    },
    about: {
      title: "About Me",
      description:
        "I am a disciplined Junior Developer ensuring high-quality results. Currently mastering Software Engineering at Neoversity (Master's degree). My background in management (Head of Pharmacy, 25 years) helps me effectively communicate in teams and solve complex problems.",
      quote:
        "My background in pharmacy taught me precision and responsibility. Now I apply these principles to build reliable backend systems.",
      features: [
        {
          title: "25 Years Management",
          description:
            "Experience as Head of Pharmacy. Leadership & Team management.",
        },
        {
          title: "Master's Degree",
          description:
            "Software Engineering at Neoversity. Academic approach to code.",
        },
        {
          title: "Fullstack Focus",
          description: "Node.js, Next.js, SQL & NoSQL databases.",
        },
        {
          title: "Soft Skills",
          description: "Disciplined, fast learner, problem solver.",
        },
      ],
    },
    skills: {
      title: "My Skills",
      categories: [
        {
          category: "Backend",
          items: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "REST API",
          ],
        },
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
        },
        {
          category: "Tools",
          items: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Postman"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "YogaWisdom",
          role: "Tech Lead & Fullstack",
          description:
            "Meditation and yoga philosophy platform. Implemented secure auth, progress tracking, and admin dashboard.",
          tags: ["Next.js 16", "PostgreSQL", "Drizzle ORM", "Tailwind"],
          image: "/projects/yoga.jpg",
          links: { demo: "https://yogawisdom.space", github: "" },
        },
        {
          title: "Storinky",
          role: "Backend Developer",
          description:
            "Ukrainian book social platform. Developed REST API for Users/Awards. 100% Volunteer project.",
          tags: ["Node.js", "Express", "MongoDB", "Swagger", "Jest"],
          image: "/projects/storinky.jpg",
          links: { demo: "https://www.storinky.co.ua/", github: "" },
        },
        {
          title: "FreedomCamper",
          role: "Frontend Developer",
          description:
            "Camper rental application. Features catalog filtering, favorites system, and responsive design.",
          tags: ["React", "Vite", "Redux", "Axios"],
          image: "/projects/camper.jpg",
          links: {
            demo: "https://freedom-camper.vercel.app",
            github: "https://github.com/AlinaRyabova/FreedomCamper",
          },
        },
      ],
    },
    footer: {
      title: "Let's work together!",
      text: "I am open to new opportunities and interesting projects. Feel free to contact me.",
      rights: "All rights reserved.",
    },
  },
  uk: {
    hero: {
      role: "Junior Fullstack Developer",
      title: "Fullstack розробник, сфокусований на точності.",
      description:
        "Я перетворюю складні задачі на чистий код. Поєдную 25 років управлінського досвіду з сучасним стеком технологій (Next.js, Node.js).",
      cta: "Зв'язатись зі мною",
      downloadCv: "Завантажити CV",
    },
    about: {
      title: "Про мене",
      description:
        "Я дисциплінований Junior розробник, націлений на якісний результат. Зараз здобуваю ступінь магістра програмної інженерії в Neoversity. Мій управлінський досвід (завідувач аптеки, 25 років) допомагає мені ефективно комунікувати в команді та вирішувати складні проблеми.",
      quote:
        "Мій досвід у фармації навчив мене точності та відповідальності. Тепер я застосовую ці принципи для побудови надійних backend систем.",
      features: [
        {
          title: "25 років управління",
          description:
            "Досвід завідувача аптеки. Лідерство та управління командою.",
        },
        {
          title: "Ступінь Магістра",
          description:
            "Програмна інженерія в Neoversity. Академічний підхід до коду.",
        },
        {
          title: "Fullstack фокус",
          description: "Node.js, Next.js, SQL та NoSQL бази даних.",
        },
        {
          title: "Soft Skills",
          description: "Дисципліна, швидке навчання, вирішення проблем.",
        },
      ],
    },
    skills: {
      title: "Навички",
      categories: [
        {
          category: "Backend",
          items: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "REST API",
          ],
        },
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
        },
        {
          category: "Інструменти",
          items: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Postman"],
        },
      ],
    },
    projects: {
      title: "Проєкти",
      items: [
        {
          title: "YogaWisdom",
          role: "Tech Lead & Fullstack",
          description:
            "Платформа для медитації та філософії йоги. Реалізовано авторизацію, трекінг прогресу та адмін-панель.",
          tags: ["Next.js 16", "PostgreSQL", "Drizzle ORM", "Tailwind"],
          image: "/projects/yoga.jpg",
          links: { demo: "https://yogawisdom.space", github: "" },
        },
        {
          title: "Storinky",
          role: "Backend Developer",
          description:
            "Українська соціальна платформа для читачів. Розробила REST API для користувачів та нагород. Волонтерський проєкт.",
          tags: ["Node.js", "Express", "MongoDB", "Swagger", "Jest"],
          image: "/projects/storinky.jpg",
          links: { demo: "https://www.storinky.co.ua/", github: "" },
        },
        {
          title: "FreedomCamper",
          role: "Frontend Developer",
          description:
            "Сервіс оренди кемперів. Реалізовано фільтрацію каталогу, систему обраного та адаптивний дизайн.",
          tags: ["React", "Vite", "Redux", "Axios"],
          image: "/projects/camper.jpg",
          links: {
            demo: "https://freedom-camper.vercel.app",
            github: "https://github.com/AlinaRyabova/FreedomCamper",
          },
        },
      ],
    },
    footer: {
      title: "Давайте працювати разом!",
      text: "Я відкрита до нових можливостей та цікавих проєктів. Зв'яжіться зі мною.",
      rights: "Всі права захищені.",
    },
  },
};
