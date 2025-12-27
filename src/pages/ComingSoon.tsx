import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Instagram } from "lucide-react";
import bulbulLogo from "@/assets/bulbul-logo.svg";

interface Ball {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  delay: number;
}

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [balls, setBalls] = useState<Ball[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initialize balls with their positions
  useEffect(() => {
    const initialBalls: Ball[] = [
      { id: 1, x: 0, y: 0, baseX: 10, baseY: 5, size: 64, color: "bg-primary/20", delay: 0 },
      { id: 2, x: 0, y: 0, baseX: 85, baseY: 10, size: 48, color: "bg-secondary/30", delay: 1 },
      { id: 3, x: 0, y: 0, baseX: 8, baseY: 75, size: 80, color: "bg-accent/20", delay: 2 },
      { id: 4, x: 0, y: 0, baseX: 88, baseY: 85, size: 56, color: "bg-primary/15", delay: 0.5 },
      { id: 5, x: 0, y: 0, baseX: 25, baseY: 33, size: 32, color: "bg-secondary/25", delay: 1.5 },
    ];
    setBalls(initialBalls);
  }, []);

  // Track mouse/touch movement
  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((clientX - rect.left) / rect.width) * 100,
        y: ((clientY - rect.top) / rect.height) * 100,
      });
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Calculate ball positions based on mouse
  const getBallStyle = (ball: Ball) => {
    const dx = mousePos.x - ball.baseX;
    const dy = mousePos.y - ball.baseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 30;
    const repelStrength = Math.max(0, 1 - distance / maxDistance) * 20;
    
    const offsetX = distance > 0 ? (-dx / distance) * repelStrength : 0;
    const offsetY = distance > 0 ? (-dy / distance) * repelStrength : 0;

    return {
      left: `${ball.baseX + offsetX}%`,
      top: `${ball.baseY + offsetY}%`,
      width: ball.size,
      height: ball.size,
      transition: "left 0.5s ease-out, top 0.5s ease-out",
      animationDelay: `${ball.delay}s`,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when we launch. Get ready to create!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-peach/60 via-background to-peach/40 flex flex-col items-center justify-center px-4 py-6 relative overflow-hidden"
    >
      {/* Interactive floating elements */}
      {balls.map((ball) => (
        <div
          key={ball.id}
          className={`absolute rounded-full ${ball.color} animate-float pointer-events-none`}
          style={getBallStyle(ball)}
        />
      ))}

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto animate-fade-in">
        {/* Logo */}
        <img 
          src={bulbulLogo} 
          alt="BulBul Logo" 
          className="h-48 md:h-56 -mb-2 drop-shadow-lg"
        />

        {/* Brand name and tagline */}
        <h1 className="font-display text-5xl md:text-6xl text-primary mb-2">
          BulBul
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body italic mb-10">
          make it love it
        </p>

        {/* Main message */}
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          We're Crafting Something Special! ✨
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-4 max-w-lg">
          Our team is buzzing with excitement as we prepare beautiful DIY art kits just for you. 
          Soon you'll be able to make it, love it, and show it off!
        </p>

        <p className="text-xl md:text-2xl text-foreground font-heading mb-10">
          Get ready to unleash your inner artist! 🎨
        </p>

        {/* Email signup form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base bg-card/80 border-border/50 focus:border-primary"
              aria-label="Email address"
            />
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="h-12 px-6 font-semibold"
            >
              {isSubmitting ? "Joining..." : "Notify Me!"}
            </Button>
          </div>
        </form>

        {/* Social link */}
        <div className="flex items-center gap-2 text-muted-foreground mb-12">
          <span className="text-sm">Follow us for updates:</span>
          <a
            href="https://www.instagram.com/bulbul.kits/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BulBul. All rights reserved.
        </p>
      </main>
    </div>
  );
};

export default ComingSoon;
