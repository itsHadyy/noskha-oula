# Claude Code Prompt — "Al Noskha Al Oula" Website

Copy everything below the `---` into Claude Code as a single prompt. It is designed to be dropped into an empty project folder.

---

## ROLE
You are a senior front-end engineer. Build a **production-ready React + plain CSS marketing + quiz website** named **"Al Noskha Al Oula"** (the brand sells child & parenting books and offers a personality / learning-style test that recommends a book). Your output must be polished, animated, cute-but-serious, and shippable.

## HARD TECH CONSTRAINTS — DO NOT DEVIATE
- **Framework:** React 18 via **Vite** (`npm create vite@latest al-noskha-al-oula -- --template react`).
- **Language:** Plain JavaScript only. **No TypeScript.** No `.ts` / `.tsx` files anywhere.
- **File extensions:** All React component files must use `.js` (NOT `.jsx`). Inside `.js` files you will still use JSX syntax — that is required for React to render. Configure Vite so `.js` files are treated as containing JSX (add the esbuild `loader: { '.js': 'jsx' }` option in `vite.config.js`).
- **Styling:** Plain **CSS files only.** No Tailwind, no styled-components, no CSS-in-JS, no SASS, no CSS modules unless trivially needed for collision avoidance (prefer plain `.css` with BEM-ish class names).
- **Markup:** Use simple `<div>` / `<span>` / `<button>` / `<a>` / `<img>` primitives. The user asked for "super basic" markup — avoid exotic HTML5 tags unless it meaningfully helps accessibility (headings `<h1>–<h3>` and `<nav>` are allowed).
- **Routing:** `react-router-dom` v6.
- **Animation:** Use **Framer Motion** for entry/exit and scroll animations. Use pure CSS `@keyframes` for idle/ambient animations (floating shapes, gradient shifts). Do NOT mix in GSAP or other heavy libs.
- **Icons:** `lucide-react`.
- **State:** React's built-in `useState` / `useContext` / `useReducer`. No Redux, no Zustand.
- **No backend.** Everything runs client-side. All data is hard-coded in `src/data/*.js`.
- **Node version:** assume Node 20+.

## BRAND & DESIGN SYSTEM
**Name:** Al Noskha Al Oula (bilingual brand — English-first UI, Arabic name shown in the logo).

**Colors (use CSS variables in `src/styles/variables.css`):**
```
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-mint: #53DBC7;        /* primary accent */
--color-violet: #7B55E5;      /* secondary accent */
--color-mint-soft: #E6FAF6;   /* derived tint for backgrounds */
--color-violet-soft: #EFE9FD; /* derived tint for backgrounds */
--color-ink: #1B1430;         /* near-black text, slightly violet */
--color-ink-soft: #5A5470;
--color-stroke: #EFEAF7;
--gradient-brand: linear-gradient(135deg, #53DBC7 0%, #7B55E5 100%);
--gradient-brand-soft: linear-gradient(135deg, #E6FAF6 0%, #EFE9FD 100%);
--shadow-soft: 0 20px 60px -20px rgba(123, 85, 229, 0.25);
--shadow-pop: 0 10px 30px -10px rgba(83, 219, 199, 0.45);
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
```

**Typography:**
- Headings: `"Fraunces"` or `"DM Serif Display"` (Google Fonts) — warm, editorial, slight playfulness.
- Body & UI: `"Plus Jakarta Sans"` or `"Inter"` (Google Fonts).
- Load via `<link>` tags in `index.html`. Set `font-display: swap`.

**Visual language:**
- Cute, minimalist, modern, gently colorful, playful but trustworthy to parents.
- **Floating shapes background:** every major section must have 3–6 decorative SVG/div shapes (circles, blobs, squiggles, stars, tiny book icons) in mint or violet, softly animated with CSS (slow `translateY` + `rotate`, 8–14s loops, different delays). Shapes are `position: absolute`, `pointer-events: none`, and behind content.
- Rounded corners everywhere (`--radius-md` default).
- Soft shadows only; never harsh.
- Lots of whitespace. Content max-width ~1180px, centered.
- Subtle grain or noise overlay is optional (can skip).
- Buttons: pill-shaped, gradient fill for primary (mint → violet), outlined violet for secondary, hover lifts `translateY(-2px)` with shadow grow.

**Motion principles:**
- Page transitions: fade + 8px upward slide, 350ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Scroll-in sections: `whileInView` with `once: true`, staggered children by 80ms.
- Hover states: always animate (scale 1.02, shadow grow, or subtle rotate on decorative items).
- No animation is allowed to block content for >700ms.
- Respect `prefers-reduced-motion`: disable non-essential motion via a CSS media query and an `useReducedMotion()` hook from Framer Motion.

## INFORMATION ARCHITECTURE (ROUTES)
```
/                         → SplashScreen (2.2s) then redirects to /home
/home                     → Landing page (hero, about, test CTA, games showcase, books showcase, testimonials, footer CTA)
/books                    → All books grid
/books/:bookId            → Book detail page
/game                     → Game detail page (single game for now)
/test                     → Test picker ("I'm a child" vs "I'm a parent")
/test/child               → Child test flow (20 questions, 4 sections)
/test/parent              → Parent test flow (20 questions, 4 sections)
/test/results             → Results page with percentage + recommended book
/about                    → Short about page (brand story, team placeholder)
*                         → 404 with a cute floating-shapes illustration
```
Use `react-router-dom`'s `<Routes>` and wrap the app in an `AnimatePresence mode="wait"` keyed on `location.pathname` for smooth route transitions.

## PROJECT STRUCTURE
```
al-noskha-al-oula/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── logo.svg                     (placeholder — user will replace)
│   ├── logo-mark.svg                (icon-only mark)
│   └── images/
│       ├── books/book-1.jpg ... book-6.jpg   (placeholder images via picsum.photos or solid-color SVGs)
│       ├── game/game-cover.jpg
│       └── hero/hero-illustration.svg
├── src/
│   ├── main.js
│   ├── App.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   ├── global.css
│   │   └── animations.css           (all @keyframes live here)
│   ├── data/
│   │   ├── books.js
│   │   ├── game.js
│   │   ├── testChild.js             (20 questions, 4 sections of 5)
│   │   ├── testParent.js            (20 questions, 4 sections of 5)
│   │   └── testimonials.js
│   ├── context/
│   │   └── TestContext.js           (answers, section index, navigation)
│   ├── hooks/
│   │   ├── useScrollTop.js
│   │   └── useLockBodyScroll.js
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── SplashScreen/
│   │   │   ├── SplashScreen.js
│   │   │   └── SplashScreen.css
│   │   ├── FloatingShapes/
│   │   │   ├── FloatingShapes.js    (renders 3–6 animated divs/SVGs)
│   │   │   └── FloatingShapes.css
│   │   ├── Button/
│   │   │   ├── Button.js            (variants: primary, secondary, ghost)
│   │   │   └── Button.css
│   │   ├── BookCard/
│   │   │   ├── BookCard.js
│   │   │   └── BookCard.css
│   │   ├── GameCard/
│   │   │   ├── GameCard.js
│   │   │   └── GameCard.css
│   │   ├── SectionHeader/
│   │   │   ├── SectionHeader.js     (eyebrow + title + subtitle)
│   │   │   └── SectionHeader.css
│   │   ├── ProgressBar/
│   │   │   ├── ProgressBar.js       (animated, gradient fill)
│   │   │   └── ProgressBar.css
│   │   ├── QuestionCard/
│   │   │   ├── QuestionCard.js      (MCQ with 4 options, animated selection)
│   │   │   └── QuestionCard.css
│   │   ├── TestPickerCard/
│   │   │   ├── TestPickerCard.js
│   │   │   └── TestPickerCard.css
│   │   ├── ResultWidget/
│   │   │   ├── ResultWidget.js      (circular progress ring with %; recommended book)
│   │   │   └── ResultWidget.css
│   │   ├── Marquee/
│   │   │   ├── Marquee.js           (infinite scrolling brand strip)
│   │   │   └── Marquee.css
│   │   ├── TestimonialCard/
│   │   │   ├── TestimonialCard.js
│   │   │   └── TestimonialCard.css
│   │   └── PageTransition/
│   │       ├── PageTransition.js    (Framer Motion wrapper)
│   │       └── PageTransition.css
│   └── pages/
│       ├── Home/
│       │   ├── Home.js
│       │   └── Home.css
│       ├── Books/
│       │   ├── Books.js
│       │   └── Books.css
│       ├── BookDetail/
│       │   ├── BookDetail.js
│       │   └── BookDetail.css
│       ├── Game/
│       │   ├── Game.js
│       │   └── Game.css
│       ├── Test/
│       │   ├── TestPicker.js
│       │   ├── TestFlow.js          (shared flow used by child & parent via a `type` prop)
│       │   ├── TestResults.js
│       │   └── Test.css
│       ├── About/
│       │   ├── About.js
│       │   └── About.css
│       └── NotFound/
│           ├── NotFound.js
│           └── NotFound.css
```

## COMPONENT SPECS (BUILD EXACTLY)

### 1. SplashScreen
- Full-viewport overlay, background `--gradient-brand-soft`.
- Logo enters with scale `0.6 → 1`, spring; then a soft glow pulse (CSS `@keyframes pulse`).
- Brand name fades in below with a typewriter-style letter stagger (Framer Motion `staggerChildren: 0.04`).
- A thin gradient progress bar at bottom animates 0 → 100% over 2s.
- After 2.2s, navigate to `/home`. Also allow skip: pressing any key or tap navigates immediately.
- Only shows once per session — set `sessionStorage.setItem('splashSeen', '1')`; on re-entry skip directly to `/home`.

### 2. Navbar (the "outstanding" one)
- Sticky top, initially transparent over the hero; after 40px scroll it gets a frosted white background (`backdrop-filter: blur(14px)` + 80% white) and a soft bottom shadow. Animate via `useEffect` on scroll.
- Left: logo mark + wordmark "Al Noskha Al Oula".
- Center: nav links — Home, Books, Game, Test, About — with an **animated underline indicator** (a motion `div` with `layoutId="nav-underline"` that slides between active links).
- Right: a primary gradient pill button "Take the Test" → `/test`.
- Mobile (<860px): hamburger opens a full-screen sheet that slides down from the top with staggered link reveals and a big floating shape in the background.
- Hover on each link: the letters bounce slightly (transform: translateY) with staggered delay.
- Active route link gets the gradient underline and slightly bolder weight.

### 3. FloatingShapes
- Accepts a `variant` prop (`"hero" | "section" | "subtle"`) that controls count, size, and palette.
- Renders 3–6 absolutely-positioned divs/SVGs: blobs (SVG path), circles, squiggle lines, tiny stars, small book glyphs.
- Each has a unique `animation-delay` and `animation-duration` for organic motion.
- Shapes use mint and violet at 50–70% opacity; a few have `filter: blur(1px)` for depth.
- Defined as pure CSS keyframes in `animations.css` (`floatA`, `floatB`, `floatC`, `spinSlow`, `drift`).

### 4. Home page — sections in order
1. **Hero** — left column: eyebrow ("For curious kids & thoughtful parents"), huge headline ("Books that raise bright hearts."), supporting paragraph, two buttons (primary "Take the Test", secondary "Browse Books"). Right column: hero illustration (placeholder SVG — a stack of floating books with sparkle shapes). FloatingShapes variant="hero" behind.
2. **Stats strip** — three tiles (Books published, Families helped, Happy kids) with count-up animation on scroll.
3. **Featured Test CTA card** — a wide gradient card with a big circular progress illustration on the right, headline "Discover the book your child needs in 3 minutes", button "Start the Test". This is the "most important" element — make it unmistakable.
4. **Games showcase** — single large GameCard (hero-sized) linking to `/game`. Include a playful tagline and a "Learn more" arrow that animates on hover.
5. **Books showcase** — horizontal scroll / grid of 4–6 BookCards with snap scrolling on mobile. "See all books →" link on the right.
6. **How the test works** — 3-step visual (Answer 20 questions → Get your profile → Receive a book recommendation) with numbered gradient circles and connecting dashed lines.
7. **Testimonials** — 3 TestimonialCards (parent/child quotes, avatars as colored-initial circles).
8. **Footer CTA band** — final "Ready to start?" with big gradient button.
9. **Footer** — 4 columns (Brand, Explore, Resources, Follow) + copyright.

### 5. BookCard
- Rounded card, white background, soft shadow.
- Cover image on top (3:4 aspect), title, short author / age range, a small gradient tag chip (e.g., "Ages 6–9"), and price.
- Hover: card lifts 4px, image scales 1.03, a small arrow icon slides in.
- Clicking navigates to `/books/:bookId`.

### 6. GameCard
- Larger, horizontal-oriented variant. Left: game artwork in a rounded frame with a floating badge ("NEW!"). Right: title, one-sentence pitch, "Play now" button.
- Slight parallax on scroll (translateY up 20px as it enters viewport).

### 7. QuestionCard (the heart of the test)
- Centered card, max-width 720px, padded generously.
- Top: section label ("Section 2 of 4 — Curiosity") + ProgressBar (question X of 20, animated gradient fill).
- Middle: question text, large, serif headline.
- Below: 4 option buttons as large pill cards stacked vertically (on mobile) or in a 2×2 grid (on desktop ≥720px). Each option shows an index letter (A/B/C/D) in a gradient circle on the left.
- Selecting an option: animate a gradient border sweep around the selected card, then auto-advance after 400ms (or require a Next button — choose auto-advance but show a subtle "tap to change" hint for 1.5s).
- Back button allowed on all questions except the first.
- Between sections, show a 1.2s transitional card ("Section 3: Imagination") with a shape animation.

### 8. ProgressBar
- Thin track (6px), gradient fill, animated via `width` with a shimmer overlay (moving gradient).
- Accepts `value` (0–100) and an optional `label`.

### 9. ResultWidget
- Centered result card.
- Big circular SVG ring (size 220) that animates stroke-dashoffset from full to value over 1.6s (ease-out).
- Inside the ring: the percentage number counts up from 0.
- Below ring: "Your profile: The [Archetype]" (e.g., "The Explorer", "The Storyteller", "The Builder", "The Dreamer" for child; "The Nurturer", "The Coach", "The Guide", "The Companion" for parent).
- Below that: "We recommend" → BookCard (large variant) with CTA "View book".
- Also show a "Retake test" ghost button and a "Share result" button (copies URL to clipboard with a toast).

## TEST LOGIC (DETAILED)

**Structure (both child and parent):**
- 4 sections × 5 questions = 20 questions.
- Each MCQ has 4 options; each option carries a weight for one of 4 archetypes (A/B/C/D).
- Tally archetype scores; winner becomes the profile. Percentage = `(winnerScore / maxPossibleScore) * 100`, rounded.
- Map profile → recommended book (hardcoded mapping in `data/books.js`).

**Child sections:** Curiosity, Imagination, Social Style, Learning Preference.
**Child archetypes:** Explorer, Storyteller, Builder, Dreamer.

**Parent sections:** Communication Style, Discipline Approach, Emotional Support, Time & Play.
**Parent archetypes:** Nurturer, Coach, Guide, Companion.

**Data shape (example in `data/testChild.js`):**
```js
export const childTest = {
  type: 'child',
  archetypes: ['explorer', 'storyteller', 'builder', 'dreamer'],
  sections: [
    {
      id: 'curiosity',
      title: 'Curiosity',
      questions: [
        {
          id: 'c1',
          text: "When you find something new outside, you...",
          options: [
            { text: "Run to touch and explore it",   weights: { explorer: 3, storyteller: 1, builder: 1, dreamer: 0 } },
            { text: "Make up a story about it",      weights: { explorer: 0, storyteller: 3, builder: 0, dreamer: 2 } },
            { text: "Try to figure out how it works",weights: { explorer: 1, storyteller: 0, builder: 3, dreamer: 0 } },
            { text: "Imagine it's from a magic land", weights: { explorer: 0, storyteller: 1, builder: 0, dreamer: 3 } }
          ]
        },
        // ...4 more
      ]
    },
    // ...3 more sections
  ]
};
```
Write 20 plausible, child-friendly placeholder questions for child test and 20 for parent test (parent-focused). They can be lorem-adjacent but must read naturally.

**TestContext (Context + useReducer):**
- `state`: `{ type, currentIndex, answers: Record<questionId, optionIndex>, archetype: null, percentage: null }`.
- Actions: `START`, `ANSWER`, `BACK`, `NEXT`, `COMPLETE`, `RESET`.
- Persist to `sessionStorage` so a refresh mid-test doesn't lose progress.

## DUMMY DATA

**books.js** — 6 books. Each:
```js
{
  id: 'b-001',
  title: 'The Little Lantern',
  subtitle: 'A story of courage',
  author: 'Layla Samir',
  ageRange: '5–8',
  price: 14.99,
  currency: 'USD',
  cover: '/images/books/book-1.jpg',    // use picsum placeholder or solid SVG
  colorTheme: 'mint',                    // drives the card accent
  tags: ['bedtime', 'courage', 'ages 5-8'],
  description: '3 short paragraphs of lorem-style but readable copy...',
  details: {
    pages: 48,
    language: 'English',
    publisher: 'Al Noskha Al Oula',
    isbn: '978-0-00-000000-0'
  },
  recommendedFor: ['explorer', 'nurturer']   // maps to archetypes
}
```
Ensure every child archetype AND every parent archetype has at least one book recommendation.

**game.js** — 1 game object with fields: `id, title, tagline, cover, description, howToPlay (3–4 steps), ageRange, duration, features (list of 4)`.

**testimonials.js** — 3 entries (name, role e.g. "Mom of 2", quote).

## PAGES — SPECIFIC CONTENT

### /books (Books listing)
- Hero strip: small eyebrow + "All Books" title + one-line description. FloatingShapes.
- Filter chips (non-functional placeholders OK, but animate selection): All / Picture Books / Middle Grade / Parenting.
- Responsive grid: 1 col mobile, 2 tablet, 3 desktop.
- Each BookCard scroll-reveals with stagger.

### /books/:bookId (Book detail)
- Two-column layout (stacks on mobile).
- Left: large cover with a tilted shadow, a few floating shape accents behind it.
- Right: tag chips, title, author, price, "Add to cart" (non-functional — show a toast "Coming soon"), "Take the test to see if this fits you" secondary link.
- Below: Description, Details table, "You might also like" (2 other BookCards).
- Handle unknown id → redirect to `/books`.

### /game (Game page)
- Hero with animated game cover (subtle rotate + glow).
- "How to play" — 4 steps in colorful numbered cards.
- "Features" — 4 feature tiles with icons.
- Final CTA card "Get the game" (non-functional toast).

### /test (Test picker)
- Big centered heading "Who's taking the test?".
- Two large TestPickerCards side by side: "I'm a child" (mint accent, playful shapes) / "I'm a parent" (violet accent, slightly more refined). Each card has an illustration placeholder, a 1-sentence description, and a "Start" button.

### /test/child and /test/parent
- Both render the shared `TestFlow` component with `type` prop.
- Uses TestContext. Shows ProgressBar at top, QuestionCard in middle, floating shapes in background.
- On final answer → compute result → navigate to `/test/results`.

### /test/results
- Pull `archetype` and `percentage` from TestContext. If missing, redirect to `/test`.
- ResultWidget + recommended book + CTAs.

### /about
- Keep short: hero + 2 paragraphs + team grid (3 placeholder avatars).

### /404
- Cute illustration (big 404 made of floating shapes), "Let's go home" button.

## ANIMATIONS CHECKLIST (must all be present)
- [ ] Splash logo scale + glow pulse.
- [ ] Splash progress bar fill.
- [ ] Hero headline letter stagger on mount.
- [ ] Floating shapes on every major section (CSS keyframes).
- [ ] Navbar scroll-blur transition.
- [ ] Navbar underline layoutId transition between routes.
- [ ] Mobile menu slide-down with staggered links.
- [ ] Page route transitions (fade + slide).
- [ ] Scroll-reveal for section headers, cards, stats count-up.
- [ ] BookCard + GameCard hover lift.
- [ ] QuestionCard option selection sweep.
- [ ] Between-section transitional card.
- [ ] ProgressBar shimmer.
- [ ] ResultWidget ring stroke animation + percentage count-up.
- [ ] Toast slide-in for CTAs ("Coming soon" etc.).
- [ ] Footer gradient shifts subtly over time (15s keyframe).
- [ ] `prefers-reduced-motion` disables all non-essential motion.

## ACCESSIBILITY
- All interactive elements reachable by keyboard with visible focus rings (2px violet outline, 4px offset).
- Navbar mobile menu traps focus when open; Esc closes it.
- Question options use `role="radiogroup"` / `role="radio"` and arrow-key navigation.
- All images have meaningful `alt` text ("Book cover: The Little Lantern").
- Color contrast AA: verify ink-on-white passes; never use mint for primary text (it won't pass).
- Splash screen is skippable and announces "Loading Al Noskha Al Oula" to screen readers, then is removed from the DOM.

## RESPONSIVE BREAKPOINTS
- `--bp-sm: 560px`
- `--bp-md: 860px`
- `--bp-lg: 1180px`
Mobile-first CSS; scale up with `min-width` media queries.

## PERFORMANCE & QUALITY
- Lazy-load route components with `React.lazy` + `<Suspense fallback={<SplashScreen mini />}>`.
- Images: use `loading="lazy"` + `decoding="async"`. Provide sensible `width`/`height` to prevent CLS.
- Avoid re-renders: memoize BookCard and QuestionCard with `React.memo`.
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95.
- No console errors, no React key warnings.
- ESLint default Vite config is fine; pass `npm run lint` with zero warnings.

## DELIVERABLES & RUN INSTRUCTIONS
At the end of the build, the following must work from a fresh clone:
```
npm install
npm run dev      # opens on http://localhost:5173
npm run build    # produces /dist with no errors
npm run preview  # serves the build locally
```
Include a `README.md` with: project description, how to swap logo (`public/logo.svg` + `public/logo-mark.svg`), how to replace book images (`public/images/books/`), how to edit copy (`src/data/*.js`), how to edit test questions, and the color token locations.

## PLACEHOLDER ASSETS
Since the user will supply real assets later:
- Logo: create `public/logo.svg` as a simple typographic wordmark "Al Noskha Al Oula" in violet, and `public/logo-mark.svg` as a mint-and-violet circular mark with the letters "AN" stacked. These must be valid, nice-looking SVGs — not blank.
- Book covers: generate 6 SVG placeholders, each a rounded rectangle in alternating mint/violet tints with the book title in serif white text, saved as `.svg` (not `.jpg`) under `public/images/books/`. Update `books.js` to reference `.svg`.
- Hero illustration: an SVG composition of 3 stacked books with sparkles and a tiny planet — use brand colors.
- Game cover: an SVG with a playful grid of 4 icons (brain, heart, star, book) on a gradient background.

## BUILD ORDER (follow strictly)
1. Scaffold Vite, configure `vite.config.js` for `.js`+JSX, install deps (`react-router-dom`, `framer-motion`, `lucide-react`).
2. Drop in all CSS variables, reset, global typography, animations keyframes.
3. Build placeholder SVG assets.
4. Build shared components (Button, SectionHeader, FloatingShapes, ProgressBar).
5. Build Navbar + Footer + SplashScreen.
6. Wire up Router + PageTransition + AnimatePresence.
7. Build Home page (highest visual polish — this is the headline artifact).
8. Build Books + BookDetail.
9. Build Game page.
10. Build Test flow: Context → Picker → TestFlow → Results.
11. Build About + 404.
12. Polish pass: verify all checklist items, Lighthouse, keyboard nav, reduced-motion, mobile.
13. Write README.

## DEFINITION OF DONE
- Every route renders without errors.
- Both tests complete end-to-end and produce a result + book recommendation.
- `npm run build` succeeds with zero warnings.
- No TypeScript, no `.jsx` files, no Tailwind, no CSS-in-JS — enforced.
- Looks cute, modern, colorful, and distinctly NOT generic-AI-bootstrap-ish.
- User can swap logo, book images, and copy without touching component code.

Begin. Produce all files in full. Do not summarize or stub — every file must be complete and runnable.