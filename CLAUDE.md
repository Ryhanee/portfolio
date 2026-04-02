# CLAUDE.md — Portfolio Project Agent Guide

## 1. PROJECT OVERVIEW

**Purpose**: Personal portfolio website for Rihane Dalhoum (Full-Stack Developer & Data Scientist). Showcases projects, skills, experience, education, and contact information.

**Owner**: Rihane Dalhoum — `src/config/config.ts` is the single source of truth for personal data.

**Main pages**:
- `/` — Hero + About (combined default route)
- `/skills` — Skills section
- `/experience` — Work experience
- `/projects` — Project showcase (tabs: Web Apps | Websites)
- `/projects/project` — Project detail view
- `/education` — Education timeline
- `/contact` — Contact form/info

**Non-goals — do not change unless explicitly requested**:
- Personal identity data (name, title, bio)
- Routing structure
- Theme system (light/dark via `ThemeProvider`)
- Animation library choices (Framer Motion, tsparticles)
- Existing project entries in `Projects/page.tsx`
- Deployment configuration (Dockerfile, nginx.conf, docker-compose.yml)

---

## 2. ARCHITECTURE RULES

**Canonical folder structure**:
```
src/
  App.tsx                  # Route definitions only
  main.tsx                 # Entry point, providers
  index.css                # Tailwind v4 theme config + global styles
  config/
    config.ts              # Personal data (name, title, flipWords, code snippet)
  pages/
    <PageName>/
      page.tsx             # One page per folder
      project/
        page.tsx           # Nested route pages follow same pattern
  components/
    PortfolioCard.tsx      # Domain-specific reusable component
    ui/                    # shadcn/ui primitives — do not modify directly
    magicui/               # Magic UI components — do not modify directly
  provider/
    page.tsx               # ThemeProvider context
  lib/
    utils.ts               # cn() utility and shared helpers
  types/
    config.d.ts            # Type declarations for config
  assets/
    projects/              # Project screenshots
    Graphic elements/      # Decorative assets
```

**Rules**:
- Pages live in `src/pages/<PageName>/page.tsx`. One component per file.
- Route definitions live exclusively in `src/App.tsx`.
- Shared reusable UI goes in `src/components/`. Never duplicate an existing component.
- `src/components/ui/` and `src/components/magicui/` are vendor-like — do not edit unless the change is isolated and intentional.
- Data/content lives in `src/config/config.ts` (personal info) or inlined in the relevant page component (project lists, experience, skills). Do not scatter data across multiple files without reason.
- Use path alias `@/` for all imports within `src/`. Never use relative `../../` chains longer than one level.

---

## 3. UPDATE PROTOCOL (CRITICAL)

1. **Read before writing.** Inspect the target file and its imports before making any change.
2. **Prefer editing existing files** over creating new ones.
3. **Minimize diff size.** Change only the lines required to satisfy the request.
4. **Do not refactor unrelated code** in the same edit — not even formatting or naming cleanup.
5. **Preserve all naming conventions** found in the existing file.
6. **Follow patterns already present** in the file being edited.
7. **Backward compatibility is default.** Only break it when explicitly instructed.
8. **One concern per change.** If a request touches multiple concerns, address them sequentially, not in one sweep.

---

## 4. COMPONENT STANDARDS

- Functional components only. No class components.
- Every component and its props must be explicitly typed with TypeScript interfaces or types.
- Props interface defined immediately above the component.
- Single responsibility: one component = one visual/logical unit.
- Do not prop-drill more than two levels. Use local composition instead.
- No side effects inside render. All effects go in `useEffect`.
- Reuse existing components (`PortfolioCard`, shadcn `Card`, `Badge`, etc.) before creating new ones.
- Component files export a single default export.

**Existing typed interfaces to preserve**:
```ts
// PortfolioCard.tsx
interface Project { name: string; icon: React.ReactNode; }
interface Link { demo: string; github: string; }
interface PortfolioCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Project[];
  color: string;
  isDark: boolean;
  description: string;
  image: string;
  links: Link;
}
```

---

## 5. STYLING RULES

- Tailwind CSS v4 configured via `src/index.css` `@theme` block. No separate `tailwind.config.js` exists.
- Utility classes are the default. Do not add inline `style={}` unless Tailwind cannot express the value.
- Group classes logically: layout → spacing → color → typography → interaction → animation.
- Dark/light mode is controlled by `useTheme()` from `@/provider/page`. Pattern: `isDarkMode ? "dark-class" : "light-class"`.
- Never hardcode color values when a Tailwind class exists. Prefer CSS variable tokens defined in `index.css`.
- Maintain responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px). All new UI must be responsive.
- Reuse existing gradient patterns: `bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90` (dark), `from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1]` (light).
- Do not introduce a new one-off color unless explicitly requested.
- `cn()` from `@/lib/utils` must be used when conditionally joining class strings.

---

## 6. DATA HANDLING RULES

- All content data is **static and inlined** — no remote fetching.
- Personal information: `src/config/config.ts`. Edit only named fields.
- Project data: inlined array in `src/pages/Projects/page.tsx`. Each entry must include: `icon`, `title`, `description`, `tags`, `links`, `image`, `featured`, `category`, `color`, `cms`.
- Do not introduce `fetch`, `axios`, `useQuery`, or any async data layer without explicit instruction.
- If a new data field is added to a project entry, add it to all existing entries (or provide a safe default) and update any consuming type.
- Do not restructure the project array into a separate file unless the page component exceeds 400 lines and the user explicitly requests it.

**Project entry schema**:
```ts
{
  icon: React.ComponentType | IconType;
  title: string;
  description: string;
  tags: { name: string; icon: React.ReactNode }[];
  links: { github: string; demo: string };
  image: string; // imported asset
  featured: boolean;
  category: 1 | 2; // 1 = Web Apps, 2 = Websites
  color: string; // Tailwind text color class
  cms: React.ReactNode | string;
}
```

---

## 7. PERFORMANCE RULES

- Do not add `React.memo`, `useMemo`, or `useCallback` without a demonstrated re-render problem.
- No heavy computation inside render or component body. Derive values outside JSX.
- Prefer `webp` over `png`/`jpg` for new image assets when possible.
- Do not add new `npm` packages without justification. The bundle already includes Framer Motion, tsparticles, react-icons — leverage these before adding alternatives.
- Do not duplicate icon imports. Check existing imports in the file before adding new icon imports.
- `react-syntax-highlighter` is present but heavy — do not expand its usage without cause.

---

## 8. SEO & ACCESSIBILITY

- Use semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<h1>`–`<h6>`.
- Heading hierarchy must be consistent per page. One `<h1>` per page.
- Every `<img>` must have a descriptive `alt` attribute.
- Interactive elements (`<button>`, `<a>`) must be keyboard-accessible and have visible focus states.
- Preserve the `<title>` in `index.html`. Update it only if personal branding changes.
- Preserve the favicon (`/craftech-fav.svg`).
- `<a>` tags that open external links must include `target="_blank" rel="noopener noreferrer"`.

---

## 9. FILE CREATION RULES

Create a new file **only** when:
- The target page/component file would exceed ~350 lines after the change.
- A clearly reusable abstraction serves 3+ call sites.
- A new route or page section explicitly requires its own file.

**If creating a file**:
- Follow naming: `PascalCase.tsx` for components, `camelCase.ts` for utilities.
- Place it in the correct folder per the architecture rules.
- Do not create a new `utils` file if `src/lib/utils.ts` can hold the logic.
- Do not create a file that duplicates an existing component's responsibility.

---

## 10. TYPESCRIPT RULES

- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true` are enforced by `tsconfig.app.json`. All code must pass.
- Never use `any`. Use `unknown` + type narrowing if the shape is uncertain.
- Define interfaces for all props, all data shapes, and all config objects.
- Keep types co-located with the component or data they describe unless shared across 3+ files.
- `React.ReactNode` for JSX-typed props. `React.ComponentType<{ className?: string }>` for icon components.
- Do not use type assertions (`as X`) unless TypeScript cannot infer and there is no alternative.
- Imports from `@/types/` are for ambient declarations only. Domain types belong next to their domain.

---

## 11. TESTING & VALIDATION

After every change, verify:

- [ ] `tsc -b` reports zero errors
- [ ] `vite build` completes without warnings on new code
- [ ] All routes in `App.tsx` still render their target component
- [ ] Dark mode and light mode both render the changed section correctly
- [ ] `PortfolioCard` renders with all required props where used
- [ ] Responsive layout holds at mobile (375px), tablet (768px), desktop (1280px)
- [ ] No console errors on page load
- [ ] New images are imported, not referenced by raw string path

**For project list changes**:
- [ ] Both tabs ("Web Applications | APIs" and "Websites") render correctly
- [ ] Category filter (`project.category === 1 | 2`) produces expected output

---

## 12. DEPLOYMENT SAFETY

- Build target: static files served by nginx inside Docker.
- `vite.config.ts` sets `base: ''` — preserve this for correct asset resolution in the container.
- Do not assume `process.env` variables are available at runtime. There is no server-side execution.
- Do not hardcode secrets, tokens, API keys, or environment-specific URLs.
- `nginx.conf` handles SPA routing (`try_files $uri /index.html`). Do not add new routes that require server-side behavior.
- `.dockerignore` excludes `node_modules` and `dist`. Do not add large binary files to version control.
- Deployment artifacts: `Dockerfile` (multi-stage: node build → nginx serve) + `docker-compose.yml`.

---

## 13. FORBIDDEN ACTIONS

- No large-scale refactors without explicit instruction.
- No architecture changes without explicit instruction.
- No dependency additions without clear justification and user approval.
- No full styling overhaul or design system change.
- No route restructuring unless the new route is explicitly requested.
- No rewrite of existing working code for stylistic preference.
- No migration of project data from inline arrays to external JSON/API without explicit instruction.
- No modification of `src/components/ui/` or `src/components/magicui/` beyond isolated targeted fixes.
- No removal of existing project entries from the projects array.
- No changes to `Dockerfile`, `nginx.conf`, or `docker-compose.yml` without explicit instruction.

---

## 14. DECISION PRIORITY

When multiple valid implementations exist, choose by this order:

1. **Correctness** — the change must work as specified
2. **Minimal diff** — fewest lines changed, fewest files touched
3. **Consistency** — matches patterns already in the target file
4. **Maintainability** — lowest future maintenance burden
5. **Performance** — only when measurably relevant
6. **Aesthetics** — last; never override the above

---

## 15. OUTPUT FORMAT FOR FUTURE TASKS

- Return **only changed files**.
- Provide **full file content** for each changed file.
- Do not return partial diffs unless explicitly requested.
- Keep explanations short and technical. Mention assumptions only when they affect correctness.
- Flag TODOs found in existing code only if they are directly relevant to the task.

---

## 16. AGENT BEHAVIOR RULES

1. Read the target file(s) before editing. Never modify blind.
2. Infer conventions from the file being changed. Do not impose external patterns.
3. Extend existing patterns. Do not invent new ones without necessity.
4. Make the smallest valid change that satisfies the request.
5. If the request is ambiguous, implement the interpretation with the smallest scope and state the assumption.
6. Do not chain multiple unrelated changes into one edit.
7. Do not clean up surrounding code unless it causes a compilation error.
8. If a requested change conflicts with a rule in this file, flag the conflict before proceeding.
