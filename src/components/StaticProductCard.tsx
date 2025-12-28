import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Sparkles } from "lucide-react";
import type { StaticProduct } from "@/data/products";
import { useState } from "react";
import { useStaticCartStore } from "@/stores/staticCartStore";
import { toast } from "sonner";

interface StaticProductCardProps {
  product: StaticProduct;
}

export function StaticProductCard({ product }: StaticProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const addItem = useStaticCartStore((state) => state.addItem);

  const categoryColors = {
    gold: "from-amber-500/20 to-yellow-500/20",
    rainbow: "from-purple-500/20 to-pink-500/20",
    premium: "from-emerald-500/20 to-teal-500/20",
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    toast.success("Added to cart! 🎉", {
      description: product.title,
      position: "top-center",
    });
  };

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/30 hover:-translate-y-1">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg animate-fade-in">
          {product.badge}
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsLiked(!isLiked);
        }}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors shadow-md"
      >
        <Heart
          className={`h-4 w-4 transition-all duration-300 ${
            isLiked ? "fill-red-500 text-red-500 scale-110" : "text-muted-foreground"
          }`}
        />
      </button>

      {/* Image */}
      <Link to={`/product/${product.handle}`}>
        <div className={`aspect-square overflow-hidden bg-gradient-to-br ${categoryColors[product.category]}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-3">
        <Link to={`/product/${product.handle}`}>
          <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Price</span>
            <span className="font-bold text-xl text-primary">
              {product.currency} {product.price.toLocaleString()}
            </span>
          </div>

          <Button
            size="sm"
            className="gap-2 rounded-full px-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>

        {/* Kit includes hint */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1 border-t border-border">
          <Sparkles className="h-3 w-3 text-primary" />
          <span>Complete kit with frame, foils & tools included!</span>
        </div>
      </div>
    </div>
  );
}
