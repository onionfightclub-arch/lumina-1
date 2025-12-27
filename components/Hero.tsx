
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="inline-block px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
          Next-Gen Creative Studio
        </span>
        <h1 className="text-5xl md:text-8xl font-bold font-heading leading-tight mb-8">
          WE DESIGN THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            DIGITAL FUTURE
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          Lumina is a creative force transforming brands through immersive design, 
          strategic storytelling, and cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-indigo-600 rounded-full font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-600/20 pointer-events-auto">
            View Our Work
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all pointer-events-auto">
            The Process
          </button>
        </div>
      </motion.div>
    </div>
  );
};
