import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import bulbulLogo from "@/assets/bulbul-logo.svg";

export const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function Footer(props, ref) {
    return (
      <footer ref={ref} className="bg-foreground text-background py-12" {...props}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <img 
                src={bulbulLogo} 
                alt="BulBul" 
                className="h-48 mb-4" 
                width="192" 
                height="192" 
                loading="lazy"
                decoding="async"
              />
              <p className="text-background/80 mb-4 max-w-md">
                Discover the joy of creating beautiful art with our curated DIY kits.
                Each kit comes with everything you need plus video tutorials to guide you.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="text-background/80 hover:text-primary transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-background/80 hover:text-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-background/80 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Connect</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-background/80">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <a href="https://instagram.com/bulbul.diy" className="hover:text-primary transition-colors" aria-label="Follow BulBul on Instagram @bulbul.diy">
                    @bulbul.diy
                  </a>
                </li>
                <li className="flex items-center gap-2 text-background/80">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <a href="mailto:hello@bulbul.pk" className="hover:text-primary transition-colors" aria-label="Email BulBul at hello@bulbul.pk">
                    hello@bulbul.pk
                  </a>
                </li>
                <li className="flex items-center gap-2 text-background/80">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; {new Date().getFullYear()} BulBul. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
);
