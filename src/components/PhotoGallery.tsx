import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all photos
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import photo5 from "@/assets/photo5.jpeg";
import photo6 from "@/assets/photo6.jpeg";
import photo7 from "@/assets/photo7.jpeg";
import photo8 from "@/assets/photo8.jpeg";
import photo9 from "@/assets/photo9.jpeg";
import photo10 from "@/assets/photo10.jpeg";
import photo11 from "@/assets/photo11.jpeg";
import photo12 from "@/assets/photo12.jpeg";
import photo13 from "@/assets/photo13.jpeg";
import photo14 from "@/assets/photo14.jpeg";
import photo15 from "@/assets/photo15.jpeg";
import photo16 from "@/assets/photo16.jpeg";
import photo17 from "@/assets/photo17.jpeg";
import photo18 from "@/assets/photo18.jpeg";
import photo19 from "@/assets/photo19.jpeg";
import photo20 from "@/assets/photo20.jpeg";
import photo21 from "@/assets/photo21.jpeg";
import photo22 from "@/assets/photo22.jpeg";
import photo23 from "@/assets/photo23.jpeg";
import photo24 from "@/assets/photo24.jpeg";
import photo25 from "@/assets/photo25.jpeg";
import photo26 from "@/assets/photo26.jpeg";
import photo27 from "@/assets/photo27.jpeg";
import photo28 from "@/assets/photo28.jpeg";

const photos = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7,
  photo8, photo9, photo10, photo11, photo12, photo13, photo14,
  photo15, photo16, photo17, photo18, photo19, photo20, photo21,
  photo22, photo23, photo24, photo25, photo26, photo27, photo28,
];

const rotations = photos.map(() => (Math.random() - 0.5) * 6);

const PhotoGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-display text-primary text-glow text-center mb-4"
      >
        💖 Kenangan Indah 💖
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-12 text-lg"
      >
        Foto Kitaa ✨
      </motion.p>

      {/* Masonry Grid */}
      <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i % 8) * 0.08, duration: 0.5 }}
            className="mb-3 md:mb-4 break-inside-avoid group cursor-pointer"
            style={{ transform: `rotate(${rotations[i]}deg)` }}
            onClick={() => setSelected(i)}
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border-2 border-primary/15 transition-all duration-300 group-hover:shadow-[0_0_25px_hsl(330_60%_65%/0.4)] group-hover:border-primary/40 group-hover:scale-[1.03]">
              <img
                src={src}
                alt={`Kenangan ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-3xl drop-shadow-lg">💖</span>
                <span className="absolute bottom-3 text-sm font-body text-primary-foreground font-semibold drop-shadow-md">
                  Love 💕
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={photos[selected]}
              alt={`Kenangan ${selected + 1}`}
              className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl border-4 border-primary/30 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-3xl text-primary-foreground bg-primary/80 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
