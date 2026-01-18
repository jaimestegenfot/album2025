"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const heartEmojis = ["❤️", "💕", "💖", "💗", "💓"];

export default function ClickParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Solo crear partículas en ciertos elementos
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.tagName === "IMG" ||
        target.closest(".group")
      ) {
        const newParticles: Particle[] = Array.from({ length: 5 }, (_, i) => ({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        }));

        setParticles((prev) => [...prev, ...newParticles]);

        // Remover partículas después de la animación
        setTimeout(() => {
          setParticles((prev) =>
            prev.filter((p) => !newParticles.some((np) => np.id === p.id))
          );
        }, 1000);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-2xl">{particle.emoji}</span>
        </div>
      ))}
    </div>
  );
}
