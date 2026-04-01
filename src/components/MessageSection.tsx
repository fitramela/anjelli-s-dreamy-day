import { motion } from "framer-motion";

const MessageSection = () => {
  const lines = [
    "Selamat ulang tahun sayaangg 💖🎂",
    "Semoga di umur yang ke 26 tahun ini Anjelli di beri kebahagiaan dan kedewasaan ✨🥰",
    "Walau hidup kadang berat 😔 tapi aku harap Anjelli biso tetap bertahan 💪💗",
    "",
    "Anjelli aku liat makin hari makin cantik 😍🌸 dan dak cuma itu,",
    "Anjelli makin dewasa 💕 makin emosionalnyo jugo makin meningkat 🌷",
    "dan di dunia kerjo jugo makin berkembang 🚀✨",
    "",
    "Semoga biso lebih maju lagi 🤲💫",
    "Amiinnnn 💖💖💖",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-primary text-glow text-center mb-12"
        >
          💌 Untuk Anjelli 💌
        </motion.h2>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl border border-primary/20">
          {lines.map((line, i) =>
            line === "" ? (
              <div key={i} className="h-4" />
            ) : (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-foreground/90 text-base md:text-lg leading-relaxed mb-2"
              >
                {line}
              </motion.p>
            )
          )}
        </div>

        {/* Floating decorations */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute right-4 top-1/4 text-4xl opacity-50"
        >
          🧸
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute left-4 bottom-1/3 text-3xl opacity-50"
        >
          🐰
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
