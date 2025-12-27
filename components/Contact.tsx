
import React, { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { generateBrandStrategy } from '../services/geminiService';
import { AIResponse } from '../types';

export const Contact: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiResult, setAiResult] = useState<AIResponse | null>(null);

  const handleAISuggestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim()) return;
    
    setIsGenerating(true);
    const result = await generateBrandStrategy(brandName);
    setAiResult(result);
    setIsGenerating(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">READY TO <br /><span className="text-indigo-500">IGNITE</span> YOUR BRAND?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Whether you're looking for a complete rebrand or a high-converting digital product, we're here to make it happen.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-indigo-400">
                <Send size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase">General Inquiries</p>
                <p className="text-lg">hello@lumina.creative</p>
              </div>
            </div>
          </div>

          {/* AI Playground Box */}
          <div className="mt-12 p-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-indigo-400 w-5 h-5" />
              <h4 className="font-bold text-sm uppercase tracking-widest text-indigo-300">Brand AI Brainstorm</h4>
            </div>
            <p className="text-xs text-gray-400 mb-4 italic">Type your company name and let our AI suggest a strategy instantly.</p>
            <form onSubmit={handleAISuggestion} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Your Brand Name..."
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button 
                type="submit"
                disabled={isGenerating}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg text-sm font-bold transition-all"
              >
                {isGenerating ? <Loader2 className="animate-spin" size={18} /> : 'Spark'}
              </button>
            </form>

            {aiResult && (
              <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-indigo-400 font-bold text-lg mb-1">"{aiResult.tagline}"</p>
                <p className="text-xs text-gray-400 leading-relaxed">{aiResult.strategy}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Type</label>
              <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 appearance-none">
                <option>Brand Identity</option>
                <option>Web Design</option>
                <option>AI Solutions</option>
                <option>Marketing Strategy</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-all"></textarea>
            </div>
            <button className="w-full py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-xl shadow-white/5">
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
