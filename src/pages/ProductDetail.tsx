import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ProductImageCarousel } from "@/components/ProductImageCarousel";
import { CustomerReviews } from "@/components/CustomerReviews";
import { RelatedProducts } from "@/components/RelatedProducts";
import { useCartStore } from "@/stores/cartStore";
import { getProductByHandle, getRelatedProducts } from "@/data/products";
import { toast } from "sonner";
import { ArrowLeft, Minus, Plus, ShoppingCart, Package, Play, FileText, Star, Check } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const product = handle ? getProductByHandle(handle) : undefined;
  const relatedProducts = handle ? getRelatedProducts(handle, 4) : [];

  // Track recently viewed
  useEffect(() => {
    if (product) {
      const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
      const filtered = recentlyViewed.filter((h: string) => h !== product.handle);
      const updated = [product.handle, ...filtered].slice(0, 8);
      localStorage.setItem("recentlyViewed", JSON.stringify(updated));
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
            <Button asChild>
              <Link to="/shop">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
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
      quantity,
    });
    toast.success("Added to cart!", {
      description: `${product.title} x ${quantity}`,
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <ProductImageCarousel images={product.images} title={product.title} />

            {/* Product Info */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-primary mb-6">
                {product.currency} {product.price.toLocaleString()}
              </p>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold text-lg">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="w-full text-lg mb-8"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>

              {/* What's Included */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Package className="h-4 w-4 text-primary" />
                  Free shipping over PKR 5000
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Play className="h-4 w-4 text-primary" />
                  Video tutorial included
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4 text-primary" />
                  Printed guide included
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <CustomerReviews rating={product.rating} reviewCount={product.reviewCount} />

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}
