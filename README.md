# Advanced Frontend Training

A structured educational repository for teaching advanced frontend engineering concepts, including **Design Systems** and **Design Patterns**. This project is designed as a progressive learning path with hands-on exercises and real-world examples.

---

## Project Structure

```
Advanced_Frontend_Training/
├── 1. Design System/               # Module 1: Design Systems
│   ├── Design System Slides.pdf     # Lecture slides
│   ├── Ref.pdf                      # Reference material
│   ├── Exp_1_DesignTokens/          # Exercise 1: Design Tokens (HTML/CSS)
│   │   ├── index.html
│   │   └── css/
│   │       ├── button.css           # Styled using token variables
│   │       └── tokens/
│   │           ├── index.css        # Barrel import for all tokens
│   │           ├── colors.css       # Color tokens (primitive + semantic)
│   │           ├── typography.css   # Font family, size, weight tokens
│   │           ├── spacing.css      # Margin, padding scale tokens
│   │           ├── radius.css       # Border radius scale tokens
│   │           ├── shadows.css      # Box shadow level tokens
│   │           └── breakpoints.css  # Responsive breakpoint tokens
│   │
│   └── Exp2_AtomicDesign_And_Documentation/  # Exercise 2: Atomic Design + Storybook
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       ├── .storybook/
│       │   ├── main.ts             # Storybook configuration (stories path, addons, framework)
│       │   └── preview.ts          # Global preview settings (backgrounds, RTL, token import)
│       └── src/
│           ├── main.tsx            # React entry point
│           ├── App.tsx             # Root application component
│           ├── app.css             # Global styles
│           ├── assets/
│           │   └── fonts/
│           │       └── primary.ttf
│           ├── tokens/             # Design tokens in TypeScript + CSS
│           │   ├── index.ts        # Barrel export
│           │   ├── tokens.css      # CSS custom properties generated from tokens
│           │   ├── colors.ts       # Color token definitions
│           │   ├── typography.ts   # Typography token definitions
│           │   └── spacing.ts      # Spacing token definitions
│           └── components/
│               ├── index.ts        # Barrel export for all components
│               ├── atoms/          # Smallest, atomic UI components
│               │   ├── Button/
│               │   │   ├── Button.tsx          # Base button component
│               │   │   ├── Button.module.css   # Scoped button styles
│               │   │   └── Button.stories.tsx  # Storybook stories
│               │   └── Badge/
│               │       ├── Badge.tsx
│               │       ├── Badge.module.css
│               │       └── Badge.stories.tsx
│               ├── molecules/      # Composed atomic components
│               │   ├── UserCard/   # Combines multiple atoms
│               │   │   ├── UserCard.tsx
│               │   │   ├── UserCard.module.css
│               │   │   └── UserCard.stories.tsx
│               │   └── Callout/
│               │       └── index.tsx
│               ├── organisms/      # Complex UI sections
│               │   ├── Header/
│               │   │   ├── Header.tsx
│               │   │   └── Header.module.css
│               │   ├── Footer/
│               │   │   ├── Footer.tsx
│               │   │   └── Footer.module.css
│               │   ├── HeroSection/
│               │   │   └── HeroSection.tsx
│               │   ├── TokensSection/
│               │   │   └── index.tsx
│               │   ├── ButtonsSection/
│               │   │   └── index.tsx
│               │   ├── BadgeSection/
│               │   │   └── index.tsx
│               │   └── UserCardsSection/
│               │       └── index.tsx
│               ├── templates/      # Page-level layout shells
│               │   └── MainLayout/
│               │       ├── MainLayout.tsx
│               │       └── MainLayout.module.css
│               └── pages/          # Full pages using templates
│                   └── Home/
│                       └── HomePage.tsx
│
└── 2. Design Patterns/             # Module 2: Design Patterns
    ├── Design Patterns Slides.pdf   # Lecture slides
    └── Ref.pdf                      # Reference material
```

---

## Module Details

### 1. Design System (`1. Design System/`)

This module introduces the concept of a **Design System** — a single source of truth for visual styles and UI components.

#### Exercise 1: Design Tokens (`Exp_1_DesignTokens/`)

A pure HTML/CSS exercise that demonstrates **Design Tokens** using CSS custom properties. The tokens follow a two-tier architecture:

- **Primitive tokens**: Raw values (e.g. `--blue-500: #3B82F6`, `--spacing-4: 16px`)
- **Semantic tokens**: Contextual aliases (e.g. `--color-primary: var(--blue-500)`, `--space-md: var(--spacing-4)`)

Key concepts:
- Centralized token files in `css/tokens/` — one file per token category
- A barrel `index.css` that imports all tokens into a single entry point
- Light/dark theme switching via `[data-theme="dark"]`
- A `button.css` component that consumes tokens, showing how components reference design decisions

#### Exercise 2: Atomic Design & Documentation (`Exp2_AtomicDesign_And_Documentation/`)

A full React 18 + TypeScript + Vite project that puts design tokens into practice using **Atomic Design** methodology, documented with **Storybook 8**.

**Tech Stack:**
| Tool | Purpose |
|------|---------|
| Vite 5 | Fast build tool and dev server |
| React 18 | UI component library |
| TypeScript 5 | Static type checking |
| CSS Modules | Scoped, maintainable styles |
| Storybook 8 | Interactive component documentation |
| CSS Custom Properties | Runtime token consumption |

**Atomic Design Hierarchy:**
| Level | Description | Examples |
|-------|-------------|---------|
| **Atoms** | Smallest, indivisible components | `Button`, `Badge` |
| **Molecules** | Groups of atoms working together | `UserCard`, `Callout` |
| **Organisms** | Complex sections composed of molecules/atoms | `Header`, `Footer`, `HeroSection` |
| **Templates** | Page-level layout structures | `MainLayout` |
| **Pages** | Concrete pages with real content | `HomePage` |

**Storybook** is configured with:
- `autodocs` tag for auto-generated documentation
- `@storybook/addon-essentials` for controls, actions, viewports
- `@storybook/addon-interactions` for interaction testing
- RTL direction support for Arabic content
- Global import of `tokens.css` for consistent theming

---

### 2. Design Patterns (`2. Design Patterns/`)

The second learning module covering software **Design Patterns** in frontend development. Currently contains lecture slides and reference material. Code exercises will be added as the course progresses.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Running the Design System Project

```bash
cd "1. Design System/Exp2_AtomicDesign_And_Documentation"
npm install
npm run dev          # Start Vite dev server
npm run storybook    # Start Storybook on port 6006
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run storybook` | Launch Storybook for component documentation |
| `npm run build-storybook` | Build a static Storybook site |

---

## Learning Objectives

By working through this repository, students will learn:

1. **Design Tokens** — How to define and organize visual primitives (color, typography, spacing) as a single source of truth
2. **Atomic Design** — How to build a UI component hierarchy from atoms to pages
3. **CSS Modules** — How to write scoped, maintainable CSS without class name collisions
4. **Storybook** — How to document, test, and showcase UI components in isolation
5. **Component Variants** — How to design flexible components using TypeScript union types and dynamic class composition
6. **Design Patterns** — Common patterns for structuring frontend application code
