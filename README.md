# Passport Auth Server

## 📋 Опис

Цей проект — сервер на Node.js з використанням Express і Passport.js для реалізації **авторизації користувачів**. Реалізовано реєстрацію, логін, сесії, захищений маршрут `/protected` та збереження користувачів у MongoDB.

---

## 🚀 Технології

- Node.js, Express.js
- MongoDB + Mongoose
- Passport.js (локальна стратегія)
- express-session
- dotenv

---

## ⚙️ Встановлення

```bash
git clone https://github.com/your-username/passport-auth-server.git
cd passport-auth-server
npm install
```
## Створи .env файл:
PORT=5050
MONGO_URI=mongodb://localhost:27017/passport-auth
NODE_ENV=development
▶️ Запуск

## node server.js
Сервер запуститься на: http://localhost:5050

🔐 Авторизація

📌 Реєстрація
POST /auth/register
Body: { email, password }
🔑 Логін
POST /auth/login
Body: { email, password }
🚪 Вихід
GET /auth/logout
🔒 Захищений маршрут
GET /protected
(доступ лише для авторизованих користувачів)

Структура проєкту

.
├── config/
│   └── passport.js
├── models/
│   └── User.js
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── routes/
│   ├── auth.js
│   └── protected.js
├── .env
├── .gitignore
├── package.json
└── server.js
