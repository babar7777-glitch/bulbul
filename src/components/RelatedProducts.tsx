import { Link } from "react-router-dom";
import { LocalProduct } from "@/data/products";

interface RelatedProductsProps {
  products: LocalProduct[];
  title?: string;
}

export function RelatedProducts({ products, title = "You May Also Like" }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl text-coral mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.handle}`}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-primary font-bold mt-2">
                    {product.currency} {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
