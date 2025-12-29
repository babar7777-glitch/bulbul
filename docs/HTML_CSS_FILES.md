# HTML & CSS Files - Complete Listing

This document contains the full content of all HTML and CSS files used in the BulBul website, for easy reference and downloading.

---

## Table of Contents

1. [HTML Files](#html-files)
   - [index.html](#indexhtml)
   - [public/404.html](#public404html)
2. [CSS Files](#css-files)
   - [src/index.css](#srcindexcss)
   - [src/App.css](#srcappcss)
3. [Tailwind Configuration](#tailwind-configuration)
   - [tailwind.config.ts](#tailwindconfigts)

---

## HTML Files

### index.html

**Location:** `./index.html`  
**Purpose:** Main application entry point  
**Status:** Active

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Preconnect to external origins for faster loading -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- DNS prefetch for any additional origins -->
    <link rel="dns-prefetch" href="https://cdn.shopify.com" />

    <!-- Preload critical fonts -->
    <link rel="preload" href="/fonts/Laila-SemiBold.ttf" as="font" type="font/ttf" crossorigin />
    
    <!-- Non-render-blocking font loading -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;500;600;700&display=swap" /></noscript>
    <title>BulBul - DIY Art Kits | Make It, Love It</title>
    <meta name="description" content="Discover the joy of creating beautiful art with BulBul's curated DIY kits. Each kit includes materials, printed guides, and video tutorials." />
    <meta name="author" content="BulBul" />

    <meta property="og:title" content="BulBul - DIY Art Kits" />
    <meta property="og:description" content="Make it, love it. Curated DIY art kits with everything you need to create." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@bulbul.diy" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <!-- GitHub Pages SPA redirect handler -->
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

### public/404.html

**Location:** `./public/404.html`  
**Purpose:** GitHub Pages SPA fallback for client-side routing  
**Status:** Active

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>BulBul - DIY Art Kits</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

---

## CSS Files

### src/index.css

**Location:** `./src/index.css`  
**Purpose:** Main stylesheet with Tailwind CSS integration and BulBul design system  
**Status:** Active

```css
/* Fonts loaded in index.html for non-render-blocking performance */

@font-face {
  font-family: 'Laila';
  src: url('/fonts/Laila-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

/* BulBul DIY Art Kits Design System
   Colors: Chocolate brown, coral red, burnt orange, soft peach, cream
   Font: Pacifico for headlines, Nunito for body
*/

@layer base {
  :root {
    /* BulBul Brand Colors */
    --background: 30 33% 96%; /* Cream/Off-white */
    --foreground: 20 30% 20%; /* Dark chocolate brown */

    --card: 30 40% 98%; /* Soft cream */
    --card-foreground: 20 30% 20%;

    --popover: 30 40% 98%;
    --popover-foreground: 20 30% 20%;

    --primary: 10 70% 45%; /* Coral red - darkened for better text contrast */
    --primary-foreground: 0 0% 100%; /* Pure white for better contrast */
    
    /* High contrast variant for text on light backgrounds */
    --primary-text: 10 70% 35%; /* Darker coral for text - WCAG AA compliant */

    --secondary: 25 60% 55%; /* Burnt orange */
    --secondary-foreground: 20 30% 10%; /* Dark chocolate for better contrast */

    --muted: 25 30% 90%; /* Soft peach */
    --muted-foreground: 20 25% 28%; /* Darker for better contrast - WCAG AAA compliant */

    --accent: 25 60% 55%; /* Burnt orange */
    --accent-foreground: 30 33% 96%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 25 25% 85%;
    --input: 25 25% 85%;
    --ring: 10 70% 50%;

    --radius: 0.75rem;

    /* Custom BulBul Colors */
    --chocolate: 20 30% 20%;
    --coral: 10 70% 50%;
    --burnt-orange: 25 60% 55%;
    --peach: 25 50% 85%;
    --cream: 30 33% 96%;

    --sidebar-background: 30 33% 96%;
    --sidebar-foreground: 20 30% 20%;
    --sidebar-primary: 10 70% 50%;
    --sidebar-primary-foreground: 30 33% 96%;
    --sidebar-accent: 25 30% 90%;
    --sidebar-accent-foreground: 20 30% 20%;
    --sidebar-border: 25 25% 85%;
    --sidebar-ring: 10 70% 50%;
  }

  .dark {
    --background: 20 30% 10%;
    --foreground: 30 33% 96%;

    --card: 20 25% 15%;
    --card-foreground: 30 33% 96%;

    --popover: 20 25% 15%;
    --popover-foreground: 30 33% 96%;

    --primary: 10 70% 55%;
    --primary-foreground: 20 30% 10%;

    --secondary: 25 60% 50%;
    --secondary-foreground: 30 33% 96%;

    --muted: 20 20% 25%;
    --muted-foreground: 25 20% 70%;

    --accent: 25 60% 50%;
    --accent-foreground: 30 33% 96%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 20 20% 25%;
    --input: 20 20% 25%;
    --ring: 10 70% 55%;

    --sidebar-background: 20 30% 10%;
    --sidebar-foreground: 30 33% 96%;
    --sidebar-primary: 10 70% 55%;
    --sidebar-primary-foreground: 20 30% 10%;
    --sidebar-accent: 20 20% 25%;
    --sidebar-accent-foreground: 30 33% 96%;
    --sidebar-border: 20 20% 25%;
    --sidebar-ring: 10 70% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-body;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading tracking-wide;
  }

  .font-display {
    font-family: 'Pacifico', cursive;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
}

/* Global focus styles for accessibility */
@layer base {
  a:focus-visible,
  button:focus-visible,
  [role="button"]:focus-visible,
  [tabindex]:focus-visible {
    @apply outline-none ring-2 ring-ring ring-offset-2 ring-offset-background rounded-sm;
  }
}
```

---

### src/App.css

**Location:** `./src/App.css`  
**Purpose:** Legacy Vite boilerplate styles  
**Status:** Unused (can be removed)

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

---

## Tailwind Configuration

### tailwind.config.ts

**Location:** `./tailwind.config.ts`  
**Purpose:** Tailwind CSS configuration with BulBul custom theme  
**Status:** Active

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Pacifico", "cursive"],
        heading: ["Laila", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          text: "hsl(var(--primary-text))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // BulBul custom colors
        chocolate: "hsl(var(--chocolate))",
        coral: "hsl(var(--coral))",
        "burnt-orange": "hsl(var(--burnt-orange))",
        peach: "hsl(var(--peach))",
        cream: "hsl(var(--cream))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## Summary Table

| File | Type | Purpose | Status |
|------|------|---------|--------|
| `index.html` | HTML | Main app entry point | Active |
| `public/404.html` | HTML | GitHub Pages SPA fallback | Active |
| `src/index.css` | CSS | Main stylesheet + design system | Active |
| `src/App.css` | CSS | Legacy Vite boilerplate | Unused |
| `tailwind.config.ts` | TypeScript | Tailwind theme configuration | Active |

---

*Last updated: December 2024*
