import { useState, useRef, useEffect } from "react";
import harumachiMusic from "../assets/harumachimusic-relaxing-afternoon-full-version-relaxing-and-easy-piano-music-112850.mp3";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    const handleError = () =>
      setError("Audio tidak bisa diputar. Cek file atau koneksi.");

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      setError(null);
      audio
        .play()
        .catch((err) => {
          console.error("Audio play failed:", err);
          setError("Audio gagal diputar. Cek console untuk detail.");
        });
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src={harumachiMusic} />
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
          {playing ? "??" : "??"}
        </span>
      </button>
      {error && (
        <div className="fixed bottom-24 right-6 z-50 rounded-md bg-background/90 px-3 py-2 text-xs text-foreground shadow">
          {error}
        </div>
      )}
    </>
  );
};

export default MusicPlayer;