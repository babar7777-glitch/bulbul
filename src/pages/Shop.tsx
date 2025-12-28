import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StaticProductCard } from "@/components/StaticProductCard";
import { staticProducts } from "@/data/products";
import { Sparkles, Gift, Package, Star } from "lucide-react";

export default function Shop() {
  const [filter, setFilter] = useState<"all" | "gold" | "rainbow" | "premium">("all");

  const filteredProducts = filter === "all" 
    ? staticProducts 
    : staticProducts.filter(p => p.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-peach/40 via-background to-primary/10 py-12 md:py-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-60">✨</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-60">🎨</div>
          <div className="absolute bottom-10 left-1/4 text-2xl animate-bounce delay-100 opacity-60">🌸</div>
          <div className="absolute bottom-20 right-1/3 text-3xl animate-pulse delay-200 opacity-60">💫</div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Gift className="h-4 w-4" />
              Free Video Tutorials Included! 🎁
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Shop DIY Art Kits ✨
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Create stunning gold foil masterpieces! Each kit includes everything you need - 
              premium foils, tools, frame & step-by-step guides 💝
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Package className="h-4 w-4 text-primary" />
                <span>Complete Kit 📦</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Star className="h-4 w-4 text-primary" />
                <span>Premium Quality ⭐</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Beginner Friendly 💖</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-6 bg-muted/30 border-b border-border sticky top-0 z-20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                { key: "all", label: "All Designs 🎨", count: staticProducts.length },
                { key: "gold", label: "Golden ✨", count: staticProducts.filter(p => p.category === "gold").length },
                { key: "rainbow", label: "Rainbow 🌈", count: staticProducts.filter(p => p.category === "rainbow").length },
                { key: "premium", label: "Premium 👑", count: staticProducts.filter(p => p.category === "premium").length },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as typeof filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === tab.key
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <StaticProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                Can't decide? 🤔
              </h2>
              <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
                All our kits are beginner-friendly and come with complete instructions! 
                Start your artistic journey today 🎨✨
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">📦 Fast Delivery</span>
                <span className="flex items-center gap-1">💝 Gift Wrapping</span>
                <span className="flex items-center gap-1">🎥 Video Tutorials</span>
                <span className="flex items-center gap-1">💬 WhatsApp Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
