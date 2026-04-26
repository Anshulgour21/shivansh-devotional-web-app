import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Heart } from 'lucide-react';

export default function FavoritesSection() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const saved = localStorage.getItem('shivansh_saved_quotes');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    };
    
    loadFavorites();
    const interval = setInterval(loadFavorites, 2000);
    return () => clearInterval(interval);
  }, []);

  const removeFavorite = (quoteToRemove) => {
    const updated = favorites.filter(q => q !== quoteToRemove);
    setFavorites(updated);
    localStorage.setItem('shivansh_saved_quotes', JSON.stringify(updated));
  };

  return (
    <section id="favorites" className="py-12 px-6 max-w-6xl mx-auto border-t border-white/5 relative opacity-80 hover:opacity-100 transition-opacity">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-20"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-serif text-gray-500 uppercase tracking-[0.3em] mb-2">Saved Wisdom</h2>
          <p className="text-saffron/40 font-serif tracking-widest text-[10px] uppercase">Your collected thoughts</p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-20 opacity-50 flex flex-col items-center">
            <Heart size={48} className="text-saffron/40 mb-6 font-thin stroke-1" />
            <p className="font-serif text-xl tracking-widest uppercase text-gray-500">Your temple of thoughts is empty</p>
            <p className="text-sm tracking-wide text-gray-600 mt-4">Save some daily devotion quotes to collect them here.</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence>
              {favorites.map((quote, idx) => {
                const parts = quote.split('—');
                const text = parts[0];
                const author = parts[1] || '';

                return (
                  <motion.div
                    key={quote}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    layout
                    className="break-inside-avoid relative bg-[#070b14] border border-white/5 p-8 rounded-2xl group overflow-hidden shadow-2xl"
                  >
                    {/* Glowing Accent */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-saffron to-transparent opacity-30 drop-shadow-[0_0_15px_var(--color-saffron)]"></div>
                    
                    <div className="pr-8 relative z-10">
                      <p className="text-lg font-serif text-gray-300 leading-relaxed tracking-wide">
                        "{text.trim()}"
                      </p>
                      {author && (
                        <p className="text-xs text-saffron/70 mt-8 tracking-[0.2em] uppercase font-serif">
                          — {author.trim()}
                        </p>
                      )}
                    </div>

                    <button 
                      onClick={() => removeFavorite(quote)}
                      className="absolute bottom-6 right-6 p-2 text-gray-600 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
                      aria-label="Remove favorite"
                    >
                      <Trash2 size={18} />
                    </button>
                    
                    {/* Background subtle OM watermark on card */}
                    <div className="absolute -bottom-8 -right-4 text-9xl font-sans text-white/[0.015] pointer-events-none select-none">
                      ॐ
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </section>
  );
}
