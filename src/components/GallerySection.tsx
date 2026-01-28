import { motion } from "framer-motion";
import slackImage from "@/assets/slack.webp";
import hubspotImage from "@/assets/hubspot.webp";
import gmailImage from "@/assets/gmail.webp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: slackImage,
    alt: "Slack Notification",
    caption: "Instant Slack notifications with candidate details",
  },
  {
    src: hubspotImage,
    alt: "HubSpot Integration",
    caption: "Automatic contact creation in HubSpot CRM",
  },
  {
    src: gmailImage,
    alt: "Gmail Confirmation Email",
    caption: "Confirmation email sent to the candidate",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(
    null,
  );

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground">
            Visual walkthrough of key screens and features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem
                  key={image.alt}
                  className="md:basis-1/2 lg:basis-1/2"
                >
                  <div
                    className="image-card group h-[400px] cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-primary-foreground font-medium">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none [&>button]:hidden focus:outline-none focus:ring-0">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-primary-foreground font-medium text-lg">
                    {selectedImage.caption}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
