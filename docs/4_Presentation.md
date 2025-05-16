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

Link: See [Phase 1 – Use Cases](https://github.com/Chinche-Carl-Afungchwi/Final-Project/blob/main/docs/1_Definition_and_Planning.md)


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

| Week | Date Range       | Hours | Activities                                                                 |
|------|------------------|-------|----------------------------------------------------------------------------|
| 1    | Apr 1 – Apr 8    | 10h   | Defined app scope, wrote user personas, use cases, created Figma prototype |
| 2    | Apr 9 – Apr 16   | 30h   | Building app components locally, creating static and styled frontend       |
| 3    | Apr 17 – Apr 21  | 30h   | Implementing backend, rendering frontend dynamic, testing and deployment   |
| 4    | May 9 – May 14   | 15h   | Enhancing app and creating presentation                                    |
| **Total** | **(across all weeks)** |       | **85h**                                                         |


## 🪢 Presentation Link

[**Underbelle App Presentation.**]((https://youtu.be/swHtQUTPzr8))
