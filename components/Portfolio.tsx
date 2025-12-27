
import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'NEON VELOCITY', cat: 'Digital Art', img: 'https://picsum.photos/seed/agency1/800/600', span: 'col-span-1 md:col-span-2' },
  { id: 2, title: 'ZENITH BRANDING', cat: 'Identity', img: 'https://picsum.photos/seed/agency2/800/1000', span: 'col-span-1' },
  { id: 3, title: 'AURA COSMETICS', cat: 'E-commerce', img: 'https://picsum.photos/seed/agency3/800/800', span: 'col-span-1' },
  { id: 4, title: 'TECHTONIC APP', cat: 'UI/UX Design', img: 'https://picsum.photos/seed/agency4/1200/800', span: 'col-span-1 md:col-span-2' },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">SELECTED WORKS</h2>
            <p className="text-gray-400 max-w-md">Exploring the intersection of technology and art through award-winning projects.</p>
          </div>
          <button className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center gap-2">
            View All Projects <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl group ${item.span}`}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-indigo-400 uppercase mb-2">{item.cat}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
