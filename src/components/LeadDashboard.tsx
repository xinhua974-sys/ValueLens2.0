import React from 'react';
import { motion } from 'motion/react';
import { FileText, Presentation, Layout, ArrowRight, Share2, Sparkles, Sliders } from 'lucide-react';

interface Props {
  onPosterWorkspace: () => void;
  onKeynoteWorkspace: () => void;
  onBack: () => void;
}

export default function LeadDashboard({ onPosterWorkspace, onKeynoteWorkspace, onBack }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-10 py-10"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-secondary/20 text-secondary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Speaker Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Value <span className="text-secondary italic">Amplification</span> Hub
        </h1>
        <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl px-4">
          Access high-fidelity translation portals to convert complex theoretical research nodes into visually engaging TAB materials.
        </p>
      </header>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Entrance 1: Poster Workspace */}
        <section className="group bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden bg-linear-to-br from-white to-slate-50/50 flex flex-col justify-between">
          <div>
            <div className="absolute -top-5 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
              <Share2 className="w-6 h-6" />
            </div>
            
            <div className="mb-8 mt-4">
              <span className="text-[9px] font-black uppercase tracking-widest text-primary block mb-1">AIGC Standard Translation</span>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Poster Workspace</h3>
              <p className="text-slate-400 text-xs font-medium mt-1">Parse research nodes & synthesize standardized A0 layouts</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Capabilities</div>
                  <div className="text-xs font-bold text-slate-700 leading-normal">
                    Multi-file PDF/PPT attachment parsing, semantic visual extraction, editable research goals & communication pain-points.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={onPosterWorkspace}
            className="w-full py-5 bg-primary rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group/btn cursor-pointer"
          >
            <span>Enter Poster Portal</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </button>
        </section>

        {/* Entrance 2: Keynote Workspace */}
        <section className="group bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden bg-linear-to-br from-white to-slate-50/50 flex flex-col justify-between">
          <div>
            <div className="absolute -top-5 left-10 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
              <Presentation className="w-6 h-6 animate-pulse" />
            </div>

            <div className="mb-8 mt-4">
              <span className="text-[9px] font-black uppercase tracking-widest text-secondary block mb-1">AIGC Presentation Engine</span>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Keynote Workspace</h3>
              <p className="text-slate-400 text-xs font-medium mt-1 font-sans">Draft & customize premium 16:9 meeting slide masters</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Sliders className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Features</div>
                  <div className="text-xs font-bold text-slate-700 leading-normal">
                    Custom color slide masters, interactive layout customizers, Bayesian Sequential Outline alignment & responsive slide reviews.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={onKeynoteWorkspace}
            className="w-full py-5 bg-secondary rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-secondary/95 transition-all flex items-center justify-center gap-3 group/btn cursor-pointer"
          >
            <span>Enter Keynote Portal</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </button>
        </section>
      </div>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 shrink-0" />
          <span>Return to Entry</span>
        </button>
      </footer>
    </motion.div>
  );
}
