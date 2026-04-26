import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Heart } from 'lucide-react';
import { quotes } from '../data/quotes';

export default function QuoteSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [savedQuotes, setSavedQuotes] = useState([]);
  
  // Load saved quotes from local storage
  useEffect(() => {
    const saved = localStorage.getItem('shivansh_saved_quotes');
    if (saved) {
      setSavedQuotes(JSON.parse(saved));
    }
  }, []);

  const getRandomQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    setCurrentQuoteIndex(newIndex);
  };

  const handleSaveQuote = () => {
    const currentQuote = quotes[currentQuoteIndex];
    if (!savedQuotes.includes(currentQuote)) {
      const updated = [...savedQuotes, currentQuote];
      setSavedQuotes(updated);
      localStorage.setItem('shivansh_saved_quotes', JSON.stringify(updated));
    }
  };

  const currentQuote = quotes[currentQuoteIndex];
  const isSaved = savedQuotes.includes(currentQuote);

  return (
    <section id="quote" className="py-24 px-6 max-w-4xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-card opacity-50 -z-10 rounded-3xl blur-xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2 className="text-3xl font-serif text-saffron mb-12 uppercase tracking-widest">Daily Wisdom</h2>
        
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl shadow-xl min-h-[300px] flex flex-col justify-center relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-3xl font-serif leading-relaxed text-gray-200">
                "{currentQuote.split('—')[0].trim()}"
              </p>
              {currentQuote.includes('—') && (
                <p className="mt-6 text-saffron/80 font-medium tracking-wide">
                  — {currentQuote.split('—')[1].trim()}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
          
        </div>
        
        <div className="mt-10 flex justify-center gap-6">
          <button 
            onClick={getRandomQuote}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all text-sm tracking-widest uppercase"
          >
            <RefreshCw size={16} /> New Quote
          </button>
          
          <button 
            onClick={handleSaveQuote}
            className={`flex items-center gap-2 px-6 py-3 border rounded-full transition-all text-sm tracking-widest uppercase ${
              isSaved 
                ? 'bg-saffron/20 border-saffron text-saffron cursor-default' 
                : 'bg-transparent border-white/20 hover:border-saffron hover:text-saffron'
            }`}
          >
            <Heart size={16} className={isSaved ? "fill-saffron" : ""} /> 
            {isSaved ? 'Saved' : 'Save Quote'}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
