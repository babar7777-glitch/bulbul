# Content Inventory (Non-Shopify)

Complete listing of all website copy and media stored locally in the codebase.

---

## Media Files

### Logo Files
| File | Path | Usage |
|------|------|-------|
| `bulbul-logo.png` | `src/assets/bulbul-logo.png` | Navbar, Footer |
| `bulbul-logo.svg` | `src/assets/bulbul-logo.svg` | Alternative format |

### Product Images
| File | Path |
|------|------|
| `gesang-flower.jpg` | `src/assets/products/gesang-flower.jpg` |
| `golden-chrysanthemum.jpg` | `src/assets/products/golden-chrysanthemum.jpg` |
| `golden-phoenix.jpg` | `src/assets/products/golden-phoenix.jpg` |
| `golden-rose.jpg` | `src/assets/products/golden-rose.jpg` |
| `orchid-rainbow.jpg` | `src/assets/products/orchid-rainbow.jpg` |
| `peony-bouquet.jpg` | `src/assets/products/peony-bouquet.jpg` |
| `plum-blossom.jpg` | `src/assets/products/plum-blossom.jpg` |
| `rainbow-chrysanthemum.jpg` | `src/assets/products/rainbow-chrysanthemum.jpg` |
| `rainbow-phoenix.jpg` | `src/assets/products/rainbow-phoenix.jpg` |
| `rainbow-rose.jpg` | `src/assets/products/rainbow-rose.jpg` |

### Public Assets
| File | Path | Purpose |
|------|------|---------|
| `favicon.ico` | `public/favicon.ico` | Browser tab icon |
| `placeholder.svg` | `public/placeholder.svg` | Fallback image |
| `Laila-SemiBold.ttf` | `public/fonts/Laila-SemiBold.ttf` | Brand typography |
| `404.html` | `public/404.html` | Static 404 fallback |
| `robots.txt` | `public/robots.txt` | SEO crawling rules |

---

## Website Copy by Page

### Index Page (`src/pages/Index.tsx`)

#### Hero Section
- **Headline:** "Create Beautiful Handcrafted Flowers"
- **Subheadline:** "Premium DIY flower kits with everything you need to craft stunning, everlasting blooms. No experience required."
- **CTA:** "Shop Kits" (links to /shop)

#### Why DIY Section
- **Section Title:** "Why Choose Our DIY Kits?"
- **Card 1 Title:** "Complete Kits"
- **Card 1 Description:** "Everything included - materials, tools, and step-by-step instructions"
- **Card 2 Title:** "Premium Materials"
- **Card 2 Description:** "High-quality crepe paper and professional-grade supplies"
- **Card 3 Title:** "Video Tutorials"
- **Card 3 Description:** "Follow along with our detailed video guides at your own pace"

#### Kit Contents Section
- **Section Title:** "What's In Every Kit"
- **Items:** "Premium crepe paper", "Floral wire & tape", "Crafting tools", "Step-by-step guide", "Video tutorial access", "Display materials"

#### Featured Products Section
- **Section Title:** "Featured Kits"
- **Subtitle:** "Start your crafting journey with our most popular flower kits"
- **CTA:** "View All Kits"

#### Bottom CTA Section
- **Headline:** "Ready to Start Crafting?"
- **Subheadline:** "Join thousands of happy crafters who've discovered the joy of handmade flowers"
- **CTA:** "Browse All Kits"

---

### About Page (`src/pages/About.tsx`)

#### Hero Section
- **Headline:** "Our Story"
- **Subheadline:** "Bringing the art of paper flower crafting to homes around the world"

#### Story Section
- **Paragraph 1:** "Bulbul was born from a simple belief: everyone deserves to experience the joy and mindfulness that comes from creating something beautiful with their hands."
- **Paragraph 2:** "What started as a personal passion for paper flower crafting has grown into a mission to share this therapeutic art form with crafters everywhere. Each kit is thoughtfully designed to guide you through the creative process, whether you're a complete beginner or an experienced artisan."
- **Paragraph 3:** "We source premium materials and create comprehensive tutorials because we believe the journey of creation should be as beautiful as the finished piece."

#### Values Section
- **Section Title:** "What We Believe"
- **Value 1 Title:** "Quality First"
- **Value 1 Description:** "Every material in our kits is carefully selected for durability and ease of use"
- **Value 2 Title:** "Accessible Art"
- **Value 2 Description:** "We design kits that anyone can enjoy, regardless of prior crafting experience"
- **Value 3 Title:** "Mindful Making"
- **Value 3 Description:** "Crafting is more than a hobby—it's a practice in presence and creativity"

#### Therapeutic Benefits Section
- **Section Title:** "The Therapeutic Power of Crafting"
- **Subtitle:** "Paper flower crafting offers numerous benefits for mental wellness"
- **Benefits:** "Stress Relief", "Mindfulness", "Sense of Achievement", "Creative Expression"

---

### FAQ Page (`src/pages/FAQ.tsx`)

#### Hero Section
- **Headline:** "Frequently Asked Questions"
- **Subheadline:** "Everything you need to know about our DIY flower kits"

#### FAQ Items
1. **Q:** "What's included in each kit?"
   **A:** "Each kit includes premium crepe paper, floral wire and tape, crafting tools, a detailed step-by-step instruction booklet, access to our video tutorial, and display materials. Everything you need to create your flower is included."

2. **Q:** "Do I need any prior crafting experience?"
   **A:** "Not at all! Our kits are designed for complete beginners. The step-by-step instructions and video tutorials guide you through every stage of the process. Many of our customers have never crafted before and create beautiful flowers on their first try."

3. **Q:** "How long does it take to complete a flower?"
   **A:** "Most flowers take between 2-4 hours to complete, depending on the complexity of the design and your pace. We encourage you to take your time and enjoy the meditative process of crafting."

4. **Q:** "Are the materials eco-friendly?"
   **A:** "Yes! We use sustainably sourced crepe paper and minimize plastic packaging. Our flowers are long-lasting alternatives to fresh cut flowers, reducing waste over time."

5. **Q:** "Can I give these as gifts?"
   **A:** "Absolutely! Our kits make wonderful gifts for crafters, flower lovers, or anyone who enjoys mindful activities. The finished flowers also make beautiful, everlasting gifts."

6. **Q:** "Do you ship internationally?"
   **A:** "Currently, we ship within Pakistan. We're working on expanding our shipping options and hope to offer international delivery soon."

7. **Q:** "What if I make a mistake?"
   **A:** "Don't worry! Our kits include extra materials for practice, and our video tutorials show you how to fix common mistakes. Crafting is about the journey, and small imperfections add character to handmade pieces."

8. **Q:** "How do I care for my finished flowers?"
   **A:** "Paper flowers should be kept away from direct sunlight and moisture. Dust them gently with a soft brush when needed. With proper care, your creations will last for years."

#### Bottom CTA Section
- **Headline:** "Still have questions?"
- **Subheadline:** "We're here to help you on your crafting journey"
- **CTA:** "Contact Us" (links to mailto:hello@bulbul.pk)

---

### Shop Page (`src/pages/Shop.tsx`)

#### Hero Section
- **Headline:** "Shop DIY Kits"
- **Subheadline:** "Choose your next creative project from our collection of handcrafted flower kits"

#### Empty State (when no products)
- **Message:** "No products found"

---

### Gallery Page (`src/pages/Gallery.tsx`)

#### Hero Section
- **Headline:** "Customer Gallery"
- **Subheadline:** "See the beautiful creations from our amazing community of crafters"

#### Placeholder Cards
- **Card Text:** "Coming Soon" (repeated 6 times)
- **Card Subtext:** "Customer photos will appear here"

#### Share CTA Section
- **Headline:** "Share Your Creation"
- **Subheadline:** "Tag us @bulbul.kits on Instagram to be featured in our gallery"
- **CTA:** "Follow Us on Instagram" (links to https://www.instagram.com/bulbul.kits/)

#### Bottom CTA Section
- **Headline:** "Ready to Create Your Own?"
- **Subheadline:** "Start your crafting journey with one of our beautiful flower kits"
- **CTA:** "Shop Now"

---

### Coming Soon Page (`src/pages/ComingSoon.tsx`)

#### Branding
- **Brand Name:** "bulbul"
- **Tagline:** "Handcrafted flower kits for mindful making"

#### Description
- **Headline:** "Something Beautiful is Blooming"
- **Subheadline:** "We're crafting the perfect experience for you. Our handmade flower kits are coming soon—bringing the joy of paper flower crafting to your doorstep."

#### Email Signup
- **Placeholder:** "Enter your email"
- **CTA:** "Notify Me"
- **Privacy Text:** "We respect your privacy. Unsubscribe anytime."
- **Success Toast Title:** "Thank you!"
- **Success Toast Description:** "We'll notify you when we launch."

#### Social Section
- **Text:** "Follow our journey"
- **Link:** "Instagram" (links to https://instagram.com/bulbul.diy)

#### Footer
- **Copyright:** "© 2024 Bulbul. Handcrafted with love."

---

### Not Found Page (`src/pages/NotFound.tsx`)

- **Error Code:** "404"
- **Headline:** "Page not found"
- **Subheadline:** "Sorry, we couldn't find the page you're looking for."
- **CTA:** "Go back home"

---

### Product Detail Page (`src/pages/ProductDetail.tsx`)

#### Static UI Copy
- **Add to Cart Button:** "Add to Cart"
- **Toast Success Title:** "Added to cart"
- **Section Title:** "What's Included"
- **Reviews Section Title:** "Customer Reviews"
- **Related Products Title:** "You May Also Like"

#### Trust Badges
- **Badge 1:** "Premium Materials"
- **Badge 2:** "Video Tutorial"
- **Badge 3:** "Beginner Friendly"

---

### Cart Drawer (`src/components/CartDrawer.tsx`)

- **Title:** "Shopping Cart"
- **Empty State:** "Your cart is empty"
- **Empty CTA:** "Continue Shopping"
- **Subtotal Label:** "Subtotal"
- **Checkout Button:** "Checkout"
- **Continue Shopping Link:** "Continue Shopping"
- **Remove Toast Title:** "Removed from cart"

---

### Footer (`src/components/Footer.tsx`)

#### Brand Section
- **Brand Name:** "bulbul"
- **Description:** "Handcrafted flower kits for mindful making. Create beautiful, everlasting blooms with our premium DIY kits."

#### Quick Links
- "Shop", "About", "FAQ", "Gallery"

#### Connect Section
- **Title:** "Connect"
- **Instagram:** "@bulbul.kits" (links to https://www.instagram.com/bulbul.kits/)
- **Email:** "hello@bulbul.pk" (links to mailto:hello@bulbul.pk)

#### Bottom Bar
- **Copyright:** "© 2024 Bulbul. All rights reserved."
- **Legal Links:** "Privacy Policy", "Terms of Service"

---

### Navbar (`src/components/Navbar.tsx`)

- **Skip Link:** "Skip to main content"
- **Navigation Links:** "Shop", "About", "FAQ", "Gallery"
- **Cart Button:** "Shopping Cart"

---

## Product Data (`src/data/products.ts`)

### Products

| ID | Handle | Title | Price | Category |
|----|--------|-------|-------|----------|
| 1 | golden-rose | Golden Rose Kit | Rs. 2,500 | Roses |
| 2 | rainbow-rose | Rainbow Rose Kit | Rs. 2,800 | Roses |
| 3 | golden-chrysanthemum | Golden Chrysanthemum Kit | Rs. 2,200 | Chrysanthemums |
| 4 | rainbow-chrysanthemum | Rainbow Chrysanthemum Kit | Rs. 2,500 | Chrysanthemums |
| 5 | golden-phoenix | Golden Phoenix Kit | Rs. 3,500 | Phoenix |
| 6 | rainbow-phoenix | Rainbow Phoenix Kit | Rs. 3,800 | Phoenix |
| 7 | peony-bouquet | Peony Bouquet Kit | Rs. 4,200 | Specialty |
| 8 | plum-blossom | Plum Blossom Branch Kit | Rs. 2,800 | Specialty |
| 9 | orchid-rainbow | Rainbow Orchid Kit | Rs. 3,200 | Specialty |
| 10 | gesang-flower | Gesang Flower Kit | Rs. 2,000 | Specialty |

### Product Descriptions

1. **Golden Rose:** "Create a stunning golden rose with our premium kit. Perfect for beginners and experienced crafters alike."
2. **Rainbow Rose:** "Craft a vibrant rainbow rose that captures the full spectrum of colors. A showstopping centerpiece."
3. **Golden Chrysanthemum:** "Master the art of chrysanthemum crafting with elegant golden petals. Traditional beauty meets modern craft."
4. **Rainbow Chrysanthemum:** "A colorful twist on the classic chrysanthemum. Perfect for adding a pop of color to any space."
5. **Golden Phoenix:** "Create a majestic golden phoenix flower, symbolizing rebirth and beauty. An advanced kit for dedicated crafters."
6. **Rainbow Phoenix:** "The rainbow phoenix combines intricate craftsmanship with vibrant colors. A true masterpiece."
7. **Peony Bouquet:** "Craft a luxurious bouquet of peonies. Multiple flowers in one kit for a stunning arrangement."
8. **Plum Blossom:** "Create a delicate plum blossom branch, perfect for spring decor or as an everlasting gift."
9. **Rainbow Orchid:** "Craft elegant orchids in rainbow hues. A sophisticated project for intermediate crafters."
10. **Gesang Flower:** "The gesang flower brings Himalayan beauty to your home. A beginner-friendly kit with stunning results."

### Product Features

**Standard Features (all products):**
- Premium crepe paper
- Floral wire & tape
- Step-by-step guide
- Video tutorial access

**Product-Specific Additions:**
- Rose kits: Rose petal templates
- Chrysanthemum kits: Petal crimping tool
- Phoenix kits: Advanced shaping tools, Multiple color gradients
- Peony Bouquet: Multiple flower stems, Arrangement guide
- Plum Blossom: Branch wire, Display stand
- Orchid: Orchid templates, Stem wrap
- Gesang: Beginner tools, Quick-start guide

---

### Customer Reviews

| ID | Name | Rating | Date | Comment | Verified |
|----|------|--------|------|---------|----------|
| 1 | Sarah M. | ⭐⭐⭐⭐⭐ | 2024-01-15 | "Absolutely loved making this! The instructions were so clear and the materials are top quality. My rose looks amazing on my desk." | ✅ |
| 2 | Ayesha K. | ⭐⭐⭐⭐⭐ | 2024-01-10 | "Perfect gift for my mother. She spent a relaxing afternoon crafting and now has a beautiful flower to display. Will definitely buy more!" | ✅ |
| 3 | Fatima R. | ⭐⭐⭐⭐ | 2024-01-05 | "Great kit for beginners. I've never done paper crafting before but the video tutorial made it easy to follow. Took about 3 hours." | ✅ |
| 4 | Zara H. | ⭐⭐⭐⭐⭐ | 2023-12-28 | "The quality of the crepe paper is exceptional. Much better than what I've found in local stores. The colors are so vibrant!" | ✅ |
| 5 | Mariam A. | ⭐⭐⭐⭐⭐ | 2023-12-20 | "Such a therapeutic experience! I made this while listening to podcasts and it was so relaxing. The finished flower is gorgeous." | ✅ |

---

## External URLs

### Social Media
| Platform | URL | Usage |
|----------|-----|-------|
| Instagram (Primary) | `https://www.instagram.com/bulbul.kits/` | Footer, Gallery CTA |
| Instagram (Alt) | `https://instagram.com/bulbul.diy` | Coming Soon page |

### Contact
| Type | URL |
|------|-----|
| Email | `mailto:hello@bulbul.pk` |

---

## Related Documentation

- [Non-Shopify Features](./NON_SHOPIFY_FEATURES.md) - Feature architecture
- [Architecture](./ARCHITECTURE.md) - System overview
- [Database Schema](./DATABASE_SCHEMA.md) - Proposed backend structure
