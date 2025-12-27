import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const faqs = [
  { question: "What skill level do I need?", answer: "Our kits are designed for all skill levels! Each kit includes detailed instructions and video tutorials." },
  { question: "What's included in each kit?", answer: "Every BulBul kit includes all materials, brushes, paints, a printed guide, and video tutorial access." },
  { question: "How do I access the video tutorials?", answer: "Each kit comes with a unique access code and link to our video tutorial." },
  { question: "How long does shipping take?", answer: "We ship within Pakistan and delivery typically takes 3-7 business days." },
  { question: "Can I gift a kit to someone?", answer: "Absolutely! Our kits make perfect gifts for creative souls." },
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="bg-gradient-to-br from-peach/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Got questions? We've got answers.</p>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-semibold tracking-wide hover:text-primary">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Still Have Questions?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg"><a href="mailto:hello@bulbul.pk"><Mail className="mr-2 h-5 w-5" />Email Us</a></Button>
              <Button asChild variant="outline" size="lg"><Link to="/shop">Browse Kits</Link></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
