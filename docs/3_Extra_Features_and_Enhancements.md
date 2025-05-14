# Phase 3 – Extra Feature and Enhancements

##  Chosen Use Case or Feature to Improve

**Feature**: Message moderation and enhanced usability in the Dashboard.

I chose to expand the **message management** experience for users. Initially, users could view messages, but there was limited control over message curation or interaction. To improve real-world usability, I added features such as:

- Message **deletion** per message
- **Export as image** (JPG) for each message board view
- UI improvements to buttons and layout

These changes enhance the user experience, especially for those using the platform for feedback collection or social engagement where content filtering is necessary.

## Original Definition

Referenced from Phase 1:

### Use Case 4 – View and Manage Messages
- Actor: Logged-in user
- Flow: Open Dashboard → Click link → View message list → Delete or export messages

This use case originally described the ability to view and manage messages. The Phase 3 work extends the **management** aspect to include a richer, more interactive experience.

##  Implementation

###  What was implemented?
- **Delete button** added to each message card
- **Image export** feature added using `html2canvas`
- Layout refactored for mobile and desktop consistency
- Buttons made more distinct with new icons and hover effects

### Technical Changes Required
- Added a `DELETE /api/messages/:id` endpoint on backend
- Created new frontend logic to call delete endpoint and update state
- Integrated `html2canvas` to render the message board DOM as an image for download
- UI enhancements using Tailwind CSS

### Technologies Used
- **Backend**: Node.js + Express (new route handler for delete)
- **Frontend**: React, Tailwind, `html2canvas`
- **State Management**: React hooks (`useEffect`, `useState`)
- **File Export**: Client-side DOM capture via canvas

### Challenges and Solutions
- **Challenge**: DOM element capturing and styling with `html2canvas` had issues on mobile.
  - **Solution**: Adjusted CSS to ensure canvas rendering compatibility, such as fixed dimensions and overflow handling.
- **Challenge**: State inconsistency after message deletion.
  - **Solution**: Ensured local state was updated immediately after server-side deletion to reflect accurate UI.
- **Challenge**: Exported image quality and responsiveness.
  - **Solution**: Dynamically set scale and dimensions to match screen size for clarity.

These enhancements significantly polish the user experience and prepare the app for real-world usage scenarios with basic moderation and sharing features.
