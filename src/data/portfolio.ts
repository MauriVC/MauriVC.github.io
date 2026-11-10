export const personal = {
  name: 'Carlos Mauricio Viveros Claure',
  firstName: 'Carlos Mauricio',
  lastName: 'Viveros Claure',
  shortName: 'Mauricio Viveros',
  initials: 'MV',
  roles: [
    'Ingeniero de Sistemas',
    'Desarrollador Frontend',
    'Desarrollador Full Stack',
    'Asistente de Desarrollo y Programación',
  ],
  headline: 'Ingeniero de Sistemas & Desarrollador de Software',
  tagline:
    'Diseño y construyo aplicaciones web modernas, funcionales y escalables con foco en la experiencia de usuario.',
  location: 'Santa Cruz de la Sierra, Bolivia',
  phone: '+591 79074692',
  phoneHref: 'https://wa.me/59179074692',
  email: 'icho2014viveros@gmail.com',
  github: 'https://github.com/MauriVC',
  githubUser: 'MauriVC',
  linkedin: 'https://www.linkedin.com/in/mauricio-viveros-5079bb329/',
  cvUrl: '/CV.pdf',
  cvFileName: 'Hoja de Vida - Carlos Mauricio Viveros Claure.pdf',
}

export const about = {
  paragraphs: [
    'Ingeniero de Sistemas egresado de la Escuela Militar de Ingeniería (EMI) con experiencia en el desarrollo de soluciones web utilizando Laravel, React y bases de datos relacionales como MySQL y SQL Server.',
    'Cuento con habilidades prácticas consolidadas en el mantenimiento preventivo y correctivo de hardware, así como en soporte técnico a usuarios finales. Profesional proactivo, con capacidad de adaptación y aprendizaje, enfocado en la resolución de problemas complejos y en la gestión de software corporativo y herramientas de ofimática.',
  ],
  quickFacts: [
    { label: 'Nombre', value: 'Carlos Mauricio Viveros Claure', icon: 'user' },
    { label: 'Ubicación', value: 'Santa Cruz de la Sierra, Bolivia', icon: 'map-pin' },
    { label: 'Teléfono', value: '+591 79074692', icon: 'phone', href: 'https://wa.me/59179074692' },
    { label: 'Email', value: 'icho2014viveros@gmail.com', icon: 'mail', href: 'mailto:icho2014viveros@gmail.com' },
    { label: 'GitHub', value: 'github.com/MauriVC', icon: 'github', href: 'https://github.com/MauriVC' },
    { label: 'LinkedIn', value: 'in/mauricio-viveros', icon: 'linkedin', href: 'https://www.linkedin.com/in/mauricio-viveros-5079bb329/' },
  ],
  aptitudes: [
    'Trabajo en equipo y colaboración',
    'Aprendizaje continuo e interno',
    'Resolución de problemas',
    'Adaptabilidad a tecnologías',
    'Proactividad enfocada',
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Técnico' },
  ],
  extras: [
    'Planificación e impartición de capacitaciones técnicas para el uso de sistemas ERP en áreas de la organización.',
    'Apoyo transversal en IT: diagnósticos de hardware y optimización de plataformas CMS.',
  ],
}

export const experience = [
  {
    role: 'Desarrollador de Software',
    company: 'Editorial Comunicarte',
    location: '1er Anillo - Av. Cañoto',
    summary: 'Aporte en el desarrollo de nuevas implementaciones sobre un sistema ERP corporativo existente.',
    points: [
      'Lideré el desarrollo de funcionalidades clave como el sistema de subidas masivas de datos mediante archivos Excel (productos, categorías, marcas) para optimizar el registro, y desarrollé por completo la sección de Ventas, incluyendo la lógica para ventas a crédito.',
      'Implementación de la plataforma oficial de comercio electrónico y compras en línea para expandir los canales de venta fuera de la infraestructura física.',
    ],
    tags: ['Laravel', 'PHP', 'React', 'MySQL', 'SQL Server'],
  },
  {
    role: 'Pasante Interno de Desarrollo',
    company: 'Construcciones y Software Crolmess S.R.L',
    location: '5to Anillo - Av. Radial 13',
    summary: 'Implementación de soluciones robustas basadas en Servicios Web para el sector asegurador.',
    points: [
      'Implementación de soluciones robustas basadas en Servicios Web para estandarizar la comunicación e interoperabilidad fluida entre sistemas de Aseguradoras externas.',
      'Automatización integral de los servicios de gestión de pólizas vehiculares destinados a agentes de seguros, integrándolos de forma nativa dentro del ERP de la compañía.',
    ],
    tags: ['Servicios Web', 'Integración de sistemas', 'ERP', 'Seguros'],
  },
]

export const projects = [
  {
    id: 'sorteos',
    number: '01',
    title: 'Panel Administrativo para la creación de nuevos sorteos',
    subtitle: '',
    year: '2024',
    description:
      'Dashboard administrativo para la gestión de tickets de sorteos (métricas en tiempo real, calendarios) y desarrollo de API REST segura.',
    highlights: [
      'Dashboard administrativo para la gestión de tickets de sorteos (métricas en tiempo real y calendarios).',
      'Desarrollo de una API REST segura.',
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma ORM'],
    github: 'https://github.com/MauriVC',
    site: '',
    demo: '',
  },
  {
    id: 'inventario',
    number: '02',
    title: 'Sistema de control de almacenes y manejo de inventario',
    subtitle: 'U.E. Corazón Nuevo',
    year: '2023',
    description:
      'Software híbrido (Web y App de Escritorio) para el control integral de almacenes, categorías, marcas, registro de Movimientos de Entrada, Salida y de Baja de los artículos, Dashboard de las actividades más recientes, control de usuarios para el manejo y trabajo en el sistema. Generación dinámica de reportes en PDF y exportación a Excel, conectando a bases de datos locales y remotas.',
    highlights: [
      'Construí el software híbrido (Web + Escritorio) para el control integral de almacenes, categorías, marcas y artículos.',
      'Implementé el registro de movimientos de Entrada, Salida y Baja, dashboard de actividades recientes y control de usuarios.',
      'Generé reportes dinámicos en PDF y exportación a Excel, conectando bases de datos locales y remotas.',
    ],
    tags: ['Vue 3', 'Vue Router', 'Electron', 'Docker', 'Fastify', 'SQLite', 'MySQL', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/MauriVC/Inventario_Articulos',
    site: '',
    demo: '',
  },
  {
    id: 'eventos',
    number: '03',
    title: 'Rediseño a Plataforma de Eventos',
    subtitle: 'Compra y gestión de tickets',
    year: '2023',
    description:
      'Plataforma para compra y gestión de tickets. Rediseño completo del frontend en la interfaz de compras de entradas para usuarios y desarrollo del panel administrativo para la creación y control de eventos.',
    highlights: [
      'Rediseñé por completo el frontend de la interfaz de compra de entradas para usuarios finales.',
      'Desarrollé el panel administrativo para la creación y control de eventos.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/MauriVC',
    site: '',
    demo: '',
  },
  {
    id: 'ajefutbol',
    number: '04',
    title: 'Landing Page Astro 5',
    subtitle: 'ajefutbol.com',
    year: '2024',
    description:
      'Desarrollo de sitio web estático tipo Landing Page moderno, altamente optimizado para SEO y tiempos de carga extremos.',
    highlights: [
      'Desarrollé una landing page moderna y estática, enfocada en la presentación y promoción del juego.',
      'Optimicé el sitio para SEO y tiempos de carga extremos.',
    ],
    tags: ['Astro 5', 'Tailwind CSS v4', 'Vite'],
    github: '',
    site: 'https://ajefutbol.com',
    demo: '',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'code',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg' },
      { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Fastify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg' },
      { name: 'PHP (Laravel)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'ASP.NET', icon: '/icons/aspnet.svg' },
      { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: 'database',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    title: 'Lenguajes',
    icon: 'terminal',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'Visual Basic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg' },
    ],
  },
  {
    title: 'Herramientas',
    icon: 'wrench',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', mono: true },
      { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg' },
      { name: 'Microsoft Office Avanzado' },
      { name: 'Soporte y Mant. de Hardware' },
    ],
  },
]

export const education = {
  degree: 'Ingeniería de Sistemas',
  school: 'Escuela Militar de Ingeniería (EMI)',
  location: 'Santa Cruz de la Sierra, Bolivia',
  year: '2025',
  badge: 'Egresado',
  details: [
    'Egresado tras completar 5 años de formación en Ingeniería de Software, Bases de Datos y Gestión de Proyectos.',
    'Planificación e impartición de capacitaciones técnicas dirigidas a áreas de la organización para el uso de sistemas ERP.',
    'Apoyo transversal en IT, incluyendo diagnósticos de hardware y optimización de plataformas CMS.',
  ],
}

export const certifications = [
  {
    title: 'Vue.js 3 - La Guía Completa',
    institution: 'Udemy',
    description: 'Dominio de Vue.js 3 y del ecosistema MEVN para aplicaciones modernas.',
    highlight: true,
  },
  {
    title: 'CompTIA Security+ (SY0-701)',
    institution: 'Udemy',
    description: 'Certificación enfocada en ciberseguridad y análisis de vulnerabilidades.',
    highlight: true,
  },
  {
    title: 'Google Cybersecurity Professional',
    institution: 'Google',
    description: 'Programa profesional enfocado en SQL, Python, redes y gestión de incidentes.',
    highlight: true,
  },
]

export const contact = [
  { label: 'GitHub', value: 'github.com/MauriVC', href: 'https://github.com/MauriVC', icon: 'github' },
  { label: 'LinkedIn', value: 'in/mauricio-viveros', href: 'https://www.linkedin.com/in/mauricio-viveros-5079bb329/', icon: 'linkedin' },
  { label: 'WhatsApp', value: '+591 79074692', href: 'https://wa.me/59179074692', icon: 'whatsapp' },
  { label: 'Email', value: 'icho2014viveros@gmail.com', href: 'mailto:icho2014viveros@gmail.com', icon: 'mail' },
  { label: 'Ubicación', value: 'Santa Cruz, Bolivia', href: '', icon: 'map-pin' },
  { label: 'Currículum', value: 'Descargar CV (PDF)', href: '/CV.pdf', icon: 'download' },
]
