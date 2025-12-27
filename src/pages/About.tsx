import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Palette, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-peach/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where creativity meets joy, and every brushstroke brings happiness.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl text-foreground mb-6 text-center">
                Why BulBul?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  BulBul was born from a simple belief: everyone deserves the joy of creating 
                  something beautiful with their own hands. Named after the melodious bulbul bird, 
                  we bring the same sense of wonder and delight to the world of DIY art.
                </p>
                <p>
                  We understand that starting a creative project can feel overwhelming. 
                  That's why we've carefully curated each kit to include everything you need—from 
                  quality materials to detailed tutorials—so you can focus on what matters most: 
                  the joy of creating.
                </p>
                <p>
                  Whether you're a complete beginner or a seasoned crafter, our kits are designed 
                  to guide you through the process, step by step. No artistic experience required, 
                  just a willingness to try something new and have fun!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-12">
              What We Believe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Made with Love</h3>
                <p className="text-muted-foreground text-base">
                  Every kit is thoughtfully assembled to bring you joy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Creativity for All</h3>
                <p className="text-muted-foreground text-base">
                  No experience needed—just enthusiasm and curiosity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground text-base">
                  Join a community of creators who inspire each other.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality First</h3>
                <p className="text-muted-foreground text-base">
                  Premium materials for professional-looking results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Benefits */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-6">
                The Joy of Creating
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Art isn't just about the finished piece—it's about the journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Stress Relief</h3>
                  <p className="text-muted-foreground text-base">
                    Creating art is meditative. It helps you disconnect from daily stress 
                    and find peace in the present moment.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Sense of Achievement</h3>
                  <p className="text-muted-foreground text-base">
                    There's nothing quite like the pride of creating something beautiful 
                    with your own hands.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Screen-Free Time</h3>
                  <p className="text-muted-foreground text-base">
                    Give your eyes and mind a break from screens while engaging 
                    in a fulfilling creative activity.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Personal Expression</h3>
                  <p className="text-muted-foreground text-base">
                    Each piece you create is uniquely yours—a reflection of your 
                    creativity and personal style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
