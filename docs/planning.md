
# Under Belle – Phase 1: Definition and Planning

---

## Project Overview: Under Belle

**Under Belle** is a minimalist anonymous messaging web app that allows users to receive messages from anyone—without revealing the sender’s identity. 
After registering, users are given a unique, shareable link that can be posted on social platforms or sent directly to others. Visitors to the link can send anonymous messages without needing to log in.

The core idea is to encourage honest feedback, anonymous confessions, or uplifting messages in a simple, elegant, and private space. 
All received messages appear in the user’s dashboard, where each one can be viewed, timestamped, and exported as a shareable JPG image card.

---

## User Personas

### Alex – Social Media User
- **Age**: 21  
- **Occupation**: University student  
- **Goals**:
  - Get honest feedback from friends/followers
  - Share an anonymous link on social media  
- **Frustrations**:
  - Doesn’t want people to feel judged or tracked
  - Hard to collect feedback without login barriers

### Jordan – Content Creator
- **Age**: 28  
- **Occupation**: TikTok content creator  
- **Goals**:
  - Engage audience in anonymous Q&A
  - Collect opinions or confessions  
- **Frustrations**:
  - Trolls ruin traditional feedback platforms
  - Wants a clean, ad-free, simple space

---

## Use Cases & Usage Scenarios

### 1. Register an Account
- **Goal**: User creates a new account
- **Steps**:
  1. Fill in email & password
  2. Receive confirmation
  3. Auto-generate anonymous message link
- **System**: Creates user, stores hashed password, links to DB

### 2. Login
- **Goal**: Return user accesses their dashboard
- **Steps**:
  1. Enter credentials
  2. Get redirected to dashboard
- **System**: Verifies JWT, fetches user links & messages

### 3. Share Anonymous Link
- **Goal**: User copies link to share
- **Steps**:
  1. From dashboard, click “Copy Link”
  2. Paste anywhere (social media, bio, etc.)
- **System**: Link contains unique ID tied to the user

### 4. Submit an Anonymous Message
- **Goal**: Visitor submits a message through a shared link
- **Steps**:
  1. Visit user’s anonymous link
  2. Type message
  3. Submit
- **System**: Saves message + timestamp linked to the user

### 5. View Messages in Dashboard
- **Goal**: User views messages they’ve received
- **Steps**:
  1. Login → Dashboard → Select link
  2. View list of messages as cards
- **System**: Fetch and display all messages linked to that ID

### 6. Generate a Shareable JPG Card from Message
- **Goal**: User downloads a message card as an image
- **Steps**:
  1. In dashboard, click “Download JPG” on any message card
  2. JPG file is downloaded or ready to share
- **System**: Generates styled image (message + timestamp) using HTML to Canvas or similar

---

## UI Prototypes

Figma Link: [https://www.figma.com/design/1vijtK3jY3LqX4jQKAqhke/Under-Belle?node-id=0-1&t=Cim2tyumCkfgBNbb-1](https://www.figma.com/design/1vijtK3jY3LqX4jQKAqhke/Under-Belle?node-id=0-1&t=Cim2tyumCkfgBNbb-1)

**Screens:**
- Landing Page
- Login/Register Page
- Dashboard with message links
- Anonymous message form page
- Message Viewer (cards + “Download JPG” button)

---

## Information Architecture & Technical Design

### Key Components
- **Auth system**: JWT for login sessions
- **Link generator**: Random unique ID (e.g., /m/xyZ987)
- **Public form page**: Message submitter UI
- **Message viewer**: Card view of messages
- **Card export**: JPG generator from message content

### Data Models
```txt
User {
  id, email, password_hash, created_at
}

MessageLink {
  id, user_id, slug (e.g., xyZ987), created_at
}

Message {
  id, link_id, content, created_at
}
```

### Database Architecture (Dockerized PostgreSQL)
- Use **Docker Compose** to manage the PostgreSQL database locally
- Data is persisted via volumes
- Configured via `.env` for secure environment variable management
- Smooth transition from dev to prod

### Tech Stack
- **Frontend**: React + Tailwind CSS + html2canvas
- **Backend**: Node.js + Express
- **Database**: PostgreSQL (Docker container)
- **Auth**: JWT
- **Hosting**: Vercel (frontend), Render or Railway (backend)
- **Dev Tools**: Docker, Docker Compose, dotenv

---

## Project Management & User Testing

###  User Testing Plan
- Test with 2 users
  - Register + generate link
  - Submit messages via shared link
  - View messages
  - Download/share a JPG card
- Collect feedback on:
  - Clarity of UI
  - Ease of generating and sharing anonymous links
  - Experience using message card images

---


## Conclusion

"**Under Belle**" delivers a meaningful and engaging way for users to receive anonymous feedback or confessions in a clean, secure, and social-friendly format. 
With features like login-based dashboards, public message links, and shareable JPG message cards, the app balances technical soundness with real-world usability.

The planning phase focused on identifying user needs, outlining critical workflows, designing an intuitive UI, and setting a robust technical foundation using Docker, PostgreSQL, and a modern React + Node.js stack.

This sets the stage for a smooth build in the upcoming development phases. We're ready to move into implementation with clarity, confidence, and a well-defined scope.

---
