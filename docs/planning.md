# Under Belle – Full Project Documentation (Phases 1–4)

---

## Overview

**Under Belle** is a minimalist anonymous messaging platform that allows users to receive messages from anyone — without revealing the sender’s identity. Users can create accounts, generate unique links, and share them. Anyone can send anonymous messages through those links without registering.

---

##  Project Phase Coverage

| Phase | Title                               | Status |
|-------|-------------------------------------|--------|
| 1     | Definition and Planning             | Done |
| 2     | Basic Framework and Core Features   | Done |
| 3     | Advanced Features and Optimization  | Done |
| 4     | Deployment         | Done |

---

## Technologies Used

| Layer        | Stack                                      |
|--------------|--------------------------------------------|
| Frontend     | Vite + React, Tailwind CSS, html2canvas    |
| Backend      | Node.js, Express, Prisma ORM               |
| Database     | PostgreSQL (hosted on Render)              |
| Authentication | JWT                                       |
| Hosting      | Frontend: Vercel<br>Backend: Render        |
| Dev Tools    | Docker, Prisma, TypeScript, GitHub         |

---

## File Structure

```
final-project/
├── client/                   # Frontend React App
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   └── vite.config.ts
│
├── server/                   # Backend Express App
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   └── index.ts
│   └── tsconfig.json
│
├── .env                      # Environment variables
├── README.md
└── planning.md
```

---

##  Deployment Instructions

### Frontend (Vercel)
1. Push the `client` folder to GitHub
2. Import project into Vercel
3. Configure `vite.config.ts` for correct aliases
4. Add `vercel.json` with fallback rewrites
5. Vercel will auto-redeploy on Git push

### Backend (Render)
1. Push the `server` folder to GitHub
2. Create a Web Service in Render
3. Set environment variables: `DATABASE_URL`, `JWT_SECRET`
4. Set build command:
```bash
npm install && npx prisma generate && tsc
```
5. Set start command:
```bash
node dist/index.js
```

---

## Features Completed

- User registration & login
- JWT-based session handling
- Dashboard with:
  - Link generation
  - Copyable link
  - Message count
  - Delete link and associated messages
- Anonymous message submission
- Message viewer with export to JPG
- Message moderation (delete)
- “Remember Me” login
- Responsive design with collapsible nav
- Terms and Conditions page
- Dynamic frontend/backend URLs
- Deployment: Vercel (frontend) + Render (backend)
- Documentation & planning

---

##  Phase 3 – Advanced Features & Optimization

| Feature                            | Status |
|-----------------------------------|--------|
| Dynamic route linking             |  Done |
| JPG export watermark styling      |  Done |
| Mobile-friendly navigation        |  Done |
| Dashboard improvements (buttons) |  Done |
| Secure route protection           |  Done |
| JWT storage with remember me      |  Done |
| Deployment environment handling   |  Done |

---

##  Phase 4 – Presentation & Finalization

| Task                              | Status |
|-----------------------------------|--------|
| README.md and documentation       |  Done |
| GitHub repo with full history     |  Done |
| Planning document submitted       |  Done |
| Production deployment live        |  Done |
| Testing & feedback                |  Done |
| Terms and Conditions page         |  Done |

---

##  Live Links

-  [Frontend (Vercel)](https://underbelle.vercel.app)
-  [Backend (Render)](https://underbelle-backend.onrender.com)

---

##  Credits

Built by Chinche Carl Afungchwi as part of a full-stack software project for Advanced Web Development Course at Centria University of Applied Sciences.

Date: April 21, 2025
