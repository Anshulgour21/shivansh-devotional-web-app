import { motion } from 'framer-motion';

export default function DarshanSection() {
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
          <h2 className="text-3xl md:text-5xl font-serif text-gold uppercase tracking-[0.2em] relative z-10">Live Darshan</h2>
          <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron to-transparent opacity-50"></div>
        </div>
        <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto mb-16 px-4">
          Experience the divine presence instantly through live temple streaming.
        </p>

        {/* Cinematic Video Container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-[0_0_50px_rgba(14,165,233,0.15)] aspect-video max-w-5xl mx-auto group">
          
          {/* Subtle glow behind the frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-saffron to-gold rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -z-10"></div>
          
          <iframe 
            className="absolute inset-0 w-full h-full bg-black z-10"
            src="https://www.youtube.com/embed/live_stream?channel=UCEUuwXHmHckwmdANSy4c7Sw&autoplay=1&mute=1" 
            title="Shri Mahakaleshwar Live Darshan" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
