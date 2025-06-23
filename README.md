# 🧠 YoptaBook — Cловарь с характером

YoptaBook — это веб-приложение для изучения слов и ведения персонального словаря, с возможностью офлайн-доступа, кросс-сессийной авторизации и интеграции с внешними переводческими API.  
Создано с нуля на стеке **React + Redux Toolkit + Node.js/Express + PostgreSQL**.  
Продуманная архитектура и модульная структура кода позволяют легко масштабировать проект, добавляя новые функции — от интервальных повторений до расширенного анализа прогресса.

---

## 🚀 Возможности

- 🔐 **JWT-аутентификация** и авторизация с сохранением сессии
- 🌍 **Перевод слов через MyMemory API**
- 🧾 **Работа с PostgreSQL**: слова, переводы, пользователи, метаданные
- 🪄 **Service Worker** — оффлайн-доступ к словарю
- 💾 **Кеширование запросов** на фронте и бэке
- 📦 **pm2** — продакшн-сервер для Node.js с автоматическим рестартом
- ⚙️ **Полный CI-ready стек** — .env, robots.txt, структура API

---

## 🧱 Стек технологий

| Layer          | Технологии                                   |
|----------------|-----------------------------------------------|
| Frontend       | React, Vite, Redux Toolkit, CSS Modules       |
| Backend        | Node.js, Express, PostgreSQL, JWT             |
| Deployment     | Nginx, pm2, SSH, systemd                      |
| Offline/UX     | Service Worker, LocalStorage, responsive UI   |
| API Integration| MyMemory API, (ранее: Wiktionary)             |

---

## 📁 Структура проекта

### Фронт (React)
\`\`\`
src/
├── api/              # API-функции (fetch, auth, словарь)
├── components/       # Переиспользуемые UI-компоненты
├── features/         # Redux-слайсы и логика
├── pages/            # Главные страницы (Login, Dictionary, etc)
├── hooks/            # Кастомные хуки (useAuth, useFetch)
├── utils/            # Утилиты и форматтеры
└── App.jsx           # Роутинг и базовая логика
\`\`\`

### Бэк (Express)
\`\`\`
backend/
├── routes/           # Роуты (auth, dictionary, users)
├── controllers/      # Логика обработки запросов
├── db.js             # Подключение PostgreSQL
├── middlewares/      # JWT, валидация, логгирование
└── index.js          # Точка входа и запуск сервера
\`\`\`

---

## 💡 Планы на будущее

- 📚 Личный словарь пользователя с тегами и прогрессом
- 🔁 Интервальные повторения (по модели Anki)
- 📱 PWA и установка на телефон
- 🧠 Статистика по изученным словам
- 🌐 Поддержка множественных языков
- 🗂️ Admin-панель для модерации слов

---

## 👨‍💻 Автор

**Егор Арефьев** — фронтенд-инженер с инженерной закалкой и чувством архитектуры.  
Люблю сложные интерфейсы, чистый код, и превращать идеи в работающие системы.

- Telegram: [@EgorArefjev](https://t.me/EgorArefjev)
- GitHub: [Egorarefjev](https://github.com/Egorarefjev)

## License
This project is licensed under the [CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/) License.
© 2025 Egor Arefjev

