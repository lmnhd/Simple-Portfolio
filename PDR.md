# Project Design Record (PDR) - Simple Portfolio

## 1. Goal
Create a lightweight, professional portfolio website extracted from the Lyrical codebase, removing all AI/LLM and database dependencies.

## 2. Core Features
- Hero section with animated background
- Resume/Experience timeline
- Project gallery
- PDF Download

## 3. Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React / React Icons
- Framer Motion

## 4. Architecture
- `app/page.tsx`: Main entry point (single page scroll or minimal routing)
- `portfolio-data.json`: Static data source to avoid database complexity
- `public/assets`: Static images
