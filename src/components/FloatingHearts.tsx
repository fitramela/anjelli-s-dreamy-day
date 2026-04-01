import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  emoji: string;
}

const emojis = ["❤️", "💖", "💕", "💗", "🩷", "💞"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        size: 14 + Math.random() * 20,
        delay: 0,
        duration: 2.5 + Math.random() * 2,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      };
      setHearts((prev) => [...prev.slice(-15), newHeart]);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-heart-float"
          style={{
            left: `${h.x}%`,
            bottom: "-20px",
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
