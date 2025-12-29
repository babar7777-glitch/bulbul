import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import type { LocalProduct } from "@/data/products";

interface LocalProductCardProps {
  product: LocalProduct;
  priority?: boolean;
}

export const LocalProductCard = forwardRef<HTMLAnchorElement, LocalProductCardProps>(
  function LocalProductCard({ product, priority = false }, ref) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      addItem({
        productId: product.id,
        productHandle: product.handle,
        productTitle: product.title,
        productImage: product.images[0],
        variantId: product.id,
        variantTitle: "Default",
        price: {
          amount: product.price.toString(),
          currencyCode: product.currency,
        },
        quantity: 1,
      });
      
      toast.success("Added to cart!", {
        description: product.title,
        position: "top-center",
      });
    };

    return (
      <Link ref={ref} to={`/product/${product.handle}`} className="group block">
        <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl">
          <div className="aspect-square overflow-hidden relative">
            <img
              src={product.images[0]}
              alt={`${product.title} - ${product.category} DIY art kit`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width="400"
              height="400"
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding={priority ? "sync" : "async"}
            />
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span className="text-xs font-medium" aria-label={`Rating: ${product.rating} out of 5`}>{product.rating}</span>
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              {product.category}
            </p>
            <h3 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors min-h-[3rem]">
              {product.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mt-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-primary-text font-bold text-lg">
                {product.currency} {product.price.toLocaleString()}
              </p>
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Add ${product.title} to cart`}
              >
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </article>
      </Link>
    );
  }
);
