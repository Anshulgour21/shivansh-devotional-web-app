import { motion } from 'framer-motion';
import { mantras } from '../data/mantras';

export default function MantraSection() {
  return (
    <section id="mantras" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-saffron uppercase tracking-widest mb-4">Sacred Mantras</h2>
        <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto">Vibrations that transcend the physical world.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mantras.map((mantra, i) => (
          <motion.div
            key={mantra.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="p-8 border border-white/10 rounded-2xl bg-dark-card/50 backdrop-blur-sm hover:border-saffron/40 hover:bg-dark-card transition-all flex flex-col justify-center text-center"
          >
            <h3 className="text-2xl font-serif text-gold mb-2">{mantra.name}</h3>
            <p className="text-xl md:text-2xl font-serif text-saffron/90 my-6 py-4 border-y border-white/10">
              {mantra.sanskrit}
            </p>
            <p className="text-sm md:text-base text-gray-400 italic">
              "{mantra.meaning}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
