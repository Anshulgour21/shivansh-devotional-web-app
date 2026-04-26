import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { bhajans } from '../data/bhajans';

export default function BhajanSection() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section id="bhajans" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-saffron uppercase tracking-widest mb-4">Divine Melodies</h2>
          <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto">Immerse yourself in timeless devotional sounds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bhajans.map((bhajan, i) => (
            <motion.div
              key={bhajan.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div 
                className="relative overflow-hidden rounded-xl border border-white/10 bg-dark-card shadow-2xl aspect-video flex flex-col"
                onClick={() => setPlayingId(bhajan.id)}
              >
                {playingId === bhajan.id ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${bhajan.videoId}?autoplay=1`}
                    title={bhajan.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full z-10"
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={bhajan.thumbnail} 
                      alt={bhajan.title} 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-saffron opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none z-20">
                      <span className="text-xs text-saffron uppercase font-bold tracking-widest drop-shadow-md">{bhajan.category}</span>
                      <h3 className="text-lg font-serif mt-1 truncate drop-shadow-md">{bhajan.title}</h3>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
