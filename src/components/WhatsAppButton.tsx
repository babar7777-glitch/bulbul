import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  productName: string;
  price: number;
  quantity: number;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

export function WhatsAppButton({ 
  productName, 
  price, 
  quantity, 
  className = "",
  variant = "default" 
}: WhatsAppButtonProps) {
  const phoneNumber = "923001234567"; // Replace with actual WhatsApp number
  
  const message = encodeURIComponent(
    `Hi! 👋 I'd like to order:\n\n` +
    `📦 Product: ${productName}\n` +
    `🔢 Quantity: ${quantity}\n` +
    `💰 Total: PKR ${(price * quantity).toLocaleString()}\n\n` +
    `Please confirm availability and delivery details! 🚚✨`
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Button
      asChild
      variant={variant}
      className={`gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white border-none ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-5 w-5" />
        Order via WhatsApp 💬
      </a>
    </Button>
  );
}
