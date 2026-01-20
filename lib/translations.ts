import type { Lang } from "@/components/language-provider";

type TranslatedString = {
  en: string;
  es: string;
};

export const translations = {
  home: {
    hero: {
      role: {
        en: "Computer Science Engineering Student",
        es: "Estudiante de Ingeniería en Computación",
      },
      description: {
        en: "A showcase of my projects, skills, and achievements in the field of engineering.",
        es: "Una muestra de mis proyectos, habilidades y logros en el área de la ingeniería.",
      },
      ctaProjects: {
        en: "View Projects",
        es: "Ver Proyectos",
      },
      ctaCV: {
        en: "Download CV",
        es: "Descargar CV",
      },
    },
    aboutPreview: {
      title: {
        en: "About Me",
        es: "Sobre mí",
      },
      intro: {
        en: "Evening Computer Engineering student, with experience in technical support, databases, programming, and web development.",
        es: "Estudiante vespertino de Ingeniería en Computación, con experiencia en soporte técnico, bases de datos, programación y desarrollo web.",
      },

      leftName: {
        en: "Paolo Vilches Serrano",
        es: "Paolo Vilches Serrano",
      },
      leftRole: {
        en: "Computer Engineering Student",
        es: "Estudiante de Ingeniería en Computación",
      },
      leftBio: {
        en: "Meticulous, proactive, and committed to quality. Seeking to join an IT team where I can contribute and continue growing.",
        es: "Meticuloso, proactivo y comprometido con la calidad. Busco integrarme a un equipo TI donde pueda aportar y seguir creciendo.",
      },

      rightTitle: {
        en: "Professional Profile",
        es: "Perfil profesional",
      },
      rightDescription: {
        en: "With experience in technical support (hardware/networks), web development, and REST APIs. Proficient in Git/GitHub, databases (MySQL, Oracle/PLSQL, Firebase), and testing with Postman and Selenium.",
        es: "Con experiencia en soporte técnico (hardware/redes), desarrollo web y APIs REST. Manejo Git/GitHub, bases de datos (MySQL, Oracle/PLSQL, Firebase) y pruebas con Postman y Selenium.",
      },

      info: {
        educationKey: { en: "Education", es: "Educación" },
        educationVal: {
          en: "Computer Engineering · DuocUC",
          es: "Ing. en Computación · DuocUC",
        },

        experienceKey: { en: "Experience", es: "Experiencia" },
        experienceVal: {
          en: "3+ years · Support / Operations",
          es: "3+ años · Soporte / Operaciones",
        },

        stackKey: { en: "Stack", es: "Stack" },
        stackVal: {
          en: "Node.js, Java, Angular, Ionic",
          es: "Node.js, Java, Angular, Ionic",
        },

        dbKey: { en: "Databases", es: "Bases de datos" },
        dbVal: {
          en: "MySQL, Oracle (PL/SQL), Firestore",
          es: "MySQL, Oracle (PL/SQL), Firestore",
        },
      },

      learnMore: {
        en: "Learn more",
        es: "Ver más",
      },
    },
    projectsPreview: {
      title: {
        en: "Featured Projects",
        es: "Proyectos destacados",
      },
      intro: {
        en: "Explore some of my recent projects and technical work.",
        es: "Explora algunos de mis proyectos recientes y trabajos técnicos.",
      },
      demo: {
        en: "Demo",
        es: "Demo",
      },
      repo: {
        en: "Repo",
        es: "Repo",
      },
      viewAll: {
        en: "View all projects",
        es: "Ver todos los proyectos",
      },

      p1: {
        title: {
          en: "IT Support and Diagnostic System",
          es: "Sistema de Soporte TI y Diagnóstico",
        },
        description: {
          en: "Workflow for diagnosis, logging, and incident tracking, oriented towards technical support and efficient fault resolution.",
          es: "Flujo para diagnóstico, registro y seguimiento de incidencias, orientado a soporte técnico y resolución eficiente de fallas.",
        },
      },
      p2: {
        title: {
          en: "RESTful API with Node.js / Java",
          es: "API REST con Node.js / Java",
        },
        description: {
          en: "REST services with controllers, DTOs, and JWT authentication, integrating external API consumption and best practices.",
          es: "Servicios REST con controladores, DTOs y autenticación JWT, integrando consumo de APIs externas y buenas prácticas.",
        },
      },
      p3: {
        title: {
          en: "Angular + Ionic Frontend",
          es: "Frontend Angular + Ionic",
        },
        description: {
          en: "Interfaces with reactive forms, routes, and roles. Hybrid app with features like geolocation and QR scanning.",
          es: "Interfaces con formularios reactivos, rutas y roles. App híbrida con funciones como geolocalización y escaneo QR.",
        },
      },
    },
    skillsPreview: {
      title: { en: "Skills", es: "Habilidades" },
      subtitle: {
        en: "A quick look at what I use and what I’m good at.",
        es: "Un vistazo rápido a lo que uso y en lo que destaco.",
      },
      viewAll: { en: "View all", es: "Ver todo" },

      categories: {
        technical: { en: "Technical", es: "Técnicas" },
        software: { en: "Software", es: "Software" },
        soft: { en: "Soft Skills", es: "Habilidades blandas" },
        language: { en: "Languages", es: "Idiomas" },
      },

      level: { en: "Level", es: "Nivel" },
    },
    contactPreview: {
      title: {
        en: "Get In Touch",
        es: "Contáctame",
      },
      description: {
        en: "Interested in working together or have a question? Feel free to reach out!",
        es: "¿Te interesa trabajar conmigo o tienes alguna pregunta? ¡No dudes en escribirme!",
      },
      namePlaceholder: {
        en: "Your Name",
        es: "Tu nombre",
      },
      emailPlaceholder: {
        en: "Your Email",
        es: "Tu correo",
      },
      messagePlaceholder: {
        en: "Your Message",
        es: "Tu mensaje",
      },
      send: {
        en: "Send Message",
        es: "Enviar mensaje",
      },
    },
  },
  footer: {
    brand: {
      en: "Portfolio",
      es: "Portafolio",
    },
    description: {
      en: "A professional portfolio showcasing my skills, projects, and achievements in software engineering and IT.",
      es: "Un portafolio profesional que muestra mis habilidades, proyectos y logros en ingeniería de software y TI.",
    },

    columns: {
      about: {
        title: { en: "About", es: "Sobre mí" },
        aboutMe: { en: "About Me", es: "Sobre mí" },
        education: { en: "Education", es: "Educación" },
        skills: { en: "Skills", es: "Habilidades" },
      },
      work: {
        title: { en: "Work", es: "Trabajo" },
        experience: { en: "Experience", es: "Experiencia" },
        projects: { en: "Projects", es: "Proyectos" },
        certificates: { en: "Certificates", es: "Certificados" },
      },
      connect: {
        title: { en: "Connect", es: "Contacto" },
        contact: { en: "Contact", es: "Contacto" },
        github: { en: "GitHub", es: "GitHub" },
        linkedin: { en: "LinkedIn", es: "LinkedIn" },
      },
    },

    bottom: {
      copyrightLeft: {
        en: "Engineering Portfolio. All rights reserved.",
        es: "Portafolio de Ingeniería. Todos los derechos reservados.",
      },
      privacy: { en: "Privacy Policy", es: "Política de privacidad" },
      terms: { en: "Terms of Service", es: "Términos del servicio" },
    },

    // opcional: para aria-labels de iconos
    socials: {
      phone: { en: "Phone", es: "Teléfono" },
      email: { en: "Email", es: "Correo" },
      message: { en: "Message", es: "Mensaje" },
      twitter: { en: "Twitter", es: "Twitter" },
      facebook: { en: "Facebook", es: "Facebook" },
      instagram: { en: "Instagram", es: "Instagram" },
      github: { en: "GitHub", es: "GitHub" },
      linkedin: { en: "LinkedIn", es: "LinkedIn" },
    },
  },
} as const;

export function isTranslatedString(v: unknown): v is TranslatedString {
  if (typeof v !== "object" || v === null) return false;
  const obj = v as Record<string, unknown>;
  return typeof obj.en === "string" && typeof obj.es === "string";
}

export function getLangValue(v: TranslatedString, lang: Lang): string {
  return v[lang];
}
