import { Code2, Smartphone, ServerCog, Cloud, Cpu, LayoutDashboard } from 'lucide-react';
import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    title: 'Веб-разработка',
    description: 'Корпоративные сайты, лендинги, порталы и SaaS-платформы.',
    icon: Code2,
    tags: ['React', 'Next.js', 'Vue.js', 'Node.js'],
  },
  {
    title: 'Мобильные приложения',
    description: 'Кроссплатформенные и нативные приложения для iOS и Android.',
    icon: Smartphone,
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    title: 'Backend & API',
    description: 'Масштабируемые серверные решения и интеграции с внешними сервисами.',
    icon: ServerCog,
    tags: ['Python', 'Go', 'PostgreSQL', 'FastAPI'],
  },
  {
    title: 'DevOps & Инфраструктура',
    description: 'CI/CD, контейнеризация, облачный деплой и мониторинг.',
    icon: Cloud,
    tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
  },
  {
    title: 'AI & Автоматизация',
    description: 'Внедрение ИИ, чат-боты и автоматизация бизнес-процессов.',
    icon: Cpu,
    tags: ['OpenAI API', 'LangChain', 'Python', 'n8n'],
  },
  {
    title: 'UI/UX Дизайн',
    description: 'Прототипы, дизайн-системы и удобные интерфейсы.',
    icon: LayoutDashboard,
    tags: ['Figma', 'Wireframes', 'Design System'],
  },
];
