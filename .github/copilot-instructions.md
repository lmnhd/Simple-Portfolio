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
- NEVER auto-commit without explicit user permission

### Agent Behavior Rules (CRITICAL)
- **🚫 NEVER run `npm run dev`, `npm start`, or any dev server commands** - User controls server lifecycle
- **🚫 NEVER run `npm install` without explicit permission** - User may have specific dependency management needs
- **✅ ALWAYS create git checkpoint before file edits** - Use PowerShell syntax: `git add . ; git commit -m "checkpoint: before [description]"`
- **✅ ALWAYS confirm multi-step operations** - Explain plan, wait for approval
- **✅ ASK before structural changes** - Don't assume, confirm with user first
- **✅ READ instructions files first** - Check `.github/copilot-instructions.md`, `CLAUDE.md`, `PDR.md` before starting work

### Development Philosophy
- Prefer AI/LLM solutions over programmatic approaches when applicable
- Keep LLM prompts separate from core business logic
- Never write mock/fallback implementations unless explicitly requested
- Use "Not Implemented" placeholders for incomplete features

## Next.js Conventions
- **Separate business logic from route handlers** - use `api/<endpoint>/core-logic.ts` pattern
- Be mindful of client/server component boundaries
- **🚫 NEVER start/stop the dev server** - User manages this completely (DO NOT run `npm run dev`, `npm start`, or any server commands)
- Create test pages in `/tests/` or `app/tests/` directories
- Use Server Components by default; only add 'use client' when necessary for interactivity

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

---

## 🤖 Portfolio Agent Guidelines

### CRITICAL: Read Before Making Changes
1. **ALWAYS read** `.github/AGENT_README.md` for comprehensive maintenance guide
2. **ALWAYS read** `.github/skills/brand-identity/SKILL.md` for design system
3. **Create checkpoint** before edits: `git add . ; git commit -m "checkpoint: before [change]"`

### Portfolio Maintenance Tasks

#### Adding/Updating Content
- **ALL content** lives in `portfolio-data.json` - never hardcode text in components
- Update `types.ts` if adding new data fields
- Follow voice/tone guidelines in `brand-identity/resources/voice-tone.md`

#### Adding New Projects
1. Add screenshot to `/public/portfolio_img/ProjectName.png` (1200x630 recommended)
2. Add project object to `portfolio-data.json` projects array:
   ```json
   {
     "title": "Project Name",
     "description": "WHAT + HOW + IMPACT in 2-3 sentences",
     "link": "https://...",
     "image": "/portfolio_img/ProjectName.png"
   }
   ```
3. Place newest projects FIRST in the array

#### Styling Changes
- **NEVER hardcode colors** - use CSS variables (`bg-primary`, `text-foreground`)
- Reference `brand-identity/resources/design-tokens.json` for all styling decisions
- Follow component patterns in `brand-identity/resources/tech-stack.md`

### Layout Optimization Priority
**User has requested Projects section be more prominent.** Consider:
- Moving Projects section higher in page order (after Hero)
- Adding visual prominence (gradient backgrounds, badges)
- See `AGENT_README.md` for detailed implementation options

### Section Order Reference (app/page.tsx)
| Current Position | Section | Recommended Action |
|------------------|---------|-------------------|
| 1 | Hero | Keep |
| 2 | Overview | Consider condensing or moving down |
| 3 | Experience | Keep |
| 4 | Education | Keep (inside Experience) |
| 5 | Skills | Consider condensing |
| 6 | **Projects** | **⚠️ MOVE HIGHER - Position 2 or 3** |
| 7 | CTA | Keep |
| 8 | Footer | Keep |

---

## References
- **Agent Guide**: `.github/AGENT_README.md`
- **Brand Identity Skill**: `.github/skills/brand-identity/SKILL.md`
- **Design Tokens**: `.github/skills/brand-identity/resources/design-tokens.json`
- **Tech Stack**: `.github/skills/brand-identity/resources/tech-stack.md`
- **Voice/Tone**: `.github/skills/brand-identity/resources/voice-tone.md`
- Master Workspace Rules: `C:\Users\cclem\Dropbox\Source\.github\copilot-instructions.md`
- Project Design Record: `PDR.md`
- Setup Guide: `README.md`
