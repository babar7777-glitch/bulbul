import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/shopify";
import type { ShopifyProduct } from "@/types/shopify";
import { Palette, Loader2 } from "lucide-react";

export default function Shop() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts(20);
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
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
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
