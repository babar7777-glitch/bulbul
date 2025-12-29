# Lovable Cloud Implementation Plan

## Overview

This document outlines the plan to migrate from a static frontend to a full-stack e-commerce application using Lovable Cloud.

---

## Phase 1: Database Schema

### Tables to Create

```mermaid
erDiagram
    auth_users ||--o| profiles : has
    profiles ||--o{ user_roles : has
    profiles ||--o{ orders : places
    profiles ||--o{ wishlists : creates
    profiles ||--o{ addresses : has
    
    products ||--o{ order_items : contains
    products ||--o{ wishlists : includes
    products }o--|| categories : belongs_to
    products ||--o{ product_images : has
    
    orders ||--o{ order_items : contains
    orders }o--o| addresses : ships_to

    profiles {
        uuid id PK
        text first_name
        text last_name
        text email
        text phone
        text avatar_url
        timestamp created_at
        timestamp updated_at
    }

    user_roles {
        uuid id PK
        uuid user_id FK
        app_role role
    }

    categories {
        uuid id PK
        text name
        text slug
        text description
        text image_url
        int sort_order
    }

    products {
        uuid id PK
        text title
        text slug
        text description
        decimal price
        decimal compare_at_price
        int stock_quantity
        boolean is_active
        uuid category_id FK
        jsonb features
        decimal rating
        int review_count
        timestamp created_at
        timestamp updated_at
    }

    product_images {
        uuid id PK
        uuid product_id FK
        text url
        text alt_text
        int sort_order
        boolean is_primary
    }

    orders {
        uuid id PK
        uuid user_id FK
        text order_number
        order_status status
        decimal subtotal
        decimal tax
        decimal shipping
        decimal total
        uuid shipping_address_id FK
        text payment_intent_id
        timestamp created_at
        timestamp updated_at
    }

    order_items {
        uuid id PK
        uuid order_id FK
        uuid product_id FK
        text variant_title
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
        text label
        text first_name
        text last_name
        text address_line1
        text address_line2
        text city
        text state
        text postal_code
        text country
        text phone
        boolean is_default
    }
```

### Enums

```sql
-- User roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Order status
CREATE TYPE public.order_status AS ENUM (
  'pending',
  'confirmed',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
  'refunded'
);
```

### Row Level Security (RLS) Policies

| Table | Policy | Description |
|-------|--------|-------------|
| profiles | Users can view/edit own profile | `auth.uid() = id` |
| user_roles | Admin only access | `has_role(auth.uid(), 'admin')` |
| products | Public read, admin write | Read: all, Write: admin only |
| orders | Users view own, admin view all | `user_id = auth.uid() OR has_role('admin')` |
| wishlists | Users manage own | `user_id = auth.uid()` |
| addresses | Users manage own | `user_id = auth.uid()` |

---

## Phase 2: Authentication

### Features to Implement

1. **Sign Up Flow**
   - Email/password registration
   - Email confirmation (optional)
   - Auto-create profile on signup via trigger

2. **Sign In Flow**
   - Email/password login
   - Session persistence
   - Redirect handling

3. **Password Recovery**
   - Forgot password email
   - Reset password page

4. **Profile Management**
   - View/edit profile
   - Manage addresses
   - Order history

### Auth Flow Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as Supabase Auth
    participant D as Database
    
    U->>F: Click Sign Up
    F->>A: signUp(email, password)
    A->>D: Create auth.users entry
    D->>D: Trigger: create profile
    A-->>F: Session + User
    F-->>U: Redirect to dashboard
    
    U->>F: Click Sign In
    F->>A: signInWithPassword()
    A-->>F: Session + User
    F->>D: Fetch profile
    D-->>F: Profile data
    F-->>U: Show authenticated UI
```

---

## Phase 3: Edge Functions

### Functions to Create

| Function | Purpose | Trigger |
|----------|---------|---------|
| `process-order` | Validate cart, create order, handle payment | User checkout |
| `sync-inventory` | Update stock after order | Order confirmed |
| `send-order-email` | Confirmation emails | Order created |
| `admin-stats` | Dashboard analytics | Admin request |
| `webhook-stripe` | Handle Stripe events | Stripe webhook |

### Edge Function Architecture

```mermaid
flowchart LR
    subgraph Frontend
        A[Cart Checkout]
        B[Admin Dashboard]
    end
    
    subgraph Edge Functions
        C[process-order]
        D[sync-inventory]
        E[send-order-email]
        F[admin-stats]
        G[webhook-stripe]
    end
    
    subgraph External
        H[Stripe]
        I[Email Service]
    end
    
    subgraph Database
        J[(Orders)]
        K[(Products)]
        L[(Users)]
    end
    
    A --> C
    C --> H
    C --> J
    C --> D
    D --> K
    C --> E
    E --> I
    
    B --> F
    F --> J
    F --> K
    F --> L
    
    H --> G
    G --> J
```

### process-order Function Flow

```mermaid
flowchart TD
    A[Receive Cart Data] --> B{Validate Items}
    B -->|Invalid| C[Return Error]
    B -->|Valid| D{Check Stock}
    D -->|Out of Stock| C
    D -->|Available| E[Calculate Total]
    E --> F[Create Payment Intent]
    F --> G{Payment Success?}
    G -->|No| C
    G -->|Yes| H[Create Order Record]
    H --> I[Create Order Items]
    I --> J[Deduct Inventory]
    J --> K[Send Confirmation Email]
    K --> L[Return Order Details]
```

---

## Phase 4: Admin Dashboard

### Pages & Features

```mermaid
graph TD
    A[Admin Dashboard] --> B[Overview]
    A --> C[Products]
    A --> D[Orders]
    A --> E[Customers]
    A --> F[Settings]
    
    B --> B1[Revenue Stats]
    B --> B2[Order Stats]
    B --> B3[Top Products]
    B --> B4[Recent Orders]
    
    C --> C1[Product List]
    C --> C2[Add Product]
    C --> C3[Edit Product]
    C --> C4[Categories]
    C --> C5[Inventory]
    
    D --> D1[Order List]
    D --> D2[Order Details]
    D --> D3[Update Status]
    D --> D4[Refunds]
    
    E --> E1[Customer List]
    E --> E2[Customer Details]
    E --> E3[Order History]
    
    F --> F1[Store Settings]
    F --> F2[User Management]
    F --> F3[Role Management]
```

### Admin Routes

| Route | Component | Access |
|-------|-----------|--------|
| `/admin` | AdminDashboard | admin |
| `/admin/products` | ProductList | admin |
| `/admin/products/new` | ProductForm | admin |
| `/admin/products/:id` | ProductForm | admin |
| `/admin/orders` | OrderList | admin |
| `/admin/orders/:id` | OrderDetail | admin |
| `/admin/customers` | CustomerList | admin |
| `/admin/settings` | Settings | admin |

---

## Phase 5: Migration from Shopify

### Data Migration

```mermaid
flowchart LR
    subgraph Current
        A[products.ts]
        B[localStorage Cart]
        C[Shopify Checkout]
    end
    
    subgraph Target
        D[(Products Table)]
        E[(Cart in Session)]
        F[Native Checkout]
    end
    
    A -->|Seed Script| D
    B -->|Keep for Guest| E
    C -->|Replace with| F
```

### Migration Steps

1. **Products**: Seed database from `products.ts`
2. **Cart**: Hybrid approach (localStorage for guests, DB for authenticated)
3. **Checkout**: Replace Shopify redirect with native flow

---

## Implementation Order

```mermaid
gantt
    title Implementation Timeline
    dateFormat  YYYY-MM-DD
    section Phase 1
    Enable Lovable Cloud           :a1, 2024-01-01, 1d
    Create Database Schema         :a2, after a1, 2d
    Set up RLS Policies            :a3, after a2, 1d
    Seed Product Data              :a4, after a3, 1d
    
    section Phase 2
    Auth Pages (Login/Signup)      :b1, after a4, 2d
    Profile Management             :b2, after b1, 1d
    Protected Routes               :b3, after b2, 1d
    
    section Phase 3
    Order Processing Function      :c1, after b3, 2d
    Inventory Sync Function        :c2, after c1, 1d
    Email Notifications            :c3, after c2, 1d
    
    section Phase 4
    Admin Layout & Auth            :d1, after c3, 1d
    Product Management             :d2, after d1, 2d
    Order Management               :d3, after d2, 2d
    Dashboard Analytics            :d4, after d3, 1d
    
    section Phase 5
    Checkout Flow                  :e1, after d4, 2d
    Payment Integration            :e2, after e1, 2d
    Testing & Polish               :e3, after e2, 2d
```

---

## Summary

| Phase | Deliverables | Effort |
|-------|--------------|--------|
| 1. Database | 8 tables, enums, RLS policies | 1-2 days |
| 2. Authentication | Login, signup, profile, password reset | 1-2 days |
| 3. Edge Functions | Order processing, inventory, emails | 2-3 days |
| 4. Admin Dashboard | Product/order management, analytics | 3-4 days |
| 5. Checkout | Native payment flow with Stripe | 2-3 days |

**Total Estimated Effort: 10-14 days**

---

## Next Steps

To begin implementation, confirm:

1. **Payment Provider**: Stripe recommended - do you have an account?
2. **Email Service**: Resend, SendGrid, or other preference?
3. **Priority**: Start with auth, or products first?
4. **Admin Access**: How should first admin be created?
