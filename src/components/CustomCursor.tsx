"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Elementos interactivos
    const interactiveElements = document.querySelectorAll(
      "button, a, [role='button'], img, video"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease-out",
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? "scale-150 bg-pink-400/40 border-pink-500 shadow-lg shadow-pink-500/50"
              : "scale-100 bg-pink-400/20 border-pink-400"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
            isHovering ? "bg-pink-500 scale-150" : "bg-pink-400 scale-100"
          }`}
        />
      </div>

      {/* Corazones que siguen al cursor */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.2s ease-out",
          }}
        >
          <span
            className="text-3xl absolute animate-float"
            style={{
              animation: "float 2s ease-in-out infinite",
            }}
          >
            ❤️
          </span>
        </div>
      )}
    </>
  );
}
