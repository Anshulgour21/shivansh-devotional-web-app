import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JaapSection() {
  const [count, setCount] = useState(0);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const savedCount = localStorage.getItem('shivansh_jaap_count');
    if (savedCount) setCount(parseInt(savedCount, 10));
  }, []);

  const handleJaap = useCallback((e) => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('shivansh_jaap_count', newCount.toString());

    // Create a new ripple relative to the button center
    const newRipple = { id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    // Clean up ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  }, [count]);

  const resetJaap = () => {
    setCount(0);
    localStorage.setItem('shivansh_jaap_count', '0'); 
  }; 

  const isMalaComplete = count > 0 && count % 108 === 0; 

  return (
    <section id="jaap" className="py-24 px-6 relative max-w-4xl mx-auto overflow-hidden">
       
      {/* Background radial glow specifically for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-saffron/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-saffron uppercase tracking-[0.2em] mb-4">
          Digital Jaap
        </h2>
        <p className="text-gray-400 font-light tracking-wide max-w-lg mx-auto mb-16">
          Chant your mantra. With every tap, visualize the cosmic vibration resonating within you.
        </p>

        <div className="flex flex-col items-center justify-center space-y-12">
          
          {/* Circular Interactive Jaap Button */}
          <div className="relative flex items-center justify-center">
            {/* Ripples */}
            <AnimatePresence>
              {ripples.map((ripple) => (
                <motion.div
                  key={ripple.id}
                  initial={{ opacity: 0.6, scale: 0.5 }}
                  animate={{ opacity: 0, scale: 2.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`absolute w-48 h-48 rounded-full border-2 ${isMalaComplete ? 'border-gold' : 'border-saffron'}`}
                />
              ))}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(14, 165, 233, 0.4)" }}
              whileTap={{ scale: 0.95, boxShadow: "0px 0px 10px rgba(14, 165, 233, 0.2)" }}
              onClick={handleJaap}
              className={`relative z-10 w-48 h-48 rounded-full flex flex-col items-center justify-center transition-colors duration-500 overflow-hidden 
                ${isMalaComplete 
                  ? 'bg-gradient-to-tr from-[#0f172a] to-[#38bdf8] border-2 border-[#e0f2fe]' 
                  : 'bg-dark-card border border-white/10'}`}
            >
              {/* Inner cosmic ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-spin-slow pointer-events-none"></div>

              <div className="relative overflow-hidden h-20 w-32 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={count}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute text-6xl font-serif text-white drop-shadow-lg"
                  >
                    {count}
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className={`text-[10px] uppercase tracking-[0.3em] font-serif mt-2 ${isMalaComplete ? 'text-[#020617] font-bold' : 'text-gray-400'}`}>
                {isMalaComplete ? 'Mala Complete!' : 'Taps'}
              </span>
            </motion.button>
          </div>

          {/* Controls */}
          <div className="flex gap-8 items-center mt-8 text-sm">
            <div className="flex flex-col items-center text-gray-500">
              <span className="font-serif text-2xl text-gold">{Math.floor(count / 108)}</span>
              <span className="text-[10px] uppercase tracking-widest">Malas Done</span>
            </div>
            
            <button 
              onClick={resetJaap}
              disabled={count === 0}
              className={`px-6 py-2 rounded-full border uppercase tracking-widest textxs transition-all ${
                count > 0 ? 'border-white/20 text-gray-400 hover:text-white hover:border-white/50' : 'border-white/5 text-gray-700 cursor-not-allowed'
              }`}
            >
              Reset
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
