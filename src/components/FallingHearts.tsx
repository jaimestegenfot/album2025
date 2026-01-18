"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
  opacity: number;
  startTime: number;
}

const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝", "💞", "💟", "❣️"];

export default function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const maxHearts = useRef(15); // Limitar cantidad máxima de corazones
  const heartIdCounter = useRef(0);

  const createHeart = useCallback((): Heart => {
    heartIdCounter.current += 1;
    return {
      id: heartIdCounter.current,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 12 + Math.random() * 8, // Entre 12 y 20 segundos
      size: 20 + Math.random() * 25, // Entre 20px y 45px
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      opacity: 0.5 + Math.random() * 0.4, // Entre 0.5 y 0.9
      startTime: Date.now(),
    };
  }, []);

  useEffect(() => {
    // Crear corazones iniciales (menos cantidad)
    const initialHearts: Heart[] = Array.from({ length: 12 }, () => createHeart());
    setHearts(initialHearts);

    // Agregar nuevos corazones periódicamente
    const interval = setInterval(() => {
      setHearts((prev) => {
        // Limitar la cantidad máxima
        if (prev.length >= maxHearts.current) {
          // Remover el más antiguo si hay demasiados
          return [...prev.slice(1), createHeart()];
        }
        return [...prev, createHeart()];
      });
    }, 2000); // Nuevo corazón cada 2 segundos

    // Limpiar corazones que ya terminaron su animación
    const cleanup = setInterval(() => {
      const now = Date.now();
      setHearts((prev) => {
        return prev.filter((heart) => {
          const elapsed = (now - heart.startTime) / 1000;
          // Mantener corazones que aún están en animación (con margen de seguridad)
          return elapsed < heart.duration + 2;
        });
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, [createHeart]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: 'contents' }}>
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
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // Aceleración por GPU
            backfaceVisibility: 'hidden', // Optimización de renderizado
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
