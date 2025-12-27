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
import { Mail } from "lucide-react";

const faqs = [
  {
    question: "What skill level do I need?",
    answer:
      "Our kits are designed for all skill levels! Each kit includes detailed instructions and video tutorials that guide you through every step. Whether you're a complete beginner or an experienced crafter, you'll be able to create something beautiful.",
  },
  {
    question: "What's included in each kit?",
    answer:
      "Every BulBul kit includes all the materials you need to complete the project: quality supplies, brushes, paints or materials specific to the kit, a printed step-by-step guide, and access to our detailed video tutorial. No need to buy anything extra!",
  },
  {
    question: "How do I access the video tutorials?",
    answer:
      "Each kit comes with a unique access code and link to our video tutorial. Simply scan the QR code or visit the link provided in your kit, enter your code, and start creating! You'll have lifetime access to the tutorial.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We ship within Pakistan and delivery typically takes 3-7 business days depending on your location. You'll receive a tracking number once your order is shipped so you can follow its journey.",
  },
  {
    question: "Can I gift a kit to someone?",
    answer:
      "Absolutely! Our kits make perfect gifts for creative souls. During checkout, you can add a gift message and choose to ship directly to the recipient. We also offer beautiful gift wrapping for a small additional fee.",
  },
  {
    question: "What if I make a mistake?",
    answer:
      "Don't worry—mistakes are part of the creative process! Our tutorials include tips for fixing common mistakes. Remember, every piece of art is unique, and small imperfections often add character. If you need help, reach out to us on Instagram!",
  },
  {
    question: "Do you offer bundle deals?",
    answer:
      "Yes! We offer special pricing when you purchase multiple kits together. Check our shop page for current bundle offers, or contact us if you're interested in a custom bundle.",
  },
  {
    question: "Can I request a custom kit?",
    answer:
      "We love hearing from our community! If you have an idea for a kit you'd like to see, reach out to us on Instagram or email. We're always looking for inspiration for new designs.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-peach/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out!
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
                    className="bg-card border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold tracking-wide hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
              We're here to help! Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:hello@bulbul.pk">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/shop">Browse Kits</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
