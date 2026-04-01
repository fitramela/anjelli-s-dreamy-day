import { motion } from "framer-motion";

const cuties = [
  { emoji: "🧸", label: "Teddy Bear", x: "10%", y: "20%" },
  { emoji: "🐰", label: "Bunny", x: "75%", y: "15%" },
  { emoji: "🐱", label: "Kitty", x: "20%", y: "65%" },
  { emoji: "💖", label: "Heart", x: "85%", y: "55%" },
  { emoji: "🎀", label: "Ribbon", x: "50%", y: "30%" },
  { emoji: "🌸", label: "Flower", x: "60%", y: "70%" },
  { emoji: "⭐", label: "Star", x: "30%", y: "45%" },
  { emoji: "🦋", label: "Butterfly", x: "70%", y: "40%" },
];

const CuteZone = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display text-primary text-glow text-center z-10"
      >
        🧸 Cute Zone 🧸
      </motion.h2>

      {cuties.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring" }}
          whileHover={{ scale: 1.5, rotate: 15 }}
          className="absolute text-3xl md:text-5xl cursor-pointer select-none"
          style={{ left: c.x, top: c.y }}
          animate={{ y: [0, -10, 0] }}
          title={c.label}
        >
          {c.emoji}
        </motion.div>
      ))}
    </section>
  );
};

export default CuteZone;
