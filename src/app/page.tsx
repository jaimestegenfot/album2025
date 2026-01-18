"use client";

import { useState } from "react";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import FallingHearts from "@/components/FallingHearts";
import RomanticMessages from "@/components/RomanticMessages";
import CustomCursor from "@/components/CustomCursor";
import ClickParticles from "@/components/ClickParticles";

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
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 relative overflow-hidden">
      {/* Efectos especiales */}
      <CustomCursor />
      <FallingHearts />
      <RomanticMessages />
      <ClickParticles />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        {/* Fondo con efecto de brillo animado */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-red-200/20 animate-pulse" />
          <div className="absolute top-20 left-10 text-pink-300 text-6xl animate-bounce opacity-60" style={{ animationDelay: "0s" }}>
            ❤️
          </div>
          <div className="absolute top-40 right-20 text-red-300 text-5xl animate-bounce opacity-60" style={{ animationDelay: "1s" }}>
            💕
          </div>
          <div className="absolute bottom-40 left-20 text-pink-400 text-4xl animate-bounce opacity-60" style={{ animationDelay: "2s" }}>
            💖
          </div>
          <div className="absolute bottom-20 right-10 text-red-400 text-5xl animate-bounce opacity-60" style={{ animationDelay: "1.5s" }}>
            💗
          </div>
        </div>

        <div className="relative z-20 text-center px-4">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Nuestro Album ❤️
            </h1>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-4xl animate-bounce" style={{ animationDelay: "0s" }}>💕</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>💖</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>💗</span>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light drop-shadow-md">
            Recuerdos especiales juntos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveSection("all")}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 ${
                activeSection === "all"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-2xl scale-105 ring-4 ring-pink-300/50"
                  : "bg-white/90 backdrop-blur-sm text-pink-600 hover:bg-white shadow-lg hover:shadow-xl border-2 border-pink-200"
              }`}
            >
              ✨ Todo
            </button>
            <button
              onClick={() => setActiveSection("fotos")}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 ${
                activeSection === "fotos"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-2xl scale-105 ring-4 ring-pink-300/50"
                  : "bg-white/90 backdrop-blur-sm text-pink-600 hover:bg-white shadow-lg hover:shadow-xl border-2 border-pink-200"
              }`}
            >
              📸 Fotos
            </button>
            <button
              onClick={() => setActiveSection("videos")}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 ${
                activeSection === "videos"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-2xl scale-105 ring-4 ring-pink-300/50"
                  : "bg-white/90 backdrop-blur-sm text-pink-600 hover:bg-white shadow-lg hover:shadow-xl border-2 border-pink-200"
              }`}
            >
              🎥 Videos
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
      <div className="scroll-smooth relative z-10">
        {(activeSection === "all" || activeSection === "fotos") && (
          <div className="animate-fade-in-up">
            <PhotoGallery photos={examplePhotos} title="Nuestras Fotos" />
          </div>
        )}
        {(activeSection === "all" || activeSection === "videos") && (
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <VideoGallery videos={exampleVideos} title="Nuestros Videos" />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 relative z-10 bg-gradient-to-t from-pink-50/50 to-transparent backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg font-medium bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
            Hecho con ❤️ para nosotros... ¡Gracias por ser parte de mi vida!
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-2xl animate-pulse">💕</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: "0.3s" }}>💖</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: "0.6s" }}>💗</span>
          </div>
          <p className="text-sm mt-4 text-gray-500">2026</p>
        </div>
      </footer>
    </main>
  );
}
