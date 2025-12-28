import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StaticProductCard } from "@/components/StaticProductCard";
import { staticProducts } from "@/data/products";
import { ArrowRight, Palette, Heart, Home, Play, Sparkles, Gift, Star } from "lucide-react";
import { ReviewSection } from "@/components/ReviewSection";

export default function Index() {
  // Show first 4 products as featured
  const featuredProducts = staticProducts.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-peach/50 via-background to-muted py-20 md:py-32 overflow-hidden">
          {/* Decorative emojis */}
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-60">✨</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-60">🎨</div>
          <div className="absolute bottom-20 left-1/4 text-2xl animate-bounce delay-100 opacity-60">🌸</div>
          <div className="absolute bottom-10 right-1/3 text-3xl animate-pulse delay-200 opacity-60">💫</div>
          <div className="absolute top-1/3 right-10 text-2xl animate-bounce delay-300 opacity-60">🦋</div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Handcrafted DIY Art Kits 🎁
              </div>
              <h1 className="font-display text-5xl md:text-7xl text-primary mb-6">
                BulBul ✨
              </h1>
              <p className="font-display text-2xl md:text-3xl text-secondary mb-4">
                make it love it 💖
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover the joy of creating beautiful gold foil art with our curated DIY kits! 
                Each kit includes everything you need plus step-by-step video tutorials 🎥
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Link to="/shop">
                    Shop Kits 🛍️ <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 rounded-full">
                  <Link to="/about">Our Story 📖</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative curve */}
          <div className="absolute -bottom-4 left-0 right-0 h-8 bg-background rounded-t-[100%]" />
        </section>

        {/* Why DIY Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-4">
              Why DIY with BulBul? 🤔
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Because everyone deserves to create something beautiful! ✨
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 animate-fade-in hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Therapeutic & Fun 🧘‍♀️</h3>
                <p className="text-muted-foreground text-base">
                  Unwind and destress while creating something beautiful with your hands. It's like meditation, but prettier!
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Pride in Creating 🥰</h3>
                <p className="text-muted-foreground text-base">
                  Experience the joy and satisfaction of making art you'll love. "I made this!" hits different 💪
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Beautiful Home Decor 🏠</h3>
                <p className="text-muted-foreground text-base">
                  Create stunning pieces that add a personal touch to your space. Insta-worthy guaranteed! 📸
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's in a Kit Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-4">
                What's in Every Kit? 📦
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Everything you need to create your masterpiece, no experience required! We've got you covered 💖
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors hover:shadow-md">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    ✨
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Premium Foil Sheets</h3>
                    <p className="text-muted-foreground text-base">
                      5 sheets of gorgeous gold or rainbow holographic foil for that luxury look! 🌟
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors hover:shadow-md">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    🖼️
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">A4 Wooden Frame</h3>
                    <p className="text-muted-foreground text-base">
                      Ready to display! No extra framing needed. Just create and hang! 🎉
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors hover:shadow-md">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Play className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Video Tutorial Access 🎥</h3>
                    <p className="text-muted-foreground text-base">
                      Follow along with our detailed video guides at your own pace. Pause, rewind, repeat!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors hover:shadow-md">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    🛠️
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Complete Tool Kit</h3>
                    <p className="text-muted-foreground text-base">
                      Tweezers, brush, and everything else you need. No craft store run required! 💅
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Featured Kits ⭐
                </h2>
                <p className="text-muted-foreground mt-2">Our most-loved designs!</p>
              </div>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/shop">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <StaticProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ReviewSection />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-5 left-10 text-4xl opacity-30">🌸</div>
          <div className="absolute bottom-5 right-10 text-4xl opacity-30">✨</div>
          <div className="absolute top-1/2 left-1/4 text-3xl opacity-20">💖</div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Ready to Start Creating? 🎨
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Browse our collection of DIY art kits and find your next creative project. 
              No experience needed, just enthusiasm! 💪✨
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link to="/shop">
                Shop Now 🛍️ <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
