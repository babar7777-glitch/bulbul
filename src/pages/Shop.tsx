import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocalProductCard } from "@/components/LocalProductCard";
import { products } from "@/data/products";
import { Palette } from "lucide-react";

export default function Shop() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-peach/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Shop DIY Kits
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our collection of art kits, each with materials, printed guides, and video tutorials included.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <LocalProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-2xl">
                <Palette className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-2xl font-semibold mb-3">No products found</h2>
                <p className="text-muted-foreground text-base max-w-md mx-auto">
                  We're working on adding amazing DIY kits. Tell us what products you'd like to create!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
