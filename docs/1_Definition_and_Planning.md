# Project Phase 1 – Definition and Planning

## 1. User Personas

###  Persona 1: Sarah, 22 – University Student
- **Goals**: Wants a way to receive honest feedback from classmates about her public speaking without them fearing judgment.
- **Pain Points**: Traditional feedback channels aren't anonymous; most peers don’t give real opinions.
- **Behavior**: Active on social media, shares anonymous link via Instagram bio or WhatsApp.

###  Persona 2: Ahmed, 29 – Junior Developer
- **Goals**: Seeks to improve personal brand by collecting anonymous testimonials from colleagues and clients.
- **Pain Points**: Feedback forms are cumbersome, no lightweight anonymous option.
- **Behavior**: Shares link through email signatures and LinkedIn.

###  Persona 3: Lina, 17 – Teenager and Blogger
- **Goals**: Wants to receive anonymous messages for her blog Q&A section.
- **Pain Points**: Concerned about online safety and moderation of toxic comments.
- **Behavior**: Posts link on TikTok, filters messages before sharing.

## 2. Use Cases and User Flows

###  Use Case 1 – Register an Account
- **Actor**: New user
- **Flow**: Fill registration form → Submit → JWT issued → Redirect to Dashboard

###  Use Case 2 – Generate and Share Link
- **Actor**: Logged-in user
- **Flow**: Click “Create New Link” → Backend generates slug → Link displayed and copyable

###  Use Case 3 – Send Anonymous Message
- **Actor**: Any visitor
- **Flow**: Open shared link → Type message → Submit → Message stored anonymously

###  Use Case 4 – View and Manage Messages
- **Actor**: Logged-in user
- **Flow**: Open Dashboard → Click link → View message list → Delete or export messages

###  Use Case 5 – Moderate Messages
- **Actor**: Logged-in user
- **Flow**: View message list → Click “Delete” next to spam or abusive messages

## 3. UI Prototypes

UI design was approached through iterative prototyping in React. The following views were designed and implemented:

- **Home Page** – Call to action with login/register options.
- **Dashboard** – Displays generated links, message counts, buttons for copy/delete/view.
- **Anonymous Message Page** – Simple, minimalist interface for writing and submitting messages.
- **Message Viewer** – Grid of received messages, includes delete and export options.
- **Login/Register Forms** – Form inputs styled with Tailwind CSS and responsive design.
- **Navigation Menu** – Collapsible mobile nav integrated using Tailwind UI principles.

Design goals:
- Mobile-first responsiveness
- Minimalist, distraction-free interface
- Clear navigation and feedback

## 4. Information Architecture and Technical Design

###  Architecture Overview

**Frontend**:
- Built with **React + Vite**
- Tailwind CSS for styling
- Routes:
  - `/` → Landing
  - `/login`, `/register`
  - `/dashboard`
  - `/messages/:slug`

**Backend**:
- Built with **Express.js**
- RESTful API endpoints:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `POST /api/links`
  - `GET /api/links`
  - `POST /api/messages/:slug`
  - `GET /api/messages/:slug`
  - `DELETE /api/messages/:id`

**Database**:
- PostgreSQL via Prisma ORM
- Tables:
  - `User`
  - `Link`
  - `Message`

**Authentication**:
- JWT-based session management
- Secure route protection middleware

**Deployment**:
- Frontend: Vercel
- Backend: Render
- Environment variables managed in `.env`

## 5. Project Management and User Testing

###  Project Management
- Git used for version control with commits organized by feature/bugfix
- Tasks managed in a personal Kanban-style checklist

###  User Testing
- Tested across devices (mobile, desktop)
- Peer testing with feedback used to:
  - Improve dashboard layout
  - Refine anonymous submission page
  - Enhance error handling and validations
