import { motion } from "framer-motion";
import anjelliImg from "@/assets/anjelli.jpeg";

interface Props {
  onStart: () => void;
}

const HeroSection = ({ onStart }: Props) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background photo with blur */}
      <div className="absolute inset-0 z-0">
        <img
          src={anjelliImg}
          alt=""
          className="w-full h-full object-cover opacity-20 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mb-8"
      >
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl animate-float">
          <img src={anjelliImg} alt="Anjelli" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-2 -right-2 text-3xl animate-bounce-soft">💖</div>
        <div className="absolute -bottom-1 -left-2 text-2xl animate-bounce-soft" style={{ animationDelay: "0.5s" }}>✨</div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 text-5xl md:text-7xl font-bold text-primary text-glow text-center"
      >
        Happy Birthday 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 text-2xl md:text-3xl mt-4 text-foreground/80 font-display"
      >
        ✨ Anjelli ✨
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
        onClick={onStart}
        className="relative z-10 mt-10 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-transform animate-glow"
      >
        Klik untuk mulai 💌
      </motion.button>

      {/* Decorative plane */}
      <div className="absolute top-20 left-0 right-0 z-5 pointer-events-none">
        <span className="inline-block animate-plane text-2xl">✈️</span>
      </div>
    </section>
  );
};

export default HeroSection;
