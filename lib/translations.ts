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
  // Pages
  aboutPage: {
    title: { en: "About", es: "Sobre mí" },
    subtitle: {
      en: "A deeper look at who I am, what I do, and how I work.",
      es: "Una mirada más profunda a quién soy, qué hago y cómo trabajo.",
    },

    header: {
      name: { en: "Paolo Vilches Serrano", es: "Paolo Vilches Serrano" },
      role: {
        en: "Computer Engineering Student",
        es: "Estudiante de Ingeniería en Computación",
      },
      bio: {
        en: "Meticulous, proactive, and committed to quality. I enjoy building useful products, improving processes, and learning fast.",
        es: "Meticuloso, proactivo y comprometido con la calidad. Me gusta construir productos útiles, mejorar procesos y aprender rápido.",
      },
    },

    quickFacts: {
      title: { en: "Quick facts", es: "Datos rápidos" },
      items: {
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

        focusKey: { en: "Focus", es: "Enfoque" },
        focusVal: {
          en: "Web apps, REST APIs, databases",
          es: "Apps web, APIs REST, bases de datos",
        },

        toolsKey: { en: "Tools", es: "Herramientas" },
        toolsVal: {
          en: "Git/GitHub, Postman, Selenium",
          es: "Git/GitHub, Postman, Selenium",
        },
      },
    },

    sections: {
      profileTitle: { en: "Professional profile", es: "Perfil profesional" },
      profileBody: {
        en: "I’ve worked in technical support (hardware and networks) and I build web solutions end-to-end: UI, APIs, and data. I care about clean code, clarity, and shipping.",
        es: "He trabajado en soporte técnico (hardware y redes) y desarrollo soluciones web de punta a punta: UI, APIs y datos. Me importa el código limpio, la claridad y entregar.",
      },

      strengthsTitle: { en: "What I bring", es: "Lo que aporto" },
      strengths: {
        s1: {
          en: "Ownership: I like taking a feature from idea → delivery.",
          es: "Responsabilidad: me gusta llevar una funcionalidad de idea → entrega.",
        },
        s2: {
          en: "Practical mindset: I focus on impact and maintainability.",
          es: "Mentalidad práctica: me enfoco en impacto y mantenibilidad.",
        },
        s3: {
          en: "Communication: I document decisions and collaborate closely.",
          es: "Comunicación: documento decisiones y colaboro de cerca.",
        },
      },

      stackTitle: { en: "Stack & knowledge", es: "Stack y conocimientos" },
      stackBody: {
        en: "Node.js, Java, Angular, Ionic, REST APIs, MySQL, Oracle (PL/SQL), Firestore/Firebase.",
        es: "Node.js, Java, Angular, Ionic, APIs REST, MySQL, Oracle (PL/SQL), Firestore/Firebase.",
      },
      cvButton: { en: "Download CV", es: "Descargar CV" },
    },
  },
  educationPage: {
    title: { en: "Education", es: "Educación" },
    subtitle: {
      en: "A timeline of my academic path and ongoing learning.",
      es: "Una línea de tiempo de mi trayectoria académica y aprendizaje continuo.",
    },

    timeline: {
      items: {
        duoc: {
          title: {
            en: "Computer Engineering",
            es: "Ingeniería en Computación",
          },
          place: { en: "DuocUC", es: "DuocUC" },
          period: { en: "Current", es: "Actual" },
          d1: {
            en: "Solid foundations in programming, databases, and software engineering.",
            es: "Bases sólidas en programación, bases de datos e ingeniería de software.",
          },
          d2: {
            en: "Hands-on labs and projects (web apps, APIs, data).",
            es: "Laboratorios y proyectos prácticos (apps web, APIs, datos).",
          },
          d3: {
            en: "Focus on clean code, teamwork, and delivery.",
            es: "Enfoque en código limpio, trabajo en equipo y entrega.",
          },
        },

        self: {
          title: { en: "Self-learning", es: "Autodidacta" },
          place: {
            en: "Online courses & practice",
            es: "Cursos online y práctica",
          },
          period: { en: "Ongoing", es: "En curso" },
          d1: {
            en: "Continuous learning through documentation and real projects.",
            es: "Aprendizaje continuo con documentación y proyectos reales.",
          },
          d2: {
            en: "Practice with Git/GitHub workflows and tooling.",
            es: "Práctica con flujos de Git/GitHub y herramientas.",
          },
          d3: {
            en: "Experimentation: QA, automation, and backend patterns.",
            es: "Experimentación: QA, automatización y patrones backend.",
          },
        },
      },
    },
  },
  skillsPage: {
    title: { en: "Skills & Expertise", es: "Habilidades y experiencia" },
    subtitle: {
      en: "A clear overview of my technical abilities, software proficiency, soft skills, and language capabilities.",
      es: "Una visión completa de mis habilidades técnicas, manejo de software, habilidades blandas e idiomas.",
    },

    sections: {
      technical: {
        title: { en: "Technical Skills", es: "Habilidades técnicas" },
        subtitle: {
          en: "Core development and engineering skills.",
          es: "Habilidades base de desarrollo y tecnología.",
        },
        items: {
          i1: {
            label: { en: "Web Development", es: "Desarrollo Web" },
            value: { en: "8", es: "8" },
          },
          i2: {
            label: { en: "REST APIs", es: "APIs REST" },
            value: { en: "7", es: "7" },
          },
          i3: {
            label: { en: "Databases / SQL", es: "Bases de datos / SQL" },
            value: { en: "7", es: "7" },
          },
          i4: {
            label: {
              en: "QA / Testing mindset",
              es: "QA / Mentalidad de testing",
            },
            value: { en: "7", es: "7" },
          },
          i5: {
            label: { en: "Networks / Support", es: "Redes / Soporte" },
            value: { en: "8", es: "8" },
          },
        },
      },

      software: {
        title: { en: "Software Proficiency", es: "Manejo de software" },
        subtitle: {
          en: "Tools I use for development, testing, and delivery.",
          es: "Herramientas que uso para desarrollar, probar y entregar.",
        },
        items: {
          i1: {
            label: { en: "Git / GitHub", es: "Git / GitHub" },
            value: { en: "8", es: "8" },
          },
          i2: {
            label: { en: "Postman", es: "Postman" },
            value: { en: "8", es: "8" },
          },
          i3: {
            label: {
              en: "MySQL / Oracle tools",
              es: "Herramientas MySQL / Oracle",
            },
            value: { en: "7", es: "7" },
          },
          i4: {
            label: { en: "Firebase / Firestore", es: "Firebase / Firestore" },
            value: { en: "6", es: "6" },
          },
          i5: {
            label: { en: "Selenium (basic)", es: "Selenium (básico)" },
            value: { en: "6", es: "6" },
          },
        },
      },

      soft: {
        title: { en: "Soft Skills", es: "Habilidades blandas" },
        subtitle: {
          en: "How I work with people, processes, and deadlines.",
          es: "Cómo trabajo con personas, procesos y plazos.",
        },
        items: {
          i1: {
            label: { en: "Problem Solving", es: "Resolución de problemas" },
            value: { en: "9", es: "9" },
          },
          i2: {
            label: { en: "Communication", es: "Comunicación" },
            value: { en: "8", es: "8" },
          },
          i3: {
            label: { en: "Teamwork", es: "Trabajo en equipo" },
            value: { en: "8", es: "8" },
          },
          i4: {
            label: { en: "Organization", es: "Organización" },
            value: { en: "8", es: "8" },
          },
        },
      },

      languages: {
        title: { en: "Languages", es: "Idiomas" },
        subtitle: {
          en: "Language proficiency (self-assessed).",
          es: "Dominio de idiomas (auto-evaluación).",
        },
        items: {
          i1: {
            label: { en: "Spanish", es: "Español" },
            value: { en: "10", es: "10" },
          },
          i2: {
            label: { en: "English", es: "Inglés" },
            value: { en: "7", es: "7" },
          },
          i3: {
            label: { en: "Portuguese (basic)", es: "Portugués (básico)" },
            value: { en: "4", es: "4" },
          },
        },
      },
    },
  },
  experiencePage: {
    title: { en: "Professional Experience", es: "Experiencia Profesional" },
    subtitle: {
      en: "My journey through roles, responsibilities and the tools I used along the way.",
      es: "Mi recorrido por roles, responsabilidades y herramientas que usé en el camino.",
    },
    badge: { en: "Experience", es: "Experiencia" },

    items: {
      e1: {
        role: {
          en: "Technical Support / Operations",
          es: "Soporte Técnico / Operaciones",
        },
        company: { en: "Company Name", es: "Nombre de Empresa" },
        location: { en: "City, Country", es: "Ciudad, País" },
        period: { en: "2023 – Present", es: "2023 – Actual" },

        responsibilitiesTitle: {
          en: "Key Responsibilities",
          es: "Responsabilidades Clave",
        },
        r1: {
          en: "Diagnosed incidents and provided solutions for hardware, software and connectivity.",
          es: "Diagnostiqué incidentes y entregué soluciones para hardware, software y conectividad.",
        },
        r2: {
          en: "Documented cases and improved workflows to reduce repeated issues.",
          es: "Documenté casos y mejoré flujos para reducir incidencias repetidas.",
        },
        r3: {
          en: "Coordinated with teams to track tickets and ensure SLA compliance.",
          es: "Coordiné con equipos el seguimiento de tickets y cumplimiento de SLA.",
        },

        toolsTitle: {
          en: "Technologies & Tools",
          es: "Tecnologías y Herramientas",
        },
        t1: { en: "Git/GitHub", es: "Git/GitHub" },
        t2: { en: "Postman", es: "Postman" },
        t3: { en: "SQL", es: "SQL" },
        t4: { en: "Documentation", es: "Documentación" },
      },

      e2: {
        role: {
          en: "Web Projects (Academic / Personal)",
          es: "Proyectos Web (Académicos / Personales)",
        },
        company: { en: "Portfolio Projects", es: "Proyectos del Portafolio" },
        location: { en: "Remote", es: "Remoto" },
        period: { en: "Ongoing", es: "En curso" },

        responsibilitiesTitle: {
          en: "Key Responsibilities",
          es: "Responsabilidades Clave",
        },
        r1: {
          en: "Built UI components and pages with responsive layouts and clean structure.",
          es: "Construí componentes y páginas con layout responsive y estructura limpia.",
        },
        r2: {
          en: "Implemented API calls and data handling for real use cases.",
          es: "Implementé consumo de APIs y manejo de datos para casos reales.",
        },
        r3: {
          en: "Focused on maintainability, translations and UI polish.",
          es: "Enfoque en mantenibilidad, traducciones y detalles de UI.",
        },

        toolsTitle: {
          en: "Technologies & Tools",
          es: "Tecnologías y Herramientas",
        },
        t1: { en: "Next.js", es: "Next.js" },
        t2: { en: "React", es: "React" },
        t3: { en: "TypeScript", es: "TypeScript" },
      },
    },
  },
  projectsPage: {
    title: { en: "Projects", es: "Proyectos" },
    subtitle: {
      en: "A showcase of my projects, demonstrating practical application of skills and problem-solving.",
      es: "Una muestra de mis proyectos, demostrando aplicación práctica de habilidades y resolución de problemas.",
    },

    buttons: {
      demo: { en: "Demo", es: "Demo" },
      repo: { en: "Repo", es: "Repo" },
    },

    items: {
      p1: {
        title: {
          en: "Room Booking System",
          es: "Sistema de Reservas de Salas",
        },
        description: {
          en: "Full CRUD booking system with roles, validations and reporting views.",
          es: "Sistema completo de reservas con CRUD, roles, validaciones y vistas de reportes.",
        },
        image: { en: "/projects/project-1.jpg", es: "/projects/project-1.jpg" },
        tags: {
          t1: { en: "Java", es: "Java" },
          t2: { en: "MySQL", es: "MySQL" },
          t3: { en: "MVC", es: "MVC" },
          t4: { en: "JDBC", es: "JDBC" },
        },
        demoUrl: { en: "—", es: "—" },
        repoUrl: { en: "—", es: "—" },
      },

      p2: {
        title: { en: "Portfolio Website", es: "Portafolio Web" },
        description: {
          en: "Modern portfolio with theme + language toggle, reusable sections and clean UI.",
          es: "Portafolio moderno con toggle de tema + idioma, secciones reutilizables y UI limpia.",
        },
        image: { en: "/projects/project-2.jpg", es: "/projects/project-2.jpg" },
        tags: {
          t1: { en: "Next.js", es: "Next.js" },
          t2: { en: "React", es: "React" },
          t3: { en: "TypeScript", es: "TypeScript" },
          t4: { en: "Tailwind", es: "Tailwind" },
        },
        demoUrl: { en: "—", es: "—" },
        repoUrl: { en: "—", es: "—" },
      },

      p3: {
        title: { en: "ETL Automation (NiFi)", es: "Automatización ETL (NiFi)" },
        description: {
          en: "ETL flow to normalize multiple Excel structures into standardized outputs.",
          es: "Flujo ETL para normalizar múltiples estructuras de Excel y generar salidas estandarizadas.",
        },
        image: { en: "/projects/project-3.jpg", es: "/projects/project-3.jpg" },
        tags: {
          t1: { en: "Apache NiFi", es: "Apache NiFi" },
          t2: { en: "Groovy", es: "Groovy" },
          t3: { en: "Data Cleaning", es: "Limpieza de datos" },
          t4: { en: "CSV/JSON", es: "CSV/JSON" },
        },
        demoUrl: { en: "—", es: "—" },
        repoUrl: { en: "—", es: "—" },
      },
    },
  },
  certificatesPage: {
    title: { en: "Certificates", es: "Certificados" },
    subtitle: {
      en: "Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.",
      es: "Certificaciones y logros que demuestran mi experiencia y compromiso con el aprendizaje continuo.",
    },

    labels: {
      issued: { en: "Issued", es: "Emitido" },
      certificateId: { en: "Certificate ID", es: "ID del certificado" },
    },

    buttons: {
      verify: { en: "Verify", es: "Verificar" },
      download: { en: "Download", es: "Descargar" },
    },

    items: {
      c1: {
        title: {
          en: "Web Development Fundamentals",
          es: "Fundamentos de Desarrollo Web",
        },
        issuer: { en: "Online Platform", es: "Plataforma Online" },
        issued: { en: "Nov 2023", es: "Nov 2023" },
        id: { en: "CERT-12345", es: "CERT-12345" },
        verifyUrl: { en: "—", es: "—" },
        downloadUrl: { en: "—", es: "—" },
      },
      c2: {
        title: { en: "REST APIs with Postman", es: "APIs REST con Postman" },
        issuer: { en: "Online Platform", es: "Plataforma Online" },
        issued: { en: "Jun 2023", es: "Jun 2023" },
        id: { en: "CERT-67890", es: "CERT-67890" },
        verifyUrl: { en: "—", es: "—" },
        downloadUrl: { en: "—", es: "—" },
      },
      c3: {
        title: { en: "SQL Fundamentals", es: "Fundamentos de SQL" },
        issuer: { en: "Online Platform", es: "Plataforma Online" },
        issued: { en: "Mar 2023", es: "Mar 2023" },
        id: { en: "CERT-24680", es: "CERT-24680" },
        verifyUrl: { en: "—", es: "—" },
        downloadUrl: { en: "—", es: "—" },
      },
    },
  },
  contactPage: {
    title: { en: "Get in Touch", es: "Hablemos" },
    subtitle: {
      en: "Have a question or want to work together? Feel free to reach out!",
      es: "¿Tienes una pregunta o quieres trabajar conmigo? ¡Escríbeme!",
    },

    info: {
      title: { en: "Contact Information", es: "Información de contacto" },

      phoneLabel: { en: "Phone", es: "Teléfono" },
      phoneValue: { en: "+56 9 0000 0000", es: "+56 9 0000 0000" },

      emailLabel: { en: "Email", es: "Correo" },
      emailValue: { en: "contact@example.com", es: "contact@example.com" },

      locationLabel: { en: "Location", es: "Ubicación" },
      locationValue: { en: "City, Country", es: "Ciudad, País" },

      note: {
        en: "Tip: Replace the placeholders with your real contact information.",
        es: "Tip: Reemplaza estos placeholders con tu información real de contacto.",
      },
    },

    form: {
      name: { en: "Your Name", es: "Tu nombre" },
      email: { en: "Your Email", es: "Tu correo" },
      subject: { en: "Subject", es: "Asunto" },
      message: { en: "Your Message", es: "Tu mensaje" },
      send: { en: "Send Message", es: "Enviar mensaje" },
      mockAlert: {
        en: "Form submitted (mock). Hook this to an API route to send emails.",
        es: "Formulario enviado (demo). Conéctalo a una API para enviar correos.",
      },
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
