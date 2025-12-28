import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle, Sparkles } from "lucide-react";
import { useStaticCartStore } from "@/stores/staticCartStore";

export function StaticCartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeItem, getTotalItems, getTotalPrice, clearCart } = useStaticCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "923001234567"; // Replace with actual number
    
    const itemsList = items
      .map((item) => `• ${item.product.title} x${item.quantity} = PKR ${(item.product.price * item.quantity).toLocaleString()}`)
      .join("\n");
    
    const message = encodeURIComponent(
      `Hi! 👋 I'd like to place an order:\n\n` +
      `📦 Order Details:\n${itemsList}\n\n` +
      `💰 Total: PKR ${totalPrice.toLocaleString()}\n\n` +
      `Please confirm availability and delivery details! 🚚✨`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open shopping cart">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground animate-scale-in">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-display text-2xl flex items-center gap-2">
            Your Cart 🛒
          </SheetTitle>
          <SheetDescription>
            {totalItems === 0
              ? "Your cart is empty 😢"
              : `${totalItems} adorable item${totalItems !== 1 ? "s" : ""} in your cart! 💕`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛍️</div>
                <p className="text-muted-foreground font-medium">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Time to add some beautiful art kits! ✨
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 p-4 bg-muted/30 rounded-xl border border-border">
                      <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate">{item.product.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.product.category === "gold" ? "✨ Golden" : item.product.category === "rainbow" ? "🌈 Rainbow" : "👑 Premium"}
                        </p>
                        <p className="font-bold text-primary mt-1">
                          PKR {item.product.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-1 bg-background rounded-full p-0.5 shadow-sm">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-full"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-full"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 space-y-4 pt-4 border-t border-border bg-background">
                {/* Free shipping notice */}
                {totalPrice < 5000 && (
                  <div className="text-center text-sm bg-primary/10 rounded-lg p-3">
                    <Sparkles className="h-4 w-4 inline-block mr-1 text-primary" />
                    Add PKR {(5000 - totalPrice).toLocaleString()} more for FREE shipping! 🚚
                  </div>
                )}
                {totalPrice >= 5000 && (
                  <div className="text-center text-sm bg-green-100 text-green-700 rounded-lg p-3">
                    🎉 Yay! You qualify for FREE shipping! 🚚
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    PKR {totalPrice.toLocaleString()}
                  </span>
                </div>

                <Button
                  onClick={handleWhatsAppCheckout}
                  className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Checkout via WhatsApp 💬
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground hover:text-destructive"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
