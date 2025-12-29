# BulBul Website - Pseudo Code Logic Documentation

This document contains pseudo code explanations for all logic used in the website features.

---

## 1. Shopping Cart Store (Zustand)

**File:** `src/stores/cartStore.ts`

```pseudo
STORE CartStore:
  STATE:
    items: Array of CartItem
    isLoading: Boolean

  ACTION addItem(newItem):
    existingItem = FIND item in items WHERE variantId == newItem.variantId
    IF existingItem EXISTS:
      UPDATE existingItem.quantity += newItem.quantity
    ELSE:
      APPEND newItem to items
    END

  ACTION updateQuantity(variantId, newQuantity):
    IF newQuantity <= 0:
      CALL removeItem(variantId)
      RETURN
    END
    FIND item in items WHERE variantId matches
    SET item.quantity = newQuantity

  ACTION removeItem(variantId):
    FILTER items to EXCLUDE item with matching variantId

  ACTION clearCart():
    SET items = empty array

  GETTER getTotalItems():
    RETURN SUM of all item.quantity in items

  GETTER getTotalPrice():
    FOR each item in items:
      total += parseFloat(item.price.amount) * item.quantity
    RETURN total

  PERSISTENCE:
    Save to localStorage under key "bulbul-cart"
    Use JSON serialization
```

---

## 2. Product Lookup Functions

**File:** `src/data/products.ts`

```pseudo
FUNCTION getProductByHandle(handle):
  FOR each product in products array:
    IF product.handle == handle:
      RETURN product
  RETURN undefined

FUNCTION getRelatedProducts(currentHandle, limit = 4):
  currentProduct = FIND product WHERE handle == currentHandle
  
  IF currentProduct NOT FOUND:
    RETURN first 'limit' products from array
  
  sameCategory = FILTER products WHERE:
    - category == currentProduct.category
    - AND handle != currentHandle
  
  otherProducts = FILTER products WHERE:
    - category != currentProduct.category
    - AND handle != currentHandle
  
  combined = CONCAT(sameCategory, otherProducts)
  RETURN first 'limit' items from combined
```

---

## 3. Recently Viewed Products Tracking

**File:** `src/pages/ProductDetail.tsx`

```pseudo
EFFECT onProductLoad(productHandle):
  IF product exists:
    recentlyViewed = GET from localStorage("recently-viewed") OR empty array
    
    // Remove current product if already in list (to move to front)
    filtered = FILTER recentlyViewed to EXCLUDE current handle
    
    // Add current product to beginning
    newList = [current handle, ...filtered]
    
    // Keep only last 10 items
    truncated = TAKE first 10 from newList
    
    SAVE truncated to localStorage("recently-viewed")
```

---

## 4. Add to Cart Handler

**File:** `src/pages/ProductDetail.tsx`

```pseudo
FUNCTION handleAddToCart():
  IF product NOT exists:
    RETURN early
  
  firstVariant = product.variants[0]
  
  cartItem = CREATE {
    variantId: firstVariant.id,
    productId: product.id,
    title: product.title,
    variantTitle: firstVariant.title,
    quantity: selectedQuantity,
    price: firstVariant.price,
    image: product.images[0]
  }
  
  CALL cartStore.addItem(cartItem)
  
  SHOW toast notification:
    title: "Added to cart!"
    description: "{quantity}x {product.title} added"
```

---

## 5. Quantity Selector Logic

**File:** `src/pages/ProductDetail.tsx`

```pseudo
STATE quantity = 1

FUNCTION decreaseQuantity():
  IF quantity > 1:
    SET quantity = quantity - 1

FUNCTION increaseQuantity():
  SET quantity = quantity + 1

RENDER:
  MinusButton onClick: decreaseQuantity
  Display: quantity
  PlusButton onClick: increaseQuantity
```

---

## 6. Star Rating Display

**File:** `src/components/LocalProductCard.tsx`, `src/pages/ProductDetail.tsx`

```pseudo
FUNCTION renderStars(rating):
  stars = empty array
  
  FOR i = 1 to 5:
    IF i <= FLOOR(rating):
      ADD filled star (gold color)
    ELSE IF i == CEIL(rating) AND rating has decimal:
      ADD half-filled star
    ELSE:
      ADD empty star (gray color)
  
  RETURN stars array
```

---

## 7. Mobile Navigation Toggle

**File:** `src/components/Navbar.tsx`

```pseudo
STATE isMenuOpen = false

FUNCTION toggleMenu():
  SET isMenuOpen = NOT isMenuOpen

RENDER:
  IF screen is mobile:
    SHOW hamburger button
    
    IF isMenuOpen:
      SHOW mobile menu overlay with navigation links
      Each link onClick: SET isMenuOpen = false
```

---

## 8. Cart Badge Counter

**File:** `src/components/Navbar.tsx`

```pseudo
totalItems = CALL cartStore.getTotalItems()

RENDER CartIcon:
  IF totalItems > 0:
    SHOW badge with totalItems count
    Badge positioned: top-right of cart icon
```

---

## 9. Interactive Floating Balls Animation

**File:** `src/pages/ComingSoon.tsx`

```pseudo
CONFIG balls = [
  { color, size, position, animation-delay },
  ... (6 balls total)
]

STATE mousePosition = { x: 0, y: 0 }

EFFECT onMouseMove(event):
  SET mousePosition = { x: event.clientX, y: event.clientY }

RENDER each ball:
  basePosition = ball.initialPosition
  
  // Calculate offset based on mouse (parallax effect)
  offsetX = (mousePosition.x / screenWidth - 0.5) * parallaxFactor
  offsetY = (mousePosition.y / screenHeight - 0.5) * parallaxFactor
  
  finalPosition = basePosition + offset
  
  Apply CSS animation with ball.delay
  Apply blur effect
  Apply gradient background
```

---

## 10. Email Signup Form

**File:** `src/pages/ComingSoon.tsx`

```pseudo
STATE email = ""
STATE isSubmitted = false

FUNCTION handleSubmit(event):
  event.preventDefault()
  
  IF email is valid:
    // Simulate API call
    SET isSubmitted = true
    SHOW success message
  
RENDER:
  IF NOT isSubmitted:
    SHOW email input form
  ELSE:
    SHOW "Thank you" confirmation message
```

---

## 11. Image Carousel with Thumbnails

**File:** `src/components/ProductImageCarousel.tsx`

```pseudo
STATE selectedIndex = 0
emblaApi = useEmblaCarousel()

FUNCTION selectImage(index):
  IF emblaApi exists:
    emblaApi.scrollTo(index)
    SET selectedIndex = index

EFFECT onCarouselScroll():
  LISTEN to emblaApi "select" event
  UPDATE selectedIndex = emblaApi.selectedScrollSnap()

RENDER:
  MainCarousel:
    FOR each image in images:
      SHOW image slide
  
  ThumbnailRow:
    FOR each image at index:
      Thumbnail onClick: selectImage(index)
      IF index == selectedIndex:
        ADD selected styling (border highlight)
```

---

## 12. Featured Products Display

**File:** `src/pages/Index.tsx`

```pseudo
featuredProducts = TAKE first 4 from products array

RENDER:
  FOR each product in featuredProducts:
    RENDER LocalProductCard(product)
```

---

## 13. Cart Drawer Checkout Handler

**File:** `src/components/CartDrawer.tsx`

```pseudo
FUNCTION handleCheckout():
  SHOW toast:
    title: "Coming Soon!"
    description: "Checkout will be available when we launch"

RENDER CartDrawer:
  FOR each item in cartStore.items:
    SHOW item image, title, variant, quantity, price
    
    QuantityControls:
      MinusButton onClick: updateQuantity(item.variantId, quantity - 1)
      PlusButton onClick: updateQuantity(item.variantId, quantity + 1)
    
    RemoveButton onClick: removeItem(item.variantId)
  
  SHOW subtotal = cartStore.getTotalPrice()
  CheckoutButton onClick: handleCheckout()
```

---

## 14. FAQ Accordion

**File:** `src/pages/FAQ.tsx`

```pseudo
DATA faqs = [
  { question, answer, category },
  ...
]

RENDER:
  Accordion (single item open at a time):
    FOR each faq in faqs:
      AccordionItem:
        Trigger: faq.question
        Content: faq.answer
```

---

## 15. Variant Title Display Logic

**File:** `src/components/CartDrawer.tsx`

```pseudo
FUNCTION displayVariantTitle(variantTitle):
  IF variantTitle == "Default Title":
    RETURN null (don't display)
  ELSE:
    RETURN variantTitle
```

---

## 16. Product Card Navigation

**File:** `src/components/LocalProductCard.tsx`

```pseudo
RENDER ProductCard(product):
  Link to: "/product/{product.handle}"
  
  SHOW:
    - Product image with hover zoom effect
    - Category badge
    - Title
    - Star rating with review count
    - Price formatted as currency
```

---

## 17. Related Products Logic

**File:** `src/components/RelatedProducts.tsx`

```pseudo
GIVEN currentHandle and products array:

relatedProducts = CALL getRelatedProducts(currentHandle, 4)

RENDER:
  IF relatedProducts.length > 0:
    Grid of LocalProductCard components
  ELSE:
    SHOW nothing
```

---

## 18. Customer Reviews Display

**File:** `src/components/CustomerReviews.tsx`

```pseudo
DATA reviews = imported from products.ts

RENDER:
  Section title: "Customer Reviews"
  
  FOR each review in reviews:
    Card:
      - Reviewer avatar (first letter of name)
      - Reviewer name
      - Star rating
      - Review date
      - Review comment text
```

---

## Architecture Summary

```
┌─────────────────────────────────────────────────────────────┐
│                     STATE MANAGEMENT                         │
├─────────────────────────────────────────────────────────────┤
│  Zustand Store (cartStore)                                  │
│  ├── items[], isLoading                                     │
│  ├── addItem, updateQuantity, removeItem, clearCart         │
│  └── Persisted to localStorage                              │
├─────────────────────────────────────────────────────────────┤
│                      CART LOGIC                              │
├─────────────────────────────────────────────────────────────┤
│  • Add items with quantity aggregation                      │
│  • Update quantities (auto-remove at 0)                     │
│  • Calculate totals (items count, price sum)                │
├─────────────────────────────────────────────────────────────┤
│                    PRODUCT LOGIC                             │
├─────────────────────────────────────────────────────────────┤
│  • Lookup by handle                                         │
│  • Related products (same category priority)                │
│  • Recently viewed tracking (localStorage)                  │
├─────────────────────────────────────────────────────────────┤
│                      UI LOGIC                                │
├─────────────────────────────────────────────────────────────┤
│  • Mobile menu toggle                                       │
│  • Quantity selectors                                       │
│  • Image carousel with thumbnails                           │
│  • FAQ accordion                                            │
│  • Star rating rendering                                    │
├─────────────────────────────────────────────────────────────┤
│                   ANIMATION LOGIC                            │
├─────────────────────────────────────────────────────────────┤
│  • Mouse-tracking parallax (Coming Soon page)               │
│  • Floating balls with blur effects                         │
│  • CSS keyframe animations (float, pulse)                   │
└─────────────────────────────────────────────────────────────┘
```

---

*Last updated: December 2024*
