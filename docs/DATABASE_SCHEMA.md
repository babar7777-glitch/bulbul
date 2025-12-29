# Bulbul Database Schema & Edge Functions

## Current Status

**No Lovable Cloud database is currently configured.** This document shows the proposed schema for future implementation.

---

## Proposed Database Schema

```mermaid
erDiagram
    auth_users ||--o| profiles : has
    profiles ||--o{ orders : places
    profiles ||--o{ wishlists : has
    profiles ||--o{ addresses : has
    
    categories ||--o{ products : contains
    products ||--o{ product_images : has
    products ||--o{ order_items : included_in
    products ||--o{ wishlists : added_to
    
    orders ||--o{ order_items : contains
    orders }o--|| addresses : ships_to

    auth_users {
        uuid id PK
        string email
        string encrypted_password
        timestamp created_at
        timestamp last_sign_in_at
    }
    
    profiles {
        uuid id PK,FK
        string full_name
        string phone
        string avatar_url
        enum role "customer|admin"
        timestamp created_at
    }
    
    categories {
        uuid id PK
        string name
        string slug
        string description
        int sort_order
    }
    
    products {
        uuid id PK
        uuid category_id FK
        string name
        string slug
        text description
        decimal price
        decimal compare_at_price
        int inventory_quantity
        boolean is_active
        timestamp created_at
    }
    
    product_images {
        uuid id PK
        uuid product_id FK
        string url
        string alt_text
        int sort_order
        boolean is_primary
    }
    
    orders {
        uuid id PK
        uuid user_id FK
        uuid shipping_address_id FK
        string order_number
        enum status "pending|paid|shipped|delivered|cancelled"
        decimal subtotal
        decimal shipping
        decimal tax
        decimal total
        jsonb metadata
        timestamp created_at
    }
    
    order_items {
        uuid id PK
        uuid order_id FK
        uuid product_id FK
        int quantity
        decimal unit_price
        decimal total_price
    }
    
    wishlists {
        uuid id PK
        uuid user_id FK
        uuid product_id FK
        timestamp created_at
    }
    
    addresses {
        uuid id PK
        uuid user_id FK
        string label
        string full_name
        string line1
        string line2
        string city
        string state
        string postal_code
        string country
        boolean is_default
    }
```

---

## Proposed Edge Functions

```mermaid
graph TB
    subgraph "Edge Functions"
        PO[process-order]
        SI[sync-inventory]
        SOE[send-order-email]
        AS[admin-stats]
        WS[webhook-stripe]
    end
    
    subgraph "Triggers"
        Cart[Cart Checkout]
        Admin[Admin Action]
        Stripe[Stripe Webhook]
        Cron[Scheduled Job]
    end
    
    subgraph "External Services"
        StripeAPI[Stripe API]
        EmailAPI[Email Service]
    end
    
    subgraph "Database"
        DB[(Supabase DB)]
    end
    
    Cart --> PO
    PO --> StripeAPI
    PO --> DB
    PO --> SOE
    
    Admin --> SI
    Cron --> SI
    SI --> DB
    
    SOE --> EmailAPI
    
    Admin --> AS
    AS --> DB
    
    Stripe --> WS
    WS --> DB
    WS --> SOE
```

---

## Edge Function Details

| Function | Trigger | Purpose | Dependencies |
|----------|---------|---------|--------------|
| `process-order` | Cart checkout | Creates order, initiates payment | Stripe API |
| `sync-inventory` | Admin/Cron | Updates product stock levels | Database |
| `send-order-email` | Order events | Sends confirmation/shipping emails | Email service |
| `admin-stats` | Admin dashboard | Aggregates analytics data | Database |
| `webhook-stripe` | Stripe events | Handles payment confirmations | Stripe webhooks |

---

## Current Architecture (No Cloud)

```mermaid
graph TB
    subgraph "Frontend Only"
        React[React App]
        Zustand[Zustand Store]
        LocalStorage[(localStorage)]
    end
    
    subgraph "Data Sources"
        ProductsTS[products.ts]
        ShopifyAPI[Shopify API]
    end
    
    React --> ProductsTS
    React --> Zustand
    Zustand <--> LocalStorage
    Zustand -.->|Checkout| ShopifyAPI
```

| Data | Current Storage | Future Storage |
|------|-----------------|----------------|
| Products | `src/data/products.ts` | Database `products` table |
| Cart | `localStorage` | Database or session |
| Orders | Shopify | Database `orders` table |
| Users | None | Supabase Auth + `profiles` |
| Wishlists | None | Database `wishlists` table |

---

## Implementation Reference

See [CLOUD_IMPLEMENTATION_PLAN.md](./CLOUD_IMPLEMENTATION_PLAN.md) for the full migration plan.
