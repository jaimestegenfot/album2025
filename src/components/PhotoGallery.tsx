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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                {photo.date && (
                  <p className="text-sm font-medium">{photo.date}</p>
                )}
              </div>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
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
