# Critical Rules - Simple Portfolio

## 🚫 ABSOLUTE PROHIBITIONS (DO NOT VIOLATE)

### Server Management
- **NEVER run `npm run dev`** - User manages the dev server
- **NEVER run `npm start`** - User controls server lifecycle
- **NEVER execute any server commands** - This includes `next dev`, `next start`, etc.

### Package Management  
- **NEVER run `npm install`** without explicit user permission
- **NEVER add/remove packages** without user approval

### Command Syntax
- **NEVER use `&&`** - This is Windows PowerShell, use `;` for chaining
- **NEVER use Unix commands** - Use PowerShell native cmdlets

### Code Quality
- **NEVER use `any` types** - All types must be explicit
- **NEVER create mock implementations** - Use "Not Implemented" placeholders
- **NEVER auto-commit** - Only checkpoint when explicitly modifying files

## ✅ REQUIRED BEHAVIORS

### Before Starting ANY Task
1. Read `.github/copilot-instructions.md`
2. Read `CLAUDE.md` for project context
3. Read `PDR.md` for architecture
4. Verify current directory: `Get-Location`
5. Create git checkpoint: `git add . ; git commit -m "checkpoint: before [task]"`

### Multi-Step Operations
1. Explain complete plan
2. Wait for user approval
3. Execute steps one at a time
4. Report progress after each step

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

## Communication & Workflow

### When User Reports Problems
1. **Diagnose first** - Read relevant files, check configurations
2. **Explain findings** - Report what you discovered
3. **Propose solution** - Explain fix plan, get approval
4. **Execute carefully** - Make changes incrementally
5. **Validate** - Confirm fix worked

### When Making Code Changes
1. **Git checkpoint first**: `git add . ; git commit -m "checkpoint: before [change]"`
2. **Make targeted edits** - Use `replace_string_in_file` with sufficient context
3. **Explain changes** - Brief summary of what was modified
4. **DO NOT** run dev server to "test" - User will test manually

### When Installing Dependencies
1. **ASK FIRST** - "May I run `npm install [package]`?"
2. **Wait for approval**
3. **Only then execute** - User may have specific preferences

## Essential Files
- `.github/copilot-instructions.md` - Complete development rules
- `PDR.md` - Project Design Record  
- `README.md` - Setup guide
- `CLAUDE.md` - Quick reference for agents
- Master workspace: `C:\Users\cclem\Dropbox\Source\.github\copilot-instructions.md`
