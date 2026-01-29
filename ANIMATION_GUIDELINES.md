# Animation Guidelines for Cybersecurity Stories

## Core Principles

### 1. Purpose Over Polish
Every animation must serve the narrative. Ask: "Does this help the viewer understand, or is it just decoration?"

- ✅ Transitions that show cause → effect
- ✅ Motion that guides attention
- ❌ Gratuitous effects that slow comprehension

### 2. Restraint is Power
The fewer animations you use, the more impact each one has. Save dramatic effects for key moments.

---

## Timing & Duration

### Optimal Durations
| Element Type | Duration | Notes |
|--------------|----------|-------|
| Micro-interactions | 100-200ms | Button feedback, hover states |
| UI transitions | 200-400ms | Slide changes, content swaps |
| Emphasis animations | 400-600ms | Key reveals, important moments |
| Complex sequences | 600-1000ms | Multi-part animations |
| Dramatic moments | 1000-2000ms | Climax, major reveals (use sparingly) |

### Scene Hold Times (Reading Time)
| Content Type | Hold Time | Rationale |
|--------------|-----------|-----------|
| Title slides | 2-3 seconds | Brand moment, orientation |
| Single stat/number | 2-4 seconds | Let impact sink in |
| Short text (< 15 words) | 3-5 seconds | Reading + comprehension |
| Medium text (15-40 words) | 5-8 seconds | Full absorption |
| Complex diagrams | 6-10 seconds | Scanning + understanding |
| Terminal/code | 5-15 seconds | Depends on line count |

### Stagger Delays
- List items: **50-100ms** between each
- Grid items: **30-50ms** between each  
- Sequential reveals: **150-300ms** between elements

---

## Transition Types & When to Use

### 1. CUT (Instant)
**Effect:** Hard, immediate switch  
**Best for:**
- Creating surprise or shock
- Urgent/fast-paced moments
- When content is unrelated
- Action sequences

**Avoid:** Overuse makes content feel jarring

### 2. FADE (Opacity)
**Effect:** Gentle dissolve in/out  
**Duration:** 200-400ms  
**Best for:**
- Mood shifts
- Contemplative moments
- Soft topic changes
- Beginning/ending sequences

**Avoid:** Rapid content; feels slow

### 3. SLIDE (Directional)
**Effect:** Content moves in from edge  
**Duration:** 250-400ms  
**Best for:**
- Sequential/linear narratives
- "Next step" feeling
- Spatial relationships
- Timeline progression

**Directions:**
- Left → Right: Forward progress
- Right → Left: Going back/flashback
- Bottom → Top: Escalation, building
- Top → Bottom: Consequence, falling

### 4. SCALE/ZOOM
**Effect:** Element grows or shrinks  
**Duration:** 300-500ms  
**Best for:**
- Focusing on details
- Emphasis moments
- Entering/exiting context
- "Drilling down" into topic

**Avoid:** Excessive zooming (disorienting)

### 5. MORPH/TRANSFORM
**Effect:** One element becomes another  
**Duration:** 400-800ms  
**Best for:**
- Showing connection between concepts
- State changes
- Evolution/progression
- "This becomes that" moments

### 6. REVEAL/WIPE
**Effect:** Content revealed progressively  
**Duration:** 300-600ms  
**Best for:**
- Dramatic reveals
- Before/after comparisons
- Building suspense
- Step-by-step processes

### 7. GLITCH/DISTORT
**Effect:** Digital corruption effect  
**Duration:** 100-300ms (brief!)  
**Best for:**
- Hacker/cyber themes
- Error states
- Disruption moments
- Tension/danger

**Warning:** Very easy to overuse. Max 2-3 per story.

---

## Easing Curves

### Standard Curves
```css
/* Entering elements (deceleration) */
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);

/* Exiting elements (acceleration) */
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);

/* Moving elements (standard) */
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);

/* Emphasis/bounce */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Sharp/snappy */
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
```

### When to Use Which
| Curve | Use Case |
|-------|----------|
| ease-out | Elements appearing, entrances |
| ease-in | Elements leaving, exits |
| ease-in-out | Position changes within view |
| linear | Color/opacity changes only |
| bounce | Playful emphasis (use rarely) |

---

## Narrative Pacing

### Story Arc Structure
```
INTRO (slow)
  ↓
RISING ACTION (building speed)
  ↓
CLIMAX (fastest, most dramatic)
  ↓
RESOLUTION (slowing down)
  ↓
CONCLUSION (calm)
```

### Pacing by Slide Position

**Opening (Slides 1-3)**
- Slower transitions (400-500ms)
- Longer holds (3-4 seconds)
- Establish mood and context
- Use: Fade, slow slide

**Building (Slides 4-60%)**
- Medium transitions (250-350ms)
- Standard holds (3-5 seconds)
- Maintain rhythm
- Use: Slide, scale

**Climax (Key moments)**
- Fast transitions (150-250ms)
- Dramatic effects allowed
- Quick cuts or glitch effects
- Hold on impact (4-6 seconds after)

**Resolution (Final 20%)**
- Return to slower pace
- Longer holds for reflection
- Use: Fade, gentle slides

---

## Animation Sequences

### Attack Flow Animations
For step-by-step attack progressions:

1. **Highlight source** (200ms) → 
2. **Animate connection** (400-600ms) → 
3. **Highlight target** (200ms) → 
4. **Hold for comprehension** (1-2s)

### Terminal Typing
- Character delay: **25-50ms** (feels human)
- Add slight randomness (±20ms)
- Pause after commands: **200-400ms**
- Output appears: **50-100ms** per line

### Particle/Background Effects
- Keep subtle: **opacity 0.3-0.5**
- Slow movement: **10-30 seconds** full cycle
- Never compete with foreground content

---

## Do's and Don'ts

### DO ✅
- Use transitions to reinforce narrative
- Match animation speed to content mood
- Give viewers time to read
- Use consistent easing throughout
- Test on actual devices

### DON'T ❌
- Animate everything (exhausting)
- Use bounce effects for serious content
- Make viewers wait on loading animations
- Use motion blur in UI
- Exceed 3 simultaneous animations
- Use glitch effects more than 2-3x per story

---

## Theme-Specific Guidelines

### Hacker/Terminal Theme (Reverse Shell)
- Transitions: Glitch cuts, digital dissolve
- Easing: Sharp, snappy curves
- Background: Subtle, slow matrix rain
- Text: Typing effect for emphasis
- Colors: High contrast greens on black

### Industrial/SCADA Theme (Stuxnet)
- Transitions: Mechanical slides, wipes
- Easing: Precise, linear-feeling
- Background: Technical grid, blueprints
- Effects: Warning pulses, alert animations

### Corporate/Data Theme (Breaches)
- Transitions: Clean fades, slides
- Easing: Smooth, professional curves
- Background: Subtle particles, data viz
- Effects: Chart animations, number counters

---

## Quick Reference Card

```
ENTRANCE    → ease-out,  200-300ms
EXIT        → ease-in,   150-250ms  
MOVE        → ease-in-out, 250-400ms
EMPHASIS    → bounce,    400-600ms
READ TIME   → 3-5 seconds base
STAGGER     → 50-100ms between items
```

---

*Remember: Animation serves the story. When in doubt, do less.*
