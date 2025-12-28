import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { staticProducts } from "@/data/products";
import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingCart, Package, Play, FileText, Heart, Sparkles, Gift, Truck } from "lucide-react";

export default function StaticProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const product = staticProducts.find((p) => p.handle === handle);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Product not found 😢</h1>
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-primary/10">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-4 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors shadow-md"
                >
                  <Heart
                    className={`h-5 w-5 transition-all duration-300 ${
                      isLiked ? "fill-red-500 text-red-500 scale-110" : "text-muted-foreground"
                    }`}
                  />
                </button>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs bg-muted px-3 py-1.5 rounded-full">🔒 Secure Checkout</span>
                <span className="text-xs bg-muted px-3 py-1.5 rounded-full">📦 Fast Delivery</span>
                <span className="text-xs bg-muted px-3 py-1.5 rounded-full">💝 Gift Wrapping</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-primary font-medium mb-2 block">
                  {product.category === "gold" ? "✨ Golden Collection" : product.category === "rainbow" ? "🌈 Rainbow Collection" : "👑 Premium Collection"}
                </span>
                <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                  {product.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">Price per kit</span>
                    <span className="text-4xl font-bold text-primary">
                      {product.currency} {product.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">Free shipping on</span>
                    <span className="text-sm font-medium text-foreground">orders above PKR 5000 🚚</span>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center gap-2 bg-background rounded-full p-1 shadow-sm">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Total: {product.currency} {(product.price * quantity).toLocaleString()}
                  </span>
                </div>

                {/* Add to Cart */}
                <Button size="lg" className="w-full text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart 🛒
                </Button>
              </div>

              {/* What's Included */}
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  What's Included in Your Kit 📦
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span>5 sheets of premium foil (Gold/Rainbow) ✨</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Package className="h-4 w-4" />
                    </span>
                    <span>Pre-designed adhesive template 🎨</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FileText className="h-4 w-4" />
                    </span>
                    <span>Professional wooden A4 frame 🖼️</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Play className="h-4 w-4" />
                    </span>
                    <span>Step-by-step video tutorial access 🎥</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Truck className="h-4 w-4" />
                    </span>
                    <span>Complete tool kit (tweezers, brush, etc.) 🛠️</span>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-background border border-border rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🎨</span>
                  <span className="text-xs text-muted-foreground">Beginner Friendly</span>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <span className="text-2xl mb-2 block">⏱️</span>
                  <span className="text-xs text-muted-foreground">2-3 Hours to Complete</span>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <span className="text-2xl mb-2 block">🎁</span>
                  <span className="text-xs text-muted-foreground">Perfect Gift Idea</span>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <span className="text-2xl mb-2 block">💬</span>
                  <span className="text-xs text-muted-foreground">WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
