# LearnWithVijayshree — Product Requirements

## Original Problem Statement
Online personal Math & Science coaching website (K-12), "LearnWithVijayshree". Free demo appointment form (name, email, phone, message), subject/grade/syllabus details, blog previews, sleek UI. Critical: extensive SEO for tutoring keywords + location-based SEO.

## Users
Students (K-12) and their parents, globally.

## Tech Stack
React 19 (CRA/craco) + Tailwind + shadcn/ui, FastAPI backend, MongoDB (Motor). react-router-dom v7.

## Implemented (updated June 9, 2026)
- **Landing page** (`LandingPage.js`): hero, About + intro video, Courses, Global Locations, Blog previews, appointment form, footer.
- **Courses (5)**: Mathematics, Science, English, Hindi, Phonics — each with 4 grade/level cards & syllabus (`data/content.js`, rendered via `CourseBlock`).
- **Global Locations (5 regions)**: USA, Canada, Europe, Australia, Dubai — each with popular area names (rendered via `RegionCard`).
- **Intro video**: real `<video>` element in About section (artifact mp4).
- **Blog**: 4 real articles with individual pages at `/blog/:slug` (`BlogPost.js`), related posts + CTA.
- **Contact**: WhatsApp `+919315371167` (wa.me/919315371167), email `tutor@learnwithvijayshree.com`.
- **SEO**: rich meta/keywords/OG/Twitter tags, canonical, EducationalOrganization + Course structured data (JSON-LD) in `index.html`; `robots.txt` + `sitemap.xml` in `public/`.
- **Backend**: `POST /api/appointments` (create), `GET /api/appointments` (list), OPTIONS preflight. MongoDB `appointments` collection.

## Data Models
- `appointments`: {id, name, email, phone, message, created_at, status}

## Testing
- iteration_2.json: 100% backend (5/5 pytest) + 100% frontend flows. No open bugs.

## Backlog / Future (P1/P2)
- P1: Email notification to tutor on form submit (needs Resend/SendGrid integration).
- P2: Blog index/listing page (`/blog`).
- P2: Testimonials / success stories section.
- P2: Admin view to see submitted appointments.
- P2: Refactor LandingPage into section components; move contact constants to shared config; return 201 on create.
- Note: sitemap/robots + canonical use preview domain; update to production domain on deploy.
