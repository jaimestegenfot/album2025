"use client";

import { useState } from "react";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";

// Datos de ejemplo - reemplaza con tus propias fotos y videos
const examplePhotos = [
  {
    id: 1,
    src: "/fotos/foto1.jpeg",
    alt: "Foto 1",
    date: "Enero 2026",
  },
  {
    id: 2,
    src: "/fotos/foto2.jpeg",
    alt: "Foto 2",
    date: "Enero 2026",
  },
  {
    id: 3,
    src: "/fotos/foto3.jpeg",
    alt: "Foto 3",
    date: "Enero 2026",
  },
  {
    id: 4,
    src: "/fotos/foto4.jpeg",
    alt: "Foto 4",
    date: "Enero 2026",
  },
  {
    id: 5,
    src: "/fotos/foto5.jpeg",
    alt: "Foto 5",
    date: "Enero 2026",
  },
];

const exampleVideos = [
  {
    id: 1,
    src: "/videos/video1.mp4",
    thumbnail: "/fotos/video1.jpeg",
    title: "Nuestro Primer Video",
    date: "Enero 2026",
  },
  {
    id: 2,
    src: "/videos/video2.mp4",
    thumbnail: "/fotos/video2.jpeg",
    title: "Aventuras Juntos",
    date: "Enero 2026",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<"fotos" | "videos" | "all">("all");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo animado con corazones */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-pink-300 text-6xl animate-bounce" style={{ animationDelay: "0s" }}>
            ❤️
          </div>
          <div className="absolute top-40 right-20 text-red-300 text-5xl animate-bounce" style={{ animationDelay: "1s" }}>
            💕
          </div>
          <div className="absolute bottom-40 left-20 text-pink-400 text-4xl animate-bounce" style={{ animationDelay: "2s" }}>
            💖
          </div>
          <div className="absolute bottom-20 right-10 text-red-400 text-5xl animate-bounce" style={{ animationDelay: "1.5s" }}>
            💗
          </div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Nuestro Album ❤️
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Recuerdos especiales juntos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveSection("all")}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeSection === "all"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg scale-105"
                  : "bg-white text-pink-600 hover:bg-pink-50 shadow-md"
              }`}
            >
              Todo
            </button>
            <button
              onClick={() => setActiveSection("fotos")}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeSection === "fotos"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg scale-105"
                  : "bg-white text-pink-600 hover:bg-pink-50 shadow-md"
              }`}
            >
              Fotos
            </button>
            <button
              onClick={() => setActiveSection("videos")}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeSection === "videos"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg scale-105"
                  : "bg-white text-pink-600 hover:bg-pink-50 shadow-md"
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-pink-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Galerías */}
      <div className="scroll-smooth">
        {(activeSection === "all" || activeSection === "fotos") && (
          <PhotoGallery photos={examplePhotos} title="Nuestras Fotos" />
        )}
        {(activeSection === "all" || activeSection === "videos") && (
          <VideoGallery videos={exampleVideos} title="Nuestros Videos" />
        )}
      </div>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600">
        <p className="text-lg">Hecho con ❤️ para nosotros 4 + 3 = 7 x100pre</p>
        <p className="text-sm mt-2">2025</p>
      </footer>
    </main>
  );
}
