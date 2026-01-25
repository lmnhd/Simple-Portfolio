---
name: brand-identity
description: Provides the single source of truth for Nathaniel Orange's portfolio brand guidelines, design tokens, technology choices, and voice/tone. Use this skill whenever generating UI components, styling applications, writing copy, or creating user-facing assets to ensure brand consistency.
---

# Brand Identity & Guidelines - Nathaniel Orange Portfolio

**Brand Name:** Nathaniel Orange Portfolio  
**Tagline:** Full Stack Developer | Vertical AI Systems Designer | Automation Engineer  
**Company:** Halimede AI

This skill defines the core constraints for visual design, technical implementation, and content creation for Nathaniel Orange's professional portfolio. **Strictly adhere to these guidelines** to maintain consistency.

---

## Quick Reference

| Aspect | Value |
|--------|-------|
| **Primary Color** | `#2962FF` (Electric Blue) |
| **Background** | `#FFFFFF` (White) |
| **Text** | `#18181B` (Near Black) |
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS 4 with CSS Variables |
| **Icons** | React Icons (FaXxx) |
| **Data Source** | `portfolio-data.json` |

---

## Reference Documentation

Depending on the task you are performing, **consult the specific resource files below**. Do not guess brand elements; always read the corresponding file.

### For Visual Design & UI Styling
If you need exact colors, fonts, spacing, shadows, or component patterns:
👉 **[`resources/design-tokens.json`](resources/design-tokens.json)**

Key tokens defined:
- Color palette (primary, secondary, text, hero gradients)
- Typography (font families, weights, sizes)
- Spacing (section padding, gaps, container widths)
- UI patterns (border radius, shadows, transitions)
- Component classes (buttons, cards, badges, navbar)

### For Coding & Component Implementation
If you are generating code, choosing libraries, or structuring components:
👉 **[`resources/tech-stack.md`](resources/tech-stack.md)**

Defines:
- Core stack (Next.js 15, TypeScript, Tailwind CSS 4)
- Forbidden technologies (no AI libraries, no database)
- Component patterns (Server vs Client components)
- Data-driven architecture (`portfolio-data.json` → types)
- File structure and image handling

### For Copywriting & Content Generation
If you are writing descriptions, updating portfolio text, or creating CTAs:
👉 **[`resources/voice-tone.md`](resources/voice-tone.md)**

Defines:
- Brand persona (confident, innovative, professional)
- Writing guidelines by section (Hero, Experience, Projects)
- Terminology guide (what to use, what to avoid)
- Formatting conventions (dates, contact info, social links)

---

## Page Section Order (Current vs Recommended)

### Current Layout (page.tsx)
1. Hero (Wavy Background + Contact Info)
2. Overview (Cover Letter)
3. Experience & Education
4. Skills
5. Projects ← **Currently at bottom**
6. CTA
7. Footer

### ⚠️ Layout Optimization Recommendation
To make **Projects stand out more**, consider:

**Option A: Projects After Hero**
1. Hero
2. **Featured Projects** ← Move here for immediate visibility
3. Overview (condensed)
4. Skills (brief)
5. Experience
6. Education
7. CTA/Footer

**Option B: Split Hero with Projects Showcase**
1. Hero with embedded project carousel/highlights
2. Full Projects Section
3. Skills
4. Experience/Education
5. Footer

See `AGENT_README.md` for detailed implementation guidance.

---

## Brand Assets

### Images (in `/public/portfolio_img/`)
- `Halimede.png` - Halimede AI branding
- `Keepit.png` - KeepIt project
- `LeisureLife.png` - Leisure Life Vacations
- `Lyric_Lab_1.png` - BlockarizedAILab POC
- `Subkitz.png` - SubKitz platform

### Headshot
- Location: `/public/headshot.jpg`
- Usage: Hero section avatar (128x128, rounded-full)

---

## Color Usage Examples

```tsx
// Primary actions
className="bg-primary text-white hover:bg-blue-700"

// Card containers
className="bg-white border border-gray-200 rounded-lg hover:border-primary"

// Muted text
className="text-gray-700" // or "text-muted-foreground"

// Hero text (on dark background)
className="text-violet-300" // title
className="text-white/90"   // subtitle
className="text-white/60"   // muted info
```
