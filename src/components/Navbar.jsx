import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Professional Spiritual Logo */}
        <div className="flex items-center gap-4 cursor-pointer group">
          {/* Trishul & Damaru SVG Emblem inside a glowing ring */}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-saffron to-gold p-[1.5px] shadow-[0_0_15px_var(--color-saffron)] group-hover:shadow-[0_0_25px_var(--color-gold)] transition-shadow duration-500">
            <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center overflow-hidden">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gold drop-shadow-[0_0_8px_var(--color-gold)]">
                  {/* Subtle glowing aura */}
                  <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.05" />
                  {/* Central shaft */}
                  <path d="M12 21V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Center trident tip */}
                  <path d="M10 6L12 3L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Outer trident prongs */}
                  <path d="M7 11C7 6 12 6 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M17 11C17 6 12 6 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Damaru cross ribbons */}
                  <path d="M9 14L15 18M15 14L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
          </div>
          
          {/* Premium Typography Branding */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gold tracking-widest drop-shadow-lg leading-none">
              ShivAnsh
            </span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-saffron font-medium leading-tight mt-1.5 ml-1 opacity-90 drop-shadow-sm">
              Divine Yatra
            </span>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] text-gray-400">
          <a href="#quote" className="hover:text-gold transition-colors">Daily Quote</a>
          <a href="#jaap" className="hover:text-gold transition-colors">Digital Jaap</a>
          <a href="#darshan" className="hover:text-gold transition-colors">Live Darshan</a>
          <a href="#bhajans" className="hover:text-gold transition-colors">Bhajans</a>
          <a href="#mantras" className="hover:text-gold transition-colors">Mantras</a>
          <a href="#favorites" className="hover:text-gold transition-colors">Favorites</a>
        </div>
      </div>
    </motion.nav>
  );
}
