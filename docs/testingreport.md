# Testing Report – Under Belle

## Test Summary

During Phase 3 of the Under Belle project, live app testing was conducted with **3 external users** to verify functionality, usability, and feature completeness. The users were given access to the deployed version and asked to interact with all major features.

---

## Participants

| Name | Background | Role in Testing |
|------|------------|------------------|
| Tester 1 | University student | UI/UX suggestions and functional testing |
| Tester 2 | Tech-savvy content creator | Feature validation |
| Tester 3 | Beginner internet user | General usability testing |

---

## Testing Scenarios and Results

###  Core Functionalities

| Feature Tested | Tested By | Result | Notes |
|----------------|-----------|--------|-------|
| Account Registration | All Testers |  Success | Registered with unique emails |
| Login | All Testers |  Success | Verified JWT-based login |
| Generate Link | All Testers |  Success | Links were generated and displayed |
| Copy Link | All Testers |  Success | Clipboard copy worked correctly |
| Submit Message (Anonymous) | All Testers |  Success | Messages submitted successfully |
| View Messages in Dashboard | All Testers |  Success | Messages loaded correctly |
| Export Message as JPG | All Testers |  Success | JPGs exported with watermark |
| Delete Message | All Testers |  Success | Messages deleted immediately |
| Logout | All Testers |  Success | Logged out and redirected to login page |

---

## User Feedback and Resulting Fixes

| Feedback | Suggested By | Action Taken | Code Reference |
|----------|--------------|--------------|----------------|
| Logged-in users should be redirected to Dashboard from Home | Tester 1 |  Implemented conditional redirect | `src/pages/Home.tsx` |
| Add a “View Messages” button next to each message link | Tester 2 |  Implemented | `src/pages/Dashboard.tsx` |
| Add Terms and Conditions page | Tester 3 |  Implemented and linked in footer | `src/pages/Terms.tsx`, `src/components/Footer.tsx` |

---

## Conclusion

All test cases passed successfully, and user feedback helped improve the polish and completeness of the application. Users confirmed that the app is intuitive, fast, and reliable.

This testing process confirms the app is production-ready and functionally complete.
