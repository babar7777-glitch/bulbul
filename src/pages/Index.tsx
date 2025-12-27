import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/shopify";
import type { ShopifyProduct } from "@/types/shopify";
import { ArrowRight, Palette, Heart, Home, Play } from "lucide-react";

export default function Index() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts(4);
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-peach/50 via-background to-muted py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-display text-5xl md:text-7xl text-primary mb-6">
                BulBul
              </h1>
              <p className="font-display text-2xl md:text-3xl text-secondary mb-4">
                make it love it
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover the joy of creating beautiful art with our curated DIY kits. 
                Each kit includes everything you need plus step-by-step video tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/shop">
                    Shop Kits <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 left-0 right-0 h-8 bg-background rounded-t-[100%]" />
        </section>

        {/* Why DIY Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">
              Why DIY with BulBul?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-muted/50 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Therapeutic & Fun</h3>
                <p className="text-muted-foreground text-base">
                  Unwind and destress while creating something beautiful with your hands.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-muted/50 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Pride in Creating</h3>
                <p className="text-muted-foreground text-base">
                  Experience the joy and satisfaction of making art you'll love.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-muted/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Beautiful Home Decor</h3>
                <p className="text-muted-foreground text-base">
                  Create stunning pieces that add a personal touch to your space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's in a Kit Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-4">
                What's in Every Kit?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Everything you need to create your masterpiece, no experience required!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">All Materials Included</h3>
                    <p className="text-muted-foreground text-base">
                      Quality supplies, brushes, paints, and everything you need to complete your project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Printed Tutorial Guide</h3>
                    <p className="text-muted-foreground text-base">
                      Step-by-step instructions with helpful tips and techniques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Video Tutorial Access</h3>
                    <p className="text-muted-foreground text-base">
                      Follow along with our detailed video guides at your own pace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Support & Community</h3>
                    <p className="text-muted-foreground text-base">
                      Join our community of creators and share your finished pieces!
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
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Featured Kits
              </h2>
              <Button asChild variant="outline">
                <Link to="/shop">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-muted animate-pulse rounded-xl aspect-square" />
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-2xl">
                <Palette className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No products yet</h3>
                <p className="text-muted-foreground text-base">
                  Tell me what DIY kits you'd like to sell and I'll add them!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Ready to Start Creating?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Browse our collection of DIY art kits and find your next creative project.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
