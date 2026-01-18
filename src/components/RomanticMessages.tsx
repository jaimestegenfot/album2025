"use client";

import { useEffect, useState } from "react";

const messages = [
  "💕 Cada momento contigo es especial",
  "❤️ Eres mi persona favorita",
  "💖 Contigo todo es mejor",
  "💗 Eres mi razón de sonreír",
  "💓 Cada día contigo es un regalo",
  "💝 Eres mi felicidad",
  "💞 Te amo más de lo que las palabras pueden decir",
  "💟 Eres perfecta tal como eres",
  "✨ Eres mi sueño hecho realidad",
  "🌹 Eres la mejor parte de mi día",
];

export default function RomanticMessages() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showMessage = () => {
      const message = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(message);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setCurrentMessage(null), 500);
      }, 4000);
    };

    // Mostrar primer mensaje después de 3 segundos
    const initialTimeout = setTimeout(showMessage, 3000);

    // Mostrar mensajes aleatorios cada 15-20 segundos
    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        // 70% de probabilidad
        showMessage();
      }
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentMessage) return null;

  return (
    <div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-2xl border-2 border-pink-300">
        <p className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent whitespace-nowrap">
          {currentMessage}
        </p>
      </div>
    </div>
  );
}
