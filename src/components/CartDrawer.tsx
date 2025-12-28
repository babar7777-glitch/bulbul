import { useState } from "react";
import { Link } from "react-router-dom";
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
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, updateQuantity, removeItem, clearCart, getTotalPrice } = useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    toast.info("Checkout coming soon!", {
      description: "We're setting up our payment system. Stay tuned!",
      position: "top-center",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open shopping cart">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
          <SheetDescription>
            {totalItems === 0
              ? "Your cart is empty"
              : `${totalItems} item${totalItems !== 1 ? "s" : ""} in your cart`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2 mb-4">
                  Start adding some DIY art kits!
                </p>
                <Button asChild onClick={() => setIsOpen(false)}>
                  <Link to="/shop">Browse Kits</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex gap-4 p-3 bg-muted/30 rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.productImage}
                          alt={item.productTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.productHandle}`}
                          onClick={() => setIsOpen(false)}
                          className="font-semibold truncate block hover:text-primary transition-colors"
                        >
                          {item.productTitle}
                        </Link>
                        {item.variantTitle !== "Default" && item.variantTitle !== "Default Title" && (
                          <p className="text-sm text-muted-foreground">{item.variantTitle}</p>
                        )}
                        <p className="font-bold text-primary">
                          {item.price.currencyCode} {parseFloat(item.price.amount).toLocaleString()}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.variantId)}
                          aria-label={`Remove ${item.productTitle} from cart`}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>

                        <div className="flex items-center gap-1" role="group" aria-label={`Quantity controls for ${item.productTitle}`}>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            aria-label={`Decrease quantity of ${item.productTitle}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium" aria-live="polite">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.productTitle}`}
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
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">
                    PKR {totalPrice.toLocaleString()}
                  </span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full"
                  size="lg"
                  disabled={items.length === 0 || isLoading}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Checkout
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    clearCart();
                    toast.success("Cart cleared");
                  }}
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
