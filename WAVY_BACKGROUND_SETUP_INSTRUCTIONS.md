# WavyBackground Component Setup Instructions

## Issue Identified
The WavyBackground component was extracted from the original Lyrical portfolio but not properly integrated into the hero section, resulting in a missing animated background.

## Required Dependencies
Ensure `simplex-noise` is installed:
```bash
npm install simplex-noise@^4.0.3
```

## Component Location
The WavyBackground component should be at:
```
src/components/ui/wavy-background.tsx
```

## Proper Implementation in app/page.tsx

### 1. Import the Component
```tsx
import { WavyBackground } from "@/components/ui/wavy-background";
```

### 2. Wrap Hero Content with WavyBackground
**CRITICAL**: Use `containerClassName` for outer container styles, NOT `className`

```tsx
<WavyBackground 
  containerClassName="h-screen"  // Controls the outer container height
  className="max-w-7xl mx-auto pb-40 pt-20"  // Controls the content wrapper
  colors={["#818cf8", "#c084fc", "#e879f9", "#38bdf8"]}  // Purple, pink, blue gradient
  blur={10}
  speed="slow"
  waveOpacity={0.5}
  backgroundFill="rgb(15, 23, 42)"  // Dark slate background
>
  {/* Hero content: headshot, name, title, buttons */}
</WavyBackground>
```

## Key Configuration Parameters

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `containerClassName` | `"h-screen"` | Makes hero section full viewport height |
| `className` | `"max-w-7xl mx-auto pb-40 pt-20"` | Centers content with proper spacing |
| `colors` | `["#818cf8", "#c084fc", "#e879f9", "#38bdf8"]` | Purple/pink/blue gradient waves |
| `blur` | `10` | Blur amount for wave effect |
| `speed` | `"slow"` | Animation speed |
| `waveOpacity` | `0.5` | Transparency of waves |
| `backgroundFill` | `"rgb(15, 23, 42)"` | Dark background color |

## Component Structure

The WavyBackground component creates:
1. **Canvas element** - Renders animated waves using simplex noise algorithm
2. **Absolute positioning** - Canvas covers entire container with `absolute inset-0 z-0`
3. **Content wrapper** - Children rendered in `relative z-10` div to appear above canvas

## Visual Styling for Dark Theme

Hero content should use these classes for optimal contrast:
- **Headshot**: `rounded-full ring-4 ring-white/30` (circular with white ring)
- **Name**: `text-violet-300` (light purple for visibility)
- **Company**: `text-white/70` (subdued white)
- **Title**: `text-white/90` (bright white)
- **Contact Button**: `bg-white/20 backdrop-blur-sm text-white border border-white/30` (glassmorphic)
- **Social Icons**: `text-white/80 hover:text-white` (white with hover effect)

## Verification Checklist

After implementation, verify:
- [ ] Canvas element exists in DOM with id="canvas"
- [ ] Canvas has `absolute inset-0 z-0` classes
- [ ] Hero content has `relative z-10` to appear above canvas
- [ ] Browser console shows no simplex-noise import errors
- [ ] Animated gradient waves visible behind hero content
- [ ] Waves animate smoothly (purple → pink → blue gradient)
- [ ] Text is white/light colored for dark background contrast

## Common Mistakes to Avoid

1. ❌ **Using `className` instead of `containerClassName`**
   - This breaks the h-screen height on the outer container
   
2. ❌ **Forgetting to install simplex-noise**
   - Component will fail silently without the noise generation library

3. ❌ **Light-colored text on dark background**
   - Original uses light text (white, violet) - don't use dark text colors

4. ❌ **Missing z-index layering**
   - Canvas must be z-0, content must be z-10 (component handles this)

5. ❌ **Wrong color scheme**
   - Original uses purple/pink/blue gradient - NOT light blue gradient

## Expected Visual Result

The hero section should display:
- **Background**: Dark slate (`rgb(15, 23, 42)`) with animated waves
- **Waves**: Smooth gradient animation cycling through purple → pink → blue
- **Headshot**: Circular with white ring overlay
- **Text**: Light purple name, white title/contact info
- **Button**: Translucent white with backdrop blur (glassmorphic effect)

## Reference
Original portfolio with correct implementation:
https://lyrical-drab.vercel.app/portfolio
