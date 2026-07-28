# Technology Stack

RB BrewBook uses a small, maintainable stack centered on the Next.js ecosystem.

## Frontend

- **Next.js 15** — Provides the application framework, production build tooling, routing, and server rendering.
- **React 19** — Supplies the component model used by Next.js.
- **App Router** — Organizes routes, layouts, loading states, and Server Components using current Next.js conventions.
- **TypeScript (strict mode)** — Adds compile-time safety and makes shared contracts explicit.
- **Tailwind CSS 4** — Provides utility-first styling with a CSS-first configuration and consistent design tokens.
- **shadcn/ui** — Supplies accessible, reusable component source that remains owned and adaptable by the project.
- **Radix UI** — Provides accessible interaction primitives used by shadcn/ui components.
- **Lucide React** — Provides the approved consistent icon set.
- **Sonner** — Provides lightweight, accessible toast notifications.

Server Components are the default. Client Components are used only when browser APIs, local interaction, or client-side state require them.

## Backend and Data

- **Supabase** — Provides the approved managed backend services, including authentication and database access.
- **PostgreSQL** — Provides the relational data store through Supabase.
- **Google OAuth through Supabase Auth** — Provides the only approved authentication method without storing passwords or Google credentials.

Supabase integration is part of the approved architecture but is introduced only when its implementation task is authorized.

## Deployment and Tooling

- **Vercel** — Provides the deployment platform optimized for Next.js applications.
- **npm** — Provides the single approved package manager and reproducible dependency installation through `package-lock.json`.
- **ESLint** — Enforces Next.js, React, and TypeScript code-quality rules.
- **Turbopack** — Provides the default fast development bundler for the Next.js application.

## Architecture Principles

- Keep business logic outside UI components.
- Prefer small, reusable, cohesive modules.
- Use environment variables for configuration and never hardcode secrets.
- Avoid unnecessary dependencies and infrastructure.
- Follow Next.js App Router conventions and the project folder structure.
