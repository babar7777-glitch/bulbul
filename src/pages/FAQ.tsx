import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What skill level do I need? 🤔",
    answer:
      "Absolutely NONE! 🎉 Our kits are designed for all skill levels! Each kit includes detailed instructions and video tutorials that guide you through every step. Whether you're a complete beginner or an experienced crafter, you'll be able to create something beautiful. Trust us, if you can use a sticker, you can do this! 💪",
  },
  {
    question: "What's included in each kit? 📦",
    answer:
      "Every BulBul kit is a complete creative package! ✨ You get: 5 premium foil sheets (gold or rainbow), pre-designed adhesive template, professional A4 wooden frame, complete tool kit (tweezers, brush, etc.), printed step-by-step guide, AND lifetime access to our video tutorial! No need to buy anything extra - we've got you covered! 💖",
  },
  {
    question: "How do I access the video tutorials? 🎥",
    answer:
      "Easy peasy! Each kit comes with a unique access code and QR code. Simply scan the QR code or visit the link provided in your kit, enter your code, and start creating! You'll have lifetime access to the tutorial, so you can pause, rewind, and re-watch as many times as you need. Take your time, bestie! 🌟",
  },
  {
    question: "How long does shipping take? 🚚",
    answer:
      "We ship all across Pakistan! 🇵🇰 Delivery typically takes 3-7 business days depending on your location. Major cities like Lahore, Karachi, Islamabad usually receive orders within 3-4 days! You'll receive a tracking number once your order is shipped so you can follow its journey. Exciting, right?! 📦✨",
  },
  {
    question: "Can I gift a kit to someone? 🎁",
    answer:
      "YESSS! Our kits make the PERFECT gift! 💝 Whether it's for birthdays, Eid, or just because - they're guaranteed to bring a smile! During checkout, you can add a gift message and choose to ship directly to the recipient. We also offer beautiful gift wrapping for a small additional fee. Spread the joy! 🎉",
  },
  {
    question: "What if I make a mistake? 😰",
    answer:
      "No worries at all! 🤗 Mistakes are part of the creative process and often make your piece unique! Our tutorials include tips for fixing common mistakes. Remember, there's no 'wrong' way to create art. Plus, you can always reach out to us on WhatsApp and we'll help you troubleshoot! We've got your back! 💪",
  },
  {
    question: "Do you offer bundle deals? 💰",
    answer:
      "Yes, we do! 🎊 We offer special pricing when you purchase multiple kits together - perfect for gifting or hosting a DIY party! Check our shop page for current bundle offers, or message us on WhatsApp if you're interested in a custom bundle. We love making deals! 💖",
  },
  {
    question: "Can I request a custom design? ✏️",
    answer:
      "We LOVE hearing from our community! 💫 If you have an idea for a kit you'd like to see, reach out to us on Instagram or WhatsApp. We're always looking for inspiration for new designs. Who knows, your idea might become our next bestseller! 🌟",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-peach/40 via-background to-primary/10 py-12 md:py-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-60">❓</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-60">💡</div>
          <div className="absolute bottom-10 right-1/4 text-2xl animate-bounce opacity-60">✨</div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4" />
              Got Questions? 🤔
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
              FAQ 💬
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers! If you don't find what you're looking for, 
              we're just a WhatsApp message away! 💖
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-2xl px-6 hover:border-primary/30 transition-colors data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
                  >
                    <AccordionTrigger className="text-left font-semibold tracking-wide hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="text-5xl mb-4">🤗</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
              We're here to help! Reach out and we'll get back to you ASAP! 
              We love chatting with our community! 💬✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white">
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp 💬
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="mailto:hello@bulbul.pk">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us 📧
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Shop CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-5 left-10 text-4xl opacity-30">🛍️</div>
          <div className="absolute bottom-5 right-10 text-4xl opacity-30">✨</div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Ready to Start Creating? 🎨
            </h2>
            <p className="text-primary-foreground/90 text-base mb-8 max-w-xl mx-auto">
              Browse our collection and find the perfect kit for you! 
              Your creative journey starts here! 💖
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
