# Critical Rules - Simple Portfolio

## Inherited Workspace Standards

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

## Project-Specific Rules

### Constraints
- **NO AI/LLM Libraries**: Do not import OpenAI, Anthropic, or LangChain
- **NO Database**: Do not use Prisma, PostgreSQL, or Mongo - use `portfolio-data.json` only
- **NO Backend Logic**: Keep it static/client-side

### Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS 4
- React Icons
- TypeScript (strict mode)

### Data Management
- All portfolio data in `app/portfolio-data.json`
- Type definitions in `app/types.ts`
- Static images in `/public/portfolio_img/`

## Essential Files
- `.github/copilot-instructions.md` - Complete development rules
- `PDR.md` - Project Design Record
- `README.md` - Setup guide
- Master workspace: `C:\Users\cclem\Dropbox\Source\.github\copilot-instructions.md`
