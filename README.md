# UnderBelle – Anonymous Message Platform

UnderBelle is a responsive full-stack web application that allows users to receive **anonymous messages** through unique, shareable links. Built with modern technologies like React, Express, and PostgreSQL, it offers secure authentication, dynamic message handling, and a clean user experience optimized for mobile and desktop users alike.

---

##  Live Demo

- **Frontend (Vercel)**: [https://underbelle.vercel.app](https://underbelle.vercel.app)
- **Backend (Render)**: [https://underbelle-backend.onrender.com](https://underbelle-backend.onrender.com)

---

##  Key Features

-  **User Authentication**: Secure JWT-based registration and login
-  **Link Generation**: Users create unique links to receive anonymous messages
-  **Anonymous Messaging**: Visitors can send messages without an account
-  **Dashboard**: View message links, copy them, and moderate received messages
-  **Moderation Tools**: Delete messages or export them as JPG images
-  **Responsive Design**: Mobile-first UI with dark mode and collapsible navigation
-  **Cloud Deployed**: Live frontend on Vercel, backend and database hosted on Render

---

##  Technologies

### Frontend
- React + Vite + TypeScript
- Tailwind CSS for styling
- Axios for API calls
- html2canvas for image export

### Backend
- Node.js + Express + TypeScript
- Prisma ORM with PostgreSQL
- JWT authentication middleware
- Dotenv for configuration

---

##  Project Structure

```
Final-Project/
├── client/                  # Frontend (Vite + React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── layouts/
│       ├── pages/
│       └── main.tsx
├── server/                  # Backend (Express + Prisma)
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── prisma.ts
│   │   └── index.ts
│   └── .env


---

##  How to Run Locally


# Clone the repository
git clone https://github.com/Chinche-Carl-Afungchwi/Final-Project

# Set up Frontend
cd Final-Project/client
npm install
npm run dev

# Set up Backend
cd ../server
npm install
npx prisma generate
npx prisma db push
npm run dev


---

## Deployment Steps

### Frontend (Vercel)
1. Import GitHub repo into [Vercel](https://vercel.com)
2. Set root directory: `client`
3. Choose framework: `Vite`
4. Set environment variables if needed

### Backend (Render)
1. Create a PostgreSQL database via Render
2. Deploy backend as a web service:
   - Root: `server`
   - Build: `npm install && npx prisma generate && tsc`
   - Start: `node dist/index.js`
3. Set required environment variables:
   - `DATABASE_URL`
   - `JWT_SECRET`

---

## Testing & Quality

- Fully tested user flows: login, registration, link generation, messaging, deletion, and export
- Input validation and API error handling
- Manual QA across desktop and mobile devices

---

##  Developer

Made with care by **Chinche Carl Afungchwi**  
Advanced Web Development @ Centria UAS – 2025
