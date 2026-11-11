import { Project } from '../models/project';

export const PROJECTS: readonly Project[] = [
  {
    slug: 'mangatracker',
    title: 'MangaTracker',
    summary: {
      es: 'Tracker de manga, manhwa y manhua con listas personalizables, listas públicas para seguir y búsqueda en lenguaje natural con IA. Tu progreso sobrevive aunque cierre el sitio donde leés.',
      en: 'Manga, manhwa and manhua tracker with custom lists, followable public lists and natural-language AI search. Your progress survives even if the site you read on shuts down.',
    },
    highlights: [
      {
        es: 'Autenticación con JWT y refresh tokens rotativos, con detección de reuso.',
        en: 'JWT authentication with rotating refresh tokens and reuse detection.',
      },
      {
        es: 'Búsqueda con IA (Gemini): traduce texto libre a filtros reales usando salida estructurada.',
        en: 'AI search (Gemini): turns free text into real filters using structured output.',
      },
      {
        es: 'Clean Architecture, servicios externos detrás de interfaces, resiliencia con Polly y tests con xUnit.',
        en: 'Clean Architecture, external services behind interfaces, Polly resilience and xUnit tests.',
      },
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL'],
    demoUrl: 'https://manga-tracker-pink.vercel.app/',
    repoUrl: 'https://github.com/alvaroad29/MangaTracker',
    image: '/projects/mangatracker.webp'
  },
  {
    slug: 'online-reading-app',
    title: 'Online Reading App',
    summary: {
      es: 'Plataforma para publicar, descubrir y leer contenido escrito, con roles y moderación. Proyecto final de la Tecnicatura (UNT, 2025), hecho en equipo de 3 personas y extendido por mí con Docker y despliegue en la nube.',
      en: 'Platform to publish, discover and read written content, with roles and moderation. Capstone project (UNT, 2025) built by a team of 3 and extended by me with Docker and cloud deployment.',
    },
    highlights: [
      {
        es: 'Roles de lector, autor y administrador, con guards en Angular y middleware que bloquea usuarios.',
        en: 'Reader, author and admin roles, with Angular guards and middleware that blocks banned users.',
      },
      {
        es: 'Flujo de publicación con moderación, editor Markdown y lector de capítulos configurable.',
        en: 'Publishing workflow with moderation, a Markdown editor and a configurable chapter reader.',
      },
      {
        es: 'Docker multi-stage + Compose, migración de SQL Server a PostgreSQL y deploy en Render.',
        en: 'Multi-stage Docker + Compose, SQL Server to PostgreSQL migration and deployment on Render.',
      },
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://booklist-frontend-snfs.onrender.com/',
    repoUrl: 'https://github.com/alvaroad29/temp-rama',
    image: '/projects/onlinereaderapp.webp'
  },
];
