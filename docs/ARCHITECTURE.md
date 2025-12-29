# Bulbul Website Architecture

## Overview

This document provides a comprehensive architectural overview of the Bulbul website, including system components, data flow, and Shopify integration.

## Table of Contents

1. [Overall Application Architecture](#overall-application-architecture)
2. [Shopify Integration](#shopify-integration)
3. [Component Architecture](#component-architecture)
4. [Data Flow](#data-flow)
5. [Technology Stack](#technology-stack)

---

## Overall Application Architecture

```mermaid
graph TB
    subgraph "Browser Client"
        UI[React UI Layer]
        Router[React Router]
        State[Zustand State]
        Query[TanStack Query]
    end
    
    subgraph "Build & Deploy"
        Vite[Vite Build Tool]
        Lovable[Lovable Hosting]
    end
    
    subgraph "External Services"
        Shopify[Shopify Storefront API]
        CDN[Asset CDN]
    end
    
    UI --> Router
    UI --> State
    UI --> Query
    Query --> Shopify
    Vite --> Lovable
    Lovable --> CDN
    
    User((User)) --> UI
```

### Key Components

| Component | Technology | Purpose |
|-----------|------------|---------|
| UI Layer | React 18 + TypeScript | Component-based user interface |
| Routing | React Router v6 | Client-side page navigation |
| State Management | Zustand | Cart and application state |
| Data Fetching | TanStack Query | API calls and caching |
| Styling | Tailwind CSS + shadcn/ui | Design system and components |
| Build | Vite | Fast development and optimized builds |

---

## Shopify Integration

```mermaid
sequenceDiagram
    participant U as User
    participant W as Website
    participant C as Cart (Zustand)
    participant L as localStorage
    participant S as Shopify API
    participant SC as Shopify Checkout
    
    U->>W: Browse Products
    W->>W: Display from local products.ts
    
    U->>W: Add to Cart
    W->>C: updateCart(product)
    C->>L: Persist cart state
    
    U->>W: View Cart
    W->>C: getCartItems()
    C-->>W: Return items
    
    U->>W: Checkout
    W->>S: Create Checkout Session
    S-->>W: Return checkout URL
    W->>SC: Redirect to Shopify
    SC->>U: Complete Purchase
```

### Integration Points

| Feature | Current State | Description |
|---------|---------------|-------------|
| Product Display | Local Data | Products served from `src/data/products.ts` |
| Cart Management | Client-side | Zustand store with localStorage persistence |
| Checkout | Placeholder | Ready for Shopify checkout integration |
| Storefront API | Configured | Client configured in `src/lib/shopify.ts` |

### Shopify Configuration

```typescript
// src/lib/shopify.ts
const shopifyConfig = {
  domain: 'your-store.myshopify.com',
  storefrontAccessToken: 'your-token',
  apiVersion: '2024-01'
};
```

---

## Component Architecture

```mermaid
graph TD
    subgraph "Entry Point"
        Main[main.tsx]
        App[App.tsx]
    end
    
    subgraph "Providers"
        QP[QueryClientProvider]
        TP[TooltipProvider]
        THP[ThemeProvider]
    end
    
    subgraph "Pages (Lazy Loaded)"
        Index[Index.tsx]
        Shop[Shop.tsx]
        Product[ProductDetail.tsx]
        About[About.tsx]
        Gallery[Gallery.tsx]
        FAQ[FAQ.tsx]
    end
    
    subgraph "Layout Components"
        Navbar[Navbar.tsx]
        Footer[Footer.tsx]
        CartDrawer[CartDrawer.tsx]
    end
    
    subgraph "Feature Components"
        ProductCard[LocalProductCard.tsx]
        Reviews[CustomerReviews.tsx]
        Related[RelatedProducts.tsx]
        Carousel[ProductImageCarousel.tsx]
    end
    
    subgraph "State & Data"
        CartStore[cartStore.ts]
        Products[products.ts]
        ShopifyLib[shopify.ts]
    end
    
    Main --> App
    App --> QP --> TP --> THP
    THP --> Index & Shop & Product & About & Gallery & FAQ
    
    Index & Shop & Product --> Navbar
    Index & Shop & Product --> Footer
    Navbar --> CartDrawer
    
    Shop --> ProductCard
    Product --> Carousel
    Product --> Related
    Index --> Reviews
    
    CartDrawer --> CartStore
    ProductCard --> Products
    ShopifyLib -.-> CartStore
```

### Component Categories

| Category | Components | Responsibility |
|----------|------------|----------------|
| Pages | Index, Shop, ProductDetail, About, Gallery, FAQ | Route-level views |
| Layout | Navbar, Footer, CartDrawer | Persistent UI structure |
| Feature | ProductCard, Reviews, Carousel | Reusable feature modules |
| UI | shadcn/ui components | Design system primitives |

---

## Data Flow

```mermaid
flowchart LR
    subgraph "Data Sources"
        Local[(products.ts)]
        Shopify[(Shopify API)]
    end
    
    subgraph "State Layer"
        Zustand[Cart Store]
        LocalStorage[(localStorage)]
    end
    
    subgraph "UI Layer"
        Pages[Page Components]
        Cards[Product Cards]
        Cart[Cart Drawer]
    end
    
    Local --> Pages
    Local --> Cards
    Shopify -.->|Optional| Pages
    
    Cards -->|Add Item| Zustand
    Zustand <-->|Persist| LocalStorage
    Zustand --> Cart
    Cart -->|Checkout| Shopify
```

### State Management

```typescript
// Cart Store (Zustand)
interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}
```

---

## Technology Stack

```mermaid
graph LR
    subgraph "Frontend"
        React[React 18]
        TS[TypeScript]
        Tailwind[Tailwind CSS]
        Shadcn[shadcn/ui]
    end
    
    subgraph "State & Data"
        Zustand[Zustand]
        TQ[TanStack Query]
        RR[React Router]
    end
    
    subgraph "Build & Deploy"
        Vite[Vite]
        Lovable[Lovable Platform]
    end
    
    subgraph "External"
        Shopify[Shopify Storefront API]
    end
    
    React --> TS
    TS --> Tailwind
    Tailwind --> Shadcn
    
    React --> Zustand
    React --> TQ
    React --> RR
    
    Vite --> Lovable
    TQ --> Shopify
```

### Stack Summary

| Layer | Technologies |
|-------|--------------|
| **UI Framework** | React 18, TypeScript |
| **Styling** | Tailwind CSS, shadcn/ui, CSS Variables |
| **State** | Zustand (cart), TanStack Query (API) |
| **Routing** | React Router v6 (lazy loading) |
| **Build** | Vite (HMR, code splitting) |
| **Hosting** | Lovable Platform |
| **E-commerce** | Shopify Storefront API |

---

## File Structure

```
src/
├── assets/           # Images, fonts, static assets
├── components/
│   ├── ui/          # shadcn/ui primitives
│   └── *.tsx        # Feature components
├── data/
│   └── products.ts  # Product catalog
├── hooks/           # Custom React hooks
├── lib/
│   ├── shopify.ts   # Shopify API client
│   └── utils.ts     # Utility functions
├── pages/           # Route components
├── stores/
│   └── cartStore.ts # Zustand cart store
└── types/
    └── shopify.ts   # TypeScript definitions
```

---

## Future Considerations

1. **Live Shopify Sync** - Replace local product data with Shopify Storefront API
2. **Checkout Completion** - Implement full Shopify checkout flow
3. **Inventory Tracking** - Real-time stock updates from Shopify
4. **Order History** - Customer account integration
5. **Webhooks** - Order and inventory event handling
