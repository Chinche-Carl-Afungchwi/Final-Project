# Phase 4 – Project Presentation

##  Project Title

**Underbelle – Anonymous Messaging Platform for Feedback and Interaction**

##  Project Overview

Underbelle is a minimalist web app that enables users to receive anonymous messages through shareable links. It targets individuals seeking candid feedback, social engagement, or anonymous Q&A interactions. The goal is to provide a distraction-free platform with user-controlled moderation and privacy features.

Target users include:
- Students seeking peer feedback
- Professionals gathering anonymous testimonials
- Content creators hosting Q&A sessions

## Use Case Summary

Link: See [Phase 1 – Use Cases](underbelle_phase1_definition.md)

| Use Case                                  | Implemented | Demonstration / Notes |
|------------------------------------------|-------------|------------------------|
| User registers an account                | Yes         | JWT-based session, secure register page |
| User logs in                             | Yes         | Session persists with "Remember Me" option |
| User generates and shares a message link | Yes         | Link created, displayed and copyable on dashboard |
| Visitor sends anonymous message          | Yes         | No account needed, real-time form submission |
| User views and manages received messages | Yes         | Message list, delete option, JPG export |
| User deletes inappropriate messages      | Yes         | User moderation feature with delete button per message |

## Technical Implementation

**Frontend**:
- React + Vite
- Tailwind CSS for styling
- html2canvas for image export
- Hosted on Vercel

**Backend**:
- Node.js + Express
- JWT-based authentication with middleware
- RESTful API structure
- Hosted on Render

**Database**:
- PostgreSQL with Prisma ORM
- Tables: User, Link, Message

**Architecture**:
- Modular folder structure for components, routes, and services
- Docker used for local development

## Development Process

- Defined use cases and user personas in early April
- Developed frontend and backend in parallel using Docker
- Initial deployment was completed mid-April
- Final week focused on enhancements: message deletion, export, and mobile UI polish
- GitHub used for version tracking and deployment

## Reflection and Future Work

### What worked well:
- Clean separation of client/server responsibilities
- Smooth integration of authentication and messaging flows
- Responsive design and fast hosting through Vercel and Render

### Challenges:
- html2canvas rendering issues on mobile
- Managing state updates after deletions
- Styling consistent across all screen sizes

### Future Improvements:
- Add AI-powered moderation (e.g., toxicity detection)
- Implement email notifications for new messages
- Build analytics dashboard for link/message stats

## Work Hours Log

| Date       | Time | Task                              |
|------------|------|-----------------------------------|
| 2.4.2025   | 3h   | Defined use cases                 |
| 4.4.2025   | 2h   | Built login form                  |
| 6.4.2025   | 3h   | Created registration and auth     |
| 9.4.2025   | 4h   | Set up backend API endpoints      |
| 11.4.2025  | 3h   | Built dashboard UI                |
| 13.4.2025  | 4h   | Integrated message submission     |
| 15.4.2025  | 2h   | Setup Docker and PostgreSQL       |
| 16.4.2025  | 2h   | Vercel and Render deployment      |
| 17.4.2025  | 3h   | Final UI polish                   |
| 18.4.2025  | 2h   | Export feature using html2canvas  |
| 19.4.2025  | 3h   | User testing and feedback fixes   |
| 20.4.2025  | 3h   | Message delete functionality      |
| 21.4.2025  | 3h   | Final documentation               |
| **Total**  | **63h** |                               |

## 🪢 Presentation Link

**Presented live during lecture.**
