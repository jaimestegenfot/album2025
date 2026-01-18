"use client";

import { useState } from "react";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  alt: string;
  date?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
}

export default function PhotoGallery({ photos, title = "Nuestras Fotos" }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            {title}
          </h2>
          <div className="flex justify-center gap-2">
            <span className="text-2xl animate-pulse">💕</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: "0.3s" }}>📸</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: "0.6s" }}>💖</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 border-2 border-transparent hover:border-pink-300"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-500/0 group-hover:from-pink-500/10 group-hover:to-red-500/10 transition-all duration-300 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                {photo.date && (
                  <p className="text-sm font-semibold bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block">
                    {photo.date}
                  </p>
                )}
              </div>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para foto ampliada */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold z-10 hover:text-pink-400 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              ×
            </button>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {selectedPhoto.date && (
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg">{selectedPhoto.date}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
