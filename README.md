# Great Family Group Website

A landing page for Great Family Group - a Vietnamese family advisory and software solutions company.

## What is this?

This is the main landing page for Great Family Group, showcasing our two core services:
- **Family Advisory**: Professional counseling for family relationships, parenting, communication, and more
- **Software Solutions**: Technology tools to help families maintain positive changes and stay connected

The site is built entirely in Vietnamese and designed to be warm, trustworthy, and professional.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Be Vietnam Pro (body) and Lora (heading serif option)
- **Runtime**: Node.js
- **Package Manager**: npm

## How to Run

### Development Server

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

This builds the optimized production bundle and starts the production server.

### Linting

```bash
npm run lint
```

Runs ESLint to check for code quality issues.

## Project Structure

```
great-family-group-web/
├── app/
│   ├── constants.ts          # Contact information (email, phone, Zalo)
│   ├── globals.css           # Global styles and Tailwind theme
│   ├── layout.tsx            # Root layout with metadata and fonts
│   ├── page.tsx              # Main landing page component
│   ├── sitemap.ts            # XML sitemap generation
│   ├── robots.ts             # Robots.txt configuration
│   └── opengraph-image.tsx   # Open Graph image generation
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Editing Content

### Contact Information

All contact details (email, phone, Zalo) are centralized in `app/constants.ts`:

```typescript
export const CONTACT = {
  email: "hello@greatfamily.group",
  phone: "+84 123 456 789", // Placeholder
  zalo: "+84 123 456 789", // Placeholder
} as const;
```

**⚠️ IMPORTANT**: Update these placeholders with real contact information before launch.

### Page Copy

All Vietnamese copy is in `app/page.tsx`. The main sections are:
- Hero section (`#top`)
- Services section (`#dich-vu`)
- Testimonials section (`#cam-nhan`)
- CTA section (`#lien-he`)
- Footer

### Colors and Theme

The color palette is defined in `app/globals.css` using CSS variables:

- **Cream background**: `#FFF8F0`
- **Primary (warm terracotta)**: `#C2553A`
- **Secondary (deep teal)**: `#1F5F5B`
- **Accent (soft gold)**: `#E9B44C`
- **Ink (text)**: `#2B2320`
- **Muted (secondary text)**: `#6B5E57`
- **Sand (alternate background)**: `#F4E6D6`

### Metadata and SEO

Update SEO metadata in `app/layout.tsx` including:
- Page title and description
- Keywords
- Open Graph tags
- Canonical URL (update domain when deployed)

## ⚠️ Important Notes

### Placeholder Testimonials

The testimonials in the "Cảm nhận" section are **illustrative placeholders only**. They use:
- Fictional first names (Linh, Minh, Hoa)
- Generic roles (Mẹ của hai bé, Cha của ba con, etc.)
- Initials avatars (no photos)

**These MUST be replaced with real testimonials before launch.**

The placeholder comment is in the code at `app/page.tsx` around the testimonials section.

### Contact Details

The contact email, phone, and Zalo numbers in `app/constants.ts` are placeholders and need to be updated before launch.

### Domain

The site references `https://greatfamily.group` throughout. Update this in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `app/robots.ts`

Once you have a real domain configured.

## Accessibility

This site is built to WCAG 2.1 AA standards:
- All text has minimum 4.5:1 contrast ratio
- Keyboard navigation works throughout
- Skip-to-content link for screen readers
- Proper heading hierarchy (one H1, logical H2s)
- ARIA labels on interactive elements
- Touch targets are at least 44px
- Respects `prefers-reduced-motion`

## SEO Features

- Vietnamese language set (`lang="vi"`)
- Complete metadata (title, description, keywords)
- Open Graph and Twitter Card tags
- JSON-LD structured data (Organization)
- Canonical URL
- XML sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Generated Open Graph image

## Responsive Design

The site is fully responsive and tested at:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px

Minimum supported width: 320px (no horizontal scroll).

## Browser Support

Modern browsers with ES2020+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Copyright © 2026 Great Family Group. All rights reserved.
