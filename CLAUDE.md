# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BookZone is a Next.js 15 booking/blog application for readers, built with React 19, Tailwind CSS 4, and GraphQL. The project uses modern Next.js App Router architecture with JSX components.

## Development Commands

### Running the Application
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production bundle with Turbopack
- `npm start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint (uses Next.js core-web-vitals config)
- `npm test` - Run tests with Vitest

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.6 with App Router
- **React**: Version 19.1.0
- **Build Tool**: Turbopack (used in both dev and build)
- **Styling**: Tailwind CSS 4 with custom design system
- **Testing**: Vitest
- **Data Layer**: GraphQL (dependency present)

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - `layout.jsx` - Root layout with Header and global metadata
  - `page.jsx` - Homepage component
  - `globals.css` - Global styles and design system
- `src/components/` - Shared React components (e.g., Header.jsx)
- `src/hooks/` - Reusable hooks

### Styling System

The project uses a custom design system defined in `globals.css` with:

1. **Theme Colors**: Custom CSS variables using `@theme` directive
   - Primary blues (50-900 scale)
   - Indigo accents (50-900 scale)
   - Neutral grays (50-900 scale)

2. **Typography**:
   - Body text: Inter font
   - Headings: Rubik font (weights 300-900)
   - Custom heading sizes with responsive scaling
   - Gradient text effects for titles using primary-to-indigo gradients

3. **Component Classes**: Global utility classes defined for:
   - `.container` - Max-width 1200px with responsive padding
   - `.site-header` - Sticky header with border and shadow
   - `.blog-card-*` - Blog card components with gradient borders
   - `.gradient-button` - Primary CTA button with hover effects
   - `.blog-details-*` - Blog detail page layout with sidebar
   - `.page-title` and `.page-description` - Standard page headings

4. **Responsive Design**: Mobile-first with breakpoints at 768px and 1024px

### Component Patterns

1. **Import Aliases**: Use `@/` for imports (e.g., `import Header from "@/components/Header"`)

2. **Styling Approach**:
   - Global CSS classes defined in `globals.css`
   - Use semantic class names (e.g., `.blog-card-title`, `.gradient-button`)
   - Tailwind utilities available via `@import "tailwindcss"`
   - Theme colors accessed via `theme(colors.primary.600)` syntax

3. **Layout Pattern**: Root layout includes:
   - Header component (always present)
   - `.main-content` wrapper with `.container` for content
   - Sticky header positioning

### Metadata & SEO
Site metadata is defined in `src/app/layout.jsx`:
- Title: "BookZone | Your ultimate Booking experience"
- Description: "Modern booking blog with latest gaming news, reviews, and insights"

## Navigation Structure

Current routes (from Header component):
- `/` - Homepage
- `/create` - Create page
- `/about` - About page

## Key Implementation Notes

1. **Next.js 15 Features**: Project uses latest App Router conventions
2. **No TypeScript**: All components use `.jsx` extension
3. **Font Loading**: Uses next/font optimization with Google Fonts (Rubik and Inter)
4. **Custom Styling**: Heavy use of CSS custom properties and gradient effects
5. **GraphQL Ready**: GraphQL dependency installed but implementation TBD

## Development Notes

- When making new page components, always add a link to that page in the header