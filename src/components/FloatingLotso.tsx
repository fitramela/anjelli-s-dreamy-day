import { motion, useScroll, useTransform } from "framer-motion";
import latso1 from "@/assets/latso1.jpg";
import latso2 from "@/assets/latso2.jpg";
import anjelliPhoto from "@/assets/anjelli.jpeg";
import photo26 from "@/assets/photo26.jpeg";
import photo27 from "@/assets/photo27.jpeg";

const decorations = [
  { img: latso1, x: "5%", y: "15%", size: 80, rotate: -5, blur: false },
  { img: latso2, x: "85%", y: "25%", size: 100, rotate: 3, blur: true },
  { img: latso1, x: "90%", y: "55%", size: 70, rotate: -3, blur: false },
  { img: latso2, x: "3%", y: "65%", size: 90, rotate: 4, blur: true },
  { img: anjelliPhoto, x: "12%", y: "35%", size: 120, rotate: -2, blur: false },
  { img: anjelliPhoto, x: "78%", y: "72%", size: 110, rotate: 3, blur: true },
  { img: photo26, x: "88%", y: "15%", size: 95, rotate: -4, blur: false },
  { img: photo27, x: "8%", y: "80%", size: 105, rotate: 2, blur: true },
  { img: latso1, x: "50%", y: "85%", size: 60, rotate: -2, blur: false },
  { img: latso2, x: "75%", y: "10%", size: 65, rotate: 5, blur: false },
  { img: latso1, x: "15%", y: "45%", size: 55, rotate: -4, blur: true },
  { img: latso2, x: "60%", y: "40%", size: 75, rotate: 2, blur: false },
];

const FloatingLotso = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {decorations.map((d, i) => {
        const yOffset = useTransform(scrollYProgress, [0, 1], [0, -60 + i * 15]);

        return (
          <motion.div
            key={i}
            style={{ left: d.x, top: d.y, y: yOffset }}
            animate={{
              y: [0, -12, 0],
              rotate: [d.rotate, d.rotate + 3, d.rotate],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute"
          >
            <img
              src={d.img}
              alt=""
              loading="lazy"
              className={`object-contain ${d.blur ? "blur-[1px]" : ""}`}
              style={{
                width: d.size,
                height: d.size,
                opacity: 0.65,
                filter: `${d.blur ? "blur(1px) " : ""}drop-shadow(0 0 12px hsl(330 60% 65% / 0.4)) drop-shadow(0 0 20px hsl(270 50% 80% / 0.3))`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingLotso;
