
# UnderBelle – Your Anonymous Message Hub

UnderBelle is a modern full-stack web application that allows users to receive anonymous messages from friends and followers through shareable links. The platform is built with React and Node.js and leverages PostgreSQL for data persistence. It features real-time link generation, message handling, user authentication with JWT, and an intuitive UI optimized for desktop and mobile views.

## Live App

- **Frontend (Vercel):** [https://underbelle.vercel.app](https://underbelle.vercel.app)
- **Backend (Render):** [https://underbelle-backend.onrender.com](https://underbelle-backend.onrender.com)

---

## Features

- User registration and login with JWT authentication
- Secure anonymous messaging with dynamic shareable links
- View and moderate received messages (delete/export)
- Copy and manage personal message links
- Responsive UI with mobile menu and dark theme
- Export messages to JPG with styled watermark
- Deployment ready for Vercel (frontend) and Render (backend)

---

## Technologies Used

### Frontend
- Vite + React + TypeScript
- TailwindCSS
- React Router DOM
- Axios

### Backend
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL (hosted on Render)
- JWT for authentication
- Dotenv for environment variables

---

##  Folder Structure

```
Final-Project/
├── client/          # Frontend source code
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── layouts/
│       ├── pages/
│       └── main.tsx
├── server/          # Backend source code
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── prisma.ts
│   │   └── index.ts
│   └── .env
```

---

## Deployment Instructions

### Frontend (Vercel)
1. Push `client/` to GitHub.
2. Connect your GitHub repo to [Vercel](https://vercel.com).
3. During setup:
   - Set root directory to `client`
   - Framework: `Vite`
   - Environment Variables 

### Backend (Render)
1. Push `server/` to GitHub.
2. Create a PostgreSQL database on Render.
3. Create a new web service:
   - Root directory: `server`
   - Build Command: `npm install && npx prisma generate && tsc`
   - Start Command: `node dist/index.js`
4. Add `.env` variables:
   - `DATABASE_URL` (from Render DB)
   - `JWT_SECRET` (your secure key)

---

## Installation (Local)

```bash
# Clone the repo
git clone https://github.com/Chinche-Carl-Afungchwi/Final-Project

# FRONTEND
cd Final-Project/client
npm install
npm run dev

# BACKEND
cd ../server
npm install
npx prisma generate
npx prisma db push
npm run dev
```

---

##  Testing

- Manual testing of all user flows including login, link creation, message sending, moderation, and export.
- Error handling is implemented for network and validation failures.

---

##  License

MIT

---

**Made by Chinche Carl Afungchwi**
