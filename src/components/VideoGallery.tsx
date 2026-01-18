"use client";

import { useState } from "react";

interface Video {
  id: number;
  src: string;
  thumbnail?: string;
  title?: string;
  date?: string;
}

interface VideoGalleryProps {
  videos: Video[];
  title?: string;
}

export default function VideoGallery({ videos, title = "Nuestros Videos" }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-pink-50/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            {title}
          </h2>
          <div className="flex justify-center gap-2">
            <span className="text-2xl animate-pulse">💕</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: "0.3s" }}>🎥</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: "0.6s" }}>💖</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border-2 border-transparent hover:border-red-300"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-500/0 group-hover:from-pink-500/10 group-hover:to-red-500/10 transition-all duration-300 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-white/30">
                  <svg
                    className="w-14 h-14 text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.title || "Video"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-400" />
              )}
              {video.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-30 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-semibold text-lg mb-1">{video.title}</p>
                  {video.date && (
                    <p className="text-sm opacity-90 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block">
                      {video.date}
                    </p>
                  )}
                </div>
              )}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para video ampliado */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-5xl w-full aspect-video">
            <button
              className="absolute -top-12 right-0 text-white text-4xl font-bold z-10 hover:text-pink-400 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <video
              src={selectedVideo.src}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedVideo.title && (
              <div className="absolute -bottom-12 left-0 text-white">
                <p className="text-xl font-semibold">{selectedVideo.title}</p>
                {selectedVideo.date && (
                  <p className="text-sm opacity-80">{selectedVideo.date}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
