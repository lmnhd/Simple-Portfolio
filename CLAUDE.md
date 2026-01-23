# CLAUDE.md - Agent Instructions

This file provides guidance to Claude when working with this project.

## Essential Files

- **`.github/copilot-instructions.md`** - Complete project development rules and conventions (includes inherited workspace standards)
- **`PDR.md`** - Project Design Record with architecture decisions
- **`README.md`** - Project overview and setup guide
- **Master Workspace Rules**: `C:\Users\cclem\Dropbox\Source\.github\copilot-instructions.md`

## Critical Inherited Standards

**TypeScript**: No `any` types, DRY principle, files under 500 lines
**PowerShell**: Use `;` for chaining (never `&&`)
**Git**: Create checkpoints before significant changes

## 🚫 ABSOLUTE PROHIBITIONS

1. **NEVER run the dev server** - Do NOT execute `npm run dev`, `npm start`, or any server commands
2. **NEVER run `npm install`** without explicit user permission
3. **NEVER auto-commit** - Only create checkpoints when explicitly doing file modifications
4. **NEVER use `&&`** - This is PowerShell (Windows), use `;` for command chaining
5. **NEVER write `any` types** - TypeScript strict mode is enforced
6. **NEVER create mock implementations** - Use "Not Implemented" placeholders instead

## ✅ REQUIRED BEHAVIORS

1. **READ instructions first** - Always check `.github/copilot-instructions.md` before starting
2. **CREATE git checkpoints** - Before any file edits: `git add . ; git commit -m "checkpoint: before [change]"`
3. **CONFIRM plans** - Explain multi-step operations, wait for user approval
4. **ASK before structural changes** - Don't assume, get permission first
5. **USE PowerShell syntax** - Semicolons for chaining, native Windows commands

## Quick Start

1. Read `.github/copilot-instructions.md` for project-specific rules and inherited workspace standards
2. Review `PDR.md` for architecture and design decisions
3. Check `README.md` for setup instructions

## Project Constraints

- **NO AI/LLM libraries** - This is a static portfolio site
- **NO database** - Use `portfolio-data.json` only
- **NO backend logic** - Keep it client-side/static

## For Questions

1. Check `.github/copilot-instructions.md` first
2. Review `PDR.md` for design decisions
3. See `README.md` for setup/usage
