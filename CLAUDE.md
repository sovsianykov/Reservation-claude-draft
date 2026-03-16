# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Next.js dev server
npm run build        # Production build
npm run lint         # Run ESLint
npm run storybook    # Start Storybook on port 6006
npm run build-storybook  # Build static Storybook
npx vitest           # Run Storybook component tests via Vitest
```

## Architecture

**Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Sass + Storybook 10

**App Router layout** (`src/app/`): `layout.tsx` is the root layout with Geist fonts. Pages use CSS Modules (`*.module.css`) for scoped styles, with `globals.css` for shared styles.

**Storybook** (`src/stories/`): Stories live alongside story-specific components (e.g., `Button.tsx`, `Header.tsx`, `Page.tsx`). Configured via `.storybook/` with `@storybook/nextjs-vite` framework. Addons: vitest, a11y, docs, chromatic.

**Testing:** Vitest is configured in `vitest.config.ts` to run Storybook stories as component tests in a headless Chromium browser via Playwright. Tests are written as Storybook stories — there is no separate test directory. Run with `npx vitest`.

**ESLint:** Uses flat config (`eslint.config.mjs`) with `eslint-config-next` (core-web-vitals + typescript) and `eslint-plugin-storybook`.

## Styles

**Use a separate module.SCSS file and BEM naming strategy

## 
Component architecture

Create the following structure:

components/
ComponentName/
ComponentName.tsx
ComponentName.scss
ComponentName.stories.tsx