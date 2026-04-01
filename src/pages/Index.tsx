import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import TimelineSection from "@/components/TimelineSection";
import CuteZone from "@/components/CuteZone";
import PhotoGallery from "@/components/PhotoGallery";
import ClosingSection from "@/components/ClosingSection";
import FloatingHearts from "@/components/FloatingHearts";
import FloatingLotso from "@/components/FloatingLotso";
import Sparkles from "@/components/Sparkles";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      <Sparkles />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSection onStart={() => setStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FloatingHearts />
            <FloatingLotso />
            <MessageSection />
            <TimelineSection />
            <PhotoGallery />
            <CuteZone />
            <ClosingSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
