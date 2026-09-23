# V10 Complete Build

This build connects the SITAMS CSE (AI & ML) R23 syllabus structure, revision PDFs, and a working 30-question quiz engine.

## Important content labeling
The quiz banks in `js/quiz-bank.js` are **syllabus-based practice questions generated from the uploaded R23 syllabus topics**. They are NOT official SITAMS question-bank questions and are NOT labelled verified.

Official SITAMS course material/question-bank links are separate resources.

## Functional features
- Year → semester → theory subject → unit navigation
- 30-question randomized unit quiz
- 30-minute timer
- Immediate score calculation
- Progress saved per student, subject and unit
- Wrong-answer review with correct answer and syllabus explanation
- Professional revision PDFs
- Local planner/profile/auth from earlier versions

## Admin Control Center
V10 now includes a browser-only admin area:
- Admin login
- Student account list/search/delete
- Quiz attempt and aggregate statistics
- Planner task count
- R23 theory-subject count
- Announcement publishing/deletion, shown on student dashboard
- Student-data export
- Curriculum overview

Demo admin credentials: admin@sitams.local / Admin@123
Important: this is a local prototype. Admin authentication and management data use browser localStorage/sessionStorage and are not a production server-side authentication system.
