import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { ShopifyProduct } from "@/types/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { node } = product;

  const firstVariant = node.variants.edges[0]?.node;
  const firstImage = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!firstVariant) return;

    addItem({
      productId: node.id,
      productHandle: node.handle,
      productTitle: node.title,
      productImage: firstImage?.url || "",
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions,
    });

    toast.success("Added to cart!", {
      description: node.title,
      position: "top-center",
    });
  };

  return (
    <Link
      to={`/product/${node.handle}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        {firstImage ? (
          <img
            src={firstImage.url}
            alt={firstImage.altText || node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {node.title}
        </h3>
        <p className="text-muted-foreground text-base mb-3 line-clamp-2">{node.description}</p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-primary">
            {price.currencyCode} {parseFloat(price.amount).toFixed(0)}
          </span>

          <Button
            size="sm"
            onClick={handleAddToCart}
            className="group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Link>
  );
}
