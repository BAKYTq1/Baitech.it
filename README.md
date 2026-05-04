# BAITECH.IT — IT-компания полного цикла

## 🚀 Быстрый старт

### 1. Установка зависимостей

Откройте терминал в папке проекта и выполните:

```bash
npm install
```

### 2. Запуск dev-сервера

```bash
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### 3. Сборка для production

```bash
npm run build
```

### 4. Проверка типов и линтинга

```bash
npm run typecheck
npm run lint
```

## 📋 Настройка EmailJS (для формы контактов)

1. Зарегистрируйтесь на [emailjs.com](https://emailjs.com)
2. Создайте **Email Service** и **Email Template**
3. Скопируйте ваши ID и ключ
4. Создайте файл `.env.local` в корне проекта:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Структура проекта

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── seo/          # SEO компонент для мета-тегов
│   ├── sections/     # Секции (Hero, Services, Projects и т.д.)
│   └── ui/           # UI компоненты (Button, Badge, Card)
├── pages/            # Страницы приложения
├── hooks/            # Кастомные React хуки
├── data/             # Статические данные (услуги, проекты, стек)
├── types/            # TypeScript типы
├── App.tsx           # Главный компонент с маршрутизацией
├── main.tsx          # Entry point
└── index.css         # Глобальные стили
```

## 🎨 Цветовая палитра

- **Primary**: `#5B6BF8` (синий)
- **Accent**: `#00C896` (зелёный)
- **Background**: `#08080E` (чёрный)
- **Surface**: `#111119`

## 📄 Страницы

- `/` — Главная страница
- `/services` — Услуги
- `/projects` — Портфолио проектов
- `/about` — О компании
- `/contact` — Контактная форма

## 🔧 Технологический стек

- **React** 18.3
- **TypeScript** 5.5
- **Vite** 5.4
- **Tailwind CSS** 3.4
- **Framer Motion** 11.0 (анимации)
- **React Router DOM** v6 (маршрутизация)
- **React Helmet Async** (SEO мета-теги)
- **EmailJS** (отправка форм без backend)
- **Lucide React** (иконки)

## 📦 Зависимости

Все зависимости указаны в `package.json` и установятся при запуске `npm install`.

## 🚨 Решение проблем

### "Cannot find module 'react-router-dom'"

Убедитесь, что вы выполнили `npm install` в папке проекта:

```bash
cd c:\Users\user\Desktop\project-bolt-sb1-yemjsdzb\project
npm install
```

### Dev-сервер не запускается

1. Проверьте, что порт 5173 свободен
2. Очистите кеш: `npm run dev -- --force`
3. Удалите `node_modules` и переустановите: `rm -r node_modules && npm install`

## 📞 Справка

- **Главный конфиг Vite**: `vite.config.ts`
- **Tailwind конфиг**: `tailwind.config.js`
- **TypeScript конфиг**: `tsconfig.json`
- **ESLint конфиг**: `eslint.config.js`
