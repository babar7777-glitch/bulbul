import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Palette, Users, Sparkles, Star, Gift } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-peach/40 via-background to-primary/10 py-12 md:py-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-60">💖</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-60">✨</div>
          <div className="absolute bottom-10 right-1/4 text-2xl animate-bounce opacity-60">🌸</div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Our Story 📖
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
              About BulBul ✨
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where creativity meets joy, and every brushstroke brings happiness! 🎨💖
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl text-foreground mb-6 text-center">
                Why BulBul? 🐦
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="bg-muted/30 p-6 rounded-2xl">
                  🌟 BulBul was born from a simple belief: <span className="text-foreground font-medium">everyone deserves the joy of creating
                  something beautiful with their own hands!</span> Named after the melodious bulbul bird,
                  we bring the same sense of wonder and delight to the world of DIY art.
                </p>
                <p className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl">
                  🎨 We understand that starting a creative project can feel overwhelming.
                  That's why we've carefully curated each kit to include <span className="text-foreground font-medium">everything you need</span>—from
                  quality materials to detailed tutorials—so you can focus on what matters most:
                  <span className="text-primary font-medium"> the joy of creating! 💫</span>
                </p>
                <p className="bg-muted/30 p-6 rounded-2xl">
                  💪 Whether you're a complete beginner or a seasoned crafter, our kits are designed
                  to guide you through the process, step by step. <span className="text-foreground font-medium">No artistic experience required</span>,
                  just a willingness to try something new and have fun! 🎉
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-4">
              What We Believe 💫
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Our core values that make every kit special! ✨
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Made with Love 💖</h3>
                <p className="text-muted-foreground text-base">
                  Every kit is thoughtfully assembled to bring you joy and smiles!
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Creativity for All 🎨</h3>
                <p className="text-muted-foreground text-base">
                  No experience needed—just enthusiasm and curiosity! You've got this! 💪
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community 👯‍♀️</h3>
                <p className="text-muted-foreground text-base">
                  Join our community of creators who inspire each other! Tag us on Instagram! 📸
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality First ⭐</h3>
                <p className="text-muted-foreground text-base">
                  Premium materials for professional-looking results. Your art deserves the best!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Benefits */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-4">
                The Joy of Creating 🥰
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Art isn't just about the finished piece—it's about the journey! ✨
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    🧘‍♀️ Stress Relief
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Creating art is meditative. It helps you disconnect from daily stress
                    and find peace in the present moment. Say goodbye to doom scrolling! 📱➡️🎨
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    🏆 Sense of Achievement
                  </h3>
                  <p className="text-muted-foreground text-base">
                    There's nothing quite like the pride of creating something beautiful
                    with your own hands. "I MADE THIS!" energy! 💪✨
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    👀 Screen-Free Time
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Give your eyes and mind a break from screens while engaging
                    in a fulfilling creative activity. Your future self will thank you!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    🎨 Personal Expression
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Each piece you create is uniquely yours—a reflection of your
                    creativity and personal style. It's giving ✨main character energy✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-12">
              Fun Facts About Us 🎉
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-4xl block mb-2">500+</span>
                <span className="text-muted-foreground text-sm">Happy Customers 😊</span>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-4xl block mb-2">10+</span>
                <span className="text-muted-foreground text-sm">Unique Designs 🎨</span>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-4xl block mb-2">4.9⭐</span>
                <span className="text-muted-foreground text-sm">Average Rating</span>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <span className="text-4xl block mb-2">∞</span>
                <span className="text-muted-foreground text-sm">Love & Care 💖</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
