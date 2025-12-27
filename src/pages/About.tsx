import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Palette, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="bg-gradient-to-br from-peach/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Where creativity meets joy, and every brushstroke brings happiness.</p>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl text-foreground mb-6 text-center">Why BulBul?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>BulBul was born from a simple belief: everyone deserves the joy of creating something beautiful with their own hands.</p>
                <p>We understand that starting a creative project can feel overwhelming. That's why we've carefully curated each kit to include everything you need.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-12">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ icon: Heart, title: "Made with Love", desc: "Every kit is thoughtfully assembled to bring you joy." },
                { icon: Palette, title: "Creativity for All", desc: "No experience needed—just enthusiasm and curiosity." },
                { icon: Users, title: "Community", desc: "Join a community of creators who inspire each other." },
                { icon: Sparkles, title: "Quality First", desc: "Premium materials for professional-looking results." }
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground text-base">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
