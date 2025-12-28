import { Link } from "react-router-dom";
import { staticProducts, StaticProduct } from "@/data/products";
import { ArrowRight } from "lucide-react";

interface RelatedProductsProps {
  currentProductHandle: string;
  category?: string;
}

export function RelatedProducts({ currentProductHandle, category }: RelatedProductsProps) {
  // Get related products - same category first, then others
  const relatedProducts = staticProducts
    .filter((p) => p.handle !== currentProductHandle)
    .sort((a, b) => {
      if (category) {
        if (a.category === category && b.category !== category) return -1;
        if (b.category === category && a.category !== category) return 1;
      }
      return 0;
    })
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            You Might Also Love 💖
          </h2>
          <Link
            to="/shop"
            className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.handle}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-primary font-bold text-sm mt-1">
                  {product.currency} {product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
