import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import JaapSection from './components/JaapSection';
import DarshanSection from './components/DarshanSection';
import BhajanSection from './components/BhajanSection';
import MantraSection from './components/MantraSection';
import FavoritesSection from './components/FavoritesSection';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 selection:bg-saffron selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Decorative Divider */}
          <div className="flex justify-center py-12 opacity-50">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-saffron to-transparent"></div>
            <span className="mx-4 text-saffron text-xl">✨</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-saffron to-transparent"></div>
          </div>
          
          <QuoteSection />
        </div>

        <JaapSection />
        
        <div className="relative">
          <div className="flex justify-center py-12 opacity-50">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-saffron to-transparent"></div>
            <span className="mx-4 text-saffron text-xl">🙏</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-saffron to-transparent"></div>
          </div>
          
          <DarshanSection />
        </div>

        <BhajanSection />

        <div className="relative">
          <div className="flex justify-center py-12 opacity-50">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-saffron to-transparent"></div>
            <span className="mx-4 text-saffron text-xl">ॐ</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-saffron to-transparent"></div>
          </div>
          
          <MantraSection />
        </div>

        <FavoritesSection />
      </main>

      <footer className="relative mt-32 border-t border-white/5 bg-[#02040a] pt-24 pb-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-sans text-white/[0.015] pointer-events-none select-none">
          ॐ
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold font-serif text-gold mb-8 tracking-[0.2em] flex items-center gap-6">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-saffron/50"></span>
            ShivAnsh
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-saffron/50"></span>
          </div>
          
          <div className="flex space-x-8 text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 mb-16">
            <a href="#quote" className="hover:text-gold transition-colors">Wisdom</a>
            <a href="#bhajans" className="hover:text-gold transition-colors">Bhajans</a>
            <a href="#mantras" className="hover:text-gold transition-colors">Mantras</a>
            <a href="#favorites" className="hover:text-gold transition-colors">Favorites</a>
          </div>

          <p className="text-saffron/60 font-serif tracking-[0.2em] text-[10px] uppercase">
            Created with devotion by Anshul 🙏
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
