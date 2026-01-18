"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
  opacity: number;
}

const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝", "💞", "💟", "❣️"];

export default function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Crear corazones iniciales
    const initialHearts: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 6, // Entre 10 y 16 segundos
      size: 18 + Math.random() * 32, // Entre 18px y 50px
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      opacity: 0.6 + Math.random() * 0.4, // Entre 0.6 y 1.0
    }));

    setHearts(initialHearts);

    // Agregar nuevos corazones periódicamente
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: 0,
        duration: 10 + Math.random() * 6,
        size: 18 + Math.random() * 32,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        opacity: 0.6 + Math.random() * 0.4,
      };
      setHearts((prev) => [...prev, newHeart]);
    }, 1500); // Nuevo corazón cada 1.5 segundos

    // Limpiar corazones antiguos
    const cleanup = setInterval(() => {
      setHearts((prev) => prev.filter((heart) => {
        if (typeof heart.id === 'number' && heart.id < 1000) return true; // Mantener los iniciales
        return heart.id > Date.now() - 20000;
      }));
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute top-0 animate-fall"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.5))',
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
