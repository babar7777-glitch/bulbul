import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocalProductCard } from "@/components/LocalProductCard";
import { products } from "@/data/products";
import { ArrowRight, Palette, Heart, Home, Play } from "lucide-react";

export default function Index() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-peach/50 via-background to-muted py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-display text-5xl md:text-7xl text-primary mb-6">BulBul</h1>
              <p className="font-display text-2xl md:text-3xl text-secondary mb-4">make it love it</p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover the joy of creating beautiful art with our curated DIY kits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8"><Link to="/shop">Shop Kits <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8"><Link to="/about">Our Story</Link></Button>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-0 right-0 h-8 bg-background rounded-t-[100%]" aria-hidden="true" />
        </section>

        {/* Why DIY Section */}
        <section className="py-12 md:py-16 bg-background" aria-labelledby="why-diy-heading">
          <div className="container mx-auto px-4">
            <h2 id="why-diy-heading" className="font-heading text-3xl md:text-4xl text-center text-coral mb-12">Why DIY with BulBul?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center p-6 rounded-2xl bg-muted/50 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Palette className="h-8 w-8 text-primary" aria-hidden="true" /></div>
                <h3 className="font-semibold text-xl mb-2">Therapeutic & Fun</h3>
                <p className="text-muted-foreground text-base">Unwind and destress while creating something beautiful.</p>
              </article>
              <article className="text-center p-6 rounded-2xl bg-muted/50 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Heart className="h-8 w-8 text-secondary" aria-hidden="true" /></div>
                <h3 className="font-semibold text-xl mb-2">Pride in Creating</h3>
                <p className="text-muted-foreground text-base">Experience the joy of making art you'll love.</p>
              </article>
              <article className="text-center p-6 rounded-2xl bg-muted/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Home className="h-8 w-8 text-primary" aria-hidden="true" /></div>
                <h3 className="font-semibold text-xl mb-2">Beautiful Home Decor</h3>
                <p className="text-muted-foreground text-base">Create stunning pieces for your space.</p>
              </article>
            </div>
          </div>
        </section>

        {/* What's in a Kit */}
        <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="kit-contents-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="kit-contents-heading" className="font-heading text-3xl md:text-4xl text-center text-coral mb-4">What's in Every Kit?</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Everything you need, no experience required!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-primary-foreground font-bold">1</span></div>
                  <div><h3 className="font-semibold mb-1">All Materials Included</h3><p className="text-muted-foreground text-base">Quality supplies and everything you need.</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-secondary-foreground font-bold">2</span></div>
                  <div><h3 className="font-semibold mb-1">Printed Tutorial Guide</h3><p className="text-muted-foreground text-base">Step-by-step instructions with tips.</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><Play className="h-5 w-5 text-primary-foreground" aria-hidden="true" /></div>
                  <div><h3 className="font-semibold mb-1">Video Tutorial Access</h3><p className="text-muted-foreground text-base">Follow along at your own pace.</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0"><Heart className="h-5 w-5 text-secondary-foreground" aria-hidden="true" /></div>
                  <div><h3 className="font-semibold mb-1">Support & Community</h3><p className="text-muted-foreground text-base">Join our community of creators!</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16 bg-background" aria-labelledby="featured-heading">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 id="featured-heading" className="font-heading text-3xl md:text-4xl text-coral">Featured Kits</h2>
              <Button asChild variant="outline"><Link to="/shop">View All <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link></Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <LocalProductCard key={product.id} product={product} priority={index < 2} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Ready to Start Creating?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Browse our collection of DIY art kits.</p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8"><Link to="/shop">Shop Now <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
