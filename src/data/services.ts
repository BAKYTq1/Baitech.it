import { Cloud, Code2, Cpu, LayoutDashboard, ServerCog, Smartphone } from 'lucide-react';
import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    title: 'Сайт или личный кабинет',
    technicalTitle: 'Веб-разработка',
    description: 'Создаём сайты, лендинги, кабинеты клиентов, порталы и онлайн-сервисы под задачи бизнеса.',
    outcome: 'Клиент понимает продукт, оставляет заявку, покупает или работает с сервисом онлайн.',
    icon: Code2,
    tags: ['React', 'Next.js', 'Vue.js', 'Node.js'],
  },
  {
    title: 'Приложение для телефона',
    technicalTitle: 'Мобильная разработка',
    description: 'Разрабатываем приложения для iPhone и Android: от MVP до полноценного клиентского сервиса.',
    outcome: 'Ваш сервис всегда под рукой у клиента: заказы, уведомления, профиль и оплата в телефоне.',
    icon: Smartphone,
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    title: 'Внутренняя система бизнеса',
    technicalTitle: 'Backend и API',
    description: 'Настраиваем серверную логику, базы данных, роли пользователей, заявки, оплаты и интеграции.',
    outcome: 'Бизнес-процессы работают автоматически, данные не теряются, а сервис выдерживает рост нагрузки.',
    icon: ServerCog,
    tags: ['Python', 'Go', 'PostgreSQL', 'FastAPI'],
  },
  {
    title: 'Запуск проекта и поддержка',
    technicalTitle: 'DevOps и инфраструктура',
    description: 'Размещаем проект на сервере, настраиваем обновления, мониторинг, резервные копии и безопасность.',
    outcome: 'Сайт или приложение стабильно работает, быстро загружается и не падает при обновлениях.',
    icon: Cloud,
    tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
  },
  {
    title: 'Автоматизация с AI',
    technicalTitle: 'AI и автоматизация',
    description: 'Внедряем AI-ассистентов, чат-ботов, обработку заявок, документов и повторяющихся задач.',
    outcome: 'Команда тратит меньше времени на рутину, быстрее отвечает клиентам и обрабатывает больше заявок.',
    icon: Cpu,
    tags: ['OpenAI API', 'LangChain', 'Python', 'n8n'],
  },
  {
    title: 'Дизайн понятного интерфейса',
    technicalTitle: 'UI/UX дизайн',
    description: 'Проектируем структуру, экраны, формы и визуальный стиль, чтобы продуктом было удобно пользоваться.',
    outcome: 'Пользователь быстрее находит нужное действие, меньше ошибается и легче доходит до заявки или покупки.',
    icon: LayoutDashboard,
    tags: ['Figma', 'Wireframes', 'Design System'],
  },
];
