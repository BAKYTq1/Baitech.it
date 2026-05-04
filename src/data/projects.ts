import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    title: 'CRM для логистики',
    category: 'Веб',
    status: 'Live',
    description: 'Система управления заказами и клиентами для транспортной компании.',
    stack: ['React', 'Django', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'B2B-маркетплейс',
    category: 'Веб',
    status: 'Live',
    description: 'Платформа оптовой торговли с каталогом, заказами и аналитикой.',
    stack: ['Next.js', 'Go', 'Redis', 'AWS'],
  },
  {
    title: 'Приложение доставки',
    category: 'Мобайл',
    status: 'Live',
    description: 'Мобильное приложение с трекингом курьеров в реальном времени.',
    stack: ['Flutter', 'FastAPI', 'WebSocket'],
  },
  {
    title: 'AI HR-ассистент',
    category: 'AI',
    status: 'Live',
    description: 'Telegram-бот для автоматизации подбора персонала и скрининга резюме.',
    stack: ['Python', 'OpenAI API', 'Telegram Bot API'],
  },
  {
    title: 'ERP для производства',
    category: 'Веб',
    status: 'В разработке',
    description: 'Комплексная система управления производственными процессами.',
    stack: ['Vue.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'SaaS-аналитика',
    category: 'Веб',
    status: 'В разработке',
    description: 'Платформа бизнес-аналитики с дашбордами и отчётами.',
    stack: ['React', 'Python', 'ClickHouse'],
  },
];
