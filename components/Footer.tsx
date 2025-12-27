
import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <span className="text-2xl font-bold tracking-tighter font-heading uppercase">LUMINA</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              We are a team of visionaries, designers, and engineers dedicated to pushing the boundaries of what's possible in the digital realm.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Expertise</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Offices</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <p className="text-white font-medium">Tokyo</p>
                <p className="text-sm">Shibuya City, 2 Chome-24</p>
              </li>
              <li>
                <p className="text-white font-medium">London</p>
                <p className="text-sm">20 Farringdon St, EC4A 4AB</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 LUMINA CREATIVE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
