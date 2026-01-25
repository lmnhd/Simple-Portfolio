# Tech Stack & Implementation Rules - Nathaniel Orange Portfolio

This document defines the **mandatory** technology choices and implementation patterns for the Simple-Portfolio project.

## 🎯 Project Purpose
A professional portfolio website showcasing Nathaniel Orange's skills as a Full Stack Developer, Vertical AI Systems Designer, and Automation Engineer.

---

## Core Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Framework** | Next.js 15 (App Router) | Static export, no backend |
| **Language** | TypeScript | Strict mode, no `any` types |
| **Styling** | Tailwind CSS 4 | Utility-first, CSS variables |
| **UI Components** | Custom + shadcn/ui patterns | Radix primitives where needed |
| **Icons** | React Icons (`react-icons`) | FaXxx components (Font Awesome) |
| **Animation** | Framer Motion (optional) | Hero background uses simplex-noise |
| **Data** | `portfolio-data.json` | All content is data-driven |

---

## 🚫 Forbidden Technologies

**DO NOT** import or use these in this project:

| Category | Forbidden |
|----------|-----------|
| AI/LLM | OpenAI, Anthropic, LangChain, Vercel AI SDK |
| Database | Prisma, PostgreSQL, MongoDB, Supabase |
| Backend | API routes with business logic, serverless functions |
| CSS | Bootstrap, styled-components, CSS Modules |
| Legacy | jQuery, class components |

---

## Implementation Guidelines

### 1. Tailwind CSS Usage

```tsx
// ✅ CORRECT: Use CSS variables from globals.css
<div className="bg-primary text-primary-foreground">

// ✅ CORRECT: Use design token classes
<button className="px-8 py-3 font-semibold text-white rounded-lg bg-primary hover:bg-blue-700">

// ❌ WRONG: Hardcoded hex values
<div style={{ backgroundColor: '#2962FF' }}>
```

**CSS Variable Reference** (from `globals.css`):
- `--primary`: `#2962FF` (Electric blue)
- `--foreground`: `#18181B` (Near black)
- `--background`: `#FFFFFF` (White)
- `--muted`: `#F4F4F5` (Light gray)
- `--border`: `#E4E4E7` (Border gray)

### 2. Component Patterns

**Server Components (default)**:
- All page components are Server Components
- Data fetching happens at build time from `portfolio-data.json`
- No `'use client'` unless interactivity required

**Client Components**:
- Use `'use client'` directive only when necessary
- Current client components: `NavbarManager`, `DownloadButton`, `WavyBackground`

### 3. Data-Driven Architecture

All portfolio content comes from `app/portfolio-data.json`:

```tsx
// ✅ CORRECT: Import and type the data
import portfolioData from './portfolio-data.json';
import { PortfolioData } from './types';

const data: PortfolioData = portfolioData;
const { personalInfo, experience, projects } = data;
```

**Type Definitions** (from `app/types.ts`):
- `PortfolioData` - Root interface
- `PersonalInfo` - Name, contact, social links
- `Experience` - Job history with technologies
- `Project` - Portfolio projects with images
- `Skills` - Languages, AI tools, platforms

### 4. Image Handling

```tsx
// ✅ CORRECT: Next.js Image with proper sizing
<Image
  src="/portfolio_img/Lyric_Lab_1.png"
  alt="Project screenshot"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 33vw"
/>

// Images stored in: /public/portfolio_img/
// Available: Halimede.png, Keepit.png, LeisureLife.png, Lyric_Lab_1.png, Subkitz.png
```

### 5. Button Variants

Use the button component from `@/components/ui/button`:

```tsx
// Primary (solid blue)
<Button variant="default">Contact Me</Button>

// Outline
<Button variant="outline">View Resume</Button>

// Ghost (transparent)
<Button variant="ghost">Learn More</Button>

// Hero style (glassmorphism)
<Button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:-translate-y-1">
  Contact Me
</Button>
```

---

## File Structure

```
app/
  page.tsx              # Main portfolio page (Server Component)
  layout.tsx            # Root layout
  globals.css           # CSS variables and Tailwind imports
  portfolio-data.json   # ALL portfolio content
  types.ts              # TypeScript interfaces

src/
  components/
    portfolio/          # Portfolio-specific components
      NavbarManager.tsx   # Fixed navigation (Client)
      DownloadButton.tsx  # Resume download (Client)
      AnimatedSection.tsx # Scroll animations
    ui/                 # Generic UI components
      button.tsx          # Button with variants
      wavy-background.tsx # Hero animation (Client)
    FeatureCard.tsx     # Reusable card component

public/
  portfolio_img/        # Project screenshots
  headshot.jpg          # Profile photo
```

---

## Performance Considerations

1. **Static Export**: This site can be statically exported (`output: 'export'`)
2. **Image Optimization**: Use Next.js `<Image>` component with proper `sizes`
3. **Font Loading**: System font stack for zero network requests
4. **Animation**: WavyBackground uses canvas - disable on mobile if performance issues
