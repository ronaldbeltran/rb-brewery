# RB BrewBook Design System

**Version:** 1.1\
**Status:** Approved\
**Owner:** Product & Architecture

## 1. Purpose

This document defines the visual language, UX principles, component
behavior and design decisions for RB BrewBook. It is the single source
of truth for UI/UX decisions.

## 2. Product Vision

RB BrewBook is a brewing companion, not an ERP or spreadsheet. The
software should disappear behind the brewing process.

### Core Principles

-   Brewing First
-   One Source of Truth
-   Mobile First
-   Progressive Disclosure
-   One Primary Action per screen
-   Context First
-   Scalable by Design
-   Offline Friendly (future-ready)

## 3. Brand Personality

-   Premium brewing notebook
-   Laboratory precision
-   Craftsmanship
-   Modern technology

## 4. Visual Language

Keywords: - Minimal - Elegant - Warm - Modern - Timeless - Professional

## 5. Color System

-   Primary: Amber
-   Neutral: Warm Gray
-   Success: Green
-   Warning: Orange
-   Error: Red
-   Info: Blue

Use color only to communicate meaning.

## 6. Typography

Primary: Geist Fallback: Inter

## 7. Spacing

Base unit: 4px

Scale: 4, 8, 12, 16, 24, 32, 48, 64

## 8. Radius

8 / 12 / 16 / 24 px

## 9. Shadows

Two elevation levels only.

## 10. Icons

Lucide React only.

## 11. Motion

150--250 ms. Fade, Slide and Scale.

## 12. Navigation

### Mobile

Bottom Navigation: - Dashboard - Recipes - New Batch - Inventory -
Profile

### Desktop

Collapsible Sidebar + Top Bar.

## 13. Cards

Primary visualization pattern.

## 14. Forms

Wizard-style for long workflows.

## 15. Tables

Only for logs, exports and administration.

## 16. Empty States

Always include: - explanation - primary CTA - future illustration

## 17. Loading

Use Skeleton components.

## 18. Notifications

Use Sonner.

## 19. Accessibility

-   44x44 touch targets
-   Keyboard navigation
-   Semantic HTML
-   Visible focus
-   Contrast compliance

## 20. Responsive

Single responsive application.

## 21. Dashboard Philosophy

Priority: 1. Active batches 2. Today's actions 3. Alerts 4. Recent
activity 5. Quick actions

## 22. AI Vision

Reserve UX space for: - Recipe optimization - Fermentation insights -
Inventory recommendations - Suggested next actions

## 23. Definition of Done

Every screen: - Passes build - Passes lint - Is responsive - Is
accessible - Reuses components - Follows this Design System

## 24. UX Rule

If a feature needs extensive explanation, simplify the interface.

## 25. North Star

"I always know where I am. I always know what to do next. I enjoy
brewing with RB BrewBook."
