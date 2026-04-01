import { motion } from "framer-motion";

const events = [
  { time: "09:30", icon: "🛍️", title: "Shopping Date", desc: "Cari outfit yang cantikk 💕" },
  { time: "14:00", icon: "🍽️", title: "Makan Siang", desc: "Di tempat pilihan Anjelli 😋💖" },
  { time: "18:00", icon: "🎁", title: "Pembukaan Kado", desc: "Surprise time! 🎉🎂" },
];

const TimelineSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-primary text-glow text-center mb-16"
        >
          📅 Rundown Acara
        </motion.h2>

        {/* Dashed timeline line */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-primary/40" />

          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              className="relative flex items-start gap-4 md:gap-6 mb-12 last:mb-0"
            >
              {/* Circle on timeline */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl md:text-3xl animate-bounce-soft" style={{ animationDelay: `${i * 0.3}s` }}>
                {ev.icon}
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-primary/15 flex-1">
                <span className="text-sm font-bold text-primary">{ev.time}</span>
                <h3 className="text-xl md:text-2xl font-display text-foreground mt-1">{ev.title}</h3>
                <p className="text-muted-foreground mt-1">{ev.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flying plane */}
        <div className="mt-8 pointer-events-none">
          <span className="inline-block animate-plane text-xl">✈️</span>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
