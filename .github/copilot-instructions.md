# GitHub Copilot Instructions - Simple Portfolio

## Inherited Workspace Standards

The following rules are inherited from the Master Workspace and MUST be followed:

### TypeScript Standards
- **NEVER use `any` types** - all types must be explicitly defined
- **No type scattering** - avoid duplicate type definitions across files
- **Strongly typed objects/classes only** - prefer interfaces and Zod schemas
- Keep files under 500 lines - split into multiple modules if needed

### PowerShell Syntax (Windows 11)
- Use `;` for command chaining (NEVER `&&`)
- PowerShell is the default shell - use native cmdlets
- Run commands from correct directory context

### Git Workflow
- **Always create checkpoints before significant changes**: `git add . ; git commit -m "checkpoint: before [change]"`
- Use descriptive commit messages that explain the "why"
- Confirm multi-step plans with user before executing

### Development Philosophy
- Prefer AI/LLM solutions over programmatic approaches when applicable
- Keep LLM prompts separate from core business logic
- Never write mock/fallback implementations unless explicitly requested
- Use "Not Implemented" placeholders for incomplete features

## Next.js Conventions
- **Separate business logic from route handlers** - use `api/<endpoint>/core-logic.ts` pattern
- Be mindful of client/server component boundaries
- Never start/stop the dev server (user manages this)
- Create test pages in `/tests/` or `app/tests/` directories

## Project-Specific Rules

**Framework**: Next.js 15 (App Router)
**Purpose**: Portfolio website for Nathaniel Orange (extracted from Lyrical project)

### Project Context
This is a standalone portfolio website for Nathaniel Orange, extracted from the Lyrical project.
It is a **static** or **client-side** Next.js application.

### 🚫 Constraints
- **NO AI/LLM Libraries**: Do not import OpenAI, Anthropic, or LangChain.
- **NO Database**: Do not use Prisma, PostgreSQL, or Mongo. Use `portfolio-data.json`.
- **NO Backend Logic**: Keep API routes minimal or non-existent.

### 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons (FaXxx components)
- **Animation**: Framer Motion (if needed)
- **UI Components**: Custom components in `src/components/`

### 📂 File Structure
- `app/`: Main application pages
  - `page.tsx` - Portfolio homepage
  - `portfolio-data.json` - All portfolio content (contact, experience, projects)
  - `types.ts` - TypeScript interfaces for portfolio data
- `src/components/`: Reusable UI components
  - `portfolio/` - Portfolio-specific components
  - `ui/` - Generic UI components (shadcn-style)
- `public/portfolio_img/`: Static portfolio images

### Key Patterns
- **Data-driven**: All content sourced from `portfolio-data.json`
- **Type-safe**: Use `PortfolioData` interface for all data access
- **Static images**: Store in `/public/portfolio_img/` and reference with `/portfolio_img/filename.png`

### Interview Context
This project demonstrates:
- Clean Next.js 15 App Router architecture
- Type-safe data-driven UI
- Modern React patterns with server components
- Responsive design with Tailwind CSS 4
- Professional portfolio presentation

## References
- Master Workspace Rules: `C:\Users\cclem\Dropbox\Source\.github\copilot-instructions.md`
- Project Design Record: `PDR.md`
- Setup Guide: `README.md`
