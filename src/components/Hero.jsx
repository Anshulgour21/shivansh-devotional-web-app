import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 overflow-hidden">
      
      {/* Background radial soft glows (consistent with other sections) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-saffron/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 60, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl mx-auto rounded-3xl border border-white/5 bg-[#040812]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[70vh] group"
      >
        
        {/* Left Side: Consistent Typography and Card UI */}
        <div className="flex-1 p-12 md:p-20 z-20 flex flex-col justify-center text-center md:text-left relative bg-gradient-to-r from-[#040812] to-transparent">
          <motion.div
             initial={{ opacity: 0, width: 0 }}
             animate={{ opacity: 1, width: 60 }}
             transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
             className="h-[1.5px] bg-gradient-to-r from-saffron to-transparent mb-10 mx-auto md:mx-0"
          ></motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gold leading-tight tracking-[0.1em] mb-6">
            Find Peace <br className="hidden md:block" /> Within
          </h1>
          
          <p className="text-sm md:text-sm text-saffron/80 font-serif tracking-[0.2em] uppercase mb-12 max-w-md mx-auto md:mx-0 leading-relaxed">
            Daily devotion for a calmer mind and a higher state of consciousness.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <a
              href="#quote"
              className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-saffron transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] rounded-full uppercase tracking-[0.2em] text-xs text-gray-300 hover:text-white"
            >
              Begin Journey
            </a>
          </div>
        </div>

        {/* Right Side: Shiva Image safely enclosed in the card bounds */}
        <div className="flex-1 w-full min-h-[400px] md:min-h-full relative overflow-hidden">
           {/* Fade gradients so the image smoothly blends into the card */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#040812] via-transparent to-transparent z-10 hidden md:block"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-transparent z-10 md:hidden block"></div>
           
           {/* The Image itself with a subtle zoom animation on hover */}
           <div className="absolute inset-0">
             <img 
               src="/shiva_hero.png" 
               alt="Lord Shiva Meditation" 
               className="w-full h-full object-cover object-center opacity-80 mix-blend-screen scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out filter contrast-125" 
             />
           </div>
        </div>

      </motion.div>
    </section>
  );
}
