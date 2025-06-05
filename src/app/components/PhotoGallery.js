'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80",
      alt: "Bali Rice Terraces",
      category: "Airport Transfer"
    },
    {
      src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      alt: "Bali Temple",
      category: "Airport Transfer"
    },
    {
      src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      alt: "Bali Beach",
      category: "Dll"
    },
    {
      src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      alt: "Bali Waterfall",
      category: "Dll"
    },
    {
      src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      alt: "Bali Market",
      category: "Tour"
    },
    {
      src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      alt: "Bali Sunset",
      category: "Tour"
    }
  ];

  const categories = ["All", "Airport Transfer", "Tour", "Dll"];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Photo Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Explore the beauty of Bali through our curated collection of stunning photographs.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-slate-600 hover:bg-blue-50 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors duration-200"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 