import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Instagram, Camera, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staticProducts } from "@/data/products";

export default function Gallery() {
  // Use product images as gallery items
  const creations = staticProducts.slice(0, 6).map((product, index) => ({
    id: product.id,
    image: product.image,
    title: product.title,
    creator: ["Ayesha K. 💖", "Sara M. 🎨", "Fatima R. ✨", "Zara A. 🌸", "Hina S. 💫", "Nadia P. 🎀"][index] || "BulBul Customer",
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-peach/40 via-background to-primary/10 py-12 md:py-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-60">📸</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-60">✨</div>
          <div className="absolute bottom-10 right-1/4 text-2xl animate-bounce opacity-60">🎨</div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Camera className="h-4 w-4" />
              Customer Creations 🌟
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
              Gallery of Joy 🎨
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              See the beautiful artwork our community has created with BulBul kits! 
              Every piece is unique and made with love 💖
            </p>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="https://www.instagram.com/bulbul.kits/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Follow @bulbul.kits ✨
              </a>
            </Button>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {creations.map((creation) => (
                <div
                  key={creation.id}
                  className="group relative aspect-square bg-muted/50 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl"
                >
                  <img
                    src={creation.image}
                    alt={creation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold mb-1">{creation.title}</h3>
                      <p className="text-sm text-white/80">by {creation.creator}</p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors">
                      <Heart className="h-4 w-4 text-red-500" />
                    </button>
                    <button className="p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors">
                      <Share2 className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Share CTA */}
            <div className="text-center mt-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                Created something beautiful? 🌟
              </h3>
              <p className="text-muted-foreground text-base mb-6 max-w-md mx-auto">
                We'd LOVE to see your masterpiece! Share it with us and get featured! ✨
              </p>
              <Button className="rounded-full" asChild>
                <a href="https://www.instagram.com/bulbul.kits/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Tag @bulbul.kits 💖
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-3xl block mb-2">500+ 📦</span>
                <span className="text-muted-foreground text-sm">Kits Delivered</span>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-3xl block mb-2">200+ 📸</span>
                <span className="text-muted-foreground text-sm">Photos Shared</span>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-3xl block mb-2">50+ 🏙️</span>
                <span className="text-muted-foreground text-sm">Cities Reached</span>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-3xl block mb-2">∞ 💖</span>
                <span className="text-muted-foreground text-sm">Smiles Created</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-5 left-10 text-4xl opacity-30">🎨</div>
          <div className="absolute bottom-5 right-10 text-4xl opacity-30">✨</div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Ready to Create Your Masterpiece? 🌟
            </h2>
            <p className="text-primary-foreground/90 text-base mb-8 max-w-xl mx-auto">
              Pick a kit, follow along with our tutorials, and create art you'll be proud to display! 
              Your turn to shine! ✨
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link to="/shop">Browse Kits 🛍️</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
