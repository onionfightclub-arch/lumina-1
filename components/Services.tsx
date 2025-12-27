
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Megaphone, Zap } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8 text-indigo-400" />,
    title: "Brand Identity",
    description: "Crafting unique visual signatures that resonate with your core audience and build lasting brand equity."
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    title: "Digital Design",
    description: "Creating immersive, high-performance web experiences that blend aesthetic beauty with seamless functionality."
  },
  {
    icon: <Megaphone className="w-8 h-8 text-pink-400" />,
    title: "Creative Strategy",
    description: "Data-driven creative direction that positions your brand at the forefront of the cultural conversation."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "AI Integration",
    description: "Leveraging cutting-edge AI tools to streamline workflows and generate groundbreaking creative assets."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">OUR SPECIALTIES</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-black rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
