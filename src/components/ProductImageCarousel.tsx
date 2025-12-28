import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductImageCarouselProps {
  images: string[];
  title: string;
}

export function ProductImageCarousel({ images, title }: ProductImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
        <img
          src={images[selectedIndex]}
          alt={`${title} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail Carousel */}
      {images.length > 1 && (
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/3">
                <button
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedIndex === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-transparent hover:border-muted-foreground/30"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 3 && (
            <>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </>
          )}
        </Carousel>
      )}
    </div>
  );
}
