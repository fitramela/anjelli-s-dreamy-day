import { useState, useRef, useEffect } from "react";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2024/11/04/audio_a388bba334.mp3"
      />
      <button
        onClick={toggle}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 ${
          playing
            ? "animate-music-pulse shadow-[0_0_20px_hsl(330_60%_65%/0.5)]"
            : "hover:scale-110"
        }`}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span className={`text-xl ${playing ? "animate-bounce-soft" : ""}`}>
          {playing ? "💖" : "🎵"}
        </span>
      </button>
    </>
  );
};

export default MusicPlayer;
