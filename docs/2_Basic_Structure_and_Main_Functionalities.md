# Project Phase 2 – Basic Structure and Main Functionalities

## 1. Environment

The development and deployment environments are fully cloud-based:

- **Frontend** hosted on **Vercel**
- **Backend** hosted on **Render**
- **Source control** managed via **GitHub**
- **Local development** supported using Docker for both backend and PostgreSQL database


## 2. Backend

- **Technology**: Node.js with Express.js
- **Authentication**: Secure JWT-based session handling with middleware protection
- **ORM**: Prisma for type-safe database interactions
- **API Endpoints**:
  - `POST /api/auth/register` – Register new users
  - `POST /api/auth/login` – Authenticate users and return JWT
  - `POST /api/links` – Create unique message links
  - `GET /api/links` – Fetch all links for user
  - `POST /api/messages/:slug` – Submit anonymous message
  - `GET /api/messages/:slug` – Retrieve messages for a link
  - `DELETE /api/messages/:id` – Delete specific message

## 3. Frontend

- **Framework**: React with Vite for fast development
- **Styling**: Tailwind CSS for mobile-first responsive design
- **Pages**:
  - Landing page (`/`)
  - Register & Login pages
  - User Dashboard (`/dashboard`)
  - Anonymous Message page (`/messages/:slug`)
- **Key Features**:
  - Protected routes with JWT validation
  - Dynamic rendering of links and messages
  - Integration with backend using fetch API

## 4. Database

- **DBMS**: PostgreSQL (cloud-hosted on Render)
- **ORM**: Prisma schema defined for:
  - `User` – stores user credentials
  - `Link` – unique slugs tied to users
  - `Message` – anonymous messages tied to a link

## 5. Basic Structure and Architecture

The app follows a clean separation of concerns:

- **Client**: React component structure (pages, components, layouts)
- **Server**: Organized by routes, controllers, middlewares
- **Database**: Prisma schema with relations between `User`, `Link`, and `Message`

Build pipeline for backend includes:
- `npm install`
- `npx prisma generate`
- TypeScript compilation

Deployment uses environmental configuration via `.env` for secrets and database connection.

## 6. Functionalities

Implemented functionalities include:

- User registration and login with session persistence
- Link generation, display, and deletion
- Anonymous message submission without account
- Viewing and deleting received messages
- Exporting message view as image

All core use cases from Phase 1 have been fully implemented.

## 7. Code Quality and Documentation

- **Code**: Well-structured with modular components and clear naming
- **Frontend**: Components broken down for reusability and clarity
- **Backend**: Controllers and routes separated with clear logic flow
- **Docs**: Project includes README, planning documents, and clear folder structure

## 8. Testing and Error Handling

- Input validation present in frontend forms (required fields, length, etc.)
- API error responses handled with user-friendly messages
- JWT token verification middleware protects sensitive endpoints
- Basic unit tests performed manually during development phase

## 9. User Interface and Interaction

- Clean, minimalist UI with mobile-first design
- Tailwind used for consistent spacing, layout, and responsiveness
- Navbar collapses on smaller screens
- Action buttons include tooltips and icons for intuitive interaction
- Immediate feedback provided after message submission, link generation, or deletion
