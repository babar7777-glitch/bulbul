import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Instagram, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Gallery() {
  const creations = [1, 2, 3, 4, 5, 6];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="bg-gradient-to-br from-peach/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">Customer Creations</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">See the beautiful artwork our community has created with BulBul kits.</p>
            <Button variant="outline" size="lg"><Instagram className="mr-2 h-5 w-5" />Follow @bulbul.diy</Button>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {creations.map((id) => (
                <div key={id} className="aspect-square bg-muted/50 rounded-xl flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed border-border">
                  <Camera className="h-12 w-12 mb-4 opacity-50" />
                  <p className="text-base">Customer creation</p>
                  <p className="text-sm opacity-70">Coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Ready to Create Your Masterpiece?</h2>
            <Button asChild size="lg"><Link to="/shop">Browse Kits</Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
