import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

export default function DarshanSection() {

  const videos = [
    "https://www.youtube.com/embed/s__7SEA-ud8",
    "https://www.youtube.com/embed/Zc-ropvRpsE",
    "https://www.youtube.com/embed/U4CTlLp8WN8"
  ];

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      if (loading) {
        setIndex((prev) => (prev + 1) % videos.length);
        setAttempts((prev) => prev + 1);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [index, loading]);

  return (
    <section id="darshan" className="py-24 px-6 relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <div className="inline-block relative mb-4">
          <h2 className="text-3xl md:text-5xl font-serif text-gold uppercase tracking-[0.2em] relative z-10">
            Live Darshan
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron to-transparent opacity-50"></div>
        </div>

        <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto mb-16 px-4">
          Experience the divine presence instantly through live temple streaming.
        </p>

        {/* Cinematic Video Container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-[0_0_50px_rgba(14,165,233,0.15)] aspect-video max-w-5xl mx-auto group">

          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-saffron to-gold rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -z-10"></div>

          {/* 🔴 Fallback if all fail */}
          {attempts >= videos.length ? (
            <div className="flex items-center justify-center h-full text-white z-20">
              🔴 Live Darshan is currently unavailable
            </div>
          ) : (
            <>
              {/* 🔄 Loader */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center text-white z-20">
                  🔄 Connecting to Live Darshan...
                </div>
              )}

              {/* 🎥 Smart iframe */}
              <iframe
                key={index}
                className="absolute inset-0 w-full h-full bg-black z-10"
                src={`${videos[index]}?autoplay=1&mute=1`}
                title="Shri Mahakaleshwar Live Darshan"
                onLoad={() => setLoading(false)}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
