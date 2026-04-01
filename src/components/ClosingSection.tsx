import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const confettiColors = ["#f9a8d4", "#c4b5fd", "#fda4af", "#fbcfe8", "#e9d5ff", "#fecdd3"];
const confettiEmojis = ["💖", "🎉", "✨", "🩷", "💕", "🎂", "❤️"];

interface Confetti {
  id: number;
  x: number;
  color: string;
  emoji: string;
  size: number;
  delay: number;
  duration: number;
}

const ClosingSection = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const arr: Confetti[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)],
      size: 16 + Math.random() * 16,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
    }));
    setConfetti(arr);
  }, [triggered]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Confetti */}
      {confetti.map((c) => (
        <span
          key={c.id}
          className="absolute animate-confetti pointer-events-none"
          style={{
            left: `${c.x}%`,
            top: "-5%",
            fontSize: c.size,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        >
          {c.emoji}
        </span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setTriggered(true)}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center z-10"
      >
        <h2 className="text-5xl md:text-7xl font-display text-primary text-glow mb-6">
          I Love You 💖
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 font-body mb-4">
          Semoga hari ini spesial buat kamu ✨
        </p>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-6xl md:text-8xl mt-8"
        >
          💖
        </motion.div>
      </motion.div>

      {/* Little animals */}
      <motion.span
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-10 text-4xl"
      >
        🐱
      </motion.span>
      <motion.span
        animate={{ x: [0, -15, 0], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-16 right-10 text-4xl"
      >
        🐰
      </motion.span>
    </section>
  );
};

export default ClosingSection;
