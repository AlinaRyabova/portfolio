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
        "Master's degree in Software Engineering with 25 years of unique management experience (pharmacy manager). I have transformed pharmaceutical precision into digital code, focusing on developing reliable and scalable systems. My discipline and ability to make critical decisions under pressure are what I bring to every line of code.",
      quote:
        "Pharmacy taught me that every detail matters and that mistakes are unacceptable. Today, I apply these principles to build architecturally sound backends and intuitive interfaces.",
      documents: {
        diploma: {
          label: "Diploma",
          href: "/docs/diploma.pdf",
        },
        grades: {
          label: "Transcript",
          href: "/docs/grades.pdf",
        },
      },
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
        {
          title: "BioTechnica",
          role: "Fullstack Developer (Support & Dev)",
          description:
            "The official website of the Institute of Engineering and Technology. Work on the user interface, performance optimization, and website support.",
          tags: [
            "Next.js 16",
            "JavaScript",
            "PHP",
            "UI/UX Optimization",
            "Support",
          ],
          image: "/projects/biotechnica.jpg",
          links: {
            demo: "https://www.biotechnica.od.ua",
            github: "",
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
        "Магістр програмної інженерії з унікальним 25-річним управлінським досвідом (завідувач аптеки). Я трансформувала фармацевтичну точність у цифровий код, фокусуючись на розробці надійних та масштабованих систем. Моя дисципліна та вміння приймати критичні рішення в стресових ситуаціях — це те, що я приношу в кожен рядок коду.",
      quote:
        "Фармація навчила мене, що кожна деталь має значення, а помилка — недопустима. Сьогодні я застосовую ці принципи для побудови архітектурно чистого backend-у та інтуїтивних інтерфейсів.",
      documents: {
        diploma: {
          label: "Диплом",
          href: "/docs/diploma.pdf",
        },
        grades: {
          label: "Оцінки",
          href: "/docs/grades.pdf",
        },
      },
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
        {
          title: "БіоТехніка",
          role: "Fullstack розробник (Support & Dev)",
          description:
            "Офіційний сайт інженерно-технологічного інституту. Робота над інтерфейсом, оптимізацією продуктивності та підтримкою сайту.",
          tags: [
            "Next.js 16",
            "JavaScript",
            "PHP",
            "UI/UX Optimization",
            "Support",
          ],
          image: "/projects/biotechnica.jpg", // Не забудь додати скріншот у public/projects/
          links: {
            demo: "https://www.biotechnica.od.ua",
            github: "", // Якщо репозиторій приватний — залишаємо порожнім
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
